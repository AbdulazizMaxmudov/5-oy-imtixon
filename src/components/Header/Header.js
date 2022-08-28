import './header.css'

export const Header =()=>{
  const handleform = (evt)=>{
evt.preventDefault()
console.log(evt);
  }
  return(
    <div className='headerhome'>
    <div className='container'>
    <div className='hader'>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="carusel-block">
        <h1>Temuriylar 
            davri 
            adabiyoti</h1>
      </div>
    </div>
    <div className="carousel-item">
    <div>
    <div className="carusel-block">
      <div className="carusel-blockitem">
      <h1>Jadidlar davri adabiyoti</h1>
      </div>
      </div>
      </div>
    </div>
    <div className="carousel-item">
    <div>
    <div className="carusel-block">
        <h1>Mustaqillik davri adabiyoti</h1>
      </div>
      </div>
    </div>
    <div className="carousel-item">
    <div>
    <div className="carusel-block">
        <h1>Sovet davri adabiyoti</h1>
      </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
    </div>
    </div>

    </div>
  
    </div>
  )
}