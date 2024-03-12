# Metatag API

### Node.js Express API for Webpage Metadata Extraction

This API provides a way to extract metadata from webpages using the `cheerio` library for web scraping. The API returns a JSON response containing the extracted metadata, including the title, description, URL, site name, image, icon, and other relevant information.

## Endpoint

### `GET /metadata?url=<WEBPAGE_URL>`

This endpoint accepts a `url` query parameter representing the URL of the webpage you want to extract metadata from.

**Example Request**

```sh
GET /metadata?url=https://example.com
```

**Example Response**

```json
{
  "status": "Success OK",
  "message": "URL Metadata",
  "data": {
    "title": "Example Domain",
    "description": "This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.",
    "url": "https://example.com",
    "site_name": "Example Domain",
    "type": "",
    "image": "",
    "icon": "https://example.com/favicon.ico",
    "keywords": "",
    "theme": "",
    "google": "",
    "site": "",
    "card": "",
    "superfish": "",
    "viewport": "",
    "robots": ""
  }
}
```

## Usage
To extract metadata from a webpage, send a GET request to the /metadata endpoint with the url query parameter set to the URL of the webpage you want to scrape. The API will return a JSON response containing the extracted metadata.

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js and npm
- Express: Fast, unopinionated, minimalist web application framework for Node.js
- Cheerio: Fast, flexible, and lean implementation of core jQuery designed specifically for the server

## Installation

1. Clone this repository:

```bash
git clone https://github.com/luisvent/metatags_api.git
```

2. Install dependencies:

```bash
npm install
```

3. Run project:

```bash
npm start
```
## License
This project is licensed under the MIT License - see the LICENSE file for details.
