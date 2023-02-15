import copy from 'rollup-plugin-copy';

export default {
  plugins: [
    copy({
      targets: [
        { src: 'home.html', dest: 'dist' },
        { src: 'projects.html', dest: 'dist' },
        { src: 'process.html', dest: 'dist' },
        { src: 'info.html', dest: 'dist' },
        { src: 'contact.html', dest: 'dist' },
      ],
    }),
  ],
};
