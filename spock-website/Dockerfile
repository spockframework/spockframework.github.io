FROM mcr.microsoft.com/playwright:v1.57.0-noble

WORKDIR /app

# Install latest Node.js 24 LTS and update npm
RUN npm install -g n \
    && n 24 \
    && npm install -g npm \
    && node --version \
    && npm --version

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the project files
COPY . .
