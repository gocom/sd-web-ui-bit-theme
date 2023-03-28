.PHONY: help build clean lint shell test

NODE_ENV ?= development
HOST_UID != id -u
HOST_GID != id -g
COMPOSE = NODE_ENV=$(NODE_ENV) HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker-compose
NODE = $(COMPOSE) run --rm node

all: help

install: build

node_modules:
	$(NODE) npm install

build: node_modules
	$(NODE) npm run build

clean:
	$(NODE) rm -rf build dist

shell:
	$(NODE) bash

test:
	$(NODE) npm run test

lint:
	$(NODE) npm run lint

help:
	@echo "Manage project"
	@echo ""
	@echo "Usage:"
	@echo "  $$ make [command]"
	@echo ""
	@echo "Commands:"
	@echo ""
	@echo "  $$ make install"
	@echo "  Installs the project"
	@echo ""
	@echo "  $$ make hosts"
	@echo "  Prints hosts mapping"
	@echo ""
	@echo "  $$ make clean"
	@echo "  Uninstall the project"
	@echo ""
	@echo "  $$ make start"
	@echo "  Starts the project"
	@echo ""
	@echo "  $$ make stop"
	@echo "  Stops the project"
	@echo ""
	@echo "  $$ make shell"
	@echo "  Login to PHP service"
	@echo ""
