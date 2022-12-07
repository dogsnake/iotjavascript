let arts = document.querySelectorAll('article');
let lis = document.querySelectorAll(".leftnav li");
document.addEventListener("scroll",function(){
    let sct = document.documentElement.scrollTop;
    arts.forEach((ar,index)=>{
        let zoomNum = (index*-5000)+sct;
        ar.style.transform = `translateZ(${zoomNum}px)`;
        if(sct > 1000 + (4000*index)){
            ar.classList.add('on');
            arts.forEach((ar,index2)=>{
                if(index != index2){
                    ar.classList.remove('on');
                }
            })
        }
    })
})
lis.forEach((li,index)=>{
    li.addEventListener('click',function(e){
        //이벤트를 제거 
        e.preventDefault();
        let scTop = index*5000;
        window.scrollTo({top:scTop,behavior:'smooth'});
        console.log(scTop);
    })
})