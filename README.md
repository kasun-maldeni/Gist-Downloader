# Secret Gist Downloader

This script allows you to download all your Github secret gists to your computer.

## How to use
1. Create a personal access token on Github: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
2. Clone this repo.
3. Create a `.env` file inside the cloned repo and put your personal access token from step 1 in there like this: `GITHUB_SECRET_KEY=your-personal-access-token-goes-here`
4. run `yarn start`

## How it works
- It will create a folder in the cloned repo called `downloaded_gists`
- All your gists will be created as separate folders by their **description**
- Each gist folder will contain the files for that gist

## Caveats
- Since a folder is being created for each gist by its description, it will assume the description is unique for each gist.