import React from 'react'

function Empty() {
    return (
        <div className='row'>
            <div className='col-12 pt-4 m-4 text-center shadow p-3 mb-5 bg-secondary rounded'>
                <h4>nothing here ⚠</h4>
                <p className="text-monospace">
                    Element is empty, try add something new.
                </p>
            </div>
        </div>
    )
}

export { Empty }