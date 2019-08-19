class ModalVideo extends HTMLElement {
  constructor() {
    super();
  }

  set url(url){
    this.innerHTML = `    
        <!-- modal window -->
        <div class="modal fade bd-example-modal-lg" id="modalTarget" tabindex="-1" role="dialog" aria-labelledby="ariaLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">

              <!-- responsive youtube video -->
              <div class="embed-responsive embed-responsive-16by9">
                <iframe src="${url}" id="modalVideo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>

            </div><!-- /.modal-content -->
          </div>
        </div><!-- /.modal -->
    `;
  } 


  connectedCallback() {
    // show video
    $('#modalTarget').modal('toggle');  

    // destroy video when user closes modal window
    $('#modalTarget').on('hidden.bs.modal', function (e) {
        document.getElementById('modalVideo').src = '';
    });
  }   


}
customElements.define('modal-video', ModalVideo);


// go-video is a short forms of the bootstrap tag
// ----------------------------------------------------

class GoVideo extends HTMLElement {
constructor() {
  super();
}

connectedCallback() {
  // read video data
  var vid   = this.getAttribute('vid');
  var title = this.innerHTML;

  this.innerHTML = `
      <button type="button" class="btn btn-link mx-0 px-0" onclick="showVideo('${vid}')"> 
        <i class="fas fa-video"></i> ${title}
      </button> <br>`;    
}

}
customElements.define('go-video', GoVideo);




