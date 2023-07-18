#!/bin/sh -x

rm -rf public/;
mkdir -p public/;
cp favicon.png index.html profile-512px.jpg public/;

docker build ./scripts/preview/ -t preview;
docker run --name preview -v $(pwd)/public:/public preview;
docker cp preview:/home/pptruser/preview.png ./public/
docker rm preview;
