import React from 'react'
import Style from './WrongPage.module.css';
const WrongPage = () => {
  return (
    <div className={`${Style.container} container-fluid`}>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className={`${Style.h1}`}>:(</h1>
                    <h1 className={`${Style.h1}`}>Oops...</h1>
                    <h1 className={`${Style.h1}`}>Looks like something went wrong.</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WrongPage