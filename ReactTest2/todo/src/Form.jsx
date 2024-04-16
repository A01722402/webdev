// Aquí se crea una función para establecer el formulario 
// el formulario servíra para crear nuevas metas (todos)

// dentro de Form() tenemos el handleSubmit el cual se utiliza para borrar el texto 
// después de que el usuario creee una nueva meta. Esto lo logra a través de dos pasos, el primero es
// event.preventDefault() que se utiliza para obligar a que la página no se refrezque cuando el usuairo envía formulario
// (eso es comportamiento default de HTML). 

// Después se utiliza event.target.reset() en el cual 'event.target' se refiere al texto dentro de la casilla de input.
// Entiendo que en este caso handleSubmit se comporta como una función, que recibe como evento 'onSubmit'
// pero no comprendo la sintaxis.

// ***** Después de hablar con un compañero *****
// ahora entiendo que => es una manera compacta de declara una función. La manera en la que está arreglado el código
// hace que handleSubmit sea un callback dentro del formulario. 
// el resto del código es más sencillo de entender.

// Envolvemos el imput en un label con el atributo htmlFor="todo" esto nos ayuda a ligar el input con el label
// El label se utiliza para accesibilidad, en el sentido que lectores en altavoz (para los ciegos) encuentran el label 
// facilemnte, además te permiten seleccionar el label para comenzar a escribir en el input field. En este caso el autor del 
// programa no le añade texto al label, un ejemplo que sí lo hace es el siguiente:

/*

<label htmlFor="username">Username:</label>
<input
  type="text"
  id="username"
  name="username"
  placeholder="Enter your username"
/>

*/

// src/components/Form.jsx
function Form() {
    const handleSubmit = (event) => {
      event.preventDefault();
      // reset the form
      event.target.reset();
    };
    return (
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Write your next task"
          />
        </label>
        <button>
          <span className="visually-hidden">Submit</span>
          <svg>
            <path d="" />
          </svg>
        </button>
      </form>
    );
  }
  export default Form;
  