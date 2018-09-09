FROM node:8
WORKDIR /node_app
COPY . /node_app
RUN npm install
CMD node index.js
EXPOSE 3001
