import React from 'react';
import whatsappIcon from  '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/35146928?s=460&u=6cbbe641a69b49fd98694ee68beaebc102c1b89d&v=4" alt="Wesley Simões"/>
                <div>
                    <strong>Wesley Simões</strong>
                    <span>Desenvolvedor</span>
                </div>
            </header>
            <p>
                Desenvolvedor de frontend.
                <br />
                Apaixonado por explodir coisas em Laboratório e por mudar a vida das pessoas através de experiencias explosivas.
                Suas explosões ja mudaram a vida de centenas de pessoas.
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={ whatsappIcon } alt="Whatsaap"/>
                    Entrar em contato
                </button>
            </footer>
    </article> 
    )
}

export default TeacherItem