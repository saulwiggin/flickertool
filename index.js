#!/usr/bin/env node

var flickrOptions = {
	oauth_consumer_key: "32ea42bb75fba3e2a789554ae2a9bf96",
	oauth_consumer_secret: "1a42c909429d9363",
  	// oauth_token: '',
  	// oauth_token_secret: '',
	perms: 'write'
};

var flickr = require('./lib/Flickr');
var files = require('./lib/Files');

files(function(images) {
	flickr(flickrOptions, images, function() {
		console.log("All the images uploaded.");
		process.exit(1);
	})
});