import React,{useState} from 'react'
import Button from '@/components/Button';

function contador() {
    const [contador, setContador] = useState(0);

    function incrementa(){
        setContador(contador+1);
        console.log('Incrementa');
    }  

    function decrementa(){
        setContador(contador-1);
        console.log('Decrementa');
    }  

    function reset(){
        setContador(0);
        console.log('Reset');
    }  

    return (
        <div>
            <p>Contador: {contador}</p>
            <Button color="green" onClick={incrementa}>Incrementar</Button>
            <Button color="blue" onClick={decrementa}>Incrementar</Button>
            <Button color="red" onClick={reset}>Incrementar</Button>
        </div>
    );
}

export default contador