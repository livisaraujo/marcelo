import { Container } from "react-bootstrap"
export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch('https://api.github.com/repos/vercel/next.js')
    // const repo = await res.json()
    // Pass data to the page via props
    // const repo = "GetServerSidePages"
    return { props: { repo: { var1: "Next", var2: "Com React" } } }
}
export default function Gssp({ repo }) {
    return (
        <>
            <Container>
                <h1>{repo.var1}</h1>
                <h1>{repo.var2}</h1>
            </Container>
        </>
    )
}