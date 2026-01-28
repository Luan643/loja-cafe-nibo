FROM mongo:6.0

RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean

COPY ./back /app/back
COPY ./front /app/front

RUN cd /app/front && npm install && npm run build

RUN cp -rf /app/front/dist/loja-cafe-nibo /app/back/public/loja-cafe-nibo

WORKDIR /app/back
RUN mkdir -p /data/db
RUN npm install

EXPOSE 3000 27017
CMD mongod --bind_ip_all & npm start