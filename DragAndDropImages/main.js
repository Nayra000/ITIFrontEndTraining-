window.addEventListener("load", function () {
    let allImages = document.images;
    let top =this.document.getElementById('top');
    let bottom =this.document.getElementById('bottom');
    let imagesNums=7;

    Array.from(allImages).forEach((image)=>{
        image.addEventListener('dragstart',startDrag);
        image.addEventListener('dragend',endDrag);})
    
    bottom.addEventListener('drop', dropped);
    bottom.addEventListener('dragenter',enterDrag);
    bottom.addEventListener('dragover',overDrag);


    top.addEventListener('dragleave',leaveDrag);

 

    

    function startDrag(e){
        e.dataTransfer.setData('myImage',e.target.outerHTML);
        imagesNums--;
        if(imagesNums <= 0){
            console.log(top);
            top.innerText="Empty";
            top.style ='height :5vh ;box-shadow: inset 35px 35px 110px  #370237;';
        }
     
      
    }
    function endDrag(e) {
        e.preventDefault();
        e.target.style.display = "none";
    }
    function overDrag(e) {
        e.preventDefault();
    }
    function leaveDrag(e) {
        e.preventDefault();
    }

    function enterDrag(e){
        e.preventDefault();
    }

    function dropped(e){
        e.preventDefault();
        bottom.innerHTML += e.dataTransfer.getData('myImage');
        bottom.style="box-shadow: inset 35px 35px 110px  #370237";
    }

  });