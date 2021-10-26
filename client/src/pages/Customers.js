import React ,{useEffect,useState} from 'react'
import {useHistory,useParams} from "react-router-dom"

  
export const Customers = () => {

  const {id} = useParams();
  const isAddMode = id;

  const history = useHistory();
  const [userData, setUserData] = useState([]);
  const [userData1, setUserData1] = useState([]);
  const [userData2, setUserData2] = useState([]);

  const callEmpPage = async () =>{
    try{
    
        const res = await fetch('/bookings', {
            method :"GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });

        const data = await res.json();
        console.log("History Page")
        setUserData(data);
        if(!res.status === 201){
            const error = new Error(res.error);
            throw error;
        }

        const res1 = await fetch('/addstaffdata', {
            method :"GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });

        const data1 = await res1.json();
        console.log("History Page")
        setUserData1(data1);
        if(!res1.status === 201){
            const error = new Error(res1.error);
            throw error;
        }

        const res2 = await fetch('/addlogindata', {
            method :"GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });

        const data2 = await res2.json();
        console.log("History Page")
        setUserData2(data2);
        if(!res2.status === 201){
            const error = new Error(res2.error);
            throw error;
        }

    }catch(err){
        console.log(err)
        history.push("/Customers")
    }
}

useEffect(() => {
   callEmpPage();
},[]);


const Editlink = (id) =>{
          
  history.push('/CustomerDetail/'+id)

}

const Editlink1 = (id) =>{
          
  history.push('/Staffdetail/'+id)

}

const Editlink2 = (id) =>{
          
  history.push('/ReceptionistDetail/'+id)

}

  return (
    <div className="events">
      <h1 className="m-4 d-flex justify-content-center"><strong>CUSTOMERS HISTORY</strong></h1>

<div class="customercard">
  <div class="card">
      <div class="card-header">
       <h1>Details </h1>
       <div class="search">
          <form class="d-flex">
              <input class="form-control me-2" type="date" placeholder="date" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
       </div>
      </div>
      <div class="card-body">
          <div class="customertable">
              <div class="table-responsive">
              <table class="table table-hover table-info">
                  <thead>
                    <tr>
                      <th scope="col">Customer ID</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Phone No.</th>
                      <th scope="col">Room Type</th>
                      <th scope="col">Bed</th>
                      <th scope="col">Room No.</th>
                      <th scope="col">Paid</th>
                      <th scope="col">Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    userData.map(userdata =>(

                    <tr>
                      <td>{userdata._id}</td>
                      <td>{userdata.firstname}</td>
                      <td>{userdata.phone}</td>
                      <td>{userdata.type}</td>
                      <td>{userdata.roomtype}</td>
                      <td>{userdata.roomnumber}</td>
                      <td>{userdata.totalpayment}</td>
                      <td><a href="" onClick={() => Editlink(userdata._id)}>VIEW<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg></a></td>
                    </tr>
                        
                    ))
              
                  }      
                  </tbody>
              </table>
              </div>
          </div>
          
      </div>
    </div>
</div>

<h1 className="m-4 d-flex justify-content-center"><strong>STAFFS HISTORY</strong></h1>

<div class="customercard">
  <div class="card">
      <div class="card-header">
       <h1>Details </h1>
       <div class="search">
          <form class="d-flex">
              <input class="form-control me-2" type="date" placeholder="date" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
       </div>
      </div>
      <div class="card-body">
          <div class="customertable">
              <div class="table-responsive">
              <table class="table table-hover table-info">
                  <thead>
                    <tr>
                      <th scope="col">Staff ID</th>
                      <th scope="col">Staff Name</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Designation</th>
                      <th scope="col">Phone No.</th>
                      <th scope="col">Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    userData1.map(userdata1 =>(

                    <tr>
                      <td>{userdata1._id}</td>
                      <td>{userdata1.firstname}</td>
                      <td>{userdata1.gender}</td>
                      <td>{userdata1.designation}</td>
                      <td>{userdata1.phone_no}</td>
                      <td><a href="" onClick={() => Editlink1(userdata1._id)}>VIEW<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg></a></td>
                    </tr>

                    ))
              
                  }      
                  </tbody>
              </table>
              </div>
          </div>
          
      </div>
    </div>
</div>

<h1 className="m-4 d-flex justify-content-center"><strong>RECEPTIONIST HISTORY</strong></h1>

<div class="customercard">
  <div class="card">
      <div class="card-header">
       <h1>Details </h1>
       <div class="search">
          <form class="d-flex">
              <input class="form-control me-2" type="date" placeholder="date" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
       </div>
      </div>
      <div class="card-body">
          <div class="customertable">
              <div class="table-responsive">
              <table class="table table-hover table-info">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Age</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Joining Date</th>
                      <th scope="col">Phone No.</th>
                      <th scope="col">Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    userData2.map(userdata2 =>(

                    <tr>
                      <td>{userdata2.name}</td>
                      <td>{userdata2.email}</td>
                      <td>{userdata2.age}</td>
                      <td>{userdata2.gender}</td>
                      <td>{userdata2.joining_date}</td>
                      <td>{userdata2.phone}</td>
                      <td><a href="" onClick={() => Editlink2(userdata2._id)}>VIEW<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg></a></td>
                    </tr>

                    ))
              
                  }      
                  </tbody>
              </table>
              </div>
          </div>
          
      </div>
    </div>
</div>


    </div>
  );
};
  
export const EventsOne = () => {
  return (
    <div className="events">
      <h1> Event1</h1>
    </div>
  );
};
  
export const EventsTwo = () => {
  return (
    <div className="events">
      <h1> Event2</h1>
    </div>
  );
};