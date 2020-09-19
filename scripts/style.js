const header = document.getElementById("header")

function colorHeaderElements(navigationOpen) {
    if (navigationOpen === true) {
        header.style.backgroundColor = '#000000'
    } else {
        header.style.backgroundColor = 'transparent'
    }
}

function toggleNavigation() {
    const menu = document.getElementById("menu")

    if (menu.style.display === 'none') {
        colorHeaderElements(true)
        menu.style.display = 'block'
    } else if (menu.style.display === 'block') {
        colorHeaderElements(false)
        menu.style.display = 'none'
    }
}

// document.getElementById("menu-toggle").addEventListener("click", function() => {
//     console.log('what')
//     toggleNavigation()
// })