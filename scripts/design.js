const menuToggle = document.getElementById("menu-toggle")

function styleHeader(isMenuOpens) {
    const header = document.getElementById("header")

    if (isMenuOpens === true) {
        header.style.backgroundColor = "#000000"
    } else {
        header.style.backgroundColor = "transparent"
    }
}

function toggleMenu() {
    const menu = document.getElementById("menu")

    if (menu.style.display === "none") {
        menu.style.display = "block"
        styleHeader(true)
    } else {
        menu.style.display = "none"
        styleHeader(false)
    }
}