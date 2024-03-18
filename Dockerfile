FROM nginx:alpine

# remove default config file
# RUN rm -rf /etc/nginx/conf.d/*

COPY . /usr/share/nginx/html

# gzip
RUN gzip -9 /usr/share/nginx/html/index.html
RUN gzip -9 /usr/share/nginx/html/*.js
RUN gzip -9 /usr/share/nginx/html/styles/*.css
RUN gzip -9 /usr/share/nginx/html/resources/sounds/*.mp3


RUN sed -i 's/worker_connections.*/worker_connections 1024;/' /etc/nginx/nginx.conf

#response buffer limit 
RUN sed -i 's/output_buffers.*/output_buffers 1 32k;/' /etc/nginx/nginx.conf
EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]