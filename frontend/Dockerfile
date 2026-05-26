FROM node:25.8.1 AS build-stage

WORKDIR /app

COPY package.json ./
RUN npm install 

COPY . .

RUN npm run build

FROM nginx

COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]



