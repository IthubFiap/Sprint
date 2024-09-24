import styled from 'styled-components'

export const DashboardStyle = styled.section`

.dashboard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(to top, rgba(22, 21, 21, 0.957), rgba(22, 21, 21, 1)), url(src/assets/Fundo1.jpg); 
    padding: 20px;
}

.dashboard-title {
    font-size: 2.5rem;
    color: #1391D9; 
    margin-bottom: 20px;
    text-align: center;
}

.dashboard-content {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    text-align: center;
}

.dashboard-info {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.logout-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff5c5c;
    border: none;
    color: white;
    padding: 12px 20px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 8px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.logout-icon {
    margin-right: 8px;
    font-size: 1.5rem;
}

.logout-button:hover {
    background-color: #ff4040;
}


`