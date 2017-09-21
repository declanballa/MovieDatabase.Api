module.exports = function() {
    var src = "src/";

    var config = {
        sass: src + "assets/css/main.scss",
        sassWatch: src + "assets/css/**.scss",
        temp: src + "assets/css/temp/"
    }

    return config;
};