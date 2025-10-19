FROM node:20-bookworm

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files and install dependencies
COPY package*.json ./

# Install dependencies as root (or myappuser, depending on your structure)
RUN pnpm install

# Copy the rest of your application code
COPY . .

## Switch to the non-root user
USER node

EXPOSE 3000

# Start the application - runs pnpm dev and watcher
CMD ["sh", "-c", "pnpm run dev & node watcher.js & wait"]
