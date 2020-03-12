# mike.skott.us
The source code for the Jekyll website at mike.skott.us

I've been SSHing into the Rasberry Pi 4B I'm serving this off of at `piserv-home` and the site is in `~/mike.skott.us/`.
- Run `jekyll build` and
- Then `sudo cp -rv _site/* /var/www/vhosts/mike.skott.us/` to push the changes live.

### 👉 Also remember:

- That old CHIP computer was pretty minimal, so the 🕰 was always getting out of date. The commands you are looking for are `date` and `sudo ntpdate -u time.nist.gov`, and you've already aliased the latter as `setclock`. 💥
- The SSL cert can sometimes get out of date. It should be running in `/etc/chron.daily/certbot`. If you need to run manually, just try `sudo certbot renew --dry-run` first and use the interactive tool. 😎
