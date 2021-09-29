import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Projects({ projects }) {

    const router = useRouter()
    const { id } = router.query
    console.log({id})
    
  return (
    <div>
      <div>Here are some projectss {id} </div>
    </div>
  )
}

