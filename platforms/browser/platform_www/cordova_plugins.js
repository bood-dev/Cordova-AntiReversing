cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-sslcertificatechecker/www/SSLCertificateChecker.js",
        "id": "cordova-plugin-sslcertificatechecker.SSLCertificateChecker",
        "pluginId": "cordova-plugin-sslcertificatechecker",
        "clobbers": [
            "window.plugins.sslCertificateChecker"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-iroot/www/iroot.js",
        "id": "cordova-plugin-iroot.IRoot",
        "pluginId": "cordova-plugin-iroot",
        "clobbers": [
            "IRoot"
        ]
    },
    {
        "file": "plugins/cordova-plugin-is-debug/www/isDebug.js",
        "id": "cordova-plugin-is-debug.IsDebug",
        "pluginId": "cordova-plugin-is-debug",
        "clobbers": [
            "cordova.plugins.IsDebug"
        ]
    },
    {
        "file": "plugins/cordova-plugin-antitampering/www/AntiTampering.js",
        "id": "cordova-plugin-antitampering.AntiTampering",
        "pluginId": "cordova-plugin-antitampering",
        "clobbers": [
            "cordova.plugins.AntiTampering"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-sslcertificatechecker": "6.0.0",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-iroot": "0.8.1",
    "cordova-plugin-is-debug": "1.0.0",
    "cordova-plugin-antitampering": "0.3.0"
}
// BOTTOM OF METADATA
});