export default function Card({imgsrc, imgalt, heading, description, link}){
  return(
    <div>
    <a href={link}>
    <div className="card">
      <img src={imgsrc} alt={imgalt} />
      <br />
      <div className="container">
        <h4><b>{heading}</b></h4>
        <p>{description}</p>
      </div>
    </div>
    </a>
    </div>
  )
}