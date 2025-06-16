FROM nginx:1.27.5
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /etc/nginx/conf.d/servers
RUN mkdir -p /certs
COPY servers /etc/nginx/conf.d/servers

