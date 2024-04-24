import React from 'react'
import Saludo from '@/components/Saludo'
import Card from '@/components/Card'
import Button from '@/components/Button';

function blog() {
  return (
    <div>
        <Saludo nombre="Juan" apellido="Perez"/>
        <Card>
            <h1>Titulo</h1>
            <p>Ejemplo de card</p>
        </Card>
        <button className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded">
            Botón rojo
        </button>
        <Button color="green">Botón verde</Button>
        <Button color="blue">Botón verde</Button>
        <Button color="red">Botón verde</Button>
    </div>
  );
}

export default blog