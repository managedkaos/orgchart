FROM node:18

WORKDIR /app

COPY package* .
RUN npm install

COPY . .

EXPOSE 8080

RUN ["npm", "run", "dev"]