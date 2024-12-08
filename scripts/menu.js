const toggleMenu = (menuButton, menuElement, menuOverlay)=>{
        menuButton.classList.toggle('topBar__menuButton--active')
        menuElement.classList.toggle('topBar__menu--active')
        menuOverlay.classList.toggle('topBar__menuOverlay--hidden') 
}

const initMenu = ()=>{
    const menuButton =document?.querySelector('[data-js-element="menuButton"]')
    const menuElement =document?.querySelector('[data-js-element="menu"]')
    const menuOverlay =document?.querySelector('[data-js-element="menuOverlay"]')
    menuButton.addEventListener('click', ()=>toggleMenu(menuButton, menuElement, menuOverlay))
    menuOverlay.addEventListener('click', ()=>toggleMenu(menuButton, menuElement, menuOverlay))
}

export default initMenu;