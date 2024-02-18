# Stage 1: Build the React application
FROM node:18 as build

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/

RUN npm install

CMD ["npm", "prod"]