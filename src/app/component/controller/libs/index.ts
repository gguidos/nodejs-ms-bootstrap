import createPost from './post';
import { logger } from '../../../libs/logger';

const post = async ({ params }) =>
  await createPost({ logger })
    .post({ params });

export {
  post
}
