FROM node:18

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

EXPOSE 5173

VOLUME [ "/app" ]

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]