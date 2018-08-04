const path = require('path');

module.exports = {
    entry: path.join(__dirname, "Web", "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "Web", "build"),
        filename: "bundle.js"
    },
    mode: "development"
};