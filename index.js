/*
* @Author: hwaphon
* @Date:   2018-05-31 11:29:00
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-05-31 12:12:55
*/

const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000);


