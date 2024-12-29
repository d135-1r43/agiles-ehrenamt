# Agiles Ehrenamt

![Agiles Ehrenamt](static/img/agiles-ehrenamt.png)

[![CC](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-nd.eu.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de)

[![All Contributors](https://img.shields.io/github/all-contributors/d135-1r43/agiles-ehrenamt?color=ee8449&style=flat-square)](#contributors)
[![Build and Deploy](https://github.com/d135-1r43/agiles-ehrenamt/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/d135-1r43/agiles-ehrenamt/actions/workflows/build-deploy.yml)


Die Seite ist mit [Docusaurus](https://docusaurus.io/) erstellt.

Änderungen sind jederzeit willkommen. Dazu bitte das Repository forken und einen Pull Request erstellen. 

### Installation der Abhängigkeiten

```shell
npm install
```

### Lokales Entwicklen

```shell
npm start
```

Dieser Befehl startet einen lokalen Entwicklungsserver und öffnet ein Browserfenster. Die meisten Änderungen werden live
übernommen, ohne dass der Server neu gestartet werden muss.

### Build

```shell
npm run build
```

Dieser Befehl generiert statische Inhalte in das Verzeichnis `build`.

### Deployment

Eine GitHub Action baut automatisch ein Docker Image mit dem Namen `ghcr.io/d135-1r43/agiles-ehrenamt:latest` auf Basis
von NGINX. Um lokal zu bauen, kann folgende Abfolge von Befehlen verwendet werden:

````shell
npm run build
docker compose build
````

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://explore.de"><img src="https://avatars.githubusercontent.com/u/545499?v=4?s=100" width="100px;" alt="Markus Herhoffer"/><br /><sub><b>Markus Herhoffer</b></sub></a><br /><a href="#infra-d135-1r43" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#code-d135-1r43" title="Code">💻</a> <a href="#content-d135-1r43" title="Content">🖋</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->