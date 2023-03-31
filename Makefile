.PHONY: help build clean lint shell test watch

NODE_ENV ?= development
HOST_UID != id -u
HOST_GID != id -g
COMPOSE = NODE_ENV=$(NODE_ENV) HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker-compose
NODE = $(COMPOSE) run --rm node
NPM = $(NODE) npm

all: help

install: build

node_modules:
	$(NPM) install

build: node_modules
	$(NPM) run build

clean:
	$(NODE) rm -rf build dist

shell:
	$(NODE) bash

test:
	$(NPM) run test

lint:
	$(NPM) run lint

watch:
	$(NPM) run watch

help:
	@echo "Manage project"
	@echo ""
	@echo "Usage:"
	@echo "  $$ make [command]"
	@echo ""
	@echo "Commands:"
	@echo ""
	@echo "  $$ make build"
	@echo "  Builds the project"
	@echo ""
	@echo "  $$ make clean"
	@echo "  Uninstall the project"
	@echo ""
	@echo "  $$ make install"
	@echo "  Installs the project"
	@echo ""
	@echo "  $$ make lint"
	@echo "  Lint code style"
	@echo ""
	@echo "  $$ make shell"
	@echo "  Login to Node container"
	@echo ""
	@echo "  $$ make test"
	@echo "  Run tests"
	@echo ""
	@echo "  $$ make watch"
	@echo "  Watch for file changes, trigger build"
	@echo ""
