FROM node:16-alpine as builder
COPY package*.json /app/
WORKDIR /app
RUN npm install --production
COPY . /app
RUN npm run build

FROM nginx:alpine
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /app1
CMD ["nginx", "-g", "daemon off;"]