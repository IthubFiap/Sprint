import styled from 'styled-components'

export const ErrorStyle = styled.section`

.error-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #161515; 
    color: #fff; 
    text-align: center;
    padding: 20px;
}

.error-container h1 {
    font-size: 8rem; 
    margin: 0;
    color: #1391D9; 
}

.error-container h2 {
    font-size: 3rem; 
    margin: 10px 0;
}

.error-container p {
    font-size: 1.5rem; 
    max-width: 600px;
}

.error-container a {
    margin-top: 20px;
    display: inline-block;
    font-size: 1.2rem;
    color: #1391D9; 
    text-decoration: none;
    border: 2px solid #1391D9; 
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.error-container a:hover {
    background-color: #1391D9;
    color: #fff;
}

`