function setTimer(elem_id, date, img_id) {
	
	var img = document.createElement('IMG');
	img.setAttribute("src", img_id);
    	img.setAttribute("width", "360");
    	img.setAttribute("height", "243");
	document.body.appendChild(img); 
	
	var para = document.createElement('P');
	var t = document.createTextNode("");
	para.appendChild(t);
	document.body.appendChild(para);
	
	var countDownDate = new Date(date).getTime();
	var x = setInterval(function() {
		
		var now = new Date().getTime();
		
		var distance = countDownDate - now;
		
		var days = Math.floor(distance / (1000*60*60*24));
		var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
		var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
		//var seconds = Math.floor((distance % (1000*60)) / 1000);
		
		// Display time result in text node
		t.nodeValue = days + "d " + hours + "h " + minutes + "m";
		
		// If the countdown is finished, write something
		if (distance < 0) {
			clearInterval(x);
			document.getElementById(elem_id).innerHTML = "0d 0h 0m 0s";
		}
	}, 1000);
}

// example function calls. Want to change this to use a button to make a new counter
setTimer("BlackWidow","May 1, 2020 12:00:00", "https://img.cinemablend.com/filter:scale/quill/f/2/d/c/3/d/f2dc3d3e03033f8b9ce02b7015f789264ef248ab.jpg?mw=600");
setTimer("Kingsman","September 18, 2020 12:00:00", "https://moviehole.net/img/TKM_TitleTreatment.jpg");
