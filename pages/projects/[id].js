
import { useRouter } from 'next/router'

export default function Project({ project }) {
    const router = useRouter()
    const { id } = router.query
    console.log({id})

  return (
    <div>
      <div>This is the id of a projects{project.id}</div>
    </div>
  )
}

export async function getStaticProps({ params }){

    const req = await fetch(`http://localhost:3000/${params.id}.json`)
    const data = await req.json();

    return {
        props: { header: data }
    }
}

export async function getStaticPaths(){
    const req = await fetch(`http://localhost:3000/projects.json`)
    const data = await req.json();

    const paths = data.map(projects => {
      return { params: { id: id } }
    })

    return {
      paths,
      fallback: false
    }
}