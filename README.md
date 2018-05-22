# Microservice to generate fake data

## Usage

Start server:

```
$ docker run -p 8003:3000 -d rahmatawaludin/faker-server
```

Get faker data:
```
$ curl http://localhost:8003/?property=name.findName
```

More info on faker see https://www.npmjs.com/package/faker
