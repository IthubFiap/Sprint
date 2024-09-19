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

.nav .logo {
    width: 15%;
}

.nav .avatar {
    width: 70px; 
    height: 70px;
}

.links {
    display: flex; 
    justify-content: flex-end; 
    align-items: center; 
    gap: 10px; 
    padding: 20px;
}

.links .navLink {
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 5px 10px;
    color: black; 
    text-decoration: none; 
  }
`
