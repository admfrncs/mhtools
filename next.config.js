const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'client/src'),
      '@/shared': path.resolve(__dirname, 'shared'),
      '@/components/ui': path.resolve(__dirname, 'client/src/components/ui'),
      '@/lib': path.resolve(__dirname, 'client/src/lib'),
      '@/hooks': path.resolve(__dirname, 'client/src/hooks'),
    };

    return config;
  },
};
