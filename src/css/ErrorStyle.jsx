import styled from 'styled-components'

export const ErrorStyle = styled.section`

.error-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* A página ocupará a altura total da janela */
    background-color: #161515; /* Cor de fundo escura */
    color: #fff; /* Cor do texto */
    text-align: center;
    padding: 20px;
}

.error-container h1 {
    font-size: 8rem; /* Título grande para o código de erro */
    margin: 0;
    color: #1391D9; /* Cor azul para destaque */
}

.error-container h2 {
    font-size: 3rem; /* Texto menor para a mensagem */
    margin: 10px 0;
}

.error-container p {
    font-size: 1.5rem; /* Descrição adicional */
    max-width: 600px;
}

.error-container a {
    margin-top: 20px;
    display: inline-block;
    font-size: 1.2rem;
    color: #1391D9; /* Link com destaque */
    text-decoration: none;
    border: 2px solid #1391D9; /* Borda azul */
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.error-container a:hover {
    background-color: #1391D9;
    color: #fff;
}

`