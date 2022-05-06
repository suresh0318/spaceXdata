import React from 'react'
import "./filters.css"

const Filter = ({sLaunch,fLaunch,sLand,fLand}) => {
  return (
    <div className='filters'>
         <div className="buttons">
          <h4 className='underline'>Successful Launch</h4>
          <div className="btns">
          <button onClick={sLaunch}>True</button>
          <button onClick={fLaunch}>False</button>
          </div>
        </div>
        <div className="buttons">
          <h4 className='underline'>Successful Landing</h4>
          <div className="btns">
          <button onClick={sLand}>True</button>
          <button onClick={fLand}>False</button>
          </div>
        </div>
    </div>
  )
}

export default Filter