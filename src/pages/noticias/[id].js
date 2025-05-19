import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  return <div className='text-center'>
    <h1> Rotas dinâmicas</h1>
    <p>ID: {router.query.id}</p>
  </div>
}