import React from 'react';
import './Shares.css';

function Shares() {
  return (
    <div className='Shares'>
        <div className="block">
            <div className="card card-1">
                <div className="row">
                    <img src="/Img/shares/card-0.png" alt="card-0"/>
                    <p>-25 %
на жіночі колготки</p>
                </div>
                <div className="row reverse">
                    <img src="/Img/shares/card-1.png" alt="card-1" />
                    <p>Fantasy Solo 
20 Den </p>
                </div>
            </div>
            <div className="card card-2">
                <div className="row">
                    <img src="/Img/shares/card-2.png" alt="card-2" />
                    <p></p>
                </div>
                <div className="row reverse">
                    <img src="/Img/shares/card-3.png" alt="card-3" />
                    <p></p>
                </div>
            </div>
            <div className="card card-3">
                <div className="row">
                    <img src="/Img/shares/card-4.png" alt="card-4" />
                    <p></p>
                </div>
                <div className="row reverse">
                    <img src="/Img/shares/card-5.png" alt="card-5" />
                    <p></p>
                </div>
            </div>
        </div>
        <div className="block"></div>
        <div className="block"></div>
    </div>
  )
}

export {Shares};