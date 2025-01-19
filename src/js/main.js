// Datos iniciales del jugador
let jugador = {
    creditos: 1000,
    inventario: {
        agua: 0,
        minerales: 0,
        gas: 0,
        comida: 0,
        energia: 0,
        hidrogeno: 0
    },
    limiteInventario: 100,
    planetaActual: "Tierra"
};

// Datos de los planetas, incluyendo los materiales disponibles y sus precios
const planetas = {
    "Tierra": {
        costeEntrada: 100,
        recursos: {
            agua: {comprar: 50, vender: 30, limite: 100},
            minerales: {comprar: 100, vender: 60, limite: 100},
            gas: {comprar: 150, vender: 90, limite: 100},
            comida: {comprar: 200, vender: 120, limite: 100}
        }
    },
    "Marte": {
        costeEntrada: 150,
        recursos: {
            agua: {comprar: 60, vender: 40, limite: 80},
            minerales: {comprar: 120, vender: 80, limite: 80},
            gas: {comprar: 180, vender: 110, limite: 80}
        }
    },
    "Venus": {
        costeEntrada: 200,
        recursos: {
            comida: {comprar: 250, vender: 150, limite: 50},
            energia: {comprar: 300, vender: 180, limite: 50}
        }
    },
    "Jupiter": {
        costeEntrada: 250,
        recursos: {
            minerales: {comprar: 150, vender: 90, limite: 120},
            gas: {comprar: 200, vender: 130, limite: 120},
            energia: {comprar: 350, vender: 200, limite: 120}
        }
    },
    "Saturno": {
        costeEntrada: 300,
        recursos: {
            agua: {comprar: 80, vender: 50, limite: 90},
            minerales: {comprar: 130, vender: 75, limite: 90},
            gas: {comprar: 160, vender: 100, limite: 90},
            energia: {comprar: 320, vender: 190, limite: 90}
        }
    },
    "Plutón": {
        costeEntrada: 350,
        recursos: {
            agua: {comprar: 90, vender: 60, limite: 110},
            minerales: {comprar: 140, vender: 90, limite: 110},
            gas: {comprar: 180, vender: 120, limite: 110},
            comida: {comprar: 220, vender: 140, limite: 110},
            energia: {comprar: 400, vender: 250, limite: 110}
        }
    },
    "Neptuno": {
        costeEntrada: 400,
        recursos: {
            minerales: {comprar: 160, vender: 100, limite: 140},
            gas: {comprar: 200, vender: 130, limite: 140},
            energia: {comprar: 350, vender: 210, limite: 140},
            hidrogeno: {comprar: 500, vender: 350, limite: 140}
        }
    },
    "Urano": {
        costeEntrada: 450,
        recursos: {
            gas: {comprar: 220, vender: 140, limite: 160},
            hidrogeno: {comprar: 550, vender: 380, limite: 160},
            minerales: {comprar: 170, vender: 110, limite: 160}
        }
    },
    "Mercurio": {
        costeEntrada: 500,
        recursos: {
            agua: {comprar: 100, vender: 70, limite: 120},
            minerales: {comprar: 130, vender: 80, limite: 120},
            gas: {comprar: 180, vender: 120, limite: 120}
        }
    }
};

// Función para actualizar la interfaz de usuario
function updateUI() {
    document.getElementById("creditos").textContent = jugador.creditos;
    document.getElementById("agua").textContent = `Agua: ${jugador.inventario.agua}`;
    document.getElementById("minerales").textContent = `Minerales: ${jugador.inventario.minerales}`;
    document.getElementById("gas").textContent = `Gas: ${jugador.inventario.gas}`;
    document.getElementById("comida").textContent = `Comida: ${jugador.inventario.comida}`;
    document.getElementById("energia").textContent = `Energia: ${jugador.inventario.energia}`;
    document.getElementById("hidrogeno").textContent = `Hidrógeno: ${jugador.inventario.hidrogeno}`;
    document.getElementById("planeta").textContent = jugador.planetaActual;
}


