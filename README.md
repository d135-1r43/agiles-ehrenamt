# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation der Abhängigkeiten

```
$ npm install
```

### Lokales Entwicklen

```
$ npm start
```

Dieser Befehl startet einen lokalen Entwicklungsserver und öffnet ein Browserfenster. Die meisten Änderungen werden live
übernommen, ohne dass der Server neu gestartet werden muss.

### Build

```
$ npm build
```

Dieser Befehl generiert statische Inhalte in das Verzeichnis `build`.

### Deployment

Eine GitHub Action baut automatisch ein Docker Image mit dem Namen `ghcr.io/d135-1r43/agiles-ehrenamt:latest` auf Basis
von NGINX. Um lokal zu bauen, kann folgende Abfolge von Befehlen verwendet werden:

````shell
npm run build
docker compose build
````