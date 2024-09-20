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
                </section>
                <section className="grid-card">
                    <h1 className="title">Calendário</h1>
                    <div className="card">
                        <h1>Corridas Nas Ultimas 24h</h1>
                    </div>
                    <div className="card">
                        <h1>Corridas Desta Semana</h1>
                    </div>
                    <div className="card">
                        <h1>Corrida Deste Mês</h1>
                    </div>
                    <div className="best">
                        <h1>Melhores Momentos</h1>
                    </div>
                </section>
            </header>
        </HomeStyle>
        </>
    )
}
export default Home