import styled from 'styled-components';

export const SobreStyle = styled.section`

.body{
    background-image: linear-gradient(to top, rgba(22, 21, 21, 0.957), rgba(22, 21, 21, 1)), url(src/assets/Fundo1.jpg); 
    color: white;
}

.banner{
    background-image: linear-gradient(to top, rgba(22, 21, 21, 0.9), rgba(22, 21, 21, 1)), url(src/assets/Carro.jpg); 
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat; 
    height:500px;
}

.formula-text {
    max-width: 70%;
    font-size: 1.4rem;
    padding-top: 350px;
    padding-left: 50px;
}

.background {
    background-color: #3F7085;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 40px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.grid {
    background-color: #1391D9;
    border-radius: 10px;
    padding: 30px;
    transition: background-color 0.3s, transform 0.3s;
}

.grid:hover {
    background-color: #161515;
    transform: scale(1.05);
}

.grid h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.grid p {
    font-size: 1.2rem;
}

.container{
    margin: 20px;
}

.square {
    position: relative;
    margin: 20px;
    max-width: 30%;
    padding: 50px;
    font-size: 1.2rem;
    background-color: #303138;
}

.text-container{
    font-size: 2rem;
    max-width: 60%;
    padding: 10px;
}

.team-container{
    padding: 35px;
}

.team-member {
    margin-top: 20px;
    width: 55%;
    background-color: #6CACBA;
    padding: 15px;
}

.team-member h3 {
    font-size: 2rem;
    margin-left: 25px;
}

.fade-in-text {
    opacity: 0;
    animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

`;
