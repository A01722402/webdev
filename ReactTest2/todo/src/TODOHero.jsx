// esta función toma 'props' como argumentos 
// 'props' viene de 'properties'
// es como un objeto en otros lenguajes de programación

// esta función en específico muestra los completed todos sobre los faltantes (objetivos por hacer) 
// por lo que estoy aprendiendo las funciones en jsx son muy útiles para guardar código html 
// como si en python todo se organizara con print() s


// src/components/TODOHero.jsx
function TODOHero({ todos_completed, total_todos }) {
    return (
      <section>
        <div>
          <p>Task Done</p>
          <p>Keep it up</p>
        </div>
        <div>
          {todos_completed}/{total_todos}
        </div>
      </section>
    );
  }
  export default TODOHero;