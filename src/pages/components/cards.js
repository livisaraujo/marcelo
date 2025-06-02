import { Card } from "react-bootstrap";

export default function Cards(prop) {
    return (<>
        <Card>
            <Card.Header className="text-center fw-bold">{prop.titulonoticia}</Card.Header>
            <Card.Body>
                <Card.Title className="text-capitalize">{prop.tiponoticia}</Card.Title>
                <Card.Subtitle className="mb-2">{prop.noticiatipo}</Card.Subtitle>
                <Card.Text>
                    {prop.conteudonoticia}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="fst-italic">{new Date(prop.datahoracadastro).toLocaleString("pt-BR")}</Card.Footer>
        </Card>
    </>)
}