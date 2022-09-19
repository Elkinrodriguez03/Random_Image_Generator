import React, { useState, useEffect } from "react";

let clientID = "pUA6aimz7khXatE5E1CpubA5BdGqRAY8W5IesDR6h9A";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`; 


    
export default function Image() {
    
    function startButton() {

        // const getImagesButton = document.querySelector('.form-button')
        const imageToDisplay = document.querySelector('.random-img')
    
        // getImagesButton.window.addEventListener('onClick', async () => {
            let randomImage = getNewImage();
            imageToDisplay.src = {randomImage};
            // return (
            //     <img src={imageToDisplay.src} />
            // )

            // <img src = {imageToDisplay.src} /> 
            // console.log(randomImage);
        
    }

    async function getNewImage() {
        // let randomNumber = Math.floor(Math.random() * 10);
        return fetch(`${endpoint}`)
            .then((response) => response.json())
            .then((data) => {
                let allImages = data.urls.regular;
                console.log(allImages);
            })
    }
    

return(
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form-inputs"
                    />
                    <input 
                    type="text"
                    placeholder="Button text"
                    className="form-inputs"
                    />
                <button
                    type="button"
                    className="form-button"
                    onClick={startButton}
                    >
                    Get a new Random Image 🖼️
                </button>
            </form>
            <img className="random-img" />
        </main>
    )
}


