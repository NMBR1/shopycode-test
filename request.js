const axios = require('axios');
const { TIMEOUT } = require('dns');
const fs = require('fs');

const URL = 'https://graph.instagram.com/';
const ACCESSTOKEN = 'IGQVJYMVRGWGRFSklGMXhaOF9KTks3WUZANbDBTM2JFVHl1UjNucXBWbzVMNUNhRlg1ZAU16dlVvMUNmOTBkdVJ2amZA5OW1iZAjBJMGVKMjlsZAWR2aVRlNTZAPWEotcjczRjZAGYUROdFln';


async function gettingData() {
    let res = await axios.get(`${URL}me?fields=id,username&access_token=${ACCESSTOKEN}`);

    var object = { id: res.data.id, username: res.data.username };
    let data = JSON.stringify(object, null, 2);
    fs.writeFile('firstRequest.json', data , function(err) {
        if (err) throw err;
        console.log('Proslo');
    })
}


async function gettingMedia() {
    let res = await axios.get(`${URL}me/media?fields=id,caption&access_token=${ACCESSTOKEN}`);
    const data = fs.readFileSync('media.json', 'utf8');
    const file = JSON.parse(data);
            res.data.data.forEach(el => {
                console.log(file['media']);
                file.media.push(el);
            });
            const json = JSON.stringify(file);

            fs.writeFile('media.json', json, 'utf8', function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("sve je okej!!!");
                }
            })        
}

async function getSinglePost(id, dataFile) {
    let res = await axios.get(`${URL}${id}?fields=caption,media_url,username,permalink&access_token=${ACCESSTOKEN}`);
    dataFile.images.push(res.data);
    return dataFile;
}

async function prepareJSON() {
    const data2 = fs.readFileSync('pictures.json', 'utf8');
    const file2 = JSON.parse(data2);

    const data = fs.readFileSync('media.json', 'utf8');
    const file = JSON.parse(data);

    file.media.forEach((el) => {

    })
}

async function data(id) {
    let res = await axios.get(`%{URL}${el.id}?fields=caption,media_url,username,permalink&access_token=${ACCESSTOKEN}`);
    return res;
}



async function gettingPicture() {
    setTimeout(() => {

        console.log("JEL SE IZVRSAVAM");
        const data = fs.readFileSync('media.json', 'utf8');
        const file = JSON.parse(data);
    
        const data2 = fs.readFileSync('pictures.json', 'utf8');
        const file2 = JSON.parse(data2);
    
           file.media.forEach( async (el) => {
                let res = await axios.get(`${URL}${el.id}?fields=caption,media_url,username,permalink&access_token=${ACCESSTOKEN}`);
                // let img = {
                //     "caption": `${res.data.caption}`,
                //     // 'media_url': `${res.data.media_url}`,
                //     // 'username': `${res.data.username}`,
                //     // 'permalink': `${res.data.permalink}`,
                //     // 'id': `${res.data.id}`
                // }
                // //var prepare = JSON.stringify(img);
                file2.images.push(res.data);
                const json = JSON.stringify(file2);
    
                fs.writeFile('pictures.json', json, 'utf8', function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("sve je okej!!!");
                    }
                })
            });
    },1000);
        
        //  fs.writeFile('pictures.json', json, 'utf8', function(err) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("sve je okej!!!");
        //     }
        // })     


    }
    gettingMedia().then(() => {
        console.log("FUNKCIJA KOJA SE IZVRSAVA NAKON STO VRATIM MEDIA ID-JEVE");
        gettingPicture();
    });

    //gettingPicture();