FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000

ENV CLIENT_URL="http://54.206.76.52"

ENV SPOTIFY_ID="6ab5af9f072b489bbb19768cef7dee91"
ENV SPOTIFY_SECRET="43fc9bba1dbe49b7a545bc680e0ca3ca"
ENV TM_KEY="Ss839xTjgX0XyWtKZ9lln7TEAGc9C6rC"

EXPOSE 5000

CMD ["npm", "start"]