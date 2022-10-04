FROM node:18

WORKDIR /app

COPY package* .
RUN npm install

COPY . .

EXPOSE 30001

VOLUME [ "/app" ]

CMD ["node", "index.js"]