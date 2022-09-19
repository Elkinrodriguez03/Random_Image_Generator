import React from "react";
import ImageData from "./ImageData";

export default function Image() {
    const [img, setImage] = React.useState({
        topText:"",
        bottonText:"",
        randomImage: ""
    })
    
    const [allRandomImages, serAllRandomImage] = React.useState(ImageData)

    function GetRandomImage() {
        const imagesArray = allRandomImages.data.images
        const randomNumber = Math.floor(Math.random() * imagesArray.length)
        const url = imagesArray[randomNumber].url
        setImage(prevImage => ({
            ...prevImage,
            randomImage: url
        }))
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
                    placeholder="Buttom text"
                    className="form-inputs"
                />
                <button
                    type="button"
                    className="form-buttom"
                    onClick={GetRandomImage}
                >
                    Get a new Random Image 🖼️
                </button>
            </form>
            <img src={img.randomImage} className="random-img" />
        </main>
    )
}
