import { FooterStyle } from "../css/FooterStyle"

const Footer =()=>{
    return (
        <FooterStyle>
        <footer className="footer">
        <   div className="footer-content">
                <h5>Contato</h5>
                <p>Email: contato@exemplo.com</p>
                <p>Telefone: (11) 1234-5678</p>
            <div className="social-media">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>
            <h5>@2024 - todos os direitos reservados</h5>
        </div>
        </footer>
        </FooterStyle>
    )
}
export default Footer