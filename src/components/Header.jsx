import { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className='header d-flex flex-row justify-content-between'>
        <img className='logo-header' src="/adaptive-icon.jpg" alt="asd"></img>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-5">
                <li className="nav-item">
                  <a className="nav-link" href="#">PodMat</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Vídeo Aulas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Questões Inéditas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Quem somos?</a>
                </li>
              </ul>
              <br />
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      
    )
  }
}
