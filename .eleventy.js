module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/papers");
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');
 
    return { 
        dir: {
            input: "./src",
            output: "./docs"
        },
        passthroughFileCopy: true,
        templateFormats: ['njk','md'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
    }
}; 