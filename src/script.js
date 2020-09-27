/*
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const fetch = require('node-fetch');
const FormData = require('form-data');
const data = new FormData();

const axios = require("axios")
const process = require("process")
app.use(bodyParser.text());


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.post('/', function (req, res) {
    console.log(req.body)
    data.append('client_id', "");
    data.append('client_secret', "");
    data.append('grant_type', 'authorization_code');
    data.append('redirect_uri', "https://nexuzdev.glitch.me");
    data.append('scope', 'identify');
    data.append('code', req.body);

    fetch('https://discordapp.com/api/oauth2/token', {
        method: 'POST',
        body: data,
    })
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            const config = {
                headers:{
                    "authorization":`Bearer ${data.access_token}`
                }
            }
            axios
                .get("https://discordapp.com/api/users/@me",config)
                .then(response=>{
                    console.log(response.data.username)
                    res.send(response.data.username)
                })
                .catch(error=>{
                    console.log(error)
                })
        })
})
app.listen(3000) */
