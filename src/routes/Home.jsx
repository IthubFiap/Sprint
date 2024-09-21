import { HomeStyle } from "../css/HomeStyle"
import Carro from '../assets/Carro.jpg'
import Icon from '../assets/icon.jpg'
import Fundo from '../assets/Fundo.jpg'

const Home=()=>{
    return(
        <>
        <HomeStyle>
            <header className="body">
                <section className="container">
                    <img src={Icon} alt="Sigla" className="icon"/>
                    <h1 className="text">Transformando Watts em Vitória</h1>
                </section>
                <section className="container-img">
                    <img src={Fundo} className="banner"/>
                    <div className="info">
                        <h2>EM ALTA VOLTAGEM</h2>
                        <p>Na vanguarda da corrida pela inovação elétrica, a Formula E impulsiona o conhecimento. 
                            Tecnologia de ponta e pesquisa contínua expandem nossa compreensão sobre veículos elétricos, 
                            oferecendo uma plataforma dinâmica de aprendizado em mobilidade sustentável.</p>
                    </div>
                </section>
                <section className="grid-card">
                    <h1 className="title">Calendário</h1>
                    <div className="card">
                        <h1>Corridas Nas Ultimas 24h</h1>
                        <h2>24</h2>
                    </div>
                    <div className="card">
                        <h1>Corridas Desta Semana</h1>
                        <h2>7</h2>
                    </div>
                    <div className="card">
                        <h1>Corrida Deste Mês</h1>
                        <h2>30</h2>
                    </div>
                    <div className="title">
                        <h1>Melhores Momentos</h1>
                        <img src={Icon} alt="Sigla" className="icon"/>
                    </div>
                </section>
            </header>
        </HomeStyle>
        </>
    )
}
export default Home