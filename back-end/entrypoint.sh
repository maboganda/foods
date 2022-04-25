#!/bin/sh
set -e

echo "ENVIRONMENT: $RAILS_ENV"

bundle check || bundle install

bundle exec rake db:drop db:create db:migrate db:seed

rm -f $APP_PATH/tmp/pids/server.pid

bundle exec "$@"