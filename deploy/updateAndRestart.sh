#!/bin/bash

# any future command that fails will exit the script
set -e

rm -rf /home/ubuntu/<project_forder>/

cd ~

git clone git@gitlab.com:<user>/<project_forder>.git
cd ~/<project_forder>
git checkout <branch>

curl -o-   https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh    | bash    
	. ~/.nvm/nvm.sh    

nvm install v10.15.0

npm install    
npm install -g nodemon pm2

pm2 restart ecosystem.config.js
