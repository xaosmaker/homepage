run-nginx:
	docker-compose -f local.yaml up -d

run-react:
	docker-compose -f local_react.yaml up  -d

build-nginx:
	docker-compose -f local.yaml build --no-cache

build-react:
	docker-compose -f local_react.yaml build --no-cache

inpect_nginx:
	 docker exec -it nginx /bin/bash
