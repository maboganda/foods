FROM ruby:3.1.1-alpine3.15

ENV APP_PATH /foods/back-end

# install dependencies for application
RUN apk -U add --no-cache \
build-base \
postgresql-dev \
postgresql-client \
libxml2-dev \
libxslt-dev \
imagemagick \
tzdata \
&& rm -rf /var/cache/apk/* \
&& mkdir -p $APP_PATH

WORKDIR $APP_PATH

RUN gem install bundler --version "2.3.9" \
&& rm -rf $GEM_HOME/cache/*

# copy entrypoint scripts and grant execution permissions
COPY ./back-end/entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 3100