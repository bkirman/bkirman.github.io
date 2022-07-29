# Source for bkirman.github.io (https://ben.kirman.org)

Not much of interest in the source. 

Uses [11ty](11ty.dev), hosted on [Github Pages](https://pages.github.com/). Might be of some interest if you are trying to do similar. I followed [this guide from Tom Hiskey](https://tomhiskey.co.uk/blog/deploying-eleventy-to-github-pages-one-way/).

It also uses [eleventy-image](https://www.11ty.dev/docs/plugins/image/) to automatically resize and write images for posts and thumbnails. This might be specifically interesting for anyone trying to maintain directory structure on output. By default the plugin writes all images in the site into the same folder. I modified this behaviour to export images relative to the import file structure (src/project/images go in docs/project/images). See .eleventy.js.

The content of the site was transferred to Markdown from Wordpress [using this tool](https://github.com/lonekorean/wordpress-export-to-markdown).

## Licences
This site includes papers and images that are used with the direct permission of the copyright holder - This is a personal academic site and papers authored by me are shared based on the licensing exemption for this use. Check the copyright statement on each paper for more specific information. Where copyright is held by authors (i.e. me), I am happy for you to share, download, re-upload, mirror, use in battle rap, etc.

### Typefaces: 
* [Gruppo](https://fonts.google.com/specimen/Gruppo) by Vernon Adams (OFL)

The background texture was generated using this tool, which is nice: https://simple-repeat.com
