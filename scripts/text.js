function postmarkArticle(location, publishedOn, mainCategory) {
    const basicInformation = document.getElementById('unimportant')
    const information = document.getElementById('unimportant-main')
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const publishedDate = new Date(parseInt(publishedOn))


    let month = months[publishedDate.getMonth()]
    let date = publishedDate.getDate()

    if (location === 'main') {
        information.innerHTML = month + ' ' + date + ' —— ' + mainCategory
    } else {
        basicInformation.innerHTML = month + ' ' + date + ' —— ' + mainCategory
    }
}