const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const axios = require('axios');
const fileStream = require('fileStream');


const app = express()
const port = process.env.PORT || 5000

const clientID = '446975523244761'
const instagramAppSecret = 'a2931c610cc0b8bc65fcfcc97b1189ad'
const redirectUrl = 'https://shopycode-test.herokuapp.com/'
const code =  'AQAs9AA58wrzT4GqQojV4eDF6hGhpyPPGs-gFxxaMEOV2ylWb7AaxkyEzvbsaJsaFbikdp9Q7F_39_balUOi3Yrdn3uVz3lzdLwnVDW-Hj7y6r_LFGeeLM-YFyz9vkFUlu32CkFrJ70ZewVDKqkudYqe4ZFzNhGCqo9kUr9fB_tG69AYf9JmUpBI-Gg4AEpsy2GP4meLxcSX-utyysidP79IlB5aOG2y1Jy6rQavbx7FEQ';
const longLivedToken = 'IGQVJYMVRGWGRFSklGMXhaOF9KTks3WUZANbDBTM2JFVHl1UjNucXBWbzVMNUNhRlg1ZAU16dlVvMUNmOTBkdVJ2amZA5OW1iZAjBJMGVKMjlsZAWR2aVRlNTZAPWEotcjczRjZAGYURO';
const userID = '17841447048230459';

async function gettingData() {
    let res = await axios.get('https://graph.instagram.com/me?fields=id,username&access_token=IGQVJYMVRGWGRFSklGMXhaOF9KTks3WUZANbDBTM2JFVHl1UjNucXBWbzVMNUNhRlg1ZAU16dlVvMUNmOTBkdVJ2amZA5OW1iZAjBJMGVKMjlsZAWR2aVRlNTZAPWEotcjczRjZAGYUROdFln');
    console.log(res);
    console.log("----------------------------------------------------------------------------------------------------------------------------------");
}


// Set Templating Enginge
app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Navigation
app.get('', (req, res)=> {
    res.render('index')
})

app.get('/register', (req, res)=> {
    res.render('register')
})

app.post('/register', urlencodedParser, [
    check('username', 'This username must me 3+ characters long')
        .exists()
        .isLength({ min: 3 }),
    check('email', 'Email is not valid')
        .isEmail()
        .normalizeEmail()

], (req, res)=> {

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(422).jsonp(errors.array())
        const alert = errors.array()
        res.render('register', {
            alert
        })
    }


})


app.listen(port, () => console.info(`App listening on port: ${port}`))

const Instagram = require('instagram-web-api');
const { username, password } = process.env;

const client = new Instagram({ username: 'shopycode_agency' , password: 'Fudbaleri89!!'});

client
    .login()
        .then(() => {
            client
              .getProfile()
                  .then(() => {
                      console.log(client)
             })
        });

gettingData();