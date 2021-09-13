import styles from '@/styles/Home.module.css'

import ResourceList from "@/components/ResourceList";
import ResourceHighlight from "@/components/ResourceHighlight";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

// const API_URL = `http://localhost:3000/api`
const API_URL = `http://localhost:3001`

export default function Home({data}) {


  return (
    <>
      <ResourceHighlight resources={data.slice(0,2)}/>
      <Newsletter/>
      <ResourceList resources={data.slice(2)}/>
      <Footer/>
    </>
  )
}

// export const getStaticProps = async () => {
//     const data = await fetch(`${API_URL}/resources`, {
//         method:'GET'
//     })
//     const resources = await data.json()
//     return {
//         props: {
//             data: resources,
//             revalidate: 5
//         }
//     }
// }

export const getServerSideProps = async () => {
    const data = await fetch(`${API_URL}/api/resources`, {
        method:'GET'
    })
    const resources = await data.json()

    return {
        props: {
            data: resources
        }
    }
}


