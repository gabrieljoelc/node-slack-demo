//Lets require/import the HTTP module
var http = require('http');
var WebClient = require('slack-client').WebClient;
var token = process.env.SLACK_API_TOKEN || '';
var channelId = process.env.CHANNEL_ID || '';

//Lets define a port we want to listen to
const PORT=5001;

//We need a function which handles requests and send response
function handleRequest(request, response){
    var web = new WebClient(token);

    // web.team.info(function (err, data) {
    //   if (err) {
    //     console.log('Error:', err);
    //   } else {
    //     console.log('Team Info:', data);
    //   }
    // });

    // web.channels.list(function (err, data) {
    //   if (err) {
    //     console.log('Error:', err);
    //   } else {
    //     console.log('Channels:', data);
    //   }
    // });

    response.end('It Works!! Path Hit: ' + request.url);

    web.chat.postMessage(channelId, 'test', {username: 'node-slack-demo-bot'}, function (err, data) {
      if (err) {
        console.log('Error:', err);
      } else {
        console.log('Chat:', data);
      }
    });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    // console.log("Server listening on: <a href="http://localhost:%s" target="_blank" rel="noreferrer" style="cursor:help;display:inline !important;">http://localhost:%s</a>", PORT);

    console.log("Server listening");
});
