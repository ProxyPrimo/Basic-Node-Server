const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/message") {
        if (method === "POST") {
            fs.writeFileSync("message.txt", "DUMMY");
            res.writeHead(302, {'Location': '/'});
            return res.end();
        }
        res.write("<html>");
        res.write("<head><title>My Node.js Server</title></head>");
        res.write("<body>");
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text"><button type="submit">Submit</button></input>')
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    res.write("<html>");
    res.write("<head><title>My Node.js Server</title></head>");
    res.write("<body>");
    res.write("<h2>Hi! This is my basic Node.js server.</h2>")
    res.write("<p>Go to /message for my form</p>")
    res.write("</body>");
    res.write("</html>");
    res.end();
});


server.listen(3000);