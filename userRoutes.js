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
      res.write(`
      <ul>
        <li>User 1</li>
      </ul>
      `);
      break;
    case "/create-user":
      if (method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
          body.push(chunk);
        });

        return req.on("end", () => {
          const parseBody = Buffer.concat(body).toString();
          const username = parseBody.split("=")[1];

          console.log(username);
          return res.end();
        });
      }
      
      break;
    default:
      res.write(`
      <h1>Hello</h1>
      <form action="/create-user" method="POST">
        <input type="text" name="user">
            <button type="submit">Submit</button>
        </input>
      </form>
      `);
      break;
  }
  res.write(`</body></html>`);
  res.end();
};

module.exports = requestHandler;
