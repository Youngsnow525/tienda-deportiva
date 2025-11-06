import React from 'react';
import './App.css';

function App() {
  const productos = [
    { id: 1, nombre: 'Pelota de fútbol', precio: 'S/ 60', imagen: "/img/pelota.jpg" },
    { id: 2, nombre: 'Zapatillas deportivas', precio: 'S/ 120', imagen: "/img/zapatilla.jpg" },
    { id: 3, nombre: 'Guantes de boxeo', precio: 'S/ 90', imagen: "/img/guantes-box.jpg" },
  ];

  return (
    <div className="App">




      <header>
        <h2 id='info' >esta pagina esta echa con react😊</h2>
        <h1 id='titulo-tienda' >Tienda Deportiva Espinar</h1>
        <p>Equipamiento para campeones locales</p>
      </header>



      <main>
        <h2>Productos</h2>




        <div className="productos">
          {productos.map((item) => (
            <div key={item.id} className="producto">
              <img src={item.imagen} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <p>{item.precio}</p>
              <button>Agregar al carrito</button>
            </div>
          ))}
        </div>


        <div className='saludo'>
          <p>Mas Productos</p>

        </div>




      </main>


      <footer>
        <p>&copy; 2025 Tienda Deportiva Espinar</p>
      </footer>
    </div>
  );
}

export default App;
