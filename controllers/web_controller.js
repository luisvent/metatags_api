const webService = require('../services/web_service');
const {error, success} = require("node-http-response-wrapper");

const metadata = async (req, res) => {

    const url = req.query.url;

    if(!url && !webService.validateUrl(url)) {
        return error(res, 'No website');
    }

    try {
        const pageHTML = await webService.getPage(url);

        const metadata = webService.getMetadataFromHtml(pageHTML, url);
        return success(res, 'URL Metadata', metadata);
    } catch (e) {
        return error(res, 'Error getting page metatags');
    }
}

module.exports = {
    metadata
}

