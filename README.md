[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# service-nodejs-template

## NPM scripts

- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run lint`: Run ESLint
- `npm run dc:up`: Start the stack with Docker Compose
- `npm run dc:down`: Stop the stack with Docker Compose

## Manually build Docker image
 - `docker build -t service-nodejs-template .`

## Run tests with docker while enforcing the pre-build of the image if required
  - Configure the docker-compose environment variables with the infrastructure information (e.g. NATS and Redis server data)
  - `docker-compose up --exit-code-from greeter --force-recreate --build`: build and run the stack and automatically stop the stack when the "greeter" container exits (i.e. done processing)

## Use the infrastructure hosted by incontext.technology GmbH 
  - contact incontex.technology to get access

## Alternatively, install infrastructure on localhost
The Moleculer framework requires the NATS infrastructure as a transporter:
  - Install NATS with [NATS Installation](https://nats-io.github.io/docs/nats_server/installation.html)
  - Starts NATS with `nats-server`

If also required (essentially for caching), install and start a local Redis server:
  - Linux: see https://redis.io/topics/quickstart
  - MacOS: use Homebrew with `brew install redis`

## Build and run for production
  - `docker build -t service-nodejs-template:prod --target prod`
  - `docker-compose up -f docker-compose-prod.yml`
see also [docke-compose documentation](https://docs.docker.com/compose/reference/overview/)

