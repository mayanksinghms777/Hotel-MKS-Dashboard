import React ,{useEffect,useState} from 'react'
import {useHistory, useParams} from "react-router-dom"

function ReceptionistDetail() {

    const {id} = useParams();

    const history = useHistory();
    const [userData, setUserData] = useState({});

    const callEmpPage = async () =>{
        try{
        
            const res = await fetch("/ReceptionistDetail/"+id, {
                method :"GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });
    
            const data = await res.json();
            console.log("Customer Detail History Page")
            console.log(data)
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
            <div className="receptionistDetail">

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
                    Receptionist Detail
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Receptionist ID<span className="float-right">{userData._id}</span></li>
                        <li class="list-group-item">Receptionist Name <span className="float-right">{userData.name}</span></li>
                        <li class="list-group-item">Gender <span className="float-right">{userData.gender}</span></li>
                        <li class="list-group-item">Age <span className="float-right">{userData.age}</span></li>
                        <li class="list-group-item">Phone Number<span className="float-right">{userData.phone}</span></li>
                        <li class="list-group-item">Email<span className="float-right">{userData.email}</span></li>
                        <li class="list-group-item">Address<span className="float-right">{userData.designation}</span></li>
                        <li class="list-group-item">Salary<span className="float-right">{userData.salary}</span></li>
                        <li class="list-group-item">Joining Date<span className="float-right">{userData.joining_date}</span></li>
                        <li class="list-group-item">Status<span className="float-right">Working</span></li>
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

export default ReceptionistDetail
