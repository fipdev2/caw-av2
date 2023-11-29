import './signup.css';
import { Mail } from 'lucide-react'
import { useEffect, useState } from 'react';

function SignUp() {
    const [email, setEmail] = useState('');
    const [sugestion, setSugestion] = useState('');
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setTimeout(() => setSubmit(false), 500000);
    }



    return (
        <main className="main">
            <h2>Mande um alô!</h2>
            {submit == false ? <form action="submit" className="form">
                <p>Cadastre seu e-mail para receber notificações,
                    ou mande uma sugestão maneira</p>
                <div tabindex="0">
                    <Mail />
                    <input type="text" placeholder='Digite seu e-mail aqui...' />
                </div>
                <textarea name="" id="" cols="20" rows="10" placeholder='Digite aqui uma sugestão...'></textarea>
                <button onClick={(e) => handleSubmit(e)}>Enviar</button>
            </form> :
                <div style={{ height: '47vh', display: 'flex', justifyContent: 'center',width:'100%' }}>
                    <p style={{ marginTop: '15%' }}>
                    🔥🔥🔥 Obrigado por se juntar a comunidade 🔥🔥🔥
                    </p>
                </div>
            }

        </main>
    );
}

export default SignUp;