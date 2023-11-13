import './styles/global.css'

export default function App() {
  return (
    <>
      <div className="fundo-video">
        <img className='video' src="/bg-image.jpg" alt="asd"></img>
      </div>
      <main className="container home d-flex justify-content-between mt-5">
        <aside className="welcome d-flex align-items-center justify-content-center">
          <h1 className='title-home'>SEJAM BEM VINDOS</h1>
          <h2>CONHEÇA MAIS SOBRE O NOSSO PROJETO</h2>
        </aside>
        <aside id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/icon.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/1.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/2.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/3.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/4.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/5.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/6.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </aside>
      </main>
    </>
  )
}

