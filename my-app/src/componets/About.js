import React, { useState } from 'react'

export default function About(props) {

    const [mystyle, setMystyle] = useState(
        {
            color: 'black',
            backgroundColor: 'white',
            border: '2px solid red'
        })

    const [btntext, setBtntext] = useState("Enable Dark Mode ")


    // if (props.mode === 'dark') {
    //     setMystyle({
    //         color: 'blue',
    //         backgroundColor: '#042743',
    //         border: '2px solid red',
    //         width: '100vw'
    //     })
    //     setBtntext("Enable Light Mode")
    // }
    // else {
    //     setMystyle({
    //         color: 'yellow',
    //         backgroundColor: 'black',
    //         border: '2px solid red'
    //     })
    //     setBtntext("Enable Dark Mode")

    // }



return (
    <div className="container my-4 " style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}>
        <h2 className="my-2">About Us</h2>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collaps the though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until g our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, uvariables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
                    </div>
                </div>
            </div>


        </div>
        <div className="btn btn-warning my-3 mx-2" >{btntext}</div>
    </div>
)
}
