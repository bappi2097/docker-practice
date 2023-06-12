# Using existing image as a base
FROM node:18-alpine

WORKDIR /app

# install some dependencies
COPY package.json .
RUN npm install
COPY . .

# start server
CMD ["npm", "start"]
