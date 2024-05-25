FROM node:18-alpine

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

# Set Environment Variables
ENV BASE_URL=http://localhost:8080

CMD ["npm", "run" , "dev"]

EXPOSE 3000