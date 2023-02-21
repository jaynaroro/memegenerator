import React from "react"
import buttonImage from "../Images/button-image.png"
//import memeData from "../memeData"


export default function Main(){

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

  
    function handleClick(){
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    function handleChange(event)
    {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="main-component">
            <div className="input-area">
                <input
                    type="text"
                    name="topText"
                    value={meme.topText}
                    className="input" 
                    placeholder="Top Text"
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    className="input" 
                    placeholder="Bottom Text"
                    onChange={handleChange}
                />

                <button onClick={handleClick} className="image-button">
                    <img src={buttonImage} alt="button-pic" />
                </button>
            </div>

            <div className="meme-area">
                <img className="meme-image" src={meme.randomImage} alt="meme-pic"/>
                <h2 className="text meme-topText">{meme.topText}</h2>
                <h2 className="text meme-bottomText">{meme.bottomText}</h2>
            </div>
            
        </div>
    )
}
