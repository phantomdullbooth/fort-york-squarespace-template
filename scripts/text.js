// --------------- RETURNS DATE AND CATEGORIES --------------- //
// --------------- RETURNS DATE AND CATEGORIES --------------- //

function printMetadata(requestingId, dateAdded, categories) {
    const addedOn = new Date(parseInt(dateAdded))
    const metadataId = document.getElementById(requestingId)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    let month = months[addedOn.getMonth()]
    let date = addedOn.getDate()

    metadataId.innerHTML = month + ' ' + date + '——' + categories
}


// --------------- DETERMINES PREVIEW TYPE --------------- //
// --------------- DETERMINES PREVIEW TYPE --------------- //

function determinePreviewType(previewType, excerptId, imageId) {
    const excerpt = document.getElementById(excerptId)
    const image = document.getElementById(imageId)

    if (previewType === 'preview--immersive') {

    } else if (previewType === 'preview--text') {
        excerpt.style.display = 'block'
        image.style.display = 'none'
    } else if (previewType === 'preview--image') {

    }
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

{/* 

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

        <squarespace:query collection="reads" skip="2" limit="1" featured="true">
        <div>
            {.repeated section items}
                <span id="unimportant" class="unimportant"></span>
                <a href="{fullUrl}"><h3 class="no-underline">{title}</h3></a>

                <squarespace:script src="text.js" combo="false" />
                <script>postmarkArticle('feature', `{addedOn}`, `{categories}`)</script>
            {.end}
        </div>
    </squarespace:query>

     */}


{/* <div class="page page--blogs">
    <squarespace:block-field id="blog-header" columns="1" />

    <div>
        {.repeated section items}
            <div class="card card--blog">
                <a href="{fullUrl}">
                    <div class="container">
                        <h1>{title}</h1>
                        <p>{excerpt}</p>
                    </div>

                    <button><img src="{website.internalUrl}/assets/icons/arrow.png" /></button>
                </a>
            </div>
        {.end}
    </div>
</div>

<script>
    function greetBlogUser() {
        const blogHeader = document.getElementById("blog-header")
        const blogGreeting = blogHeader.getElementsByTagName("H1")[0]
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        const time = new Date()

        let month = months[time.getMonth()]
        let day = days[time.getDay()]
        let date = time.getDate()
        let hour = time.getHours()

        if (month === "December" && date === 25) {
            blogGreeting.innerHTML = "Merry Christmas!"
        } else if (month === "January" && date === 1) {
            blogGreeting.innerHTML = "Happy New Year!"
        } else if (month === "July" && date === 4) {
            blogGreeting.innerHTML = "Happy 4th of July!"
        } else if (day === "Friday") {
            blogGreeting.innerHTML = "Thank God it's Friday!"
        } else if (hour >= 6 && hour < 12) {
            blogGreeting.innerHTML = "good morning."
        } else if (hour >= 12 && hour < 17) {
            blogGreeting.innerHTML = "good afternoon."
        } else {
            blogGreeting.innerHTML = "good evening."
        }
    }

    greetBlogUser()
</script> */}