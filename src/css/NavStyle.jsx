import styled from 'styled-components';

export const NavStyle = styled.section`
.nav {
    display: grid;
    grid-template-columns: 1fr auto; 
    background: #1391D9;
    padding: 1px 20px;
    width: 100%;
}

.container{
    display: flex;
    justify-content: flex-end;
    padding: 10px 5px;
}

.nav .logo{
    width: 15%;
}

.nav .avatar{
    width: 70px; 
    height: 70px;
}

.links{
    display: flex; 
    justify-content: flex-end; 
    align-items: center; 
    gap: 10px; 
    padding: 20px;
    background-color: #161515;
}

.links .navLink{
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 5px 10px;
    color: white; 
    text-decoration: none; 
    transition: all 0.3s ease;
}

.navLink:hover{
    color:#1391D9;
    box-shadow: 5px 5px #1391D9;

}
`
