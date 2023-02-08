import axios from 'axios';
import fs from 'fs/promises';

const gistsDownloadFolder = './downloaded_gists';

const removeLocalGists = () => {
  return fs.rm(gistsDownloadFolder, { recursive: true })
    .then(() => fs.mkdir(gistsDownloadFolder))
    .catch(() => fs.mkdir(gistsDownloadFolder));
}

const downloadAllGists = (gists) => {
  removeLocalGists()
    .then(() => {
      gists.forEach(gist => {
        let { files, description } = gist;
        files = Object.values(files);
        createGist({ files, description });
      });
    })
}

const createGist = ({ files, description }) => {
  if (description == '') {
    description = files[0].filename;
  }
  fs.mkdir(`${gistsDownloadFolder}/${description}`);
  files.forEach(file => {
    const { raw_url, filename } = file;
    createFile({ raw_url, filename, description });
  });
}

const createFile = ({ raw_url, filename, description }) => {
  console.log('axios request');
  return axios
    .get(raw_url, { responseType: 'arraybuffer' })
    .then(({ data }) => {
      fs.writeFile(`${gistsDownloadFolder}/${description}/${filename}`, data)
    });
}

export {
  downloadAllGists
}
