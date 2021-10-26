import React ,{useEffect,useState} from 'react'
import {useHistory, useParams} from "react-router-dom"
  
export const Services = () => {

  const history = useHistory();
  const [userData, setUserData] = useState([]);
  const [userData1, setUserData1] = useState([]);
  const [userData2, setUserData2] = useState([]);

  const callEmpPage = async () =>{
    try{
    
        const res = await fetch('/addroomdata', {
            method :"GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });

        const data = await res.json();
        console.log("service page ")
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
        console.log("service page 1")
        setUserData1(data1);
        if(!res1.status === 201){
            const error = new Error(res1.error);
            throw error;
        }


        const res2 = await fetch('/addvehicledata', {
            method :"GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });

        const data2 = await res2.json();
        console.log("service page 2")
        setUserData2(data2);
        if(!res2.status === 201){
            const error = new Error(res2.error);
            throw error;
        }

    }catch(err){
        console.log(err)
        history.push("/services")
    }
}

  useEffect(() => {
    callEmpPage();
  },[]);

  const Editlink = (id) =>{
              
    history.push('/services/Addrooms/'+id)

  }

  const Editlinkstaff = (id) =>{
              
    history.push('/services/Addstaffs/'+id)

  }

  const Editlinkvehicle = (id) =>{
              
    history.push('/services/Addvehicles/'+id)

  }

  const DeleteRoom = async (id) =>{
            
    await fetch('/services/'+id, {
    method :"DELETE",
    headers:{
        "Content-Type": "application/json"
    }
});
    window.alert("Sucessfull Room DELETED")
    console.log("Sucessfull Room DELETED")
    
    callEmpPage();

}

  const DeleteStaff = async (id) =>{
            
    await fetch('/servicesstaff/'+id, {
    method :"DELETE",
    headers:{
        "Content-Type": "application/json"
    }
});
    window.alert("Sucessfull Staff DELETED")
    console.log("Sucessfull Staff DELETED")
    
    callEmpPage();

}

  const DeleteVehicle = async (id) =>{
            
    await fetch('/servicessvehicle/'+id, {
    method :"DELETE",
    headers:{
        "Content-Type": "application/json"
    }
});
    window.alert("Sucessfull Vehicle DELETED")
    console.log("Sucessfull Vehicle DELETED")
    
    callEmpPage();

}


  return (
<div className="services">
       <h1 className="m-4 d-flex justify-content-center"><strong>ROOMS</strong></h1>

  <div class="row mb-2">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">TOTAL AC ROOMS</h5>
        <p class="card-text">100</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mb-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">TOTAL NON AC ROOMS</h5>
        <p class="card-text">100</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>


    <div class="search">
      <form class="d-flex">
        <input class="form-control me-2" type="number" placeholder="Room Number" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <div class="table5">
    <div class="table-responsive">
    <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Room ID</th>
            <th scope="col">Room No.</th>
            <th scope="col">Type</th>
            <th scope="col">AC/Non AC</th>
            <th scope="col">Meal</th>
            <th scope="col">Amounts</th>
            <th scope="col">Activity</th>
          </tr>
        </thead>
        <tbody>
        {
          userData.map(userdata =>(

          <tr>
            <th scope="row">{userdata._id}</th>
            <th scope="row">{userdata.room_no}</th>
            <td>{userdata.type}</td>
            <td>{userdata.roomtype}</td>
            <td>{userdata.meal}</td>
            <td>{userdata.amount}</td>
            <td><button type="button" onClick={() => Editlink(userdata._id)} class="btn btn-outline-primary update m-1">Edit</button>
            <button type="button" onClick={() => DeleteRoom(userdata._id)} class="btn btn-outline-danger update">Delete</button></td>
          </tr>

          ))
        }
        </tbody>
    </table>
    </div>
  </div>

  <h1 className="m-4 d-flex justify-content-center"><strong>Staffs</strong></h1>


  <div class="row mb-2">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">TOTAL STAFFS WORKING</h5>
        <p class="card-text">50</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mb-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">TOTAL STAFFS ON HOLIDAY</h5>
        <p class="card-text">5</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>

  <div class="search">
      <form class="d-flex">
        <input class="form-control me-2" type="number" placeholder="Staff ID" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

    <div class="table5">
    <div class="table-responsive">
    <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Staff ID</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Designation</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Joining</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {

          userData1.map(userdata =>(

          <tr>
            <th scope="row">{userdata._id}</th>
            <td>{userdata.firstname}</td>
            <td>{userdata.gender}</td>
            <td>{userdata.designation}</td>
            <td>{userdata.phone_no}</td>
            <td>{userdata.email}</td>
            <td>{userdata.joining_date}</td>
            <td><button type="button"  onClick={() => Editlinkstaff(userdata._id)} class="btn btn-outline-primary update m-1">Edit</button>
            <button type="button" onClick={() => DeleteStaff(userdata._id)} class="btn btn-outline-danger update">Delete</button></td>
          </tr>

          ))

        }
        </tbody>
    </table>
    </div>
  </div>

  <h1 className="m-4 d-flex justify-content-center"><strong>Transportations</strong></h1>

  <div class="search">
      <form class="d-flex">
        <input class="form-control me-2" type="number" placeholder="Staff ID" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

    <div class="table5">
    <div class="table-responsive">
    <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Vehicles</th>
            <th scope="col">Vehicle No.</th>
            <th scope="col">Seating Capacity</th>
            <th scope="col">Type</th>
            <th scope="col">Driver's Name</th>
            <th scope="col">Buying Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {

          userData2.map(userdata =>(

          <tr>
            <th scope="row">{userdata.vehicle}</th>
            <td>{userdata.vehicle_no}</td>
            <td>{userdata.seating_capicity}</td>
            <td>{userdata.type}</td>
            <td>{userdata.driver_name}</td>
            <td>{userdata.buying_date}</td>
            <td><button type="button" onClick={() => Editlinkvehicle(userdata._id)} class="btn btn-outline-primary update m-1">Edit</button>
            <button type="button" onClick={() => DeleteVehicle(userdata._id)} class="btn btn-outline-danger update">Delete</button></td>
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
  
export const Addrooms = () => {

  const {id} = useParams();
  const isAddMode = id;

  const history = useHistory();
  const [room,setRoom] = useState({
    room_no :"", type :"", roomtype :"", meal :"", amount :""
  });

  useEffect(() => {
    loadUser();
  },[]);

    let name,value;
    const handleTnputs = (e) =>{
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setRoom({...room,[name]:value})
      }

      const loadUser = async () =>{
        const res = await fetch("/addroom/"+id, {
            method :"PATCH",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });
        const data = await res.json();
        console.log("hello Add Room edit page")
        setRoom(data);
      } 
      
        const PostData = async(e) =>{
          e.preventDefault();
          const {room_no,type,roomtype,meal,amount} = room

          if(isAddMode){

            const res1 = await fetch("/addroom/"+id,{
              method :"PATCH",
              headers:{
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                room_no,type,roomtype,meal,amount
              })
          })
          const data = await res1.json();
          if(res1.status === 404 || !data){
              window.alert("Invalid  EDIT")
              console.log("invalid  EDIT")
          }else{
              window.alert("Sucessfull Data EDIT")
              console.log("Sucessfull Data EDIT")

              history.push("/services")
          }

          }else{

            const res = await fetch("/addroom",{
              method :"POST",
              headers:{
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                room_no,type,roomtype,meal,amount
              })
          })

            const data = await res.json();
            console.log(data)
            if(res.status ===421 || res.status ===402 || res.status ===404 || !data){
                window.alert("Invalid Room Add Please fill it")
                console.log("invalid Room Add")
            }else{
                window.alert("Sucessfull ADD Room Done")
                console.log("Sucessfull ADD Room Done")
                
                history.push("/services")
            }

          }
          
      } 
       

  return (
    <div className="services">

    <div class="back m-2">
        <a href="/services"><button type="button" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg></button>
        </a>
    </div>
        <h1 className="m-4 d-flex justify-content-center"><strong>ADD ROOMS</strong></h1>

        <form  method="POST">
                <div class="form-row">
                    <div class="col-md-6">
                        <label for="firstName" class="form-label">Room Number</label>
                        <input type="text" class="form-control" placeholder="First name"  name="room_no" 
                           value ={room.room_no} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Rent Per Night</label>
                        <input type="Phone" class="form-control" id="Phone" placeholder="Rent Per Night" name="amount" 
                           value ={room.amount} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="col-md-4">
                    <label for="inputState">AC/ Non AC</label>
                    <select id="inputState" class="form-control" name="type" 
                     value ={room.type} onChange = {handleTnputs}>
                        <option selected>Choose...</option>
                        <option>AC</option>
                        <option>Non AC</option>
                    </select>
                    </div>
                    <div class="col-md-4">
                    <label for="inputState">Room Type</label>
                    <select id="inputState1" class="form-control" name="roomtype" 
                     value ={room.roomtype} onChange = {handleTnputs}>
                        <option selected>Choose...</option>
                        <option>Single</option>
                        <option>Double</option>
                        <option>Triple</option>
                        <option>Four</option>
                    </select>
                    </div>
                    <div class="col-md-4">
                    <label for="inputState">Meal</label>
                    <select id="inputState2" class="form-control" name="meal" 
                     value ={room.meal} onChange = {handleTnputs}>
                        <option selected>Choose...</option>
                        <option>Free Breakfast</option>
                        <option>Free Dinner</option>
                        <option>Free Welcome Drink</option>
                        <option>No Free Food</option>
                    </select>
                    </div>
                    <div class="col-auto my-1 mt-4">
                    <button type="submit" class="btn btn-primary p-3" name ="addrooms" onClick={PostData}>Submit</button>
                    </div>
                </div>
      </form>

    </div>
  );
};
  
export const Addstaffs = () => {

  const {id} = useParams();
  const isAddMode = id;

  const history = useHistory();
  const [staff,setStaff] = useState({
    firstname :"", designation :"", phone_no :"", email :"", joining_date :"", gender:""
  });

  useEffect(() => {
    loadUser();
  },[]);

    let name,value;
    const handleTnputs = (e) =>{
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setStaff({...staff,[name]:value})
      }

      const loadUser = async () =>{
        const res = await fetch("/addstaff/"+id, {
            method :"PATCH",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });
        const data = await res.json();
        console.log("hello Add Staff edit page")
        setStaff(data);
      } 
      
        const PostData = async(e) =>{
          e.preventDefault();
          const {firstname,designation,phone_no,email,joining_date,gender} = staff

          if(isAddMode){

            const res1 = await fetch("/addstaff/"+id,{
              method :"PATCH",
              headers:{
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                firstname,designation,phone_no,email,joining_date,gender
              })
          })
          const data = await res1.json();
          if(res1.status === 404 || !data){
              window.alert("Invalid  EDIT")
              console.log("invalid  EDIT")
          }else{
              window.alert("Sucessfull Data EDIT")
              console.log("Sucessfull Data EDIT")

              history.push("/services")
          }

          }else{

            const res = await fetch("/addstaff",{
              method :"POST",
              headers:{
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                firstname,designation,phone_no,email,joining_date,gender
              })
          })

            const data = await res.json();
            console.log(data)
            if(res.status ===421 || res.status ===402 || res.status ===404 || !data){
                window.alert("Invalid Staff Add Please fill it")
                console.log("invalid Staff Add")
            }else{
                window.alert("Sucessfull ADD Staff Done")
                console.log("Sucessfull ADD Staff Done")
                
                history.push("/services")
            }

          }
          
      }

  return (
    <div className="services">

      <div class="back m-2">
        <a href="/services"><button type="button" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg></button>
        </a>
      </div>

     <h1 className="m-4 d-flex justify-content-center"><strong>ADD Staffs</strong></h1>

    <form  method="POST">
        <div class="form-row">
            <div class="col-md-6">
                <label for="firstName" class="form-label">Name</label>
                <input type="text" class="form-control" placeholder="First name" name="firstname"
                  value ={staff.firstname} onChange = {handleTnputs}
                />
            </div>
            <div class="form-group col-md-6">
                <label for="inputEmail4">Designation</label>
                <input type="Phone" class="form-control"  placeholder="designation" name="designation"
                  value ={staff.designation} onChange = {handleTnputs}
                />
            </div>
            <div class="form-group col-md-6">
                <label for="inputEmail4">Phone No.</label>
                <input type="Phone" class="form-control"  placeholder="Phone" name="phone_no"
                  value ={staff.phone_no} onChange = {handleTnputs}
                />
            </div>
            <div class="form-group col-md-6">
                <label for="inputEmail5">Email</label>
                <input type="Email" class="form-control"  placeholder="Email" name="email"
                  value ={staff.email} onChange = {handleTnputs}
                />
            </div>
            <div class="col-md-6">
                  <label for="address" class="form-label">Joining Date</label>
                  <input type="date" class="form-control" id="address" placeholder="---" required="" name="joining_date"
                    value ={staff.joining_date} onChange = {handleTnputs}
                  />
            </div>
            <div class="col-md-4">
            <label for="inputState">Gender</label>
            <select id="inputState3" class="form-control" name="gender"
            value ={staff.gender} onChange = {handleTnputs}>
                <option selected>Choose...</option>
                <option>Male</option>
                <option>Female</option>
            </select>
            </div>
            <div class="col-auto my-1 mt-4">
            <button type="submit" class="btn btn-primary p-3" name="addstaffs" onClick={PostData}>Submit</button>
            </div>
        </div>
    </form>
    </div>
  );
};
  
export const Addvehicles = () => {

  const {id} = useParams();
  const isAddMode = id;

  const history = useHistory();
  const [vehicles,setVehicle] = useState({
    vehicle :"", vehicle_no :"", seating_capicity :"", type :"", driver_name :"", buying_date:""
  });

  useEffect(() => {
    loadUser();
  },[]);

    let name,value;
    const handleTnputs = (e) =>{
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setVehicle({...vehicles,[name]:value})
      }

      const loadUser = async () =>{
        const res = await fetch("/addvehicle/"+id, {
            method :"PATCH",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });
        const data = await res.json();
        console.log("hello Add Vehicle edit page")
        setVehicle(data);
      } 
      
        const PostData = async(e) =>{
          e.preventDefault();
          const {vehicle,vehicle_no,seating_capicity,type,driver_name,buying_date} = vehicles

          if(isAddMode){

            const res1 = await fetch("/addvehicle/"+id,{
              method :"PATCH",
              headers:{
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                vehicle,vehicle_no,seating_capicity,type,driver_name,buying_date
              })
          })
          const data = await res1.json();
          if(res1.status === 404 || !data){
              window.alert("Invalid  EDIT")
              console.log("invalid  EDIT")
          }else{
              window.alert("Sucessfull Data EDIT")
              console.log("Sucessfull Data EDIT")

              history.push("/services")
          }

          }else{

            const res = await fetch("/addvehicle",{
              method :"POST",
              headers:{
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                vehicle,vehicle_no,seating_capicity,type,driver_name,buying_date
              })
          })

            const data = await res.json();
            console.log(data)
            if(res.status ===421 || res.status ===402 || res.status ===404 || !data){
                window.alert("Invalid Vehicle Add Please fill it")
                console.log("invalid Vehicle Add")
            }else{
                window.alert("Sucessfull ADD Vehicle Done")
                console.log("Sucessfull ADD Vehicle Done")
                
                history.push("/services")
            }

          }
          
      }

  return (
    <div className="services">

    <div class="back m-2">
        <a href="/services"><button type="button" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg></button>
        </a>
    </div>

      <h1 className="m-4 d-flex justify-content-center"><strong>ADD Vehicles</strong></h1>

    <form  method="POST">
        <div class="form-row">
            <div class="col-md-6">
                <label for="firstName" class="form-label">Vehicles</label>
                <input type="text" class="form-control" placeholder="Vehicle name" name="vehicle"
                  value ={vehicles.vehicle} onChange = {handleTnputs}
                />
            </div>
            <div class="form-group col-md-6">
                <label for="inputEmail4">Vehicle No.</label>
                <input type="Phone" class="form-control"  placeholder="Vehicle number" name="vehicle_no"
                  value ={vehicles.vehicle_no} onChange = {handleTnputs}
                />
            </div>
            <div class="form-group col-md-6">
                <label for="inputEmail4">Seating Capacity</label>
                <input type="Phone" class="form-control"  placeholder="seating" name="seating_capicity"
                  value ={vehicles.seating_capicity} onChange = {handleTnputs}
                />
            </div>
            <div class="col-md-6">
            <label for="inputState">Type</label>
            <select id="inputState4" class="form-control" name="type"
            value ={vehicles.type} onChange = {handleTnputs}>
                <option selected>Choose...</option>
                <option>SUV</option>
                <option>SEADAN</option>
                <option>MINI BUS</option>
                <option>BUS</option>
            </select>
            </div>
            <div class="form-group col-md-6">
                <label for="inputEmail4">Driver's Name</label>
                <input type="Phone" class="form-control"  placeholder="driver's Name" name="driver_name"
                  value ={vehicles.driver_name} onChange = {handleTnputs}
                />
            </div>
            <div class="col-md-6">
                  <label for="address" class="form-label">Buying Date</label>
                  <input type="date" class="form-control"  placeholder="---" required="" name="buying_date"
                    value ={vehicles.buying_date} onChange = {handleTnputs}
                  />
            </div>
            <div class="col-auto my-1 mt-4">
            <button type="submit" onClick={PostData} class="btn btn-primary p-3">Submit</button>
            </div>
        </div>
    </form>
    </div>
  );
};