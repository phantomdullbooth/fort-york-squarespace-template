const headerBackground = document.getElementById("header")
const navIcon = document.getElementById("nav-icon")
const navigationMenu = document.getElementById("navigation-menu")

function colorHeaderElements(navigationOpen) {
    if (navigationOpen === true) {
       headerBackground.style.backgroundColor = '#000000'
    } else {
        headerBackground.style.backgroundColor = 'transparent'
    }
}

function toggleNavigation() {
    if (navigationMenu.style.display === 'none') {
        colorHeaderElements(true)
        navigationMenu.style.display = 'block'
    } else {
        colorHeaderElements(false)
        navigationMenu.style.display = 'none'
    }
}