export default function CoreConcept({image, title, description}){
  //const {image, title, description } = concept
  return (
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}