# Use a lightweight Node.js image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

RUN npm install @xterm/xterm express @xterm/addon-attach



# Copy the necessary files to the working directory
COPY index.html .
COPY main.js .
COPY test.js .
# Expose port 8111 for HTTP traffic
EXPOSE 8111

# Start a simple HTTP server to server index.html
CMD ["node", "main.js"]

