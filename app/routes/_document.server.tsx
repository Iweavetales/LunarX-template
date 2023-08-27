import { LunarContext } from 'lunarx/context';
import React, { StrictMode } from 'react';
import { Bootstrap, DocumentLinks, DocumentScripts } from 'lunarx/document';
import reactDomServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

export default async function (context: LunarContext, Main: () => React.ReactElement) {
  const sheet = new ServerStyleSheet();
  let StyledMain = sheet.collectStyles(<Main />)

  return (
    <html>
      <head>
        <title>LunarJS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="charset" content="utf-8" />

        <DocumentScripts />
        <DocumentLinks />

        <script src="https://accounts.google.com/gsi/client" async defer></script>
        {sheet.getStyleElement()}
      </head>
      <body>
      {StyledMain}
      </body>
    </html>
  );
}
