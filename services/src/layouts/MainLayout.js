import React from 'react'

function MainLayout({children}) {
  return (

    <div>
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Admin Dashboard</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main>
            <div className='container mt-3'>
                <div className='bg-light p-3 mt-4 rounded-3'>
                    {children}
           </div>
                </div>

        </main>

      
    </div>
    
  )
}

export default MainLayout;
