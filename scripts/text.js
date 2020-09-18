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



// 

{/* <squarespace:query collection="blog" skip="2" limit="1" featured="true">
        <div>
            {.repeated section items}
                <span id="unimportant" class="unimportant"></span>
                <a href="{fullUrl}"><h3 class="no-underline">{title}</h3></a>

                <squarespace:script src="text.js" combo="false" />
                <script>postmarkArticle('feature', `{addedOn}`, `{categories}`)</script>
            {.end}
        </div>
    </squarespace:query>

    <squarespace:query collection="blog" limit="2" featured="true">
        <div>
            {.repeated section items}
                <span id="unimportant" class="unimportant"></span>
                <a href="{fullUrl}"><h3 class="no-underline">{title}</h3></a>

                <squarespace:script src="text.js" combo="false" />
                <script>postmarkArticle('feature', `{addedOn}`, `{categories}`)</script>
            {.end}
        </div>
    </squarespace:query>

    <squarespace:query collection="blog" skip="2" limit="2">
        {.repeated section items}
            <div style="margin-top:58px;" class="sneakpeek" id="sneakpeek--{id}" >
                <span class="unimportant" id="sneakpeek__info--{id}"></span>
                <a href="{fullUrl}"><h3 class="sneakpeek__title">{title}</h3></a>

                <div id="excerpt--{id}">{excerpt}</div>
                <div id="graphic--{id}">
                    <img src="{assetUrl}" class="sneakpeek__image" alt="{title} graphic" />
                </div>
            
                <squarespace:script src="text.js" combo="false" />
                
                <script>
                    postmarkArticle(`sneakpeek__info--{id}`, `{addedOn}`, `{categories}`)
                    renderSneakpeek(`{tags}`, `graphic--{id}`, `excerpt--{id}`)
                </script>
            </div>
        {.end}
    </squarespace:query> */}