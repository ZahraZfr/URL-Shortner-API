import { useState } from "react";
import { NavPanel } from "./styles/NavigationBar.stayle"
import group from '../group.png';
import contract from '../contract.png';
import telephone from '../telephone.png';
const NavigationBar = () => {


    var humStyled ={
        position:"fixed",
        top:"20px",
        left:"20px"
        
    }
    const [showMwnu, setShowMenu] = useState(false);
    let menuTab;
    if (showMwnu) {
        menuTab = <NavPanel>
            <a href="/">
                <img src={group} alt="" />  about team</a>
            <a href="/">
                <img src={contract} alt="" />order your project</a>
            <a href="/">
                <img src={telephone} alt="" />contact us</a>

        </NavPanel>
    }
    return (
        <div id="humIcon" style={humStyled} onClick={() => setShowMenu(!showMwnu)}>
            <svg viewBox="0 0 100 80" width="22" height="22" >
                <rect width="80" height="10"></rect>
                <rect y="30" width="80" height="10"></rect>
                <rect y="60" width="80" height="10"></rect>
            </svg>
            {menuTab}
        </div>
    );
}

export default NavigationBar;