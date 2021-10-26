import React ,{useEffect,useState} from 'react'
import {useHistory,useParams} from "react-router-dom"

export const Dashboard = () => {

  const {id} = useParams();
  const isAddMode = id;

  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [userData1, setUserData1] = useState([]);

  const callAboutPage = async () =>{
      try{
      
          const res = await fetch('/prices', {
              method :"GET",
              headers:{
                  Accept: "application/json",
                  "Content-Type": "application/json"
              },
              credentials:"include"
          });

          const data = await res.json();
          console.log(data);
          setUserData(data);
          if(!res.status === 201){
              const error = new Error(res.error);
              throw error;
          }

          const res1 = await fetch('/bookings', {
            method :"GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });

        const data1 = await res1.json();
        console.log("Dashboard Page")
        setUserData1(data1);
        if(!res1.status === 201){
            const error = new Error(res1.error);
            throw error;
        }


      }catch(err){
          console.log(err)
      }
  }

  useEffect(() => {
     callAboutPage();
  },[]);

  const Editlink = (id) =>{
            
    history.push('/BookingForm/'+id)

  }

  const Checkout = (id) =>{
            
    history.push('/Invoice/'+id)

  }

  return (
    <div className="home">
      <h1 className="m-4 "><strong> DASHBOARD</strong></h1>
      <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Bookings</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Earnings</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>

<h1 className="m-4 d-flex justify-content-center">Prices</h1>
<form method="GET">
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <div class="card">
  <div class="card-header">
    AC Rooms
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Single Bed Room <span className="float-right">{userData.single_AC}</span></li>
    <li class="list-group-item">Double Bed Room<span className="float-right">{userData.double_AC}</span></li>
    <li class="list-group-item">Triple Bed Room<span className="float-right">{userData.triple_AC}</span></li>
    <li class="list-group-item">Four Bed Room<span className="float-right">{userData.four_AC}</span></li>
  </ul>
</div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <div class="card">
  <div class="card-header">
    Non AC Rooms
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Single Bed Room<span className="float-right">{userData.single_NONAC}</span></li>
    <li class="list-group-item">Double Bed Room<span className="float-right">{userData.double_NONAC}</span></li>
    <li class="list-group-item">Triple Bed Room<span className="float-right">{userData.triple_NONAC}</span></li>
    <li class="list-group-item">Four Bed Room<span className="float-right">{userData.four_NONAC}</span></li>
  </ul>
</div>
      </div>
    </div>
  </div>
</div>
 </form>

    <div>
      <h1 className="m-4 d-flex justify-content-center">Booked Rooms</h1>

    <div class="search">
      <form class="d-flex">
        <input class="form-control me-2" type="date" placeholder="date" aria-label="Search"/>
        <input class="form-control me-2" type="number" placeholder="Cust ID" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

    <div class="table5">
    <div class="table-responsive">
    <table class="table table-hover">
        <thead>
          <tr>
          <th scope="col">Customer ID</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Phone No.</th>
                      <th scope="col">Room Type</th>
                      <th scope="col">Bed</th>
                      <th scope="col">Room No.</th>
                      <th scope="col">Paid</th>
                      <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
        {
          userData1.map(userdata1 =>(
          <tr>
                      <td>{userdata1._id}</td>
                      <td>{userdata1.firstname}</td>
                      <td>{userdata1.phone}</td>
                      <td>{userdata1.type}</td>
                      <td>{userdata1.roomtype}</td>
                      <td>{userdata1.roomnumber}</td>
                      <td>{userdata1.totalpayment}</td>
            <td><button type="button" onClick={() => Editlink(userdata1._id)} class="btn btn-outline-primary m-1 update">Update</button>
            <button type="button" onClick={() => Checkout(userdata1._id)} class="btn btn-outline-danger update">Cancel</button></td>
          </tr>

          ))
        }
        </tbody>
    </table>
    </div>
</div>


    </div>

    </div>
  );
};
  
export const Checkin = () => {
  return (
    <div className="home">
      <h1 className="m-4 d-flex justify-content-center"><strong>CHECK-IN</strong></h1>
      <div>
          <div class="row">
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Total Rooms</h5>
                  <p class="card-text">Available rooms</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">AC Rooms</h5>
                  <p class="card-text">Available AC rooms</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Non AC Rooms</h5>
                  <p class="card-text">Available Non rooms</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
    </div>

    <div class="row m-4">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
            <div class="card">
            <div class="card-header">
            AC Rooms
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><a href="/BookingForm"> Available Single Bed</a></li>
              <li class="list-group-item"><a href="">  Available Double Bed</a></li>
              <li class="list-group-item"><a href=""> Available Trible Bed</a></li>
              <li class="list-group-item"><a href=""> Available Four Bed</a></li>
            </ul>
          </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
        <div class="card">
              <div class="card-body">
                <div class="card">
          <div class="card-header">
          Non AC Rooms
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><a href="">Available Single Bed</a></li>
            <li class="list-group-item"><a href="">Available Double Bed</a></li>
            <li class="list-group-item"><a href="">Available Triple Bed</a></li>
            <li class="list-group-item"><a href="">Available Four Bed</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    


    </div>
  );
};
  
export const Checkout = () => {

  const {id} = useParams();
  const isAddMode = id;

  const history = useHistory();
  const [userData, setUserData] = useState([]);

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
          console.log("bookings page check out")
          setUserData(data);
          if(!res.status === 201){
              const error = new Error(res.error);
              throw error;
          }

      }catch(err){
          console.log(err)
          history.push("/about-us/Checkout")
      }
  }

  useEffect(() => {
     callEmpPage();
  },[]);


  const Editlink = (id) =>{
            
    history.push('/BookingForm/'+id)

  }

  const Checkout = (id) =>{
            
    history.push('/Invoice/'+id)

  }
  
  return (
    <div className="home">
        <h1 className="m-4 d-flex justify-content-center"><strong>CHECK-OUT</strong></h1>

        <div class="search">
      <form class="d-flex">
        <input class="form-control me-2" type="date" placeholder="date" aria-label="Search"/>
        <input class="form-control me-2" type="number" placeholder="Room Number" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

    <div class="table5">
    <div class="table-responsive">
    <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">UserID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Room Type</th>
            <th scope="col">Room No.</th>
            <th scope="col">Paid</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
        {
          userData.map(userdata =>(

          <tr>
            <th scope="row">{userdata._id}</th>
            <td>{userdata.firstname}</td>
            <td>{userdata.phone}</td>
            <td>{userdata.type}</td>
            <td>{userdata.roomnumber}</td>
            <td>{userdata.totalpayment}</td>
            <td><button type="button" onClick={() => Editlink(userdata._id)} class="btn btn-outline-primary update m-1">Edit</button>
            <button type="button" onClick={() => Checkout(userdata._id)} class="btn btn-outline-danger update">CheckOut</button></td>
          </tr>

          ))
        }
        </tbody>
    </table>
    </div>
  </div>



</div>
  );
};
