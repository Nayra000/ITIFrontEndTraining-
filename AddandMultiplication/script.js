window.addEventListener('load' ,function(){
    let add1=0,add2=0,mult1=0,mult2=0;
    addBtn1.addEventListener('change',function(){
        add1=parseInt(this.value);
        res1.innerText =add1+add2;
    })
    addBtn2.addEventListener('change',function(){
        add2=parseInt(this.value);
        res1.innerText =add1+add2;
    })

    multBtn1.addEventListener('change',function(){
        mult1=parseInt(this.value);
        res2.innerText =mult1*mult2;
    })
    multBtn2.addEventListener('change',function(){
        mult2=parseInt(this.value);
        res2.innerText =mult1*mult2;
    })

})