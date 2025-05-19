import { useRouter } from 'next/router'
export default function Cursos() {
  const router = useRouter()
  const curso = router.query.cursos;
  return <>
    
    <div className='text-center'>
      <h1>Rota Dinâmica Vetor</h1>
      {Array.isArray(curso) 
      ? (curso.map((valor, indice) => (
          <div key={indice}>Posição: <b>{indice}</b>, Valor: <b>{valor}</b></div>
        ))) 
        : (<div className='text-center'>Vetor não carregado</div>)}
    </div>
  </>
}