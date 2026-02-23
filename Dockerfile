FROM nginx:alpine

# Copy the entire project folder to the default nginx directory
COPY . /usr/share/nginx/html/

# Expose port 8080
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
