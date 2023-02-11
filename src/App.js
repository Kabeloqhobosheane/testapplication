import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';
import facesvg from './images/face.svg';
import arrowsvg from './images/arrow.svg';
import arrowinvertsvg from './images/arrow-invert.svg';
import Registrationform from './components/registration-form';
import Myworld from './components/myworld';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import  './App.css';
import './components/Styles.css'

function GroupExample() {

  const [ isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: -100, y: 800, opacity: 0},
    enter: { x: 0, y: 0, opacity: 1 },
    leave: {},
  });

  return (

   
     
      <div class="row vh-100">
          <div class="col-md-12  align-items-center my-auto">
            <div class="card mb-3 registration-card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-5 text-center bg-warning">
                  <div class="d-flex flex-column justify-content-between bd-highlight mb-3">
                    <div class="p-2 bd-highlight">
                      <img src={facesvg}/>
                      </div>
                    <div class="p-2 bd-highlight">
                      <h1>Front-end challenge!</h1>
                      <p>This is a design that you will need <br/>to code up and impress us</p>
                    </div>
                    <div class="p-2 bd-highlight">
                      <button className="btn button-home" onClick={ () => {
                        setIsVisible(v => !v);
                        // 
                        // <img src={arrowsvg}/>
                      }
                      }>
                      {isVisible ?  <img src={arrowinvertsvg}/> : <img src={arrowsvg}/> }
                      
                      
                      </button>
                    </div>
                  </div>
                  </div>
                  {isVisible ? <Myworld/> : <Registrationform/> }
                  <div className="container"> 
                  {isVisible ? <div className="home" /> : '' }
                    {transition((style, home) => 
                      home ? <animated.div className="home" style=  {style}  />  : ''
                    ) }
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
         
      

    
  );
}

export default GroupExample;