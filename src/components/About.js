import React from 'react'

export default function About(props) {
    
    return (
        <div className="container" style={{backgroundColor: props.mode==='dark'? '#042743': '#c9dded',color: props.mode==='dark'? 'white': '#042743'}}>

            <h1 className="container my-2">About This Website</h1>

            <div className="accordion" style={{backgroundColor: props.mode==='dark'? '#042743': '#c9dded',color: props.mode==='dark'? '#c9dded': '#042743'}} id="accordionExample">

                <div className="accordion-item my-2" style={{backgroundColor: props.mode==='dark'? 'grey': '#e0e0e0',color: props.mode==='dark'? '#c9dded': '#042743'}}>
                    
                        <div className="accordion-body my-2 " style={{backgroundColor: props.mode==='dark'? 'grey': '#e0e0e0',color: props.mode==='dark'? 'white': '#042743'}}>
                                <h3>Self-Introduction</h3>
                                This is the first website (Project) made by <strong> Jaideep Singh and Bhavesh Trikha persuing B.Tech CSE </strong> currntly in 3rd year  in June,2024 .
                                <h3>About website</h3>
                                This website is used for text maniupulation.This is made with help of Bootstrap.
                                This is made to explain basics of react js. In this we had used the concepts of <strong>props,Types of props,useState,react-router-dom,hooks.</strong>
                                Dyanamic darkMode is created to swtich between darkMode and lightMode to give user customized view.
                                Alerts are added to this website from documentations to enhance website.
                        </div>
                    
                </div>
            </div>
        </div>
    )
}
