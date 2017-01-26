/*$("#b1").click(function() {
	//document.getElementById("para").innerHTML = "Paragraph";
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "content.js"});
	});
});
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.message === "search_in_google") {
			chrome.tabs.create({"url": "https://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=" + document.getElementById("t1").value});
		}
	}
);*/
count = 0;
$("#b1").click(function() {
	//chrome.tabs.create({"url": "https://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=" + document.getElementById("t1").value});
	if(count == 0) {
		ifrm = document.createElement("iframe");
		ifrm.setAttribute("id", "ifr");
		ifrm.setAttribute("height", "400");
		ifrm.setAttribute("width", "100%");
		ifrm.setAttribute("frameborder", "0");
		ifrm.setAttribute("overflow", "scroll");
		source = "http://m.dictionary.com/browse/" + document.getElementById("t1").value + "?s=t"; 
		ifrm.setAttribute("src", source);
		document.body.appendChild(ifrm);
		count++;
	}
	else {
		source = source = "http://m.dictionary.com/browse/" + document.getElementById("t1").value + "?s=t";
		ifrm.setAttribute("src", source);
	}
});

$("input").mouseover(function() {
	$(this).css("outline", "black solid thick")
});
$("input").mouseout(function() {
	$(this).css("outline", "skyblue solid thick");
});