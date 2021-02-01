import React from 'react';

const Html = ({ children, initialState, scripts }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="content-type" content="text/html; charset=utf-8"></meta>
      <title>Weather widget</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
    </head>
    <body>
      <div id="app"></div>

      {initialState && (
        <script
          dangerouslySetInnerHTML={{
            __html: `window.APP_STATE=${JSON.stringify(initialState)}`
          }}
        />
      )}

      {scripts.map((item, index) => <script key={index} src={item} />)}
    </body>
  </html>
);

export default Html;
