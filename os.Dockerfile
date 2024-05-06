FROM node:18-alpine AS base

COPY . .
RUN npm install


CMD  node index.js 
