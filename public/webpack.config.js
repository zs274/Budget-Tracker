const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: "./server.js",
    ouput: {
        path: __dirname + "/public",
        filename: "index.js"
    },
    mode: "development", 
    plugins: [
        new WebpackPwaManifest({
            name: "Budget Tracker", 
            short_name: "Budget Tracker",
            description: "an app for tracking spending",
            start_url: "/",
            icons: [
                {
                    src: path.resolve("public/icons/icon-192x192.png"),
                    sizes: [192, 512],
                    destination: path.join("public", "icons")
                }
            ]
        })
    ]   
};

module.exports = config;