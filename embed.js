(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt-sharks/",
    "verprefix": "",
    "workerjs": "/pxt-sharks/worker.js",
    "monacoworkerjs": "/pxt-sharks/monacoworker.js",
    "pxtVersion": "4.6.2",
    "pxtRelId": "",
    "pxtCdnUrl": "/pxt-sharks/",
    "commitCdnUrl": "/pxt-sharks/",
    "blobCdnUrl": "/pxt-sharks/",
    "cdnUrl": "/pxt-sharks/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "microbit",
    "simUrl": "/pxt-sharks/simulator.html",
    "partsUrl": "/pxt-sharks/siminstructions.html",
    "runUrl": "/pxt-sharks/run.html",
    "docsUrl": "/pxt-sharks/docs.html",
    "isStatic": true
};

    var scripts = [
        "/pxt-sharks/highlight.js/highlight.pack.js",
        "/pxt-sharks/bluebird.min.js",
        "/pxt-sharks/semantic.js",
        "/pxt-sharks/marked/marked.min.js",
        "/pxt-sharks/target.js",
        "/pxt-sharks/pxtembed.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt-sharks/jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
