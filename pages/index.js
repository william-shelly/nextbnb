import Head from 'next/head'
import Image from 'next/image'
import houses from '../houses.js'
import House from '../components/House'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <div className='container mx-auto'>
  <div className="columns-1 py-4">
    <h2 className='font-bold'>Places to Stay</h2>
  </div>
  <div className="columns-3 houses">
    {houses.map((house, index) => {
      return <House key={index} {...house} />
    })}
  </div>
  </div>
}
