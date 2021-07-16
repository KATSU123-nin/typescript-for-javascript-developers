"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
axios_1["default"].get(url).then(function (response) {
    var data;
    data = response.data;
    console.log(data);
});
