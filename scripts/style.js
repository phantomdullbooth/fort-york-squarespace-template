const headerBackground = document.getElementById("header")

function colorHeaderElements(navigationOpen) {
    if (navigationOpen === true) {
       headerBackground.style.backgroundColor = '#000000'
    } else {
        headerBackground.style.backgroundColor = 'transparent'
    }
}

function toggleNavigation() {
    const menu = document.getElementById("menu")

    if (menu.style.display === 'none') {
        colorHeaderElements(true)
        menu.style.display = 'block'
    } else {
        colorHeaderElements(false)
        menu.style.display = 'none'
    }
}