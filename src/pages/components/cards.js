import { Card, Col } from "react-bootstrap";

export default function Cards(noticia){
    return <>
        <Col key={noticia.idnoticia}>
            <Card>
                <Card.Header className="text-center fw-bold"><a href={`/noticias/${noticia.idnoticia}`}> {noticia.titulonoticia}</a></Card.Header>
                <Card.Body>
                    <Card.Title className="text-capitalize">{noticia.tiponoticia}</Card.Title>
                    <Card.Text>{noticia.conteudonoticia}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{new Date(noticia.datahoracadastro).toLocaleString("pt-BR")}</Card.Footer>
            </Card>
        </Col>
    </>
}