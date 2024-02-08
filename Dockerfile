FROM phpmyadmin

# load variable from .env
RUN echo "PMA_HOST=$(mysql_host_db .env)" >> /etc/environment

# docker env
ENV PMA_ARBITRARY=0 \
    PMA_PORT=46675 \
    PORT=80

EXPOSE 80

CMD ["node","index.js"]