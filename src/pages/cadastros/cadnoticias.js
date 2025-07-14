import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Cadnoticias() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="titulonoticia">
          <Form.Label>Informe o título da Notícia</Form.Label>
          <Form.Control type="text" placeholder="Informe o Título" className='bg-primary-subtle' />
          <Form.Text className="text-muted">
            Informe o Título da sua Notícia.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="noticia">
          <Form.Label>Informe a Notícia</Form.Label>
          <Form.Control as="textarea" rows={3} className='bg-primary-subtle' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tiponoticia">
          <Row>
            <Col sm={3}>
              <Form.Label>Informe o tipo da Notícia</Form.Label>
            </Col>
            <Col sm={9}>
              <Form.Select className='bg-primary-subtle'>
                <option>Selecione uma abaixo</option>
                <option value="1">Ciência</option>
                <option value="2">Educação</option>
                <option value="3">Pesquisa</option>
                <option value="4">Esportes</option>
                <option value="5">Cultura</option>
                <option value="6">Entreterimento</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

