FROM node:24-alpine3.21

WORKDIR /client
COPY client/ .

RUN npm install
RUN npm run build
