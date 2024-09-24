import Piloto1 from '../assets/Jean-Éric Vergne.png'
import Piloto2 from '../assets/Sam Bird.png'
import Piloto3 from '../assets/Sébastien Buemi.png'
import { PilotosStyle } from "../css/PilotosStyle";

const Pilotos=()=>{
    return(
        <>
        <PilotosStyle>
        <div className="pilotos-container">
            <h1>Pilotos em Destaque da Temporada</h1>
            <div className="pilotos-grid">
                <div className="piloto-card">
                    <img src={Piloto1} alt="Piloto X"/>
                    <div className="piloto-info">
                        <h3>Piloto X</h3>
                        <p>Equipe: Equipe X</p>
                        <p>Vitórias: 5</p>
                        <a href="#">Saiba Mais</a>
                    </div>
                </div>

                <div className="piloto-card">
                    <img src={Piloto2} alt="Piloto Y"/>
                    <div className="piloto-info">
                        <h3>Piloto Y</h3>
                        <p>Equipe: Equipe Y</p>
                        <p>Vitórias: 3</p>
                        <a href="#">Saiba Mais</a>
                    </div>
                </div>
                
                <div className="piloto-card">
                    <img src={Piloto3} alt="Piloto Z"/>
                    <div className="piloto-info">
                        <h3>Piloto Z</h3>
                        <p>Equipe: Equipe Z</p>
                        <p>Vitórias: 4</p>
                        <a href="#">Saiba Mais</a>
                    </div>
                </div>
            </div>
        </div>
        </PilotosStyle>
        </>
    )
}

export default Pilotos;
