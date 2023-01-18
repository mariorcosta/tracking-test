export const trackit = (effect, subCategory1, requestedURL = '', subCategory2 = '', eventName = 'interaction') => {
    window.dataLayer.events.push({
        effect,
        subCategory1,
        subCategory2,
        requestedURL,
        eventName
    })
}