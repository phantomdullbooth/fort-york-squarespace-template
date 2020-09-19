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
        excerpt.style.display = 'none'
        image.style.display = 'block'
    }
}


// {#  <img src="{assetUrl}" alt="{title}">  }