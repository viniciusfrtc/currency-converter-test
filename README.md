todos:

- ~~package.json~~
- ~~husky~~
- ~~nvmrc~~
- ~~eslint new config (delete old + double check new)~~
- ~~lint-staged~~
- ~~path mapping in tsconfig~~
- ~~conferir ignores~~
- ~~webpack (incluir outputDir)~~
- add global error boundary
- tests (mock service worker for react query)
- e2e tests?
- editorconfig?
- bundle analyzer?


mencionar:
usei cors proxy ja que backend nao faz parte do projeto - seria minha primeira melhoria
fazendo o request pra url sugerida (https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt) eu notei a existencia do dominio api.cnb.cz
e ai encontrei esse swagger: https://api.cnb.cz/cnbapi/swagger-ui.html#/%2Fexrates/dailyUsingGET_1, com isso usei essa rota direto pra ja ter os dados parseados