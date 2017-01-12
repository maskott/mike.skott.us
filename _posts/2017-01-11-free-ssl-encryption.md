---
title:  "Free SSL Encryption"
date:   2017-01-11 22:57:33
categories: [tech]
tags: [web]
---

I've been working on web sites for almost 20 years now. *Dang I'm old.* Anyways, I come from a time when having an `https` in the front of your URL was an ~$80 per year prospect. You had to pay that Certificate Authority to sign your digital document stating you really are who your domain says you are.

You didn't just secure any old site; you reserved <abbr title="Secure Socket Layer">SSL</abbr> for site that had a good reason, like a payment form. The benefits to serving via HTTPS have always been apparent, but when you build a lot of sites the costs add up. <abbr title="Secure Socket Layer">SSL</abbr> on a domain that didn't have an express reason was a frivolous prospect.

Enter the age of the free and open Certificate Authority! Some good people turned me on to [Let's Encrypt](https://letsencrypt.org/):

> Let’s Encrypt is a free, automated, and open certificate authority brought to you by the non-profit Internet Security Research Group (ISRG).

The only downside seems to be that these certificates expire every 90 days. However, I was able to set up [Certbot](https://certbot.eff.org/), an open source client that requests and serves the free signed certificates available from Let's Encrypt. Now the 90 day expiration should be a benefit as the certificate will be proven more frequently.

It's really nice to see something so core and universal to a good experience on the web be taken on by the open source community and made free and easy to use for anyone willing to learn the tools. Needless to say, all of my URLs will be auto-redirecting to their secure versions henceforward.
