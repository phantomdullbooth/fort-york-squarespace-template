function postmarkArticle(publishedOn, mainCategory) {
    const basicInformation = document.getElementById('unimportant')
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const publishedDate = new Date(parseInt(publishedOn))


    let month = months[publishedDate.getMonth()]
    let date = publishedDate.getDate()

    basicInformation.innerHTML = month + ' ' + date + ' —— ' + mainCategory
}