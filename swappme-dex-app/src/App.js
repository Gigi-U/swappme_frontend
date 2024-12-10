// App.js
import React, { useEffect } from "react";
import "./shootingStars.css";
import Footer from "./commons/footer"; 
import Header from "./commons/header";
import EthCoin from "./commons/ethCoin";


function App() {
  useEffect(() => {
    const starCount = 45; // Número de estrellas
    const starsContainer = document.getElementById("stars");

    // Generar estrellas estáticas
    function createStar() {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      starsContainer.appendChild(star);
    }

    for (let i = 0; i < starCount; i++) {
      createStar();
    }

    // Generar shooting stars
    function createShootingStar() {
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";
      shootingStar.style.top = `${Math.random() * 100}%`;
      shootingStar.style.left = `${Math.random() * 100}%`;
      document.body.appendChild(shootingStar);

      // Eliminar shooting star después de la animación
      setTimeout(() => {
        document.body.removeChild(shootingStar);
      }, 1500); // Duración de la animación
    }

    const interval = setInterval(() => {
      createShootingStar();
    }, 2000); // Intervalo entre shooting stars

    // Limpieza del intervalo
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {/* Componente Header */}
      <Header />
      <div id="stars"></div>
      
      {/* Agregar el div transparente en el centro */}
      <div className="center-box">
        <p className="dex-title">DEX</p>
          {/* Usar EthCoin como componente */}
          <EthCoin />        
          <div className="boxes-container">
          <div className="from-box"><p>From</p></div>
          <div className="to-box"><p>To</p></div>
        </div>
      </div>

      {/* Componente Footer */}
      <Footer />
    </div>
  );
}

export default App;
