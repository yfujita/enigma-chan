FROM node:18.16.0-slim AS Builder

RUN mkdir /work/
RUN mkdir /work/dist
WORKDIR /work

COPY package.json ./
RUN npm install;

COPY .eslintrc.json ./
COPY babel.config.js ./
COPY jsconfig.json ./
COPY vue.config.js ./
COPY src/ src/
COPY public/ public/
RUN npm run build

FROM nginx:1.25
COPY --from=builder /work/dist/ /usr/share/nginx/html/


