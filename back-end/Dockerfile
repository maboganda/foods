FROM ruby:3.1.1-alpine3.15

ENV APP_PATH /app/back-end
ENV BUNDLE_VERSION 2.3.9
ENV BUNDLE_PATH /usr/local/bundle/gems
ENV TMP_PATH /tmp/
ENV RAILS_PORT 3100

# copy entrypoint scripts and grant execution permissions
COPY ./back-end/entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

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

RUN gem install bundler --version "$BUNDLE_VERSION" \
&& rm -rf $GEM_HOME/cache/*

WORKDIR $APP_PATH
COPY ./back-end/ $APP_PATH/

EXPOSE $RAILS_PORT