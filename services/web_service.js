const cheerio = require("cheerio");

const validateUrl = (urlToValidate) => {
    try {
        const url = new URL(urlToValidate);
        return true;
    } catch (e) {
        return false;
    }
}
const getPage = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const page = await  fetch(url);
            const html = await page.text();
            resolve(html);
        } catch (e) {
            reject(new Error('Error getting page HTML'));
        }
    });
}

const getMetadataFromHtml = (pageHtml, pageUrl) => {
    const $ = cheerio.load(pageHtml);
    const title = $('meta[property="og:title"]').attr('content') || $('title').text() || $('meta[name="title"]').attr('content') || $('meta[name="application-name"]').attr('content')
    const description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content')
    const url = $('meta[property="og:url"]').attr('content') || $('meta[name="msapplication-starturl"]').attr('content') || pageUrl
    const site_name = $('meta[property="og:site_name"]').attr('content')
    const author = $('meta[name="author"]').attr('content')
    const site = $('meta[name="twitter:site"]').attr('content')
    const card = $('meta[name="twitter:card"]').attr('content')
    const type = $('meta[property="og:type"]').attr('content')
    const theme = $('meta[name="theme-color"]').attr('content')
    const google = $('meta[name="google"]').attr('content')
    const superfish = $('meta[name="superfish"]').attr('content')
    const viewport = $('meta[name="viewport"]').attr('content')
    const robots = $('meta[name="robots"]').attr('content')
    const image = $('meta[property="og:image"]').attr('content') || $('meta[property="og:image:url"]').attr('content')
    const icon = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href')
    const keywords = $('meta[property="og:keywords"]').attr('content') || $('meta[name="keywords"]').attr('content')

    return {
        title: title ?? '',
        description: description ?? '',
        url: url ?? '',
        site_name: site_name ?? '',
        type: type ?? '',
        image: image ?? '',
        icon: icon ?? '',
        keywords: keywords ?? '',
        theme: theme ?? '',
        google: google ?? '',
        site: site ?? '',
        card: card ?? '',
        superfish: superfish ?? '',
        viewport: viewport ?? '',
        robots: robots ?? '',
        author: author ?? ''
    }
}

module.exports = {
    getPage,
    getMetadataFromHtml,
    validateUrl
}
