# Less annoying Twitch highlighted messages

I don't know what whoever designed the highlighted messages was thinking, but they look hideous, unfinished, annoying. Here's my CSS tweak to make them less so.

## Example (using light theme on Twitch)

![Example of a highlighted message on Twitch light theme](https://i.imgur.com/Sd4y87w.png)

## What do I need for this to run?

I've made this specifically for Brave (Chrome) with the extension [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld), but it's should work with other browsers and extensions that let you inject custom CSS.

## So what do I do?

This is what works with my browser and the extension I use, but the instructions should be similar for other browsers and extensions.

1. Install the extension.
2. Load, or reload, a page on the site you wish to add the script to (e.g. Twitch).
3. Click the extension's icon in the browser ![The extension's icon](https://lh3.googleusercontent.com/xU-hli3hspknNxkvLslV8NxEeWh6xd5_zEdUSEq2ZnZt9Z6VH-Ilv8muu7ceW_WxmsMr0Hjezw=w30-h30-e365), then the "Add new" button.
4. Copy the code below and paste it in the _right_ textarea field (marked "CSS").
5. Click the "Save" button, and load/reload a page on the site (Twitch).
6. Wait for highlighted messages.

## Anything else I need to know?

I use light theme on Twitch, so the colors used (background color and right border color) work well for me. You might want to, or need to, tweak the colors to make them work for you whichever theme you run on Twitch. The format of the background color on line 4 is in 8 digit hex, #RRGGBBAA, with AA being the hex code for the alpha channel (opacity). This too can be tweaked, or just use a 6 digit hex code if you want.

Line 12 makes the message use whichever color the theme works well, so a dark color for light theme and a bright color for the dark theme. You can, of course, change this to your liking.

## Got feedback?

I'm easy to find, Konc in most places. I'd love to hear from you!

### Last updated

October 24, 2019 at 6:20 pm CEST.
