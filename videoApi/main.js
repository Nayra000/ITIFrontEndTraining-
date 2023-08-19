window.addEventListener('load',function(){
  

    allBtns =this.document.querySelectorAll('button');
    let btnNo=0;

    allBtns.forEach(function(button) {
    button.addEventListener('click',function(e){
        allBtns[btnNo].style="background-color:transparent ;color:black";
        btnNo=this.id;
        console.log(btnNo);     
        this.style="background-color:blue ;color:white";
        myVideo.src=this.getAttribute("videoLink");
        myVideo.play(); 
    })
    });


    myVideo.addEventListener('click',function(){
        this.style ="transform:scale(1.2)"
    })

    myVideo.addEventListener('dblclick' ,function(){
        this.requestFullscreen();
    })


    window.addEventListener('keydown',function(e){
        if(e.code ==='ArrowDown'){
            allBtns[btnNo].style="background-color:transparent ;color:black";
            btnNo++;
            if(btnNo >9){
                btnNo=0;
            }
        }
        else if(e.code ==='ArrowUp'){
            allBtns[btnNo].style="background-color:transparent ;color:black";
            btnNo--;
            if(btnNo <0){
                btnNo=9;
            }
        }
        allBtns[btnNo].style="background-color:blue ;color:white";
        myVideo.src=allBtns[btnNo].getAttribute("videoLink");
        myVideo.play(); 

    })



})