import React ,{useEffect,useState} from 'react'
import {useHistory, useParams} from "react-router-dom"

function BookingForm() {
    
    const {id} = useParams();
    const isAddMode = id;

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
        console.log("hello edit page")
        setNewbooking(data);
    } 

    const PostData = async(e) =>{
        e.preventDefault();
        const {firstname,lastname,phone,email,address,city,state,zip,type,roomtype,roomnumber,num_guest,arrivaldate,arrivaltime,paymentmode,totalpayment} = newbooking
        
        if(isAddMode){
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
                window.alert("Invalid  EDIT")
                console.log("invalid  EDIT")
            }else{
                window.alert("Sucessfull Data EDIT")
                console.log("Sucessfull Data EDIT")

                history.push("/about-us/Checkout")
            }

        }else{
            
            const res = await fetch("/checkin",{
                method :"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname,lastname,phone,email,address,city,state,zip,type,roomtype,roomnumber,num_guest,arrivaldate,arrivaltime,paymentmode,totalpayment
                })
            })


        const data = await res.json();
        console.log(data)
        if(res.status ===421 || res.status ===402 || res.status ===404 || !data){
            window.alert("Invalid Bookings Please fill it")
            console.log("invalid Bookings")
        }else{
            window.alert("Sucessfull Booking Done")
            console.log("Sucessfull Booking Done")
            
            history.push("/about-us/Checkin")
        }

        }
        
    }

    return (
        <>
        <div className="bookingform">
        <div class="back m-2">
        <a href="/about-us/Checkin"><button type="button" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg></button>
        </a>
        </div>
        <h1 className="m-4 d-flex justify-content-center"><strong>Enter Details</strong></h1>
            <form  method="POST">
                <div class="form-row">
                    <div class="col-md-6">
                        <label for="firstName" class="form-label">First name</label>
                        <input type="text" class="form-control" placeholder="First name" name="firstname"  
                            value ={newbooking.firstname} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="firstName" class="form-label">Last name</label>
                        <input type="text" class="form-control" placeholder="Last name" name="lastname"  
                            value ={newbooking.lastname} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Phone No.</label>
                        <input type="Phone" class="form-control" id="Phone" placeholder="Phone" name="phone" 
                            value ={newbooking.phone} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" name="email" 
                            value ={newbooking.email} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="address" 
                            value ={newbooking.address} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" name="city" 
                            value ={newbooking.city} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control" name="state" 
                    value ={newbooking.state} onChange = {handleTnputs}>
                        <option selected>Choose...</option>
                        <option>KolKata</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Chennai</option>
                    </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip" name="zip" 
                            value ={newbooking.zip} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="form-check form-check-inline col-md-6">
                    <input class="form-check-input" type="radio" id="inlineRadio1" value="option1" name="type" 
                        value ="AC" onChange = {handleTnputs}
                    />
                    <label class="form-check-label" for="inlineRadio1">AC</label>
                    </div>
                    <div class="form-check form-check-inline col-md-6">
                    <input class="form-check-input" type="radio" id="inlineRadio2" value="option2" name="type" 
                        value ="Non AC" onChange = {handleTnputs}
                    />
                    <label class="form-check-label" for="inlineRadio2">Non AC</label>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputEmail4">Room Type</label>
                        <select id="inputState2" class="form-control" name="roomtype" 
                    value ={newbooking.roomtype} onChange = {handleTnputs}>
                        <option selected>Choose...</option>
                        <option>Single</option>
                        <option>Double</option>
                        <option>Triple</option>
                        <option>four</option>
                    </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Room-No.</label>
                        <input type="text" class="form-control" id="Room-No" placeholder="Room-No" name="roomnumber" 
                            value ={newbooking.roomnumber} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Number of Guests</label>
                        <input type="text" class="form-control" id="Numguest" placeholder="Room-No" name="num_guest" 
                            value ={newbooking.num_guest} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="address" class="form-label">Arrival Date</label>
                        <input type="date" class="form-control" id="arrivaldate" placeholder="---" required="" name="arrivaldate" 
                            value ={newbooking.arrivaldate} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="address" class="form-label">Arrival Time</label>
                        <input type="Time" class="form-control" id="arrivaltime" placeholder="---" required="" name="arrivaltime" 
                            value ={newbooking.arrivaltime} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="col-md-6">
                    <label for="inputState">Payment Mode</label>
                    <select id="inputState3" class="form-control" name="paymentmode" 
                    value ={newbooking.paymentmode} onChange = {handleTnputs}>
                        <option selected>Choose...</option>
                        <option>Cash</option>
                        <option>Card</option>
                        <option>Upi</option>
                    </select>
                    </div>
                    <div class="col-md-6">
                        <label for="Total">Total Amount</label>
                        <input type="Total" class="form-control" id="Total" name="totalpayment" 
                            value ={newbooking.totalpayment} onChange = {handleTnputs}
                        />
                    </div>
                    <div class="col-auto my-1 mt-4">
                    <button type="submit" class="btn btn-primary p-3" value="checkin" name ="bookingForm" onClick={PostData}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default BookingForm
