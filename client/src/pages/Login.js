import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
  
function Login() {

	const history = useHistory();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const LoginUser = async(e) =>{
        e.preventDefault();

        const res = await fetch("/login",{
            method :"POST",
            headers:{
                "Content-Type": "application/json",
				'Accept': 'application/json'
            },
            body: JSON.stringify({
             email, password 
            })
        })

        const data = await res.json();
        if(res.status ===402 || !data){
            window.alert("Invalid login")
            console.log("invalid login")
        }else{
            window.alert("Sucessfull login")
            console.log("Sucessfull login")
            
            history.push("/about-us")
        }

    }


  return (
    <div className="support">
     <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In as Receptionist</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign In as Manager</label>
		<div class="login-form">
		<form method="POST" id="register-form">
			<div class="sign-in-htm">
				<div class="group">
					<label  htmlFor="Email" class="label">Email</label>
					<input type="email" className="form-control input" id="inputEmail4"  name="email" placeholder="Mks@gmail.com"  value ={email} 
                                onChange ={(e) => setEmail(e.target.value)}/>
				</div>
				<div class="group">
					<label htmlFor="Password" class="label">Password</label>
					<input type="password" className="form-control input" id="inputPassword4"  name="password" value ={password} 
                                onChange ={(e) => setPassword(e.target.value)}/>
				</div>
				<div class="group">
					<button type="submit" class="button" value="Sign In" name ="login" onClick={LoginUser}>Sign In</button>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			</form>
			<div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign In"/>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
  );
};
  
export default Login;