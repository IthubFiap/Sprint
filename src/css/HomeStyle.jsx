import styled from 'styled-components'

export const HomeStyle = styled.section`

.body{
    background-image: linear-gradient(to top, rgba(22, 21, 21, 0.957), rgba(22, 21, 21, 1)), url(src/assets/Fundo1.jpg); 
    color: white;
}

.container{
    padding: 20px 100px;
    margin-top: -50px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 2rem;
}

.icon{
    width: 5%;
}

.text{
    animation: blink 2s infinite;
}

.container:hover .text{
    opacity: 1;
    border-bottom: 3px solid white;
}

.container-img{
    background-image: linear-gradient(to top, rgba(22, 21, 21, 0.9), rgba(22, 21, 21, 1)), url(src/assets/Fundo.jpg); 
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat; 
}

.banner{
    width: 60%;
    border-radius: 10px;
}

.info{
    display: flex; 
    flex-direction: column; 
    align-items: start; 
    text-align: start; 
}

.info h2{
    padding-left: 50px;
    font-size: 5rem; 
    max-width: 400px;
    transition: all 0.5s ease;
}

.info h2:hover{
    color: #1391D9;
}

.info p{
    padding-left: 50px;
    padding-bottom: 100px;
    font-size: 1.4rem;
    max-width: 500px;
}

.grid-card{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; 
    padding: 20px;
    border-radius: 10px; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
}

.grid-card .title{
    grid-column: span 3;
    text-align: center; 
    font-size: 2rem;
    background-color: #1391D9;
    text-transform: uppercase;
    transition: all 0.4s ease;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
}

.grid-card .title:hover{
    opacity: 1;
    box-shadow: 3px 3px white;
}

.card{
    text-transform: uppercase;
    background-color: #1391D9;
    border-width: 2px;
    border-style: solid;
    border-color: white;
    color: white; 
    border-radius: 8px; 
    padding: 15px;
    text-align: center; 
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
}

.card:hover{
    transform: translateY(-5px); 
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); 
}

.card h1{
    font-size: 1.2rem; 
    margin: 0; 
}

.card h2{
    font-size: 6rem;
    transition: all ease 0.5s;
}

.card h2:hover{
    opacity: 1;
    scale: 1.2;
}

.title .icon{
    width: 70px;
    height: auto;
    animation: run 2s linear infinite; 
}

.title .icon:hover{
    transform: scale(1.3); 
}

.slider-section{
    text-align: center;
    background-color: #1391D9;
    text-transform: uppercase;
    padding-bottom: 20px;
}

.slider-title{
    font-size: 2rem;
    margin-bottom: 5px;
    margin-top: 10px;
}

.slider{
    position: relative;
    width: 100%;
    overflow: hidden;
}

.slides{
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide{
    min-width: 100%;
    min-height: 100px;
    max-height: 300px;
    padding: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #161515f4;
}

.slide-image{
    width: 98%;  
    height: 98%; 
    object-fit: cover; 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}



@keyframes run{
    0% {
        transform: translateX(-100px); /* Começa fora da tela à esquerda */
    }
    50% {
        transform: translateX(calc(100% - 10px)); /* Chega à direita da div */
    }
    100% {
        transform: translateX(-100px); /* Volta para fora da tela à esquerda */
    }
}

@keyframes blink{
    0% {
        opacity: 0;
        border-bottom: 3px solid transparent;
    }
    50% {
        opacity: 1;
        border-bottom: 3px solid white;
    }
    100% {
        opacity: 0;
        border-bottom: 3px solid transparent;
    }
}

`