// Array inicial de amigos (estructura de datos)
let amigos = [];

// Referencias a los elementos del HTML
const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const lista = document.getElementById("lista");
const agregarBtn = document.getElementById("agregarBtn");
const guardarBtn = document.getElementById("guardarBtn");
const cargarBtn = document.getElementById("cargarBtn");

// Agregar un amigo al array
agregarBtn.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  const edad = parseInt(edadInput.value);

  if (nombre === "" || isNaN(edad)) {
    alert("Completá los datos correctamente.");
    return;
  }

  // Creamos un objeto literal
  const nuevoAmigo = { nombre, edad };
  amigos.push(nuevoAmigo);
  mostrarLista();

  // Limpiar campos
  nombreInput.value = "";
  edadInput.value = "";
});

// Mostrar la lista en pantalla
function mostrarLista() {
  lista.innerHTML = "";
  amigos.forEach((a, i) => {
    const li = document.createElement("li");
    li.textContent = `${a.nombre} (${a.edad} años)`;
    lista.appendChild(li);
  });
}

// Guardar el array en JSON (localStorage)
guardarBtn.addEventListener("click", () => {
  const jsonString = JSON.stringify(amigos); // convierte el array en texto JSON
  localStorage.setItem("misAmigos", jsonString);
  alert("✅ Lista guardada correctamente.");
});

// Cargar el JSON desde localStorage
cargarBtn.addEventListener("click", () => {
  const data = localStorage.getItem("misAmigos");
  if (!data) return alert("No hay datos guardados.");
  amigos = JSON.parse(data); // convierte el texto JSON en objeto JS
  mostrarLista();
});
