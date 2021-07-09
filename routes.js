const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/message") {
        if (method === "POST") {
            const body = [];

            req.on('data', (chunk) => {
                body.push(chunk);
            });

            return req.on('end', () => {
                const parseBody = Buffer.concat(body).toString();
                const message = parseBody.split("=")[1]

                fs.writeFile("message.txt", message, (err) => {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                });
            });


        }


        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<head><title>My Node.js Server</title></head>");
        res.write("<body>");
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message"><button type="submit">Submit</button></input>')
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>My Node.js Server</title></head>");
    res.write("<body>");
    res.write("<h2>Hi! This is my basic Node.js server.</h2>")
    res.write("<p>Go to /message for my form</p>")
    res.write("</body>");
    res.write("</html>");
    res.end();

};

module.exports = requestHandler;