const navigation = document.getElementById('navigation')
const navigationToggle = document.getElementById('navigation-toggle')

function styleHeader(willNavigationOpen) {
    const header = document.getElementById("header")

    if (willNavigationOpen === true) {
        header.style.backgroundColor = "#000000"
    } else {
        header.style.backgroundColor = "transparent"
    }
}

function toggleNavigation() {
    if (navigation.style.display === 'block') {
        navigation.style.display = 'none'
        styleHeader(false)
    } else {
        navigation.style.display = 'block'
        styleHeader(true)
    }
}