// Función para viajar a un planeta
function viajar(destino) {
    if (jugador.planetaActual === destino) {
        Swal.fire({
            title: `Ya estás en ${destino}`,
            text: `No puedes viajar al mismo planeta. ¡Ya estás allí!`,
            icon: 'info',
            confirmButtonText: 'Entendido'
        });
        return;  // Evita que viaje al mismo planeta
    }

    const planeta = planetas[destino];
    if (jugador.creditos >= planeta.costeEntrada) {
        jugador.creditos -= planeta.costeEntrada;
        jugador.planetaActual = destino;
        updateUI();

        Swal.fire({
            title: `¡Has viajado a ${destino}!`,
            text: `¡Bienvenido a ${destino}! Ahora puedes comerciar con los recursos disponibles.`,
            icon: 'success',
            confirmButtonText: 'Genial'
        });
    } else {
        Swal.fire({
            title: 'No tienes suficientes créditos',
            text: 'No puedes pagar el coste de entrada para viajar a este planeta.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
    }
}

// Función para comprar un recurso
function comprarRecurso(recurso) {
    const planeta = planetas[jugador.planetaActual];
    if (!planeta.recursos[recurso]) {
        Swal.fire({
            title: `No disponible en ${jugador.planetaActual}`,
            text: `No puedes comprar ${recurso} en ${jugador.planetaActual}.`,
            icon: 'warning',
            confirmButtonText: 'Entendido'
        });
        return;
    }

    const precio = planeta.recursos[recurso].comprar;
    const limite = planeta.recursos[recurso].limite;
    const totalInventario = Object.values(jugador.inventario).reduce((acc, cantidad) => acc + cantidad, 0); // Suma total de recursos en el inventario

    if (jugador.creditos >= precio) {
        if (jugador.inventario[recurso] < limite && totalInventario + 10 <= jugador.limiteInventario) {
            jugador.creditos -= precio;
            jugador.inventario[recurso] += 10;
            updateUI();

            Swal.fire({
                title: `Has comprado 10 unidades de ${recurso}`,
                text: `¡Compra exitosa! Ahora tienes ${jugador.inventario[recurso]} unidades de ${recurso}.`,
                icon: 'success',
                confirmButtonText: 'Genial'
            });
        } else {
            if (jugador.inventario[recurso] >= limite) {
                Swal.fire({
                    title: `Límite de ${recurso} alcanzado`,
                    text: `No puedes almacenar más de ${limite} unidades de ${recurso} en ${jugador.planetaActual}.`,
                    icon: 'warning',
                    confirmButtonText: 'Entendido'
                });
            } else {
                Swal.fire({
                    title: 'Espacio de inventario lleno',
                    text: `No tienes suficiente espacio en tu inventario. El límite total es de ${jugador.limiteInventario} unidades.`,
                    icon: 'warning',
                    confirmButtonText: 'Entendido'
                });
            }
        }
    } else {
        Swal.fire({
            title: 'No tienes suficientes créditos',
            text: 'No tienes suficientes créditos para comprar este recurso.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
    }
}

// Función para vender un recurso
function venderRecurso(recurso) {
    const planeta = planetas[jugador.planetaActual];
    if (!planeta.recursos[recurso]) {
        Swal.fire({
            title: `No disponible en ${jugador.planetaActual}`,
            text: `No puedes vender ${recurso} en ${jugador.planetaActual}.`,
            icon: 'warning',
            confirmButtonText: 'Entendido'
        });
        return;
    }

    if (jugador.inventario[recurso] >= 10) {
        const precio = planeta.recursos[recurso].vender;
        jugador.creditos += precio * 10;
        jugador.inventario[recurso] -= 10;
        updateUI();

        Swal.fire({
            title: `Has vendido 10 unidades de ${recurso}`,
            text: `¡Venta exitosa! Ahora tienes ${jugador.inventario[recurso]} unidades de ${recurso}.`,
            icon: 'success',
            confirmButtonText: 'Genial'
        });
    } else {
        Swal.fire({
            title: 'No tienes suficientes unidades',
            text: `No tienes suficientes unidades de ${recurso} para vender.`,
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
    }
}


// Evento para los botones
document.getElementById("travelButton").addEventListener("click", function() {
    viajar("Tierra");
});
document.getElementById("travelButton2").addEventListener("click", function() {
    viajar("Marte");
});
document.getElementById("travelButton3").addEventListener("click", function() {
    viajar("Venus");
});
document.getElementById("travelButton4").addEventListener("click", function() {
    viajar("Jupiter");
});
document.getElementById("travelButton5").addEventListener("click", function() {
    viajar("Saturno");
});
document.getElementById("travelButton6").addEventListener("click", function() {
    viajar("Plutón");
});
document.getElementById("travelButton7").addEventListener("click", function() {
    viajar("Neptuno");
});
document.getElementById("travelButton8").addEventListener("click", function() {
    viajar("Urano");
});
document.getElementById("travelButton9").addEventListener("click", function() {
    viajar("Mercurio");
});

document.getElementById("buyButton").addEventListener("click", function() {
    comprarRecurso("agua");
});
document.getElementById("sellButton").addEventListener("click", function() {
    venderRecurso("agua");
});
// Funciones de compra y venta de los nuevos recursos
document.getElementById("buyButtonComida").addEventListener("click", function() {
    comprarRecurso("comida");
});
document.getElementById("sellButtonComida").addEventListener("click", function() {
    venderRecurso("comida");
});

document.getElementById("buyButtonEnergia").addEventListener("click", function() {
    comprarRecurso("energia");
});
document.getElementById("sellButtonEnergia").addEventListener("click", function() {
    venderRecurso("energia");
});

document.getElementById("buyButtonHidrogeno").addEventListener("click", function() {
    comprarRecurso("hidrogeno");
});
document.getElementById("sellButtonHidrogeno").addEventListener("click", function() {
    venderRecurso("hidrogeno");
});

// Inicializamos la UI al cargar la página
updateUI();
