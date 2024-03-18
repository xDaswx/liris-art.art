FROM nginx:alpine

# remove default config file
# RUN rm -rf /etc/nginx/conf.d/*

# ----------------------------------------------------------------

COPY styles /usr/share/nginx/html/styles/
COPY resources /usr/share/nginx/html/resources/
COPY dasw-canvas.js /usr/share/nginx/html/dasw-canvas.js
COPY index.html /usr/share/nginx/html/
# Aditional ----------------------------------------------------------------
COPY liris.jpg /usr/share/nginx/html/liris.jpg
COPY music-player.js /usr/share/nginx/html/music-player.js
COPY script.js /usr/share/nginx/html/script.js
COPY thumb.png /usr/share/nginx/html/thumb.png

# ----------------------------------------------------------------

# gzip
RUN gzip -9 /usr/share/nginx/html/index.html
RUN gzip -9 /usr/share/nginx/html/dasw-canvas.js
# RUN gzip -9 /usr/share/nginx/html/styles/*.css
# RUN gzip -9 /usr/share/nginx/html/resources/sounds/*.mp3


RUN sed -i 's/worker_connections.*/worker_connections 1024;/' /etc/nginx/nginx.conf

#response buffer limit 
RUN sed -i 's/output_buffers.*/output_buffers 1 32k;/' /etc/nginx/nginx.conf
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]