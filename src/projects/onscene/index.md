---
title: "OnScene"
subtitle: "Tool for using Phones in Theatre Productions"
date: "2024-06-21"
coverImage: "voting.jpg"
---

As part of my work on [PlayOn](/projects/play-on/) I've spent a lot of time supporting theatre partners engage with different technologies as they explored the storytelling opportunities. Quite a common one was using devices in the audience, such as phones, to give interactivity, or as an aide to storytelling. For example [Áruló](/projects/áruló/) has moments where audience members vote on decisions that characters should make in the show, and also has mini games where audience members switch on and off CCTV. It is really cool to see the storytelling potential of this.

As PlayOn developed we used a bunch of technologies in shows: 

- [Silent Disco](https://en.wikipedia.org/wiki/Silent_disco) systems as used in [The Future](https://play-on.eu/dortmund-immersive/) (Theatre Dortmund), are perfect if you want to broadcast different audio to different groups of audience members but don't offer much interactivity.
- [TouchDesigner](https://derivative.ca/) (commercial) was used in [Nómadas](https://play-on.eu/immersive-obando/) (Teatro O Bando), and is great for broadcasting complex visuals already familiar to creative technologists working in theatre.
- [ReactionLink](https://www.reactionlink.de/) (commercial) was used in PlayOn productions [Persona](http://play-on.eu/gaming-dortmund/) (Opera Dortmund) and [1984: Ministry of Live](https://play-on.eu/ludowy-immersive/) (Ludowy). It is great for audience votes and live feedback, but can't show complex visualisations.
- [adaptor eX](https://docs.adaptorex.org/) (open source) is an excellent system for controlling game-like theatre experiences, especially those with intricate paths and logic (e.g. escape room type experiences)

These are all great solutions for their purposes, but it was a common wish from theatres to combine different aspects of the technology in different ways. I started making simple demos that attempted to bring things together for different partners, and as part of this process, "the App", OnScene, emerged. Because OnScene was developed to suit the varying needs of lots of partners across very different shows, it ended up as a useful framework for building this kind of project, that is directly informed by how theatremakers work. It is as flexible and reworkable as possible, and we wanted to share this as a contribution from PlayOn:

# OnScene

OnScene is a free, libre, and open source plugin for [Flutter](https://flutter.dev/) to build theatre applications for Android, iOS and the web. The aim of OnScene is to provide a flexible framework for building applications for interactive theatre experiences where audience members use devices as part of the show. For example, a show where audience members use mobile phones to interact with the characters, make decisions, play mini games, see video or receive audio. OnScene allows this to be broadcast, so every audience member has simultaneous experience or individual, where audience members engage individually, or for sub-groups of audience members, or as a combination of all three.

These applications can either be pre-installed on theatre-controlled devices, or uploaded to app stores for audience members to download to their own device. It can also be used on tablets/iPads or anything with a modern web browser. 

OnScene is also proven through PlayOn - it has been used by several productions and by thousands of audience members.

<img src="images/voting.jpg" alt="Photograph of an audience member using an app powered by OnScene to vote during Futebol (O Bando)" width="800">

The plugin has a fairly simple structure, split between Scenes and Triggers, where Scenes are things audience members do, and Triggers are the range of things that require moving between scenes. The definition is purposefully loose to give the maximum flexibilty when defining what exactly a Trigger or a Scene is based on the requirements of the show.

Out of the box OnScene provides Triggers based on time, GPS location, proximity to iBeacons, motion sensors, remote data on the web, MQTT messages, or cloud databases. The trigger interface is very easy to extend for custom triggers. For example in an upcoming project we are using Raspberry Pis with pressure sensors to trigger events for individual audience members. In another upcoming show the actors use custom versions of the app to trigger scene changes for groups of audience members at a time.

Triggers for OSC and DMX are coming soon, that will tie OnScene applications into theatre lighting control systems.

<img src="images/Arulo_proba-29-of-84_kicsi.jpg" alt="Photograph of an audience member using an app powered by OnScene to play a minigame during Áruló (Kolibri)" width="800">

The Scenes in OnScene are simply containers for Flutter widgets, so you have the full flexibility of Flutter within your project. Individual scenes can be anything - live streamed video, segments of audio walks, minigames, surveys, whatever you can build in Flutter. OnScene takes care of managing the show state and making sure the right members of the audience are seeing the right thing at the right time.

Although OnScene is powerful and flexible, you do need a Flutter developer to build the scenes and hook up the OnScene triggers based on the design of the show. The modular design means Triggers and Scenes can easily be moved and modified as the show develops. This is designed to support developers work with theatremaking practice, where the requirements and structures can change rapidly based on the creative direction. It also tries to minimise the "drag" of technology on creative teams and give flexibility to experiment and change quickly.

If you have any questions about OnScene or any of the other technologies used in PlayOn, you can contact me by email - ben@kirman.org 

<img src="images/EUfundingLogo-320x50.png" alt="Co-funded by the Creative Europe Programme of the European Union" width="320">