FROM node:16.13.0-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . ./

RUN npm run build 

FROM node:16.13.0-alpine as production

WORKDIR /usr/src/app

# COPY --from=development /usr/src/app/dist /usr/src/app/dist
# COPY --from=development /usr/src/app/node_modules /usr/src/app/node_modules

COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/package*.json ./
# copy tsconfig.json support path alias
COPY tsconfig.json ./ 

RUN npm ci --production

CMD ["npm", "run", "start"]