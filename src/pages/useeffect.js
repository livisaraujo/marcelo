import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function Useeffect() {
    const [titulo, setTitulo] = useState();
    const [numero, setNumero] = useState(0);
    setTimeout(() => { //função que aguarda segundo e executa uma alteração
        document.title=`Bem vindo a UseEffect:${numero}`;
        const espera = mudaTitulo();
        setTitulo(espera);
    }, 1000);
    useEffect(()=>{//
       console.log("Titulo alterado");
    },[titulo, numero])
    return <>
        <Container className="text-center">
            <h1>{titulo===""?"Bem Vindo":titulo} : {numero}</h1>
            <p> </p>
            <input type="button" 
            onClick={()=>setNumero(somaNumero(numero))} 
            value="Soma Número"/>
        </Container>
    </>
}
function mudaTitulo() {
    return "Bem Vindo a UseEffect"    
}
function somaNumero(number) {
    number++;
    return number;
}
