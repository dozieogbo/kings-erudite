const nunjucks = require('nunjucks');

module.exports = (app) => {
    let env = nunjucks.configure('views', {
        express: app,
        autoescape: true
    });

    env.addFilter('shorten', function(str, count) {
        return str.slice(0, count || 10) + '...';
    });

    //Make first letter capital
    env.addFilter('titleize', function(str) {
        if (str && str.length > 0) {
            return str[0].toUpperCase() + str.substring(1).toLowerCase();
        } else {
            return '';
        }
    });

    return nunjucks;
};