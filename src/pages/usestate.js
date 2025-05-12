import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Usestat() {
    const [count, setCount] = useState(0);
    return <>
        <Container className="text-center">
            <p>
                {count}
            </p>
            <button
                className="btn btn-success"
                onClick={async () => { setCount(await addOne(count)) }}>
                Add Count
            </button>
        </Container>
    </>
}
function addOne(count) {
    count++;
    return new Promise((promessa) => {
        setTimeout(() => {
            promessa(count);
        }, 5000);
    })
}