const dns = require('hdns');

var routes = function(app) {

  app.get("/", function(req, res) {
    res.send("<h1>Namebase Handshake Extension API</h1><p>Oh, hi! There's not much to see here - view the <a href=\"https://github.com/namebasehq/handshake-extension\">code</a> instead</p>");
    console.log("Received GET");
  });


  app.get("/resolve", function(req, res) {
    console.log("Received GET resolve: "+req.query.domain);
    if(!req.query.domain) {
      return res.send('');
    } else {
      return dns.lookup(req.query.domain, { all: true }).then(ips =>
        res.send(ips
          .filter(i => i.family === 4)
          .map(i => i.address)
          .join(','))
      ).catch(() => res.send(''));
    }
  });
};

module.exports = routes;
