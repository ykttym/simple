import React from 'react'

const Document = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>simple-ssr</title>
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
    </body>
    <script src="./main.js"></script>
  </html>
)

export default Document
