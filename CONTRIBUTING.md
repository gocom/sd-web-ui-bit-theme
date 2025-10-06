Contributing
=====

License
-----

[MIT](https://raw.github.com/gocom/sd-web-ui-bit-theme/master/LICENSE).

Versioning
----

[Semantic Versioning](https://semver.org/).

Development
-----

For development, the repository can be cloned into Stable Diffusion web UI's `extensions` directory, from where the UI
can then load the build assets dynamically.

### Requirements

* GNU make
* [nvm](https://github.com/nvm-sh/nvm)

If nvm is not installed, the Makefile defaults to any node and npm binaries found from PATH.

### Setup project locally

Clone the repository, or a fork of it, and run the installer:

```shell
$ make install
```

### Available commands

For all available commands, see:

```shell
$ make help
```

Automated commands can be run using `make`, which wraps around `npm`, and other development tooling.

### Working on code

Code can be built by running:

```shell
$ make build
```

By default, builds are created to a `build` directory under the project root. Automatic file watcher, that
invokes building on file changes, can be launched by running:

```shell
$ make watch
```

The location where the files are built can be changed with the `SD_WEB_UI_EXTENSIONS_PREFIX` environment variable. This
can, for instance, be used to write build results to the web UI's extension directory while the extensions'
repository is located outside of it:

```shell
$ make build SD_WEB_UI_EXTENSIONS_PREFIX=/path/to/stable-diffusion-webui/extensions/
```

Files are created to inside of `sd-web-ui-bit-theme` directory under the given path prefix. The same environment
variable also works with the watch command:

```shell
$ make watch SD_WEB_UI_EXTENSIONS_PREFIX=/path/to/webui/extensions/
```

To avoid having the declare the environment variable each time, it can be configured in `.env` file placed at
the extension project's root directory.

When making changes to code please make sure that linter and tests pass before opening a pull request. Linter
and tests can be run with:

```shell
$ make test
```

For maintainers
-----

These instructions are meant for repository's core maintainers.

### Publishing

CI automatically creates releases from any git tags.

#### Update changelog

Before tagging a commit, make sure that [CHANGELOG.md](./CHANGELOG.md) is up-to-date. The top most section and the
version number in the heading should match the new tag you are about to create.

#### Tagging release

To publish a new version, simply create a tag and push it:

```shell
$ git tag -a 0.1.0 -m 0.1.0
$ git push origin 0.1.0
```

The above would create publish the tag as `0.1.0`, create release on a GitHub, using a section with matching header
from the CHANGELOG.md as the release's description. Updating version number in the `package.json` file is not necessary.

#### Manually testing publishing

This is not required, but if you want to test publishing before tagging, you can run the same building command CI uses:

```shell
$ make rebuild
$ make package
```
