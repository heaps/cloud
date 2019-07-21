// show video on modal window
function showVideo(id){
    // get video div
    var video = document.getElementById('video');

    // remove any previous children
    while (video.firstChild) { video.removeChild(video.firstChild); }

    // create modal-video instance and set url
	var modal  = document.createElement('modal-video');
	modal.url  = "https://www.youtube.com/embed/" + id;

	// add instance to video
	video.appendChild(modal);	
}

