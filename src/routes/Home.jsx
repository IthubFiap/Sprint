import { HomeStyle } from "../css/HomeStyle";
import Icon from '../assets/icon.jpg';
import Slide1 from '../assets/slide1.jpg';
import Slide2 from '../assets/slide2.jpg';
import Slide3 from '../assets/slide3.jpg';
import React, { useState, useEffect } from 'react';

const Home = () => {
    const slides = [Slide1, Slide2, Slide3];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [counters, setCounters] = useState({ count1: 0, count2: 0, count3: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        const updateCounters = () => {
            setCounters({ count1: 0, count2: 0, count3: 0 });
            const maxValues = [24, 7, 30];

            maxValues.forEach((maxValue, index) => {
                let value = 0;
                const interval = setInterval(() => {
                    value += 1;
                    setCounters((prevCounters) => {
                        const newCounters = [...Object.values(prevCounters)];
                        newCounters[index] = value;
                        return { count1: newCounters[0], count2: newCounters[1], count3: newCounters[2] };
                    });

                    if (value >= maxValue) {
                        clearInterval(interval);
                    }
                }, 100);
            });
        };

        updateCounters();
    }, []);

    return (
        <HomeStyle>
            <header className="body">
                <section className="container">
                    <img src={Icon} alt="Sigla" className="icon" />
                    <h1 className="text">Transformando Watts em Vitória</h1>
                </section>

                <section className="container-img">
                    <div className="info">
                        <h2>EM ALTA VOLTAGEM</h2>
                        <p>Na vanguarda da corrida pela inovação elétrica, a Formula E impulsiona o conhecimento. 
                        Tecnologia de ponta e pesquisa contínua expandem nossa compreensão sobre veículos elétricos, 
                        oferecendo uma plataforma dinâmica de aprendizado em mobilidade sustentável.</p>
                    </div>
                </section>

                <section className="grid-card">
                    <h1 className="title">Calendário</h1>

                    <div className="card">
                        <h1>Corridas Nas Últimas 24h</h1>
                        <span className="contador1">+ {counters.count1}</span>
                    </div>
                    
                    <div className="card">
                        <h1>Corridas Desta Semana</h1>
                        <span className="contador2">+ {counters.count2}</span>
                    </div>

                    <div className="card">
                        <h1>Corrida Deste Mês</h1>
                        <span className="contador3">+ {counters.count3}</span>
                    </div>

                    <div className="title">
                        <h1>Melhores Momentos</h1>
                        <img src={Icon} alt="Sigla" className="icon" />
                    </div>
                </section>

                <section className="slider-section">
                    <h2 className="slider-title">Destaques</h2>
                    <div className="slider">
                        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {slides.map((slide, index) => (
                                <div key={index} className="slide">
                                    <img src={slide} alt={`Slide ${index + 1}`} className="slide-image" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </header>
        </HomeStyle>
    );
};

export default Home;
