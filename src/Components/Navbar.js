import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">



            <nav className="navbar navbar-expand-rg bg-danger">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">AboutUs</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">ContactUs</a>
                    </li>


                  </ul>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
