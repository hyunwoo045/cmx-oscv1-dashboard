FROM node:16-alpine

WORKDIR /usr/commax/app

COPY package*.json ./
RUN npm install

RUN npm install -g serve

COPY . .

RUN npm run build

ENTRYPOINT ["serve", "-s", "build"]