import React, { useState } from "react";

let clientID = "pUA6aimz7khXatE5E1CpubA5BdGqRAY8W5IesDR6h9A";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;


    
export default function Image() {
    
    const [images, setImages] = useState([]);

    async function getNewImage() {
        return fetch(`${endpoint}`)
            .then((response) => response.json())
            .then((data) => {
                let allImages = data.urls.regular;
                console.log(allImages);
                setImages(allImages);
            })
    }

    return(
            <main>
                <section className="intro">
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
                        onClick={getNewImage}
                        >
                        Get a new Random Image 🖼️
                    </button>
                </form>
                </section>
                <div className="img-container">
                    <img src = {images} className="random-img" />
                </div>
            </main>
        )
    
    
}


