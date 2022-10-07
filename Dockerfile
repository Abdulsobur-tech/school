FROM node:16

WORKDIR /app

COPY . .

RUN npm install

RUN npx tsc

RUN cd school && npm install && npm run build

CMD ["npm","start"]
