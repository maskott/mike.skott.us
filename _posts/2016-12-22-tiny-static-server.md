---
title:  "Tiny Static Server"
date:   2016-12-22 01:27:43
categories: [tech]
tags: [jekyll, IoT, web]
---
Tonight I stayed up way too late with a project I've been wanting to do since almost nine months ago when I first stumbled upon [Jekyll](http://jekyllrb.com/). I created this statically generated blog on a $9 [CHIP](https://getchip.com/pages/chip), an embedded linux computer, which is currently sitting on my <s>kitchen counter</s> filing cabinet. I had been looking for a new hosting solution for a while, and now I think I'm ready to trade my old low cost VPS hosting for a free solution using microhardware of my own design and control.

Basically, I yanked the CHIP I had been playing with out of my [PocketCHIP](https://getchip.com/pages/pocketchip) and flashed it with a fresh install of a headless Debian OS. I connected via serial USB connection at first to install and configure SSH, and get the computer onto my wifi. Once connected via SSH, I installed nginx, vim, rubygems, bundler, jekyll, and used [this nifty theme](https://github.com/joshgerdes/jekyll-uno) for a quick start.

Now this latest of blogs is live to the world. It is served off of minimalist hardware at almost no cost using a technology I have become increasingly fascinated with. Super-geeky? Yes. Woo-hoo!
