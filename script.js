var materias = [
    {
        cod: 6111,
        nombre: "Introducción a la Programación I",
        cuatrimestre: 1,
        correlativa: [],
        anio: 1
    },
    {
        cod: 6112,
        nombre: "Introducción al Álgebra",
        cuatrimestre: 1,
        correlativa: [],
        anio: 1
    },
    {
        cod: 6113,
        nombre: "Introducción a los Sistemas Informáticos",
        cuatrimestre: 1,
        correlativa: [],
        anio: 1
    },
    {
        cod: 6114,
        nombre: "Inglés",
        cuatrimestre: 1,
        correlativa: [],
        anio: 1
    },
    {
        cod: 6121,
        nombre: "Diseño Lógico",
        cuatrimestre: 2,
        correlativa: [6112, 6113],
        anio: 1
    },
    {
        cod: 6122,
        nombre: "Introducción a la Programación II",
        cuatrimestre: 2,
        correlativa: [6111],
        anio: 1
    },
    {
        cod: 6123,
        nombre: "Lenguajes formales y autómatas",
        cuatrimestre: 2,
        correlativa: [6111],
        anio: 1
    },
    {
        cod: 6124,
        nombre: "Cálculo I",
        cuatrimestre: 2,
        correlativa: [],
        anio: 1
    },
    {
        cod: 6211,
        nombre: "Arquitectura de Computadoras I",
        cuatrimestre: 1,
        correlativa: [6121],
        anio: 2
    },
    {
        cod: 6212,
        nombre: "Análisis y Diseño de Algoritmos I",
        cuatrimestre: 1,
        correlativa: [6122, 6124, 6112],
        anio: 2
    },
    {
        cod: 6213,
        nombre: "Programación Orientada a Objetos",
        cuatrimestre: 1,
        correlativa: [6122],
        anio: 2
    },
    {
        cod: 6214,
        nombre: "Álgebra Lineal",
        cuatrimestre: 1,
        correlativa: [6112],
        anio: 2
    },
    {
        cod: 6221,
        nombre: "Redes de Computadoras I",
        cuatrimestre: 2,
        correlativa: [6122, 6113],
        anio: 2
    },
    {
        cod: 6222,
        nombre: "Metodologías de Desarrollo de Software",
        cuatrimestre: 2,
        correlativa: [6213],
        anio: 2
    },
    {
        cod: 6223,
        nombre: "Análisis y Diseño de Algoritmos II",
        cuatrimestre: 2,
        correlativa: [6212],
        anio: 2
    },
    {
        cod: 6224,
        nombre: "Cálculo II",
        cuatrimestre: 2,
        correlativa: [6124],
        anio: 2
    },
    {
        cod: 6311,
        nombre: "Sistemas Operativos",
        cuatrimestre: 1,
        correlativa: [6223, 6211],
        anio: 3
    },
    {
        cod: 6312,
        nombre: "Base de Datos I",
        cuatrimestre: 1,
        correlativa: [6212],
        anio: 3
    },
    {
        cod: 6313,
        nombre: "Física I",
        cuatrimestre: 1,
        correlativa: [6124, 6214],
        anio: 3
    },
    {
        cod: 6314,
        nombre: "Lenguajes y Paradigmas",
        cuatrimestre: 1,
        correlativa: [6211, 6123],
        anio: 3
    },
    {
        cod: 6321,
        nombre: "Programación Web",
        cuatrimestre: 2,
        correlativa: [6311, 6312, 6222],
        anio: 3
    },
    {
        cod: 6322,
        nombre: "Bases de Datos II",
        cuatrimestre: 2,
        correlativa: [6312, 6223],
        anio: 3
    },
    {
        cod: 6323,
        nombre: "Probabilidad y Estadística",
        cuatrimestre: 2,
        correlativa: [6124],
        anio: 3
    },
    {
        cod: 6324,
        nombre: "Ingeniería de Software I",
        cuatrimestre: 2,
        correlativa: [6222],
        anio: 3
    },
    {
        cod: 6411,
        nombre: "Organización y Gestión Empresarial",
        cuatrimestre: 1,
        correlativa: [6323, 6222],
        anio: 4
    },
    {
        cod: 6412,
        nombre: "Teoría de la Información",
        cuatrimestre: 1,
        correlativa: [6323, 6214],
        anio: 4
    },
    {
        cod: 6413,
        nombre: "Redes de Computadoras II",
        cuatrimestre: 1,
        correlativa: [6221],
        anio: 4
    },
    {
        cod: 6414,
        nombre: "Física II",
        cuatrimestre: 1,
        correlativa: [6313, 6224],
        anio: 4
    },
    {
        cod: 6421,
        nombre: "Calidad de Software",
        cuatrimestre: 2,
        correlativa: [6324],
        anio: 4
    },
    {
        cod: 6422,
        nombre: "Arquitectura de Computadoras II",
        cuatrimestre: 2,
        correlativa: [6211],
        anio: 4
    },
    {
        cod: 6423,
        nombre: "Fundamentos de la Ciencia de Datos",
        cuatrimestre: 2,
        correlativa: [6323, 6312, 6214],
        anio: 4
    },
    {
        cod: 6424,
        nombre: "Compiladores e Intérpretes",
        cuatrimestre: 2,
        correlativa: [6314],
        anio: 4
    },
    {
        cod: 6511,
        nombre: "Ingeniería de Software II",
        cuatrimestre: 1,
        correlativa: [6421],
        anio: 5
    },
    {
        cod: 6512,
        nombre: "Ciberseguridad",
        cuatrimestre: 1,
        correlativa: [6323, 6223, 6221],
        anio: 5
    },
    {
        cod: 6513,
        nombre: "Inteligencia Artificial",
        cuatrimestre: 1,
        correlativa: [6423, 6223],
        anio: 5
    },
    {
        cod: 6521,
        nombre: "Formulación y Evaluación de Proyectos TICs",
        cuatrimestre: 2,
        correlativa: [6411],
        anio: 5
    },
    {
        cod: 6522,
        nombre: "Ética y Legislación de la práctica profesional",
        cuatrimestre: 2,
        correlativa: [6411],
        anio: 5
    }
];

