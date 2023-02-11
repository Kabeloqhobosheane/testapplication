import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';
import facesvg from './images/face.svg';
import arrowsvg from './images/arrow.svg';
import Registrationform from './components/registration-form';
import Myworld from './components/myworld';
// import  './App.css';

function GroupExample() {
  return (

   
     
      <div class="row vh-100">
          <div class="col-md-12  align-items-center my-auto">
            <div class="card registration-card">
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
                    <div class="p-2 ">
                      <button class="btn btn-primary">
                      <img src={arrowsvg}/>
                      </button>
                    </div>
                  </div>
                  </div>

                    <Registrationform/>
                    {/* <Myworld/> */}
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        
         
      

    
  );
}

export default GroupExample;