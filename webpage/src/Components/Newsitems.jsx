

const newsitems = ({title, description, src, url}) => {
  return (
    <div>
      <div className="card" style={{maxWidth:"340px"}}>
  <img src={src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">READ MORE</a>
  </div>
</div>
    </div>
  )
}

export default newsitems