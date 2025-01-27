const tabs = document.querySelectorAll('.tab');
const info = document.querySelectorAll('.information');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', ()=> {
        tabs.forEach(tab=>{tab.classList.remove('active')})
        tab.classList.add('active')
    })

    info.forEach(information => {information.classList.remove('active')})
    info[index].classList.add('active')
});