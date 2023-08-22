# FROM node:19

# WORKDIR /app

# COPY package.json .

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["node","index.js"]




FROM node

WORKDIR /app

COPY . /app

RUN npm install

# RUN node index.js

EXPOSE 3001

CMD ["node","index.js"]

