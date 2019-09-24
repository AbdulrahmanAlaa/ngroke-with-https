
const ngrok = require('ngrok');
(async function() {
  const url = await ngrok.connect(4200);
  console.log(url)
})();