import express from 'express';
import bodyParser from 'body-parser';

/* SSR */
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import loginRoute from './routes/login/';

/* Components */
import store from '../client/store/store';
import Routes from '../router/Routes';
import Html from '../client/components/Html';

/* Session */

const app = express();

app.use(express.static('built/statics'));
app.use(bodyParser.json());

/* Middlewares */

app.use('/api/login', loginRoute.login);

app.get('*', async (req, res, next) => {
  try {
    const context = {};
    const body = await renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Routes />
        </StaticRouter>
      </Provider>,
    );

    const html = renderToStaticMarkup(
      <Html body={body} />);

    if (context.url) {
      res.writeHead(301, {
        Location: context.url,
      });
      res.end();
    } else {
      res.send(`<!doctype ${html}`);
      res.end();
    }
  } catch (err) {
    next(err);
  }
});


const server = app.listen(8005, () => {
  const { address, port } = server.address();
  console.log(`Open server on address: ${address} and port: ${port}`);
});