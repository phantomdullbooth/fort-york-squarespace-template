const headerBackground = document.getElementById("header")
const navIcon = document.getElementById("nav-icon")


function colorHeaderElements(navigationOpen) {
    if (navigationOpen === true) {
       headerBackground.style.backgroundColor = '#000000'
    } else {
        headerBackground.style.backgroundColor = 'transparent'
    }
}

function toggleNavigation() {
    const navigationMenu = document.getElementById("navigation-menu")

    if (navigationMenu.style.display === 'none') {
        colorHeaderElements(true)
        navigationMenu.style.display = 'block'
    } else {
        colorHeaderElements(false)
        navigationMenu.style.display = 'none'
    }
}