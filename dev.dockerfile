# nginx state for serving content
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

COPY --from=builder ./dist .

CMD ["nginx", "-g", "daemon off;"]

