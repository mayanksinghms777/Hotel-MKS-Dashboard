import React ,{useEffect,useState} from 'react'
import {useHistory, useParams} from "react-router-dom"

function CustomerDetail() {

    const {id} = useParams();

    const history = useHistory();
    const [userData, setUserData] = useState({});

    const callEmpPage = async () =>{
        try{
        
            const res = await fetch("/CustomerDetail/"+id, {
                method :"GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });
    
            const data = await res.json();
            console.log("Customer Detail History Page")
            setUserData(data);
            if(!res.status === 201){
                const error = new Error(res.error);
                throw error;
            }else{
                console.log(data)
            }
    
        }catch(err){
            console.log(err)
            history.push("/Customers")
        }
    }
    
    useEffect(() => {
       callEmpPage();
    },[]);

    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
    
    

    return (
        <>
            <div className="customerDetail">

                <div class="back m-2">
                    <a href="/Customers"><button type="button" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg></button>
                    </a>
                </div>

                <h1 className="m-4 d-flex justify-content-center">History</h1>

                <form method="GET">
                    <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                        <div class="card-body">
                        <div class="card">
                    <div class="card-header d-flex justify-content-center ">
                    Customer Detail
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Customer ID<span className="float-right">{userData._id}</span></li>
                        <li class="list-group-item">First Name <span className="float-right">{userData.firstname}</span></li>
                        <li class="list-group-item">Last Name<span className="float-right">{userData.lastname}</span></li>
                        <li class="list-group-item">Phone Number<span className="float-right">{userData.phone}</span></li>
                        <li class="list-group-item">Email<span className="float-right">{userData.email}</span></li>
                        <li class="list-group-item">Address<span className="float-right">{userData.address}</span></li>
                        <li class="list-group-item">City<span className="float-right">{userData.city}</span></li>
                        <li class="list-group-item">State<span className="float-right">{userData.state}</span></li>
                        <li class="list-group-item">Zip<span className="float-right">{userData.zip}</span></li>
                        <li class="list-group-item">Type<span className="float-right">{userData.type}</span></li>
                        <li class="list-group-item">Room Type<span className="float-right">{userData.roomtype}</span></li>
                        <li class="list-group-item">Room Number<span className="float-right">{userData.roomnumber}</span></li>
                        <li class="list-group-item">Number Of Guest<span className="float-right">{userData.num_guest}</span></li>
                        <li class="list-group-item">Check-IN Date<span className="float-right">{userData.arrivaldate}</span></li>
                        <li class="list-group-item">Check-IN Time<span className="float-right">{userData.arrivaltime}</span></li>
                        <li class="list-group-item">Check-OUT Date<span className="float-right">{date}</span></li>
                        <li class="list-group-item">Total Amount Paid<span className="float-right">{userData.totalpayment}</span></li>
                    </ul>
                    </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default CustomerDetail
