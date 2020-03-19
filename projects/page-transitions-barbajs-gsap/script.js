
//Page transition  
function pagetransition(){
    var tl = gsap.timeline();
    tl.to("#trans", {duration: .5, scaleY: 1, transformOrigin: 'bottom', ease: Power3.easeInOut});
    tl.to(".left",{ x:-200, y:0, duration: 1, ease: Power3.easeInOut, opacity: 0  });
    tl.to("#trans", {duration: .5, scaleY: 0, transformOrigin: 'top', ease: Power3.easeInOut, delay: 0 })
    
}

//Function to Delay
function delay(n){
    n = n || 2000;
    return new Promise( done =>{
        setTimeout(()=>{
            done();
        },n)
    })

   
}

//Initial Content ANimation
function contentAnimation(){
    var tl =  gsap.timeline();
    tl.from(".left",{ x:-200, y:0, duration: 1, ease: Power3.easeInOut, opacity: 0  });
    
}


//Here where magic Happens
barba.init({
    //we need sync
    sync: true,
    //the transitions array
    transitions: [{
        //When the user leaves the page
        async leave(data) {
            const done = this.async();
            //call page transition function
            pagetransition();
            //give a small delay
            await delay(500);
            done();
        }
    }],

    
});
//windows loads, call content animation
window.onload = ()=>{
    contentAnimation();
}