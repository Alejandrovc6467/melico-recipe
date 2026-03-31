import component from './video-thumbnail.twig';

export default {
  title: 'Atoms/VideoThumbnail',
};

export const Default = (args) => component(args);
Default.args = {
  video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  video_title: 'Video de Rick Astley',
};