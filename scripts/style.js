const headerBackground = document.getElementById("header")
const navIcon = document.getElementById("nav-icon")

function colorHeaderElements(navigationOpen) {
    if (navigationOpen === true) {
       headerBackground.style.backgroundColor = '#000000'
    }
}

function toggleNavigation() {
    if (headerBackground.style.backgroundColor !== '#000000') {
        colorHeaderElements(true)
    }
}