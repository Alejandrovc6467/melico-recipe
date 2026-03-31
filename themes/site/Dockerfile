# ETAPA 1: BUILD
# Usa Node.js 20 (lts/iron según .nvmrc)
FROM node:20-alpine AS builder

# Crea el directorio de trabajo
WORKDIR /app

# Instala herramientas de compilación necesarias para paquetes nativos (gifsicle, etc.)
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    autoconf \
    automake \
    libtool \
    nasm \
    libpng-dev

# Copia los archivos de gestión de dependencias
COPY package*.json ./
COPY .nvmrc ./

# Instala dependencias primero (para aprovechar la caché de Docker)
RUN npm install

# Copia la configuración de Storybook
COPY .storybook/ ./.storybook/

# Copia los componentes (necesarios para el build)
COPY components/ ./components/

# Copia archivos estáticos que Storybook necesita (según staticDirs en main.js)
COPY assets/ ./assets/
COPY dist/ ./dist/

# Copia archivos de configuración necesarios para el build
COPY webpack/ ./webpack/
COPY babel.config.js ./
COPY postcss.config.js ./
COPY .sassrc.js ./
COPY project.emulsify.json ./
COPY util/ ./util/
COPY js/ ./js/

# Copia archivos de configuración de linting (necesarios para webpack)
COPY .stylelintrc.json ./
COPY .eslintrc.yml ./
COPY .eslintignore ./
COPY jest.config.js ./

# Hace el build no interactivo (evita prompts de Storybook)
ENV CI=true
ENV STORYBOOK_DISABLE_TELEMETRY=1

# Corrige el formato de los archivos antes del build (evita errores de Prettier)
RUN npm run prettier-fix

# Ejecuta la compilación de Storybook (genera .out según package.json)
RUN npm run storybook-build

# ETAPA 2: PRODUCCIÓN (Servir el sitio estático)
# Usa una imagen pequeña y segura para servir los archivos
FROM nginx:alpine

# Copia los archivos estáticos de Storybook desde la etapa de construcción
# El comando storybook-build genera .out según package.json
COPY --from=builder /app/.out /usr/share/nginx/html

# Configuración de nginx para Storybook
# Permite que Storybook funcione correctamente con rutas y archivos estáticos
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    # Configuración para archivos estáticos \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
        try_files $uri =404; \
    } \
    \
    # Configuración para rutas de Storybook \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    \
    # Configuración para iframe.html (usado por Storybook) \
    location /iframe.html { \
        try_files /iframe.html =404; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Puerto por defecto para Nginx
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]