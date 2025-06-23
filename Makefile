run:
	docker-compose -f local.yaml up  -d

build:
	docker-compose -f local.yaml build --no-cache

down-v:
	docker-compose -f local.yaml down  -v

run-prod: build-prod
	docker compose -f prod.yaml up 
build-prod:
	docker compose -f prod.yaml build --no-cache
