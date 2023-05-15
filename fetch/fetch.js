// const setImgSrc = (url) => {
//     let img = document.getElementById("image");
//     img.src = url;
// }

// fetch("https://dog.ceo/api/breeds/image/random")
// // ↑ returns a promise which gives a response as resolve
// .then((res) => res.json()) // ← returns the JSON from the response body
// .then((json) => json.message) // ← to extract the url in the message, actually, the value of the message key
// .then(setImgSrc) // ← send the url to the function. The function adds the url to the img source.
// .catch((err) => console.error(err))


//-------------Tech with Nader------------------

// What is it?
// A colection of function which is standard across the web.  
// Buildt-in web standard API for fetching resources - it is the same across many platforms and languages.
// Contains interfaces for Requests, Responses and their Heathers

// import fetch from "node-fetch";

const response = fetch("https://www.wallhaven.cc");
// // console.log(response);
// response
//     .then((result) => {
//         // console.log(result)
        // for(const key in result) {
        //     console.log(key)
        // }
        // console.log(result.__proto__)// we can see the prototype of the fetch api. The getters we can use
        // console.log(result.__proto__.__proto__); // ← We get the methods in the prototype one layer back than previously
        // console.log(result.url); // ← returns the value of that key in the response, same with the others ↓.
        // console.log(result.status);
        // console.log(result.ok);
        // console.log(result.headers);
        // const text = result.text(); // ← This function in the prototype returns a promise that gives the sourcepage as a plain text. To be able to extract it, we will need to use .then, either in side this one, or chained to this one, or with await ↓ ↓ ↓
        // text.then((html) => {
        //     console.log(html)
        // })
    //     return result.text();
    // })
    // .then((html) => {
    //     console.log(html);
    // });

// ↓ Same thing done with await
const fetchData = async () => {
    const result = await fetch("https://www.wallhaven.cc");
    const html = await result.text();
    console.log(html);
};
// fetchData();





//-------------------Exercises----------------------

/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
       
    2. Make a request to: https://www.craigslist.org/about/
       and print out the resulting HTML (text) String, using Fetch
    3. Compare what you see in Node to visiting the actual page in
       your Browser - what matches up?
*/

const fetchData3 = async () => {
    const result = await fetch("https://www.craigslist.org/about/");
    const html = await result.text();
    console.log(html);
}
// fetchData3();

const response3 = fetch("https://www.craigslist.org/about/");
// response3
//     .then((response) => {return response.text()})
//     .then((html) => console.log(html))
//     .catch((err) => console.error(err))

//--------------------------------------------------
/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)

    2. Make a request to:
       https://jsonplaceholder.typicode.com/posts/1
       and print out the resulting JSON using Fetch
    
    BONUS: How does this differ from text content and what might
           fetch be doing with the JSON response for us?
*/

const fetchData2 = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await result.json();
    console.log(json);
}
// fetchData2();

const response2 = fetch("https://jsonplaceholder.typicode.com/posts/1")
// response2
//     .then((result) => {
//         return result.json()
//     })
//     .then((json) => console.log(json))


//---------------------------------------------------

/*
    1. Have a read through pokeapi.co

    2. Make a request to:
       https://pokeapi.co/api/v2/pokemon/pikachu
       and print out pikachu's "official-artwork"'s URL for
       their image (png). Visit this URL to make sure it works
       using your Browser.
    
    HINT: Be careful with the naming of the keys here when trying
          to access the parsed JSON
*/

const pokeData = async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/ivysaur");
    const pokemonObj = await result.json();
    console.log(pokemonObj.sprites.other["official-artwork"]["front_default"]);
}
// pokeData()


//----------------------------------------------------

/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
    2. Import "fs" from "fs/promises" which is built-in to NodeJS
       (Doesn't need an NPM install)

    3. Go to "wallhaven.cc" and find a wallpaper you like. Visit the
       wallpaper's page and right click the wallpaper and "open image
       in new tab" to you have just the image in a tab. The URL should
       end with .png or .jpg.
       Eg: https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png
    4. Use fetch to get this image, and parse it correctly. Then,
       use "fs" to write a file to your filesystem with the actual
       image itself so you can open it after you run the script.
       Note that these functions in fs return Promises.

    * This is purposefully challenging and will require lots of
      Googling to see how to parse the image and save it using Node.
*/

//how to import a js module?

const fs = require('fs/promises');
const wallpaper = async () => {
    const response = await fetch("https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png");
    // console.log(response.__proto__) // ← to see all the available methods we can apply to the response
    const wallpaper = await response.arrayBuffer(); //arrayBuffer is a method in the prototype of the response that extracts binary data to be converted to a file, for example an image
    // console.log(wallpaper)
    const wallpaperString = Buffer.from(wallpaper); // ← converts the raw data to another kind of data that is compatible with fs.writeFile() - it looks the same but it adds Buffer string at the beginning of the data.
    console.log(wallpaperString)
    fs.writeFile("wallpaper.png", wallpaperString); // ← the function to write the file. The first arg is the name of the file with the extension, and the second is the data to be writtent to the file.
    console.log("done")
}
wallpaper()