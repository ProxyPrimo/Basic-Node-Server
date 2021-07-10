const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
        <head>
            <title>My Node.js Server</title>
        </head>
        <body>
        `);
  switch (url) {
    case "/users":
      res.write(`<ul><li>User 1</li></ul>`);
      break;
    default:
      res.write(`<h1>Hello</h1>`);
      break;
  }
  res.write(`</body></html>`);
  res.end();
};

module.exports = requestHandler;
