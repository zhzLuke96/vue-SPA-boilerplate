const mock = {};
const {
    resolve
} = require('path')
const mockerPth = resolve(__dirname, '../mocker')

require('fs').readdirSync(mockerPth).forEach(function (file) {
    if (file.split(".").reverse()[0] == "js") {
        Object.assign(mock, require(resolve(mockerPth , file)))
    }
});
module.exports = mock;