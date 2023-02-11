import venussvg from './venus-symbol.svg';
import marssvg from './mars-symbol.svg';
import cardsvg from './card.svg';
import cardwhitesvg from './card--white.svg';
import './Styles.css';
const registrationform = () => {
    return ( 
        <div class="col-md-7 text-center home">
                  
                    <form >
                      <div class="d-grid gap-2 align-items-center d-md-block ">
                      <div class="mb-3 row">
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-7">
                          <input type="name" class="form-control" id="name"/>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="gender" class="col-sm-2 col-form-label">Gender</label>
                        <div class="col-sm-7">
                        <button class="btn btn-reg">
                        <img src={venussvg}/> </button> Male
                        
                        <button class="btn ">    </button>

                        <button class="btn btn-reg">
                        <img src={marssvg}/> </button>Female
                        
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="date" class="col-sm-2 col-form-label">Date of Birth</label>
                        <div class="col-sm-7">
                          <input type="date" class="form-control" id="date"/>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-7">
                          <input type="email" class="form-control" id="email"/>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="mobile" class="col-sm-2 col-form-label">Mobile</label>
                        <div class="col-sm-7">
                          <input type="mobile" class="form-control" id="mobile"/>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="customerid" class="col-sm-2 col-form-label">Customer ID</label>
                        <div class="col-sm-7">
                          <input type="customerid" class="form-control" id="customerid"/>
                        </div>
                      </div>
                      <div class="mb-3 row ">
                        <label for="membership" class="col-sm-2 col-form-label">Membership</label>
                        <div class="col-sm-7">
                        <button class="btn btn-mem">
                        <img src={cardwhitesvg}/>
                        </button> Classic
                        <button class="btn btn-reg">
                        <img src={cardsvg}/>
                        </button> Silver
                        <button class="btn btn-reg">
                        <img src={cardsvg}/>
                        </button> Gold
                        </div>
                      </div>
                      <div class="col-12">
                        <button class="btn btn-light me-md-2" type="cancel">Cancel</button>
                        <button class="btn btn-save" type="submit">Save</button>
                      </div>
                      
                      </div>
                    </form>
                    </div>

     );
}
 
export default registrationform;