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
COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html

### STAGE 3: Add Entrypoint
WORKDIR /usr/src/app
COPY .gitlab/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "sh", "/entrypoint.sh" ]
