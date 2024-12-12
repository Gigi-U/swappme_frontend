import React, { useEffect } from "react";
import Footer from "./commons/footer"; 
import Header from "./commons/header";
import "./shootingStars.css";
import "./App.css";
import EthCoin from "./commons/ethCoin";
import "./commons/header.css";
import "./commons/footer.css";

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


        {/* Contenedor de los paneles */}
        <div className="boxes-container">
          {/* Panel 1: From and To */}
          <div className="panel-box">
          <p>From</p>
            <input type="text" placeholder="From Token Address" />
            <p>To</p>
            <input type="text" placeholder="To Token Address" />
            {/* Botón debajo de los campos */}
            <button className="convert-button">Convert</button>
        </div>


          {/* Panel 2: Agregar Liquidez */}
          <div className="panel-box">
            <p>Add Liquidity</p>
            <input type="text" placeholder="Enter Token Address" />
            <input type="number" placeholder="Enter Amount" />
            <button className="convert-button">Add Liquidity</button>
          </div>

          {/* Panel 3: Retirar Liquidez */}
          <div className="panel-box">
            <p>Withdraw Liquidity</p>
            <input type="text" placeholder="Enter Token Address" />
            <input type="number" placeholder="Enter Amount" />
            <button className="convert-button">Withdraw Liquidity</button>
          </div>

          {/* Panel 6: Obtener Precio de un Token */}
          <div className="panel-box">
            <p>Get Token Price</p>
            <input type="text" placeholder="Enter Token Address" />
            <button className="convert-button">Get Price</button>
            <br></br>
            <p>X's price: xxxxxxxxxxxxxxx</p>

          </div>

        </div>
      </div>

      {/* Componente EthCoin centrado arriba */}
      <div className="eth-coin-container">
        <EthCoin />
      </div>

      {/* Componente Footer */}
      <Footer />
    </div>
  );
}

export default App;
