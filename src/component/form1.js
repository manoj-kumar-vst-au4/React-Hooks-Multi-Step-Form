import React from 'react'
import { Link} from "react-router-dom";

export default function form1(props) {
    
    return (
        <form>
            <h3 className="text-center">STEP-1</h3>
            <div className="d-flex justify-content-center mt-5">
                <div className="d-flex flex-column border border-dark py-5 px-4 shadow" style={{"borderRadius":"20px"}}>
                    <input type="text" placeholder="First Name " name="firstName" value={props.firstName} className="form-control mb-3" required onChange={props.handleChange}/>
                    <input type="text" placeholder="Last Name " name="lastName" value={props.lastName} className="form-control mb-3" required onChange={props.handleChange}/>
                    <div>
                        {props.firstName ==="" || props.lastName===""? <button className="float-right btn btn-dark" disabled>Next</button> : <Link to="/form2"><button className="float-right btn btn-dark">Next</button></Link> }
                        {/* <Link to="/form2"><button className="float-right btn btn-dark">Next</button></Link> */}
                    </div>
                </div>
            </div>
        </form>
    )
}
