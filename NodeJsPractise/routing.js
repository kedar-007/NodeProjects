const http = require('http');
const server = http.createServer((req,res)=>{
  const url = req.url;
  if(url ==='/home'){
    res.write('<html>');
    res.write('<body><h1>Welcome on Home Page</h1></body>')
    res.write('</html>')
    return res.end();
  }
  else if(url === '/about'){
    res.write('<html>');
    res.write('<body><h1>Welcome on About Us Page</h1></body>')
    res.write('</html>')
    return res.end();
  }
  else if(url === '/node'){
    res.write('<html>');
    res.write('<body><h1>Welcome to my Node.js Project</h1></body>')
    res.write('</html>')
    return res.end();
  }
})
server.listen(3000);