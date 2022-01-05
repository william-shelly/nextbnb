import { useState } from 'react'
import Head from 'next/head'
import houses from '../../houses.js'
import Layout from '../../components/Layout'
import DateRangePicker from '../../components/DateRangePicker'

const calcNumberOfNightsBetweenDates = (startDate, endDate) => {
  const start = new Date(startDate) // clone
  const end = new Date(endDate) // clone
  let dayCount = 0

  while (end > start) {
    dayCount ++
    start.setDate(start.getDate() + 1)
  }
  return dayCount
}

export default function House(props) {
  const [dateChosen, setDateChosen] = useState(false)
  const [numberOfNightsBetweenDates, setNumberOfNightsBetweenDates] = useState(0)

  const content = (
    <div className="container mx-auto my-0 py-4">
      <Head>
        <title>{props.house.title}</title>
      </Head>
      <div className='flex justify-around gap-4'>
        <article>
          <img src={props.house.picture} alt={props.house.title} className="mb-4" />
          <h2 className='font-bold'>{props.house.type} – {props.house.city}</h2>
          <p>{props.house.type}</p>
        </article>
        <aside>
          <div className="columns-1">
            <h2>Choose Date</h2>
            <DateRangePicker
              datesChanged={(startDate, endDate) => {
                setNumberOfNightsBetweenDates(
                  calcNumberOfNightsBetweenDates(startDate, endDate)
                )
                setDateChosen(true)
              }}
             />
             {
               dateChosen && (
                 <div>
                   <h2>Price per Night</h2>
                   <p>${props.house.price}</p>
                   <h2>Total price for booking</h2>
                   <p>${(numberOfNightsBetweenDates * props.house.price).toFixed(2)}</p>
                   <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Reserve</button>
                 </div>
               )
             }
          </div>
        </aside>
      </div>
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
