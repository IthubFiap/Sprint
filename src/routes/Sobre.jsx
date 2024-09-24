import { SobreStyle } from "../css/SobreStyle";

const Sobre = () => {
    return (
        <>
        <SobreStyle>
            <header className="body">
                <div className="banner">
                    <div className="formula-text">
                        <h1 className="fade-in-text">
                            Formula E
                        </h1>
                        <p className="fade-in-text">
                            A Fórmula E é uma categoria emocionante do automobilismo que une tecnologia de ponta e sustentabilidade.
                            No entanto, apesar de seu grande potencial e inovação, ainda não alcançou a popularidade merecida entre o público geral. O nosso objetivo é mudar isso.
                            Queremos tornar a Fórmula E mais conhecida e acessível, ampliando sua visibilidade e atraindo novos fãs para o esporte.
                        </p>
                    </div>
                </div>

                <div className="background">
                    <h2>Objetivos</h2>
                    <div className="grid-container">
                        <div className="grid">
                            <h3>Aumentar a Popularidade</h3>
                            <p>Tornar a Fórmula E mais conhecida e atrativa para novos públicos.</p>
                        </div>
                        <div className="grid">
                            <h3>Educar</h3>
                            <p>Informar o público sobre os benefícios e a tecnologia envolvida na Fórmula E.</p>
                        </div>
                        <div className="grid">
                            <h3>Engajar</h3>
                            <p>Criar uma comunidade ativa e engajada em torno da Fórmula E, incentivando a participação e o compartilhamento de conteúdos.</p>
                        </div>
                        <div className="grid">
                            <h3>Inovar</h3>
                            <p>Usar tecnologia de ponta para proporcionar uma experiência única e envolvente aos usuários.</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="square">
                        <h1>Conheça Nosso Time</h1>
                        <h2>4 Membros</h2>
                    </div>

                    <div className="text-container">
                        <h3>Nosso Time</h3>
                        <p>Unidos pela paixão pela Fórmula E e pela tecnologia, nosso time multidisciplinar trabalha para criar uma plataforma
                            que aumente a visibilidade do esporte e ofereça uma experiência única e envolvente. Acreditamos que podemos
                            tornar a Fórmula E uma escolha popular e emocionante para todos.
                        </p>
                    </div>
                </div>

                <section className="team-container">
                    <div className="team-member">
                        <h3>Gustavo Yuji Osugi</h3>
                    </div>
                    <div className="team-member">
                        <h3>Renato Dutra Ferreira de Aguiar</h3>
                    </div>
                    <div className="team-member">
                        <h3>Jose Antonio Kretzer Rodriguez</h3>
                    </div>
                    <div className="team-member">
                        <h3>Victor Alves de Souza</h3>
                    </div>
                </section>
            </header>
        </SobreStyle>
        </>
    );
};

export default Sobre;
