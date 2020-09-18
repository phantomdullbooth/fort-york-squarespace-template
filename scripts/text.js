function postmarkArticle(location, publishedOn, mainCategory) {
    const postmarkLocation = document.getElementById(location)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const publishedDate = new Date(parseInt(publishedOn))

    let month = months[publishedDate.getMonth()]
    let date = publishedDate.getDate()

    postmarkLocation.innerHTML = month + ' ' + date + ' —— ' + mainCategory
}

function renderSneakpeek(articleType, graphicBox, excerptBox) {
    if (articleType === 'image-focus') {
        document.getElementById(graphicBox).style.display = 'block'
        document.getElementById(excerptBox).style.display = 'none'
    } else {
        document.getElementById(excerptBox).style.display = 'block'
        document.getElementById(graphicBox).style.display = 'none'
    }
}