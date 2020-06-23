'use strict';
chrome.webNavigation.onCompleted.addListener(function() {
	
	var d = new Date();
	var month = d.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	
	var date = d.getDate();
	if (date < 10) {
		date = "0" + date;
	}
	
	var year = d.getFullYear();
	
	var newrl = "https://www.gocomics.com/garfield/" + year + "/" + month + "/" + date;
	chrome.tabs.update({url: newrl});
	var imgurl = "https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/" + year + "/" + year + "-" + month + "-" + date + ".gif";
	chrome.downloads.download({url: imgurl});
}, {url: [{urlMatches : 'https://www.garfield.com/'}]});