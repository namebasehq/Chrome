# Namebase Handshake Extension (DEPRECATED)

**This extension is deprecated. Please use a resolver like [NextDNS.io](https://nextdns.io) to resolve Handshake names**

NHE addon for Chrome lets you browse Handshake domains:

-------

**Attention: Chrome requires `http://` prefix or a pathname**

If you type an address like `turbomaze` into the address bar and hit Enter - you will be taken to Google search page. You have to type `http://turbomaze` or add a slash at the end: `turbomaze/`.

-------

## Installing Debug Version

You can permanently load a debug (unsigned) extension into Chrome, i.e. it will survive restart.

**Disable existing NHE extension, if installed, before installing its debug version!**

1. Open Extensions tab: click on the button with 3 dots, open _More tools_ submenu, then click on _Extensions_ item.
2. In the tab that has just opened, tick the checkbox named _Developer mode_, then click on _Load unpacked extension_ button that should have appeared.
3. Select the extension's directory. The directory should contain all files from the extension folder in the [Handshake-Extension GitHub repository](https://github.com/NamebaseHQ/Handshake-Extension).
4. Once the open dialog is submitted, a new extension should appear in the Extensions tab. Click on _background page_ link (next to _Inspect views_) - this will open console window.
5. In a regular Chrome tab, navigate to a resource in question (e.g. `turbomaze/`) - you will notice the console window is populated with lines. Select them and copy to clipboard, or use the context menu's _Save as_ command to produce a log file. Then submit the log along with your [GitHub issue](https://github.com/NamebaseHQ/Handshake-Extension/issues/new).

## Installing Server

You can run a local server by running the server code and changing `apiBase` in `common.js` to `"http://localhost:3000/"`.

**Reload existing local NHE extension, if installed, after changing `apiBase`!**

1. Install yarn
2. `cd` in to the server directory and `yarn install`
3. Run `npm start`

## TODO

- [ ] Remove server requirement
- [ ] Support recursive DNS aka subdomains
