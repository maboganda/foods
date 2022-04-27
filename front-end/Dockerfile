FROM node:16-alpine3.15

ENV APP_PATH /foods/front-end

RUN mkdir -p $APP_PATH
WORKDIR $APP_PATH

COPY ./front-end/ $APP_PATH/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]