# 🌌 Documento del Proyecto - Galactic Trader 🚀

## 🎯 Objetivo del Proyecto
El propósito general de este juego es permitir a los jugadores explorar distintos planetas 🌍, comerciar con recursos 🪙 y gestionar un inventario 📦 mientras viajan a través del espacio 🌠. El objetivo es maximizar los créditos 💰 del jugador mediante compras y ventas de recursos, al tiempo que se gestionan los límites del inventario y el costo de entrada a los planetas.

El jugador deberá tomar decisiones estratégicas 🧠 para optimizar el uso de sus recursos y créditos, mientras explora y comercia en diferentes planetas del sistema solar 🌌.

> **Nota**: Al principio, el juego fue diseñado para ser más lineal, con un recorrido fijo donde el jugador viajaba de un planeta a otro sin posibilidad de regresar. El objetivo principal era llegar al planeta final, y según los créditos y otros factores, el jugador recibiría una puntuación. Sin embargo, debido a limitaciones de tiempo y dificultades técnicas, esta idea no pudo ser implementada y el diseño fue modificado para permitir una mayor libertad de movimiento entre planetas.

## 💻 Tecnologías Utilizadas
Este juego ha sido desarrollado utilizando las siguientes tecnologías:

- **HTML**: Estructura básica de la página web 🌐.
- **CSS**: Estilización y diseño visual 🎨.
- **JavaScript**: Lógica del juego y actualización dinámica ⚙️.
- **Swal (SweetAlert)**: Librería para mostrar alertas personalizadas ⚠️.

## 🛠️ Mecánicas del Juego
En el juego, el jugador interactúa con un sistema de comercio interplanetario 🌍🪙. Las principales mecánicas son:

1. **Transacciones de Recursos**: El jugador puede comprar y vender recursos en diferentes planetas. Los precios varían según el planeta y los recursos disponibles 🌿💎.
   - Comprar: El jugador paga créditos para adquirir recursos 💰➡️🌱.
   - Vender: El jugador vende los recursos a cambio de créditos 🌱➡️💰.

2. **Viajes entre Planetas**: El jugador puede viajar entre diferentes planetas 🌌. Cada viaje tiene un costo de entrada 🚀.

3. **Gestión del Inventario**: El jugador debe gestionar los recursos que tiene almacenados 📦.

4. **Recursos Disponibles**: Cada planeta tiene diferentes recursos para comprar y vender, tales como agua 💧, minerales ⛏️, gas ⛽, comida 🍔, energía ⚡ e hidrógeno 🔋.

## ⚙️ Lógica del Juego
La lógica del juego se organiza en torno a varias funciones y variables principales:

- **Jugador**: Un objeto que contiene los créditos disponibles, el inventario con diferentes recursos y el planeta actual en el que se encuentra el jugador.
- **Planetas**: Un conjunto de objetos que define los planetas disponibles para visitar 🌍 y sus recursos.
- **Funciones Principales**:
  - `updateUI()`: Actualiza la interfaz de usuario para reflejar el estado actual del jugador.
  - `viajar(destino)`: Permite al jugador viajar a un nuevo planeta.
  - `comprarRecurso(recurso)`: Permite al jugador comprar un recurso específico.
  - `venderRecurso(recurso)`: Permite al jugador vender un recurso específico.

## 🛸 Flujo de Juego
El juego sigue un flujo dinámico basado en las decisiones del jugador:

1. **Inicio**: El jugador comienza con una cantidad inicial de créditos 💰 y un inventario vacío 📦.
2. **Exploración**: El jugador puede viajar a diferentes planetas 🌍.
3. **Comercio**: El jugador puede comprar o vender recursos 🌱💰.
4. **Gestión de Inventario**: El jugador debe gestionar su inventario 📦.
5. **Meta Final**: El objetivo es acumular la mayor cantidad de créditos posibles 💰.

## 📜 Instrucciones de Uso
1. **Iniciar el Juego**: Al cargar el juego, se muestra la interfaz con los créditos iniciales y el inventario vacío 📦.
2. **Viajar a un Planeta**: Haz clic en los botones para viajar a diferentes planetas 🌍.
3. **Comprar Recursos**: Haz clic en el botón de compra para adquirir recursos 🌱.
4. **Vender Recursos**: Si tienes recursos, haz clic en el botón de venta 💰.
5. **Gestionar Inventario**: Asegúrate de no exceder el límite de almacenamiento 📦.
6. **Estrategia**: Toma decisiones estratégicas 🧠 sobre qué recursos comprar, vender y a qué planetas viajar.

¡Disfruta del juego y comienza tu aventura en el espacio! 🌌🚀