CUATRIMESTRE_ACTUAL = 1

roman = [
    6111, 6112, 6113, 6114, 6121,
    6122, 6123, 6124, 6212,
    6213, 6221, 6222, 6223, 
    6312, 6313, 6322, 6323,
    6413
]
user = roman


function buscarSiguientesMaterias(user, materias){
    return materias.filter(function(materia) {
        if (user.includes(materia.cod)) return false; // Si ya tengo la materia
        if (materia.cuatrimestre != CUATRIMESTRE_ACTUAL) return false; // Si la materia no se da en el cuatrimestre


        if (materia.correlativa.length === 0) {
            return true
        }
        for (let i = 0; i < materia.correlativa.length; i++) {
            if (!(user.includes(materia.correlativa[i]))) 
                return false;               
        }

        return true;
    })
}

function generarCheckboxes() {
    const contenedor = document.getElementById("seleccionMaterias");
    materias.forEach(materia => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "materia_" + materia.cod;
        checkbox.value = materia.cod;
        checkbox.className = "materia-checkbox";

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.innerText = materia.nombre;

        const div = document.createElement("div");
        div.appendChild(checkbox);
        div.appendChild(label);
        contenedor.appendChild(div);
    });
}

function buscarSiguientesMaterias(user, materias, cuatrimestreActual) {
    return materias.filter(materia => {
        if (user.includes(materia.cod)) return false;
        if (materia.cuatrimestre != cuatrimestreActual) return false;
        return materia.correlativa.every(c => user.includes(c));
    });
}

function simularTrayectoria() {
    const seleccionados = Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
        .map(cb => parseInt(cb.value));

    let user = [...seleccionados];
    let CUATRIMESTRE_ACTUAL = 1;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let anio = 1; anio <= 10; anio++) {
        for (let semestre = 0; semestre < 2; semestre++) {
            if (user.length === materias.length) return;

            const siguientes = buscarSiguientesMaterias(user, materias, CUATRIMESTRE_ACTUAL);
            if (siguientes.length === 0) {
                CUATRIMESTRE_ACTUAL = CUATRIMESTRE_ACTUAL === 1 ? 2 : 1;
                continue;
            }

            const div = document.createElement("div");
            div.className = "cuatrimestre";
            div.innerHTML = `<h3>Año ${2024 + anio} - Cuatrimestre ${CUATRIMESTRE_ACTUAL}</h3>`;
            const ul = document.createElement("ul");
            siguientes.forEach(m => {
                const li = document.createElement("li");
                li.innerText = m.nombre;
                ul.appendChild(li);
            });
            div.appendChild(ul);
            resultado.appendChild(div);

            user.push(...siguientes.map(m => m.cod));
            CUATRIMESTRE_ACTUAL = CUATRIMESTRE_ACTUAL === 1 ? 2 : 1;
        }
    }
}

// Ejecutar al cargar
window.onload = generarCheckboxes;