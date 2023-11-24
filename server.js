const express = require('express'),
dbOperation = require('./BackEnd/dbOperation'),
cors = require('cors');

dbOperation.getDoadores().then(res => {
    console.log(res);
});