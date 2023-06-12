# Using existing image as a base
FROM node:18-alpine

WORKDIR /usr/app

# install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# default command
CMD ["npm", "start"]
