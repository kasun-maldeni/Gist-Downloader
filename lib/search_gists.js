import axios from 'axios';

const searchAllGistsForUser = async ({ authToken }) => {
  let page = 1;
  let gists = []
  let gistGrowth = 100
  let numberOfGistsBeforeRequest;

  while (gistGrowth == 100) {
    numberOfGistsBeforeRequest = gists.length
    gists = await getPageOfGistsForUser({ authToken, gists, page })
    gistGrowth = gists.length - numberOfGistsBeforeRequest
    page++
  }

  return gists;
}

const getPageOfGistsForUser = ({ authToken, gists, page }) => {
  console.log('axios request')
  return axios
    .get('https://api.github.com/gists', {
      headers: { 'Authorization': `token ${authToken}` },
      params: { 'per_page': 100, 'page': page }
    })
    .then(({ data: newGists }) => [...gists, ...newGists])
}

export {
  searchAllGistsForUser
}
