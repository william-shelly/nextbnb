export default function House(props) {
  console.log(props)
  return(
    <div className="bg-gray-100 mb-4 p-4 rounded-xl">
      <img src={props.picture} width="100%" alt={props.title} className="mb-4" />
      <h2 className='font-bold'>{props.type} – {props.city}</h2>
      <p>{props.type}</p>
    </div>
  )
}
