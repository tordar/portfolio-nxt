
export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json();

    const paths = data.map(projects => {
        return {
        params: { id: projects.id.toString() }
    }
    })
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const id = context.params.id
    const req = await fetch(`https://jsonplaceholder.typicode.com/users/${id}` )
    const data = await req.json();
    
    return {
        props: { projects: data }
    }
  }

const Projects = ({projects}) => {
    console.log(projects)
    return (
        <div>
          {projects.name}
        </div>
    )
}

export default Projects;