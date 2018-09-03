import React from 'react';
import PropTypes from 'prop-types';
import Config from '../actions/config/';

function Html(props) {
  return (
    <html className="no-js" lang="es">
      <head>
        <meta charSet="utf-8" />
        <title>Gauss Control</title>
        <meta name="description" content="Gauss Control" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {
          process.env.type == "production" &&
            <link rel="stylesheet" href={`${Config.api}/main.css`} />
        }
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: props.body }} />
        <script src="/app.js" />
      </body>
    </html>
  );
}

Html.propTypes = {
  body: PropTypes.string.isRequired,
};

export default Html;
