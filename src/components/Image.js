import React, { useState, useEffect } from "react";
// import ImageData from "./ImageData";

let clientID = "pUA6aimz7khXatE5E1CpubA5BdGqRAY8W5IesDR6h9A";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`; 
// import axios from 'axios';

// import { render } from "@testing-library/react";

// export default function Image() {
//     const [image, setImage] = useState({
//         topText:"",
//         bottonText:"",
//         randomImage: `${endpoint}`
//     })
    
    // const [allRandomImages, setAllRandomImage] = useState(endpoint)

    // function GetRandomImage() {
    //     const imagesArray = allRandomImages.urls.full
    //     // const randomNumber = Math.floor(Math.random() * imagesArray.length)
    //     const url = imagesArray.url
    //     setImage(prevImage => ({
    //         ...prevImage,
    //         // randomImage: url
    //     })) 
    // }

// class App extends React.Component {

//     state = { image: ''};
    
//     componentDidMount() {    
//     }

//     fetchImage = () => {
//         axios.get()
//     }

//     render() {

// let imageElement


// export default function Image() {
//     fetch(endpoint) 
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (jsonData) {
//             imageElement.src = jsonData.urls.regular;
//             console.log(jsonData);
//         });


    
export default function Image() {
    // const [images, setImages] = useState([])

    // const GetImage = (props) => {

        
        
    //     useEffect(() => {
    //         window.addEventListener('click', fetchImage)
    //         const fetchImage = async () => {
    //             const response = await fetch(`${endpoint}`)
    //             const data = await response.json()
    //             setImages(data)
    //         console.log(data)
    //     }

    //     fetchImage()
    // }, [])
    // const getImagesButton = window.addEventListener
    // const imageToDisplay = window.addEventListener

    // getImagesButton.addEventListener('click', async () => {

    //     let randomImage = await getNewImage();
    //     imageToDisplay.src = randomImage;
    // })
    // const getImagesButton = getNewImage()
    // const imageToDisplay 

    // getImagesButton.addEventListener('click', async () => {
    //     let randomImage = await getNewImage();
    //     imageToDisplay.src = randomImage;
    // })

    async function getNewImage() {
        let randomNumber = Math.floor(Math.random() * 10);
        return fetch(`${endpoint}`)
            .then((response) => response.json())
            .then((data) => {
                let allImages = data.results;
                console.log(data);
                // return allImages.urls.regular;
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
                    placeholder="Buttom text"
                    className="form-inputs"
                    />
                <button
                    type="button"
                    className="form-buttom"
                    onClick={getNewImage}
                    >
                    Get a new Random Image 🖼️
                </button>
            </form>
            {/* <img src={images.urls} className="random-img" /> */}
        </main>
    )
}


    
    

