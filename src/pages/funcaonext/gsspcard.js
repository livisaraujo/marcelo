import { Card, Col, Container, Row, Table } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"
export async function getServerSideProps() {
    return { props: { repo: { var1: "Next", var2: "Com React" } } }
}
export default function Gsspcard({ repo }) {
    return (
        <>
            <Container>
                <h1>{repo.var1}</h1>
                <h1>{repo.var2}</h1>
            </Container>
            <Container>
                {Array.isArray(noticias) ?
                    noticias.map(abobrinha =>
                        <Row xs={1} md={2} className="g-4">
                            <Col key={2}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{abobrinha.idnoticia} - {abobrinha.titulonoticia} </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            {abobrinha.conteudonoticia}
                                        </Card.Text>
                                        <Card.Link href="#">{abobrinha.tiponoticia}</Card.Link>
                                        <Card.Link href="#">{abobrinha.datahoracadastro}</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    ) : "Carregando"}
            </Container>
        </>
    )
}