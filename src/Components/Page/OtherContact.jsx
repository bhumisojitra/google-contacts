import React from 'react'
import not from '../../assets/not.png'

const OtherContact = () => {
  return (
    <div className='page-body-wrapper text-center'>
        <div className='mt-5 pt-5 d-flex flex-column align-items-center justify-content-center'>
            <img src={not} alt="No data available" className='mt-5' style={{width: '330px', height: '300px'}} />
            <p>No other contacts yet</p>
        </div>
    </div>
  )
}

export default OtherContact
