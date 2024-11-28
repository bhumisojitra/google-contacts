import React from 'react'
import not2 from '../../assets/not2.svg'

const Fix = () => {
  return (
    <div className='page-body-wrapper text-center'>
        <div className='mt-5 pt-5 d-flex flex-column align-items-center justify-content-center'>
            <img src={not2} alt="No data available" className='mt-5' style={{width: '330px', height: '300px'}} />
            <p>Good work. No new suggestions.</p>
        </div>
    </div>
  )
}

export default Fix
