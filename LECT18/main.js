let btn= document.querySelector('button')
let body=document.querySelector('body')
let isDark=true

btn.addEventListener("click",function(){
    // body.style.backgroundColor='green'

    if(isDark){
        body.style.backgroundColor='green'
    }else{
        body.style.backgroundColor='gold'
    }
    isDark=!isDark
})