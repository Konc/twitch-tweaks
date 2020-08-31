# Twitch raid referrer remover

The idea was hatched to support primarily streamers on Twitch during partner pushes. The raid feature on Twitch adds a string to the URL so the raiding viewers don't count as organic viewers, and this script will automatically remove the string.

## What do I need for this to run?

I've made this specifically for the Chrome with the extension [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld), but it should work with other browsers and similar extensions.

## So what do I do?

1. Install the extension.
2. Load, or reload, a page on the site you wish to add the script to (e.g. Twitch).
3. Click the extension's icon in the browser ![The extension's icon](https://lh3.googleusercontent.com/xU-hli3hspknNxkvLslV8NxEeWh6xd5_zEdUSEq2ZnZt9Z6VH-Ilv8muu7ceW_WxmsMr0Hjezw=w30-h30-e365), then the "Add new" button.
4. Copy the script below and paste it in the _left_ textarea field (marked "JS").
5. Click the "Save" button, and load/reload a page on the site (Twitch).

## Anything else I need to know?

The script checks once every 30 seconds (= `30000` milliseconds on line 3) if the URL contains `?referrer=raid`, if there's a match, the script will reload the page without that part of the URL. I've not had any performance issues with the 30 second check, feel free to experiment if you want more or less frequent checking.

## Got feedback?

I'm easy to find, Konc in most places. I'd love to hear from you!

### Last updated

December 8, 2018 at 11:54 am CET.
