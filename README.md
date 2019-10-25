# mike.skott.us
The source code for the Jekyll website at mike.skott.us

I've been SSHing into the [CHIP computer](https://getchip.com/) I'm serving this off of at `chip-home` and the site is in `~/mike.skott.us/`.
- Run `jekyll build` and
- Then `sudo cp -rv _site/* /var/www/html/` to push the changes live.

### 👉 Also remember:

That CHIP computer is pretty minimal, so the 🕰 is always getting out of date. The command you are looking for is `sudo ntpdate -u time.nist.gov`, and you've already aliased it as `setclock`. 💥
