import { searchAllGistsForUser } from './lib/search_gists.js';
import { downloadAllGists } from './lib/download_gists.js';

searchAllGistsForUser({ authToken: process.env.GITHUB_SECRET_KEY })
  .then(downloadAllGists)
