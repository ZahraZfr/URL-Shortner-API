import { useState } from "react";
import axios from "axios"

const Main = () => {
    let userInput;
    const [Shorterlink, setShorterLink] = useState("");
    const objLink = { long_link: userInput }

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
        <div>
            <form action="">
                <input type="text" id="inpt" />
                <button type="submit" onClick={MakeItShort}>Shorten</button>
                <p><a href={Shorterlink}>{Shorterlink}</a></p>
            </form>
        </div>
    );
}

export default Main;