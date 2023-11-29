import './mainpage.css';
import player from '../../assets/fake-player.svg'

function MainPage() {
    return (
        <main className="main">
            <h2>Seja bem vindo ao recinto do Sharinganzinho</h2>
            <h3>Vídeos recentes</h3>
            <img src={player} alt="player de vídeo" className='player'/>
        </main>
    );
}

export default MainPage;