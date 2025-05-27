import { Card, Col, Container, Row, Table } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"
export async function getServerSideProps() {
    return { props: { repo: { var1: "Next", var2: "Com React" } } }
}
export default function Gsspcard({ repo }) {
    return (
        <>
            <Container>
                <Row xs={1} md={3} className="g-4 pt-2">
                    {Array.from({ length: noticias.length }).map((_, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Header className="text-center fw-bold">{noticias[idx].titulonoticia}</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-capitalize">{noticias[idx].tiponoticia}</Card.Title>
                                    <Card.Text>
                                        {noticias[idx].conteudonoticia}
                                    </Card.Text>
                                    <Card.Subtitle className="mb-2">{noticias[idx].noticiatipo}</Card.Subtitle>
                                </Card.Body>
                                <Card.Footer className="fst-italic">{new Date(noticias[idx].datahoracadastro).toLocaleString("pt-BR")}</Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </>
    )
}