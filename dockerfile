# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files first (for caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy project files
COPY . .

# 6. Build TypeScript
RUN npm run build

# 7. Install a simple static server
RUN npm install -g live-server

# 8. Expose port
EXPOSE 8080

# 9. Run the app
CMD ["live-server", "--port=8080", "--host=0.0.0.0"]
