import React ,{useEffect,useState} from 'react'
import {useHistory,useParams} from "react-router-dom"
  
const MoneyRegister = () => {

  const {id} = useParams();
  const isAddMode = id;
  let a=0;

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
        console.log("History Page")
        setUserData(data);
        if(!res.status === 201){
            const error = new Error(res.error);
            throw error;
        }

      }catch(err){
        console.log(err)
        history.push("/moneyRegister")
    }
}

useEffect(() => {
  callEmpPage();
},[]);

const Editlink = (id) =>{
          
  history.push('/CustomerDetail/'+id)

}


  return (
    <div className="moneyRegister">
        <h1 className="m-4 d-flex justify-content-center"><strong>MONEY REGISTER</strong></h1>

      <div class="customercard">
    <div class="card">
        <div class="card-header">
         <h1>Money Received </h1>
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
                <table class="table table-hover table-success">
                    <thead>
                      <tr>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">Room Type</th>
                        <th scope="col">Bed</th>
                        <th scope="col">Room No.</th>
                        <th scope="col">Payments</th>
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
                        <td>{userdata.roomtype}</td>
                        <td>{userdata.roomnumber}</td>
                        <td>RS {userdata.totalpayment}</td>
                        <td><a href="" onClick={() => Editlink(userdata._id)}>check-in<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg></a></td>
                      </tr>
                        
                      ))
                    }
                    </tbody>
                </table>
                </div>
            </div>
            <div class="col-sm-4 float-end">
                <label for="lastName" class="form-label mt-1"><h4>Total :</h4></label>
                {
                   userData.map((userdata) =>{

                    a = userdata.totalpayment + a;
                   
                   })
                 
                }
                <div className="float-right"><strong>{a}</strong></div>
              </div>
        </div>
      </div>
</div>
    </div>
  );
};
  
export default MoneyRegister;