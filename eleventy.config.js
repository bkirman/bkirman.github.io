import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
//import Image from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/papers");
    eleventyConfig.addPassthroughCopy("./src/stuff");
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');
    //eleventyConfig.addPassthroughCopy("**/*.mp4");


    //Image processing
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        returntype: "html",
		// output image formats
		formats: ["jpeg"],

		// output image widths
		widths: ["auto"],
        
        // optional, apply additional sharp transformations to all images
        transform: (sharp) => {
            //console.log(sharp.options.width);
            //sharp.greyscale(true);
        },

		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			},
			pictureAttributes: {}
		},
	});
 /*
    eleventyConfig.addShortcode("image", async function (src, alt, widths = [300], sizes = "") {
        console.log(src);
		return Image(src, {
			widths,
			formats: ["jpeg"],
			returnType: "html",    // new in v6.0
			htmlOptions: {         // new in v6.0
				imgAttributes: {
					alt,               // required, though "" works fine
					sizes,             // required with more than one width, optional if single width output
					loading: "lazy",   // optional
					decoding: "async", // optional
				}
			}
		});
	});*/

    
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
    templateFormats: ['njk','md']
};



