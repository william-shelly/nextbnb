import Head from 'next/head'
import houses from '../../houses.js'
import Layout from '../../components/Layout'

export default function House(props) {

  const content = (
    <div className="container mx-auto my-4 p-4">
      <Head>
        <title>{props.house.title}</title>
      </Head>
      <img src={props.house.picture} alt={props.house.title} className="mb-4" />
      <h2 className='font-bold'>{props.house.type} – {props.house.city}</h2>
        <p>{props.house.type}</p>
    </div>
  )

  return (
    <Layout content={content} />
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query

  return {
    props: {
      house: houses.filter((house) => house.id === parseInt(id))[0]
    }
  }
}
