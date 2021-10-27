import { useState } from "react";
import axios from "axios"
import URL from '../URL.jpg';
import { MainHolder } from './styles/Main.style'

const Main = () => {
    let userInput;
    const [Shorterlink, setShorterLink] = useState("");
    const objLink = { long_link: userInput }
    const [showMsg, setShowMsg] = useState("")

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
    }

    return (
        <MainHolder>

            <form action="">
                <div>
                    <input type="text" id="inpt" placeholder="Your URL" />
                    <button type="submit" onClick={MakeItShort}>Shorten</button>
                </div>
                <section>
                    <p><a href={Shorterlink}>{Shorterlink}</a></p>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(Shorterlink) && setShowMsg("Copy the shortened link and share it in messages, texts, posts, websites and other locations.")
                        }}
                    >
                        Copy
                    </button>
                    <h6>{showMsg}</h6>
                </section>
            </form>
            <img src={URL} alt="" />
        </MainHolder>
    );
}

export default Main;