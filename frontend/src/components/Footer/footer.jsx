import './footer.css';
import { FacebookIcon, InstagramIcon, TwitchIcon, TwitterIcon } from 'lucide-react'

function Footer() {

    return (

        <footer className="footer">
            <p>Cola nas minhas redes sociais</p>
            <div className='social'>
                <a href='http://facebook.com/SouFilipeMagalhaes' >
                    <FacebookIcon />

                </a>
                <a href='http://instagram.com/fip_games'>
                    <InstagramIcon />
                </a>

                <a href='http://twitch.tv/sharinganzinho'>
                    <TwitchIcon />
                </a>

                <a href='http://x.com/sharinganzinho'>
                    <TwitterIcon />
                </a>
            </div>
            <p>Copyright © 2023  Sharingazinho. Todos direitos reservados. </p>
        </footer>
    );
}

export default Footer;