import { useState } from "react";
import axios from "axios"
import URL from '../URL.png';
import { MainHolder } from './styles/Main.style'


const Main = () => {
    let userInput;
    const [Shorterlink, setShorterLink] = useState("");
    const objLink = { long_link: userInput }
    const [showMsg, setShowMsg] = useState("No result ! Haven't you shortened your link yet ??!");

    // function run we user click
    function MakeItShort(e) {
        e.preventDefault()
        userInput = document.getElementById('inpt').value;
        objLink.long_link = userInput

        axios
            .post('http://localhost:3000/links/', objLink, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {

                setShorterLink(`http://localhost:3000/links/${res.data.shortLink}`);
            })
            .catch();
            setShowMsg("Copy the shortened link and share it in messages, texts, posts, websites and other locations.");
            
    }

    return (
        <MainHolder>

            <form action="">
                <h1>URL shortener service</h1>
                <h3>When the shorter, the better :)</h3>
                <div>
                    <input type="text" id="inpt" placeholder="Your URL" />
                    <button type="submit" onClick={MakeItShort}>Shorten</button>
                </div>
                <section>
                    <div>
                        <h5>{showMsg}</h5>
                        <p><a href={Shorterlink} target='_blank'>{Shorterlink}</a></p>
                    </div>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(Shorterlink) 
                        }}
                    >
                        Copy
                    </button>
                </section>

            </form>
            <img src={URL} alt="" />
        </MainHolder>
    );
}

export default Main;