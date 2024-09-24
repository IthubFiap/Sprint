import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { DashboardStyle } from "../css/DashboardStyle"

const Dashboard = () => {
    
    //Hook- useNavigate
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        alert("Saindo...");
        navigate("/");
    }
    
    return (
        <>
        <DashboardStyle>
            <div className="dashboard-container">
                <h1 className="dashboard-title">Bem-vindo ao Dashboard</h1>

                <div className="dashboard-content">
                    <p>Aqui estão as informações do seu painel de controle.</p>

                    {/* Área de conteúdo adicional */}
                    <div className="dashboard-info">
                        <p>Você pode visualizar informações da sua conta, gerenciar dados ou realizar outras ações aqui.</p>
                    </div>

                    {/* Botão de Logout */}
                    <button className="logout-button" onClick={handleLogout}>
                        <MdLogout className="logout-icon" />
                        <span>Sair</span>
                    </button>
                </div>
            </div>
        </DashboardStyle>
        </>
    )
}

export default Dashboard;
