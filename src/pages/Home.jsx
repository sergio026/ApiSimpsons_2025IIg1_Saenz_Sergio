
import { useState, useEffect } from 'react'
import '../style/Home.css'
import { Link } from "react-router-dom";
const Home = () => {

  return (

    <main>
      <div className='box-img' >
        <img className='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/1200px-The_Simpsons_yellow_logo.svg.png" alt="" />
      </div>

      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Las caracterisiticas de los personajes</h5>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.fuga quisquam.
              </p>
              <Link className="btn btn-primary" to="/characters">Ver mas</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}



export default Home
