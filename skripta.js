const axios = require('axios');
const fileSystem = require('fs');


const clientID = '446975523244761';
const instagramAppSecret = 'a2931c610cc0b8bc65fcfcc97b1189ad';
const redirecUrl = 'https://shopycode-test.herokuapp.com/';
const code = 'AQAx8re4KPQEOjXjFglhtbgvqbAzc08P8RFEuIoq2UbOOemcNEhZcWf7LF6VrXpi6ErvRBKLKotFAUzKO-KtpjqRZP-48LyxtKTk8sXZf_FDqINgrJFsEMaYSbSfTCYide39PrPc_e_XcQAXWJsJvBDNH7xK84y3zBsumLzvEiofUZezLmNTShM-v1KhVJX1tPFQNPbpuaIDGfuHUZk18TOG05kR9IlScONX5bpKHYcJyg#_';


const res = await axios.post('https://api.instagram.com/oauth/access_token', { 
    client_id=`${cliendID}`,
    client_secret=`${instagramAppSecret}`,
    grant_type=authorization_code,
    redirect_uri=`${redirecUrl}`,
    code=`${code}`
});

axios.post('https://api.instagram.com/oauth/access_token', { 
    client_id=`${cliendID}`,
    client_secret=`${instagramAppSecret}`,
    grant_type=authorization_code,
    redirect_uri=`${redirecUrl}`,
    code=`${code}`
}).then(response => {
    fileSystem.writeFile('response.json', response.data, function (err) {
        console.log(err); 
    })
}).catch(err => {
    console.log(err);
});