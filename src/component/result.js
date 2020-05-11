import React from 'react'
import { Link} from "react-router-dom";

export default function result(props) {
    return (
        <div>
            <div className="  d-flex justify-content-center">
                <div className="d-flex flex-row border border-dark py-2 px-4 shadow" style={{"borderRadius":"20px"}}>
                    <div className="d-flex flex-column mr-4">
                        <p>Name: {props.firstName}{props.lastName}</p>
                        <p>Email Id: {props.email}</p>
                        <p>Age: {props.age}</p>
                    </div>
                    <div className="d-flex flex-column ml-4">
                        <p>MobileNo: {props.mobile}</p>
                        <p>DOB: {props.dob}</p>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <p className="text-center  text-secondary mt-5">Click <button className="btn btn-info py-0" onClick={()=> window.location.reload()}><Link to="/" className="text-white ">Here</Link></button> to go to the Home page.</p>
            </div>
        </div>
    )
}
