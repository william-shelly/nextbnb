import Head from 'next/head'
import Image from 'next/image'
import House from '../components/House'
import houses from '../houses.js'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const content = (
  <div className='container mx-auto'>
    <div className="columns-1 py-4">
      <h2 className='font-bold'>Places to Stay</h2>
    </div>
    <div className="columns-3 houses">
      {houses.map((house, index) => {
        return <House key={index} {...house} />
      })}
    </div>
  </div>
)

export default function Home() {
  return (
    <Layout content={content} />
  )
}
