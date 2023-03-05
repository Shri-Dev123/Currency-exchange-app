import React, { useState } from 'react'
import Input from './Input'
import MyDate from './MyDate';
import Output from './Output'


export default function App_exchange() {
    const [res, setRes] = useState([]);
    return (

        <div className='container-fluid app_exchange_bg'>
            <h1 className='app_exchange_title text-center pt-5 pb-3 w-100'>EXCHANGE CURRENCY</h1>
            <MyDate />
            <div className='container app_exchange_container'>
           
                <div className='app_exchange_content'>
                    <div className='d-flex justify-content-center'><Input setRes={setRes} /></div>
                    <Output res={res} />
                </div>
               
            </div>
           
        </div>
        
    )
}