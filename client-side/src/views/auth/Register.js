import React from "react";
import { useState } from "react";
import { Axios } from "axios";

export default function Register() {

const [userDetails , setUserDetails] = useState({
  name:"" , email:"" , password:"" , phoneNumber:"" , Address:"" , gender:""})

let name ,value ; 

const onChangeHandler = (e) =>{
  name= e.target.name;
  value=e.target.value;
  setUserDetails({...userDetails,[name]:value});
}

const register = () =>{
  console.log("data")
   Axios.post("http://localhost:3000/auth/register " , {
        name:userDetails.name,
        email:userDetails.email,
        password:userDetails.password,
        phoneNumber:userDetails.phoneNumber,
         Address:userDetails.Address,
         gender:userDetails.gender

 }).then ((response) =>{
       console.log(response);
   });
}



// const onSubmitHandler = async(e) =>{
// e.preventDefault();

//   const newRegistration = {

//     name:userDetails.name,
//     email:userDetails.email,
//     password:userDetails.password,
//     phoneNumber:userDetails.phoneNumber,
//     Address:userDetails.Address,
//     gender:userDetails.gender

//   }
  
//   const config = {
//     headers : {
//      "content-type":"application/json",
//     },
//   };

//   try{
//    const body = JSON.stringify(newRegistration);
   
//    await axios.post('/Signup' , body , config);
//     setUserDetails({
//       name:" ",
//       email:" ",
//       password:" " ,
//       phoneNumber:" " ,
//       Address:" ",
//       gender:" "
//     })
//     window.location.reload();
   

//   } catch(err) {
//    console.error("error",err.response.data);
//   }

// }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold py-4">
                  <big>SIGN UP</big>
                </div>
                <form  >
                <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name= "name"
                      value={userDetails.name}
                      onChange={onChangeHandler}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>


                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userDetails.email }
                      onChange={onChangeHandler}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={userDetails.password}
                      onChange={onChangeHandler}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password" 
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={userDetails.phoneNumber}
                      onChange={onChangeHandler}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="Address"
                      value={userDetails.Address}
                      onChange={onChangeHandler}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Address"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Gender
                    </label>
                    <select 
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="gender"
                    value={userDetails.gender}
                    onChange={onChangeHandler}>
                      <option >Female</option>
                      <option >Male</option>
                      <option >Other</option>
                    </select>

                  </div>


                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit" 
                      onSubmit={register}
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
