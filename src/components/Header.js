import { Wrapper } from './styles/Header.style'
import group from '../group.png';
import contract from '../contract.png';
import telephone from '../telephone.png';
import NavigationBar from './NavigationBar'


const Header = () => {

    return (
        <>
            <NavigationBar />
            <Wrapper>

                <div className='headerMenu'>
                    <a href="/">
                        <img src={group} alt="" />  about team</a>
                    <a href="/">
                        <img src={contract} alt="" />order your project</a>
                    <a href="/">
                        <img src={telephone} alt="" />contact us</a>
                </div>
            </Wrapper>
            
        </>

    );
}

export default Header;