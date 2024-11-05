// navbar btn
let barBtn = document.querySelector(".bar-btn")
let navBar = document.querySelector(".navbar")
let isActive = false
let icon = document.querySelector(".my-menu-bar")


barBtn.addEventListener("click", ()=> {
    if(isActive === false) {
        isActive = true
        navBar.classList.add("active")
        navBar.classList.remove("not-active")
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
    }

    else{
        isActive = false
        navBar.classList.remove("active")
        navBar.classList.add("not-active")
        icon.classList.add("fa-bars")
        icon.classList.remove("fa-xmark")
    }
})

// project btn

let codeBtn = document.querySelector('.codeBtn')
let cmsBtn = document.querySelector('.cmsBtn')

let code = document.querySelectorAll('.code')
let cms = document.querySelector('.cms')

codeBtn.addEventListener('click', () =>{
    codeBtn.classList.add('active')
    codeBtn.classList.remove('hide')
    cmsBtn.classList.add('remove')
    cmsBtn.classList.remove('active')
    code.forEach((i) => {
        i.classList.add('active')
        i.classList.remove('hide')
        cms.classList.add('hide')
        cms.classList.remove('active')
    })
    
})

cmsBtn.addEventListener('click', () =>{
    cmsBtn.classList.add('active')
    cmsBtn.classList.remove('hide')
    codeBtn.classList.add('remove')
    codeBtn.classList.remove('active')
    code.forEach((i) => {
        cms.classList.add('active')
        cms.classList.remove('hide')
        i.classList.add('hide')
        i.classList.remove('active')
    })  
})