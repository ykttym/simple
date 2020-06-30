import React from 'react'

const Document = () => (
  <html>
    <head>
      <title>simple-ssr</title>
    </head>
    <body>
      <h1 onClick={() => alert('clicked！')}>Hello SSR</h1>
    </body>
  </html>
)

export default Document
