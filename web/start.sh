#!/bin/bash

# Set environment variables for Docker development
export WATCHPACK_POLLING=true
export CHOKIDAR_USEPOLLING=true

# Start Next.js development server with polling enabled
pnpm run dev &

# Start the file watcher
node watcher.js

wait