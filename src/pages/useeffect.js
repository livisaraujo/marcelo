import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Useeffect() {
    const [titulo, setTitulo] = useState("");
    setTimeout(() => {
        document.title="Bem vindo a UseEffect";
        const espera = mudaTitulo();
        setTitulo(espera);
    }, 3000);
    return <>
        <Container className="text-center">
            <h1>{titulo===""?"Bem Vindo":titulo}</h1>
            <p> </p>
        </Container>
    </>
}
function mudaTitulo() {
    return "Bem Vindo a UseEffect"    
}
