import styled from 'styled-components'

export const HomeStyle = styled.section`

.body{
    background-image: linear-gradient(to top, rgba(22, 21, 21, 0.96), rgba(22, 21, 21, 1)), url(src/assets/Fundo1.jpg); 
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
    transition: transorm 0.3s ease;
}

.text{
    opacity: 0;
    transition: opacity 0.3s ease, bordem-bottom 0.3s ease;
}

.container:hover .text{
    opacity: 1;
    border-bottom: 3px solid white;
}

.container-img{
    display: flex;
    justify-content: center;
    align-items: center;
}

.banner{
    width: 60%;
    border-radius: 10px;
}

.grid-card {
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
}

.grid-card .title:hover{
    opacity: 1;
    box-shadow: 3px 3px white;
}

.card{
    background-color: #1391D9; 
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

`