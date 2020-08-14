# Debuging NodeJS App

## Running

First start and test app by running:

```bash
node index.js
```

And

```bash
curl "localhost:3003"
```

## Debugging

1. To debug express application, run:

```bash
DEBUG=* node index.js
```

You should see express log.

2. Testing `/sum` endpoint:

```bash
curl "localhost:3003/sum"
```

You should see:

```bash
Running on port 3003
  express:router dispatching GET /sum +4s
  express:router query  : /sum +1ms
  express:router expressInit  : /sum +1ms
  express:router <anonymous>  : /sum +0ms
  api:main {} request at: 2020-08-14T15:45:06.963Z +0ms
  api:math running sum on:  48 33 +1ms
```

### Filtering logs

1. Passing filter to DEBUG:

```bash
DEBUG=api:main node index.js
```

And

```bash
curl "localhost:3003/sum"
```

You should see only `api:main` logs

```bash
debug git:(master) ✗ DEBUG=api:main node index.js
  api:main Running on port 3003 +0ms
  api:main {} request at: 2020-08-14T15:49:09.041Z +5s
```

2. The same could be done with:

```bash
DEBUG=api:math node index.js
```

And

```bash
curl "localhost:3003/sum"
```

```bash
debug git:(master) ✗ DEBUG=api:math node index.js
  api:math running sum on:  71 68 +0ms
```
