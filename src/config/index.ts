import production from './environments/production';
import development from './environments/development';

const config = process.env.NODE_ENV === 'production' ? production : development;

export default config;
