import 'dotenv/config';

export default {
  expo: {
    name: 'YourAppName',
    slug: 'your-app-slug',
    version: '1.0.0',
    extra: {
      OMDB_API_KEY: process.env.OMDB_API_KEY,
    },
  },
};