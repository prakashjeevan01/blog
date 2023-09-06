const { request } = require('express');
var userModel = require('./blogModel');
const { model } = require('mongoose');
var key = '1234abcd';
var encryptor = require('simple-encryptor')(key);

exports.createblogDBservice = (blogdetails) => {
    return new Promise((resolve, reject) => {
        var blogModelData = new blogModel();
        blogModelData.firstname = blogdetails.firstname;
        blogModelData.lastname = blogdetails.lastname;
        blogModelData.email = blogdetails.email;
        blogModelData.password = blogdetails.password;
        var encrypted = encryptor.encrypt(blogdetails.password);
        blogModelData.password = encrypted;

        blogModelData.save(function (error, result) {
            if (error) {
                reject("false");
            } else {
                resolve(true);
            }
        });
    })
}