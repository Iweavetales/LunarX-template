import { ServerContext } from 'lunarx/server';
import React from 'react';
import {DocumentLinks, DocumentScripts, Head} from 'lunarx/document';

export default async function (context: ServerContext, Main: () => React.ReactElement) {


  return (
    <html>
      <Head>
        <title>LunarX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="charset" content="utf-8" />

        <script src="https://accounts.google.com/gsi/client" async defer></script>
      </Head>
      <body>
        <Main/>
      </body>
    </html>
  );
}
