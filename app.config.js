import 'dotenv/config';

export default {
  expo: {
    name: 'ELi-Movies-App',
    slug: 'eli-movies-app',
    version: '1.0.0',
    extra: {
      OMDB_API_KEY: process.env.OMDB_API_KEY,
    },
  },
};