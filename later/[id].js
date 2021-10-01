
// export const getStaticPaths = async () => {
//     const res = await fetch(`https://gist.githubusercontent.com/tordar/9a7120692cf9de1dc1ad0dc30e4a33ef/raw/278026400264a206f9f2425a0cb4160f4d80c1a3/projects`)
//     const data = await res.json();

//     const paths = data.map(projects => {
//         return {
//         params: { id: projects.id.toString() }
//     }
//     })
    
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps(context){
//     const id = context.params.id
//     const req = await fetch(`https://gist.githubusercontent.com/tordar/9a7120692cf9de1dc1ad0dc30e4a33ef/raw/278026400264a206f9f2425a0cb4160f4d80c1a3/projects/${id}` )
//     const data = await req.json();
    
//     return {
//         props: { projects: data }
//     }
//   }

// const Projects = ({projects}) => {
//     console.log(projects)
//     return (
//         <div>
//           {projects.header}
//         </div>
//     )
// }

// export default Projects;