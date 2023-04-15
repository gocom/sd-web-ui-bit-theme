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

For development, the repository can be cloned Stable Diffusion web UI's `extensions` directory, from where the UI can
then load the build assets dynamically.

### Requirements

Development environment is ran using Docker images to limit host system dependencies. Requirements for the development
environment are:

* GNU make
* [Docker](https://www.docker.com/)
* [docker-compose](https://github.com/docker/compose) installed as a standalone application to PATH

### Available commands

For all available commands, see:

```
$ make help
```

### Building

To build the theme, run:

```
$ make build
```

Builds are created to a `build` directory in the project directory. A symbolic link is created for
`style.css` to the root directory.

### Coding style

To verify that your additions follows coding style, run:

```
$ make lint
```
