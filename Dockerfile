FROM node:14.18-alpine

WORKDIR /usr/src/appvite

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]