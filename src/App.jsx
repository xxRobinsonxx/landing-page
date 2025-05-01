// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Mi Pagina Web - Render.com</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui nulla quia perferendis tempora laudantium accusamus voluptatum, omnis exercitationem minus placeat doloribus accusantium eius ab, dolorem, nisi explicabo incidunt. Ab?</p>
        <a href="#contact" className="cta-button">Contáctanos</a>
      </header>

      <section className="features">
        <div className="feature">
          <h2>🚀 Velocidad</h2>
          <p>Carga instantánea y navegación fluida.</p>
        </div>
        <div className="feature">
          <h2>🔒 Seguridad</h2>
          <p>Datos encriptados y protección avanzada.</p>
        </div>
        <div className="feature">
          <h2>⚙️ Fácil de usar</h2>
          <p>Interfaz intuitiva para todos los niveles.</p>
        </div>
      </section>

      <footer id="contact" className="footer">
        <p>© 2025 Mi Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
