# k6 load test sandbox

## build JS in dev container

```sh
docker compose run dev npm ci
docker compose run dev npm run build
```

## start containers

```sh
docker compose up -d
```

## run test

```sh
docker compose run k6 run test.js
```
