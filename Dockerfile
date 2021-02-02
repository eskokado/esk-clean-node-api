FROM node:12
WORKDIR /usr/src/esk-clean-node-api
COPY ./package.json .
RUN npm install --only=prod
