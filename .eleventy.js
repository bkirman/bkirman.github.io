module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/papers");
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');

    // CSS processing
    eleventyConfig.addTransform('postcss', require('./lib/postcss'));
    eleventyConfig.addWatchTarget('./src/scss/');
 
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