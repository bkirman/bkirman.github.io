const Image = require("@11ty/eleventy-img");

async function imageShortcode(page, src, alt, sizes) {//modded to be able to handle local images to page
    path = page.inputPath.slice(0,-8)+src;
    let metadata = await Image(path, {
      widths: [300],
      formats: ["jpeg"],
      outputDir: page.outputPath.slice(0,-10)+"images/",
      urlPath: page.outputPath.slice(6,-10)+"images/" //absolute url so appears correctly on parent pages
    });
  
    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };
  
    return Image.generateHTML(metadata, imageAttributes);
  }

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/papers");
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');

    // CSS processing
    eleventyConfig.addTransform('postcss', require('./lib/postcss'));
    eleventyConfig.addWatchTarget('./src/scss/');

    //Image processing
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    
 
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