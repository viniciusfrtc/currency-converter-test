# Overview

This is a currency converter project using React, react-query, styled-components and jest.

# Getting started

In order to run the app, please use the following commands:

```
nvm use
npm ci
npm run dev
```

For tests:

```
npm run test
```

And for building:

```
npm run build
```

# Requirements

As per design, it is required to fetch daily exchange rates from https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt and use them to convert CZK to any of the available currencies.

# Design decisions

I tried to keep a simple folder structure for easier comprehension, and I covered with unit tests where most of the logic is handled. My next steps would be to add components and e2e tests.
Regarding the rates fetching, as the request is blocked by CORS, I used a CORS proxy for the sake of fetching it, and implemented caching logic on local storage in order to not face any kind of rates limit from either the proxy or the API. I considered other options, as handling it in Vercel for example, but I kept it as simple as possible since this is not intended for production.
This approach is not something viable for production, so the first thing I would do is to move this call to backend and also implement a better caching logic so it would be always staled and refetched as the CNB launches the new daily version after 14:30 as per their docs.
I also used an endpoint from api.cnb.cz as I found it on the headers while testing, so I eventually got to this swagger https://api.cnb.cz/cnbapi/swagger-ui.html#/%2Fexrates/dailyUsingGET_1 which gives a better structured response of the necessary data for this project.

# Future improvements

As mentioned below, those would be my next steps:
- Move fetch from CNB to backend, with some extra logic to get the freshest daily exchange rates as soon as it releases
- e2e tests
- Components tests