FROM node AS build

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json yarn.lock ./
USER node

RUN yarn install

COPY . .
# RUN npx -p @babel/cli -p @babel/core babel src --out-dir dist --copy-files --extensions '.js'
# RUN yarn build

EXPOSE 3333

CMD [ "node", "src/server.js" ]