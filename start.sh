#!/bin/bash

if [ -f .env ]; then
  export $(cat .env | xargs)
fi

if [ "$NEXT_PUBLIC_ENV" = "dev" ]; then
  echo "Running in development mode..."
  node server.js
else
  echo "Running in production mode..."
  next dev
fi
