# Black Lives Matter Banner

Script that creates a fullscreen banner for your website to support the #BlackLivesMatter movement.

This script is meant to be used in combination with [BLM Generator](https://github.com/draftedus/blm-generator)

### Use

If you simply want to use the default banner, you can embed this script anywhere on your site.

```html
<script src="//blmtech.s3.amazonaws.com/blm.min.js"><script>
```

This script will take over your homepage one time (uses cookies to hide) with the Black Lives Matter text. If you'd like to customize the colors or name of the company, you can visit [blacklivesmatter.tech](https://www.blacklivesmatter.tech/) to generate your own snippet with customized fields.


### Development

First, run `npm ci` to install the needed dependencies.

Take a look at the `examples/` folder to see how to use the script. You can build a development version of the script using `npm run build`.

If you want to run the examples, you can simply:
- Run `npm run build`
- If you have Python 2, serve the root with `python2 -m SimpleHTTPServer` and visit the example page at `http://localhost:8000/examples/default.html`
