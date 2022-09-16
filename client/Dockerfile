FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV REACT_APP_CLIENT_URL="http://54.206.76.52:3000"
ENV REACT_APP_SERVER_URL="http://54.206.76.52:5000"

EXPOSE 3000

CMD ["npm", "start"]