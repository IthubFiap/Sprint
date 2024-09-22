import { ErrorStyle } from "../css/ErrorStyle"

const Error=()=>{
    return(
        <>
        <ErrorStyle>
        <div class="error-container">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>Desculpe, a página que você está procurando não existe ou foi movida.</p>
            <a href="/">Voltar para a página inicial</a>
        </div>
        </ErrorStyle>
        </>
    )
}
export default Error