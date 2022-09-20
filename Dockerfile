FROM node:14

WORKDIR /fe07_anhyokyung/
COPY . /fe07_anhyokyung/

RUN yarn install
RUN yarn build
CMD yarn start
