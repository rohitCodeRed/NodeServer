FROM node:7
WORKDIR /node_app
COPY ~/DevOpsImage/nodeServer/ /app
RUN npm install
CMD node index.js
EXPOSE 3001
