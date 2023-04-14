# Contentful starter

⚡ Some quick functions that will help you get started with contentful for your blogging journey (specifically, my friends). 

### Before we begin

1. Create an account with contentful.
2. Follow the steps to create a new space for your blog
3. Settings dropdown > API Keys
4. Add API key if one's not there already
5. Keep the API key and space id copied on your clipboard


### Getting started

First copy the following script tags to you head element

```html
<script src="https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
```

Then copy the `contentful-wrapper.js` file to your working directory and add the following script tag before you close your `<body>` tag

```html
<body>
    ...
    <script>
        const client = contentful.createClient({
            space: "<space_id",
            accessToken: "<your_access_token>",
        });
        // Pass this client argument in the functions that requires it
    </script>
    <script src="./contentful-wrapper.js"></script>
</body>
```

### Functions reference

1. `getPosts(client)` : returns an array of posts objects
2. `getPostById(client, id)` : returns the post by it's id
3. `deconstructPost(fields, post_obj)` : Given an array of fields like `["content", "title"]` returns an array of the corresponding results in the same order.
4. `getHtmlContent(md)` : Converts markdown string to html strings that can be embedded in elements

### Quick Example

```js
getPostById("<post_id>").then((obj) => {
    let content = deconstructPost(["content"], obj)[0] // returns the first result

    let html = getHtmlContent(content)

    // Do something with this html data; like:
    document.getElementById("content").innerHTML = html;

    // Voila!
})
```

Checkout [Contentful's API reference](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/spaces) (or manual console.logs) to get an idea about how the response from contentful looks like.

### Moving Forward

For any further functions that may be require please feel free to open an issue in the issues section. They shall be looked into as soon as I get time!
