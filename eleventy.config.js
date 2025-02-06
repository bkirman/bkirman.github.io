import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/papers");
    eleventyConfig.addPassthroughCopy("./src/stuff");
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');
    //eleventyConfig.addPassthroughCopy("**/*.mp4");


    //Image processing
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// output image formats
		formats: ["jpeg"],

		// output image widths
		widths: ["auto"],

		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			},
			pictureAttributes: {}
		},
	});
    

    
    //Filters
    eleventyConfig.addFilter("getYear", function(value) {
      return new Date(value).getFullYear(); 
    });
};

export const config = {
    //Directories
    dir: {
        input: "./src",
        includes: "_includes",
        layouts: "_layouts",
        output: "./docs"
    },

    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['html','njk','md']
};



