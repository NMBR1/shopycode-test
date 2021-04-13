const Instagram = require('instagram-web-api');
const { username, password } = process.env;

const client = new Instagram({ username: 'shopycode_agency' , password: 'Fudbaleri89!!'});

// const feed = await client.getHome('IGQVJVekxFVmZAOVUpIamhLRjIzcnc0TWJGeWlHNnV5MVFQTlhqR3ZADQndYMFJlcFplWjVnd3dvek4zc0JOZAElPZAmRhNmJFbk9VMEg0QWpRNndZAWmk4WEdycE5ac1MxQ3ZAtemtHUGd2aWllN3Itc1pFejhrTGdKeGFaV2pr');

(async () => {
    await client.login()
    const profile = await client.getProfile()
    const feed = await client.getHome();
    const photo = 'https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg';
    //const { media } = await client.uploadPhoto({ photo: photo, caption: 'Development', post: 'feed' })
    const photos = await client.getPhotosByUsername({ username: 'shopycode_agency' });
    //console.log(`https://www.instagram.com/p/${media.code}/`);


    console.log(profile);
    console.log(feed);
    const slike = photos.user.edge_owner_to_timeline_media;
    console.log(slike.edges[0].node.thumbnail_resources);

 



  })()