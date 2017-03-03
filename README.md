# SEED3000

Start simple™

Super simple starter kit for web stuff ✨


Note: This is my personal "getting started" package for things I build on the web. Covers basically what you need to get something going– an experiment, prototype, a single page site, or the beginnings of something grand. I hope you find this useful! Enjoy.

## Features
- Basic setup to get you started!
- No frills
- Runs on gulp (npm is too npm for my taste)
- Compiles stylus, twig
- Compresses images
- Clean and easy media queries via Rupture
- Autoprefix, because yolo
- ES6 support
- Live reload
- Module up with Webpack
- Cute log messages with emojis (lol)

More to follow

## Why?

There are a lot of these 'starter' setups to choose from but I found that most were just overcomplicated, over "engineered" setups that were too much to just get started with. I just needed something that had the basics, not mind so much about tooling and just get started actually creating something. I chose Gulp specifically because I personally feel that the whole 'piping' concept is easily understandable to setup for those beginning with build tools. NPM and grunt are great, but just not my flavour to start something simple.

The gulpfile.js is commented so if you're not so familiar with it, you can follow exactly what is going on.

Let me know if you've forked this, improved it in any way or have requests/suggestions. Peace it's Friday!

## Usage

A) Install yarn (https://yarnpkg.com/lang/en/) `npm install -g yarn`

1. Clone this repo

2. `cd` to wherever you cloned it then run `yarn` to install dependencies

3. Run `npm run dev` (there's a welcome message)

4. Start coding

5. When you're ready to deploy, just run `npm run prod`, this minifies/compresses/use all html/css/images

* Constantly a [WIP]

**Notes on images:
Put all image image assets in source/images. When using images in html/css while in dev just use `images/**/**.xxx` as the src. It will be automatically be changed to `sources/images/**/filename` (when in dev) or `assets/img/**/filename` (in prod). Forget about paths, Just... `images`.

## Say hi!
The is completely free but I'd love to know if you have found it useful or improved it in any way! Drop me a line at ezekielaquino@gmail.com or via @the_ezekiel on Twitter!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
