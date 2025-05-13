import { useRouter } from 'next/router'
export default function Cursos() {
  const router = useRouter()
  const curso = router.query.cursos;
  return <>
    <p className='text-center'>Cursos:</p>
    <div className='text-center'>
      {Array.isArray(curso) ? (
        curso.map((valor, indice) => (
          <div key={indice}>Posição: {indice}, Valor: {valor}</div>
        ))) : (<div className='text-center'>Vetor não carregado</div>)}
    </div>
  </>
}