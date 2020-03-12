---
title:  "Big Time Web Server Update ⤴️"
date: 2020-03-10 21:52:12
categories: [tech]
tags: [linux, web, IoT, jekyll, ruby]
---

I decided to update my aforementioned [tiny web server]({% post_url 2016-12-22-tiny-static-server %}) and ended up spending much more time than I had anticipated getting everything the way I wanted. Not that the CHIP didn’t do a great job, but some of the software was aging and I felt I was going to redo everything soon, so it seemed like a good time to update the hardware as well. I wanted something with a dedicated ethernet connection as the tiny server sits next to my router already. The old server used WiFi and I never liked that. I’d rather have everything possible use ethernet and keep the radio traffic to what _needs_ it. I happened to have a Raspberry Pi 4 B sitting unused that seemed too perfect not to use.

So first off, I used [balenaEtcher](https://www.balena.io/etcher/) to flash the latest [Raspbian Buster Lite](https://www.raspberrypi.org/downloads/raspbian/) onto a MicroSD card. I chose `piserv` as the hostname because it’s a Raspberry _Pi_ and a web _serv_ er… get it? And of course I changed the default password; You’ve just gotta! I used `apt-get` to install git, nginx, ddclient & [rvm]({% post_url 2017-01-02-rvm-is-awesome %}) and used rvm to install ruby. I cloned the repo that contains the source of **_this very site_** and then used bundler to install jekyll. I ended up updating both ruby and jekyll, then got nginx configured to serve from virtual hosts instead of a single site. I installed CertBot and got everything working with Let’s Encrypt for [free SSL support]({% post_url 2017-01-11-free-ssl-encryption %}) (becasue its _all about the_ 🔒).

I made a new DHCP reservation for the Pi’s Ethernet MAC address so it would always get the same internal IP address. And I swapped over the port forwarding I ran from the old CHIP to the new piserv. I did a bit of research about my Google Domains setup and changed to having a single subdomain (home.skott.us) use DDNS via ddclient which I configured and tested on piserv. Then I created a new CNAME record for each subdomain I want to serve. I separated the config files for nginx so each domain or subdomain is neatly configured with it’s own file.

So what do I hope this time-suck has accomplished?
- I’m hoping the hardwired connection will cut down on unnecessary wifi noise, especially directly next to a router/AP. 📶
- The Pi is newer and relatively more powerful, so hopefully nginx will stop randomly needing to be restarted. ✨
- I can use the CHIP with my PocketCHIP and other CHIP hats again. 🎩
- Enough power and space to serve a few small projects instead of only one. 💪
- A more standard variant baseline OS so every little thing I want to try is slightly less painful. 💽
- I have revived the old [stella.skott.us](https://stella.skott.us) site and now Bella is incredibly jealous! 🐾

