### STAGE 1: Build ###
FROM node:14-alpine AS build
WORKDIR /usr/src/app
COPY .npmrc package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

### STAGE 2: Run ###
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/frontend/ /usr/share/nginx/html
