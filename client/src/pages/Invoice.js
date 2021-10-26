import React ,{useEffect,useState} from 'react'
import {useHistory, useParams} from "react-router-dom"
import brandlogo from '../components/images/brandlogo.png'

function Invoice() {

    const {id} = useParams();

    const history = useHistory();
    const [newbooking,setNewbooking] = useState({
        firstname :"", lastname :"", phone :"", email :"", address :"", city : "", state : "", zip :"" ,
        type : "", roomtype: "", roomnumber: "", num_guest:"", arrivaldate:"", arrivaltime:"", paymentmode:"",
        totalpayment:""
    });

    useEffect(() => {
        loadUser();
     },[]);

     let name,value;
     const handleTnputs = (e) =>{
         console.log(e)
         name = e.target.name;
         value = e.target.value;
 
         setNewbooking({...newbooking,[name]:value})
 
     }

     const loadUser = async () =>{
        const res = await fetch("/BookingForm/"+id, {
            method :"PATCH",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });
        const data = await res.json();
        console.log("hello invoice page")
        setNewbooking(data);
    } 

    const PostData = async(e) =>{
        e.preventDefault();
        const {firstname,lastname,phone,email,address,city,state,zip,type,roomtype,roomnumber,num_guest,arrivaldate,arrivaltime,paymentmode,totalpayment} = newbooking
    
            const res1 = await fetch("/BookingForm/"+id,{
                method :"PATCH",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname,lastname,phone,email,address,city,state,zip,type,roomtype,roomnumber,num_guest,arrivaldate,arrivaltime,paymentmode,totalpayment
                })
            })
            const data = await res1.json();
            if(res1.status === 404 || !data){
                window.alert("Invalid  Print")
                console.log("invalid  Print")
            }else{
                window.alert("Sucessfull Print")
                console.log("Sucessfull Print")

                history.push("/about-us/Checkout")
            }
        
    }


    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;


    return (
        <>
            <div className="invoice">

            <div class="noprint">
                <div class="back m-2">
                    <a href="/about-us/Checkout"><button type="button" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg></button>
                    </a>
                </div>
            </div>

        <div className="container">
            
        <form method="PATCH">
            <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body p-0">

                    <div className="brandlogo">
                    <img src={brandlogo} className="m-2 brandlogo" alt="" width="80" height="80"/>
                    </div>

                    <h1 className="m-3 d-flex justify-content-center"><strong>The Hotel MKS</strong></h1>
                    <h3 className=" d-flex justify-content-center">INVOICE</h3>
                    <hr></hr>

                    <div class="row pb-5 p-5">
                        <div class="col-md-6">
                            <p class="font-weight-bold mb-4">Client Information</p>
                            <p class="mb-1">{newbooking.firstname} <span>{newbooking.lastname}</span></p>
                            <p>{newbooking.email}</p>
                            <p class="mb-1">{newbooking.address}, <span>{newbooking.zip}</span></p>
                            <p class="mb-1">{newbooking.phone}</p>
                        </div>

                        <div class="col-md-6 text-right">
                            <p class="font-weight-bold mb-4">Payment Details</p>
                            <p class="mb-1"><span class="text-muted">DATE: </span> {date}</p>
                            <p class="mb-1"><span class="text-muted">VAT ID: </span> 10253642</p>
                            <p class="mb-1"><span class="text-muted">Payment Type: </span><span>{newbooking.paymentmode}</span></p>
                            <p class="mb-1"><span class="text-muted">Total Payment:</span>{newbooking.totalpayment}</p>
                        </div>
                    </div>
                    <hr></hr>

                    <div class="row">
                        <div class="col-md-12">
                            <table class="table">
                                <thead class="table-dark">
                                    <tr>
                                        <th class="border-0 text-uppercase small font-weight-bold">ID</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Name</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Room Type</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Room No.</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Check-in</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Check-out</th>
                                        <th class="border-0 text-uppercase small font-weight-bold">Amount paid</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{newbooking._id}</td>
                                        <td>{newbooking.firstname} {newbooking.lastname}</td>
                                        <td>{newbooking.type} {newbooking.roomtype}</td>
                                        <td>{newbooking.roomnumber}</td>
                                        <td>{newbooking.arrivaldate}</td>
                                        <td>{date}</td>
                                        <td>RS <input type="text" name="totalpayment"  value ={newbooking.totalpayment} onChange = {handleTnputs} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="due">
                    <div class="card-title d-flex justify-content-center">Signature :</div>
                  </div>

                    <div class="d-flex flex-row-reverse bg-dark text-white p-4">
                        <div class="py-3 px-5 text-right">
                            <div class="mb-2">Grand Total</div>
                            <div class="h2 font-weight-light">RS {newbooking.totalpayment}</div>
                        </div>

                        <div class="py-3 px-5 text-right">
                            <div class="mb-2">Discount</div>
                            <div class="h2 font-weight-light">10%</div>
                        </div>

                        <div class="py-3 px-5 text-right">
                            <div class="mb-2">Sub - Total amount</div>
                            <div class="h2 font-weight-light">RS ---</div>
                        </div>
                    </div>

                <div class="noprint card-title d-flex justify-content-center"> 
                <button class="btn btn-primary card-title m-3" onClick={PostData}>Print</button> 
                </div>

                    </div>
                </div>
            </div>
            </div>
        </form>

            </div>

            </div>
        </>
    )
}

export default Invoice
