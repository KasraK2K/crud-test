FROM grpc/node

WORKDIR /usr/src/app/database

COPY ./database/package*.json ./
RUN npm install
COPY ./database ./

EXPOSE 50051
EXPOSE 3500

CMD [ "node", "index.js" ]