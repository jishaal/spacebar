---
title: Getting started with Gulp
layout: post
---

I finally did it - I created a personal website. No idea why it took such long time, but it happened, and it feels great.

## Humble beginnings
In this day and age, it is quite important to have some sort of online presence. Whether it be in the form of a social networking service such as [Twitter](http://twitter.com/) to something more niche like a [Github](http://github.com) profile if you're a coder like me. Getting yourself out there and contributing to the vast community that is the Internet can be beneficial and rewarding. This idea has driven the creation of this site and blog, Spacebar - a place where I can voice current thoughts on web development as well as showcase bits and pieces from personal projects. 

I'd like to keep somewhat regular with these posts, however this will only happen if there is enough material for an article - the old quality over quantity cliché. This is **not** another medium for Twitterish thoughts. 

## Static Sites & Jekyll
Spacebar is a static site. This means there is no database or backend running to store and manage content a la a WordPress blog. Crazy right? The tool that's powers this is [Jekyll](http://jekyllrb.com/) - a Ruby based static site generator that is catered towards small sites. The following is what the Jekyll website defines itself as:

>Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through Markdown (or Textile) and Liquid converters, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server.

In essence, it takes a collection of template files written in a mixture of HTML and the [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) templating language, renders them into static/flat HTML files with the end result being a working website. Jekyll is touted as being *blog aware*, which means it has functionality to create a site that supports a collection of items. This could be something like a website posting the latest technology news or a personal landing page displaying a design portfolio. 

It is has to be noted that Jekyll is not for your everyday wannabe blogger. It requires the user to have moderate understanding of coding and be comfortable with the command line. It is aimed at developers and for those who would like to [blog like a hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html) so to speak. For me, Jekyll is perfect. There fact that there is no CMS or database serving up content results in a blazingly fast and responsive experience. Initially, I contemplated using [WordPress](https://wordpress.org/) or maybe even [SilverStripe](http://www.silverstripe.com/) (a PHP based CMS and framework I use at work). However both these systems were way too overpowered for my needs and I wanted to learn something new. A bit more research resulted in the discovery of [Ghost](https://ghost.org/) - a Node.js based publishing platform that got funded on Kickstarter last year (2013). This looked awesome and I spent a fews days tinkering with it, even coding up a basic theme to learn how it worked. At that time, I found it lacked a few keys things I was after, bringing me to the conclusion that Ghost was not mature enough as a platform just as yet. A feature I was solely after was the ability to have static pages instead of a list of posts as the homepage. This functionality was later patched in with [version 0.4.2](http://dev.ghost.org/new-for-themes-0-4-2/) (released towards the end of Spacebar's development) allowing custom page templates. With the steady development Ghost has been experiencing over the past few months and the addition of new features, it is definitely something I would consider looking at using in the future. 

So after all that it was back to the drawing board. A month break and few more weeks of on and off research later, I found Jekyll. I decided against using an already existing framework such as [Octopress](https://github.com/imathis/octopress) as the opportunity to create a blog from scratch was too enticing and I wanted to be in control of how the site was scaffolded. This gives me the ability to have an installation that is fully catered to my needs without added bloat. So far it has been a pleasure to work with due to it's flexible nature. I recommend it to anyone who wants to get geeky and create their own small site.

![Spacebar's Jekyll folder structure][folder]



[folder]: /images/posts/spacebar-folder-structure.png "Spacebar's Jekyll folder structure"