---
title: "Radio Explorer for Home Assistant"
date: "2025-12-10"
coverImage: "radios.png"
subtitle: "Automations to discover weird radio stations from around the world"
---

<img src="images/radios.png" alt="A photograph of a pile of old radios" width="800">

A WIP set of automations and commands for adding a bit of delight to radio functions in the open source [Home Assistant](https://www.home-assistant.io/) smart home system.

I like services such as [radio.garden](https://radio.garden) that help explore the world and discover audio from around the globe. It is a fun way to listen to radio - choose a country or region, and discover what they are listening to. Never listen to the same radio station twice, find some truly awful talk radio, etc.

Home Assistant has an integration for [Radio Browser](https://radio-browser.info) that lets you tune into thousands of different radio stations, but it lacks that missing piece of randomness. I spent some time massaging the API and Home Assistant Voice triggers to give a few fun commands. This is a starting point but works well already:

# Usage
In the default setup you can use the following voice commands:

## "Play random radio"
Finds and plays a random radio station from anywhere in the world. This can be anything, and is always surprising. The only downside is that the API caches your request, so if you ask for this a second time, without waiting very long, it will return the same station.

## "Play music from [country]"
As it sounds, but make sure to word the country like "Italy" and not "Italian", because the API only knows plain country names. However, many stations use the adjective country name in tags, so it can get picked up by the next request:

## "Play [genre] music" 
Again as it sounds, but it searches partial tags, so you can say "Play Psytrance Music" for example. Because it uses tags you can be creative here, because tags in Radio Browser can be weird. For example there is a single tag "gothy gloomy synthy dancey stuff" (for which this search would match any part of the tag). See the [huge list of tags](https://de2.api.radio-browser.info/json/tags). As mentioned above, you can say "Play Korean music" to hear stations [tagged with "korean"](https://de2.api.radio-browser.info/json/stations/search?tag=korean&hidebroken=true), which usually gives good results (but technically does not limit to, or include all, stations in Korea, just the stations using that tag).

## "Play [genre] music from [country]"
This is a combination of both above. This is handy if you want to hear less generic pop music, by asking for "Play traditional music from Colombia", or "Play metal music from Finland".

[The files, and installation instructions are on Github](https://github.com/bkirman/Home-Assistant-Radio-Explorer).

Photgraph by [Andrea De Santis](https://unsplash.com/photos/a-large-amount-of-old-radios-stacked-on-top-of-each-other-i2BcaGXomv0).


