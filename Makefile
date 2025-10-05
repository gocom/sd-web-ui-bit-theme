.PHONY: all build build-destroy clean generate-release-notes help install lint lint-fix nvm pack rebuild test watch
.ONESHELL:
.SHELLFLAGS = -ec

NPM = npm

all: build
install: node_modules dist

build:
	@. ./dev/hook/nvm.sh
	@$(MAKE) -s node_modules
	$(NPM) run build
	test -e style.css || ln -s build/style.css style.css
	test -e javascript || ln -s build/javascript javascript

build-destroy:
	@echo "Removing existing build"
	@rm -rf build

dist:
ifeq (,$(wildcard build))
	@. ./dev/hook/nvm.sh
	@$(MAKE) -s node_modules
	$(NPM) run build
endif

clean:
	rm -rf build dist style.css node_modules

lint:
	@. ./dev/hook/nvm.sh
	@$(MAKE) -s node_modules
	$(NPM) run lint

lint-fix:
	@. ./dev/hook/nvm.sh
	@$(MAKE) -s node_modules
	$(NPM) run lint:fix

node_modules:
ifeq (,$(wildcard node_modules))
	@. ./dev/hook/nvm.sh
	$(NPM) install
endif

rebuild: build-destroy build

package:
	@. ./dev/hook/nvm.sh
	@$(MAKE) -s install
	$(NPM) run package

test:
	@. ./dev/hook/nvm.sh
	@$(MAKE) -s node_modules
	$(NPM) run test

watch:
	@. ./dev/hook/nvm.sh
	@$(MAKE) -s node_modules
	$(NPM) run watch

generate-release-notes:
	./dev/bin/release-notes "$(VERSION)" > RELEASE-NOTES.md

help:
	@echo "Manage project"
	@echo ""
	@echo "Usage:"
	@echo "  $$ make [command] ["
	@echo "    [VERSION=<version>]"
	@echo "    [SD_WEB_UI_EXTENSIONS_PREFIX=<path>]"
	@echo "  ]"
	@echo ""
	@echo "Commands:"
	@echo ""
	@echo "  $$ make build"
	@echo "  Build project"
	@echo ""
	@echo "  $$ make clean"
	@echo "  Clean installed dependencies and artifacts"
	@echo ""
	@echo "  $$ make generate-release-notes VERSION=<version>"
	@echo "  Build release notes"
	@echo ""
	@echo "  $$ make install"
	@echo "  Install dependencies and build project"
	@echo ""
	@echo "  $$ make lint"
	@echo "  Lint code style"
	@echo ""
	@echo "  $$ make lint-fix"
	@echo "  Try to fix code style issues"
	@echo ""
	@echo "  $$ make package"
	@echo "  Package release archive"
	@echo ""
	@echo "  $$ make rebuild"
	@echo "  Clean dist directory before building"
	@echo ""
	@echo "  $$ make test"
	@echo "  Run test suite"
	@echo ""
	@echo "  $$ make watch"
	@echo "  Watch files for changes and trigger build automatically"
	@echo ""
