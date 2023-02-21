FROM node:16-alpine

WORKDIR /usr/commax/app

COPY package*.json ./
RUN npm build

RUN mkdir ./build
COPY ./build ./build

CMD ["serve", "-s", "build"]