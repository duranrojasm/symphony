FROM node:12.18-alpine

# Install runtime dependencies
RUN apk add --no-cache curl

# Create app directory
WORKDIR /app

# Copy package dependencies
COPY package.json yarn.lock babel.config.js ./
COPY fbcnms-projects/platform-server/package.json fbcnms-projects/platform-server/
COPY @fbcnms /app/@fbcnms

# Install shared dependencies
COPY fbcnms-packages fbcnms-packages
RUN yarn install --frozen-lockfile --network-timeout 600000 && yarn cache clean

# Copy app source
WORKDIR /app/fbcnms-projects/platform-server
COPY fbcnms-projects/platform-server .

# Start app
CMD yarn start
