/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_center",
			timeFormat: 12
		},

//{
//module: 'MMM-Instagram2020',
//position: 'top_center',
//header: 'MMM-Instagram2020',
//config: {
//  client_id: '579414629426667', // Facebook Instagram App ID
//  client_secret: '0615bc80b616918c6b25ae43fb2d9103', // Facebook Instagram App Secret
//  redirect_uri: 'https://localhost',
//  auth_code: 'AQC89ZIhlTP4UE_yT5V7pzovbv3ZVfWY0KUhFIm_KesJ4zYhjuNNd_rOJcgv0tUIjXcDjeQUAOYQEGB_DhkrTT5TJFSN7dNgCn5OOz0k79sv5INHFJ8lrdFarltO3Q4wWgyrLw0bhgbmE2XEhyx3V5zGlbDzk5ooKigbw46w6dmeJCufHJFfghKwETnhuzE9VUP5yOd5Wc3BkiyqOrf2dh6v1iev-CGreLTd5AxqKzCdwQ',
//  animationSpeed: 1000,
//  updateInterval: 30000,
//}},
	//disabled this because too heavy on raspberry pi
		//{
	//module: "MMM-RandomYouTubePlayer", 
	//position: "top_center",	      // This can be any of the regions...
	//config: {
	    //list: "PLV1U3bpkKUzXTFgcSx9Nxk41PAO3XKVeK",     // See Configuration Options below...
            //height: 480,
           // width: 720,
	   // showinfo: true,
	  //  }
	// },
		{
  module: "MMM-NowPlayingOnSpotify",
  position: "right",

  config: {
    clientID: "22eb33fbf1754bd197f087f7151d514e",
    clientSecret: "81de8145e52a4595aff1da7a2db39a3c",
    accessToken: "BQCOCWFzrooZc6Kn56hpsgnxtIhUghgFGfuc29gWruNQSnM6GuzKjoh034SNzB3PjMFyWuxr4s9fBjKuHEMQ0yJCWUA5DIPFu0rutpDaguafhd0v8s1d75Tc1eomPUvxKCTcZtRePf1dxB8Qkr37Yg",
    refreshToken: "AQAeWaj3qS4sSwXVNt_G-DDWX_WsrkKjQRR_ZdJWvT_Fj1spDAmjBSio8DSIVu6gbbcAQ71p0KcsL82-JwFFULjzuLRBeajE8Smx5zJzHXRZFkJrG1gavknvHwRrNM_RGuk"
  }
},
		{
  module: "MMM-DarkSkyForecast",
  header: "Weather",
  position: "top_left",
  classes: "default everyone",
  disabled: false,
  config: {
    apikey: "7b9ab2ed762dd2076e37883992e30fbe",
    latitude: "37.7749",
    longitude: "-122.4194",      
    iconset: "3c",
    concise: true,
    units: "us",
    showWind: false,
    forecastLayout: "tiled"
  }
},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
