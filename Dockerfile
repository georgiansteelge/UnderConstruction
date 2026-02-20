FROM nginx:alpine

# Copy the index.html to the default nginx directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 8080
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
