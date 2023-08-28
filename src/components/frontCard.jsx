import React from 'react';

const frontCard = () => {
    return ( 
        <div className="card-container">
            <div className="card-logo p-4">
                <img src="/images/card-logo.svg" />
                <div className="details mt-5">
                    <h4 className='text-start text-white my-1'>1234 5678 9012 3456</h4>
                    <div className="nameAndDate d-flex justify-content-between text-white my-2">
                        <p className='ms-1'>JANE APPLESEED</p>
                        <p className='me-4'>09/23</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default frontCard;