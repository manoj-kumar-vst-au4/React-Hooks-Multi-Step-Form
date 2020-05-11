import React from 'react'
import { Link} from "react-router-dom";

export default function form3(props) {
    return (
        <form>
            <h3 className="text-center">STEP-3</h3>
            <div className="d-flex justify-content-center mt-5">
                <div className="d-flex flex-column border border-dark py-5 px-4 shadow" style={{"borderRadius":"20px"}}>
                    <input type="number" placeholder="Mobile Number" name="mobile" value={props.mobile} className="form-control mb-3" onChange={props.handleChange} required/>
                    <input type="date" placeholder="Date Of Birth " className="form-control mb-3" name="dob" value={props.dob} onChange={props.handleChange} required/>
                    <div>
                        <Link to="/form2"><button className="float-left btn btn-dark">Previous</button></Link>
                        {props.mobile ==="" || props.dob ===""? <button className="float-right btn btn-dark" disabled>Submit</button> : <Link to="/result"><button className="float-right btn btn-dark">Submit</button></Link> }
                    </div>
                </div>
            </div>
        </form>
    )
}
