let l=0
let a=0
let pi=0
window.addEventListener('scroll',()=>{
    let c=window.pageYOffset
    if(c>1300 && a==0){
        document.querySelector(".tech").classList.add("anicltech")
        document.querySelector(".soft").classList.add("aniclsoft")
        a++
    }
    if (l>c){
        document.querySelector("header").style.top="0px"
        document.querySelector("header").style.boxShadow="10px 0px 15px"
    }
    else{
        document.querySelector("header").style.top="-101px"
        document.querySelector("header").style.boxShadow="10px 20px 25px rgb(203, 252, 255)"
    }
    l=c
    if (c>2100 && pi==0){
        document.querySelector("#preo").classList.add("preoc")
        pi++
    }
})