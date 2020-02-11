module.exports = {
    testEnvironment: 'node',
    reporters: [
        "default",
        "jest-junit",
        ["jest-html-reporters", {
            "publicPath": "./html-report",
            "filename": "report.html",
            "expand": true
        }]
    ]
};