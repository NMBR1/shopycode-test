const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')

const app = express()
const port = process.env.PORT || 5000

const clientID = '446975523244761';
const instagramAppSecret = 'a2931c610cc0b8bc65fcfcc97b1189ad';
const redirecUrl = 'https://shopycode-test.herokuapp.com/';

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
