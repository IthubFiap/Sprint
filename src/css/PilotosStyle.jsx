import styled from 'styled-components'

export const PilotosStyle = styled.section`

.pilotos-container{
    padding: 50px;
    background-image: linear-gradient(to top, rgba(22, 21, 21, 0.957), rgba(22, 21, 21, 1)), url(src/assets/Fundo1.jpg); 
    font-size: 1.5rem;
    color: white;
}

.pilotos-container h1{
    font-size: 3rem;
    color: #1391D9;
    margin-bottom: 30px;
}

.pilotos-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.piloto-card{
    background-color: #1f1f1f;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.piloto-card:hover{
    transform: translateY(-10px); 
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); 
}

.piloto-card img{
    width: 100%;
    height: auto;
    border-bottom: 5px solid #1391D9; 
}

.piloto-info{
    padding: 20px;
}

.piloto-info h3{
    font-size: 2rem;
    color: #1391D9;
}

.piloto-info p{
    font-size: 1.5rem;
    margin: 10px 0;
}

.piloto-info a{
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #3F7085;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.piloto-info a:hover{
    background-color: #1391D9; 
}
`