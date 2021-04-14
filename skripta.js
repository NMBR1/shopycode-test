const axios = require('axios');
const fileSystem = require('fs');
const querystring = require('querystring');

// (async () => {
// const res = await curly.post('https://shopycode-test.herokuapp.com/', {
//   postFields: querystring.stringify({
//     client_id: `${clientID}`,
//     client_secret: `${instagramAppSecret}`,
//     grant_type: 'authorization_code',
//     redirect_uri :`${redirecUrl}`,
//     code: `${code}`
//   }),
  
// }
// )

// console.log(res);
// });
    

    


const clientID = '446975523244761';
const instagramAppSecret = 'a2931c610cc0b8bc65fcfcc97b1189ad';
const redirecUrl = 'https://shopycode-test.herokuapp.com/';
const code = 'AQAs9AA58wrzT4GqQojV4eDF6hGhpyPPGs-gFxxaMEOV2ylWb7AaxkyEzvbsaJsaFbikdp9Q7F_39_balUOi3Yrdn3uVz3lzdLwnVDW-Hj7y6r_LFGeeLM-YFyz9vkFUlu32CkFrJ70ZewVDKqkudYqe4ZFzNhGCqo9kUr9fB_tG69AYf9JmUpBI-Gg4AEpsy2GP4meLxcSX-utyysidP79IlB5aOG2y1Jy6rQavbx7FEQ';


async function asyncCall() {
 var res = await axios.post('https://shopycode-test.herokuapp.com/',  {
        client_id:`${clientID}`,
        client_secret:`${instagramAppSecret}`,
        grant_type:"authorization_code",
        redirect_uri:`${redirecUrl}`,
        code:`${code}`
      }
    ).catch((err) => {
        console.log(err);
    });
    console.log(res);
}
asyncCall();
// const res = await axios.post('https://api.instagram.com/oauth/access_token', { 
    // client_id=`${cliendID}`,
    // client_secret=`${instagramAppSecret}`,
    // grant_type=authorization_code,
    // redirect_uri=`${redirecUrl}`,
    // code=`${code}`
// });

// axios.post('https://api.instagram.com/oauth/access_token', { 
//     client_id: `${clientID}`,
//     client_secret: `${instagramAppSecret}`,
//     grant_type: 'authorization_code',
//     redirect_uri :`${redirecUrl}`,
//     code: `${code}`
// }).then(response => {
//     fileSystem.writeFile('response.json', response.data, function (err) {
//         console.log(err); 
//     })
// }).catch(err => {
//     console.log(err);
// });