const Image = require("@11ty/eleventy-img");

async function imageShortcode(page, src, alt, width) {//modded to be able to handle local images to page
    path = page.inputPath.slice(0,-8)+src;
    let metadata = await Image(path, {
      widths: [width],
      formats: ["jpeg"],
      outputDir: page.outputPath.slice(0,-10)+"images/",
      urlPath: page.outputPath.slice(6,-10)+"images/" //absolute url so appears correctly on parent pages
    });
  
    let imageAttributes = {
      alt,
      loading: "lazy",
      decoding: "async",
    };
  
    return Image.generateHTML(metadata, imageAttributes);
  }

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/papers");
    eleventyConfig.addPassthroughCopy("./src/stuff");
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');

    // CSS processing
    eleventyConfig.addTransform('postcss', require('./lib/postcss'));
    eleventyConfig.addWatchTarget('./src/scss/');

    //Image processing
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    
    //Filters
    eleventyConfig.addFilter("getYear", function(value) {
      return new Date(value).getFullYear(); 
    });
 
    return { 
        dir: {
            input: "./src",
            output: "./docs"
        },
        passthroughFileCopy: true,
        templateFormats: ['njk','md','png','jpg'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
    }
}; 