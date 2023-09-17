import React from 'react'

const Options = (props) => {
  
  return (
      <option value={[props.long,props.lat]}>{props.station_name}</option>
  )
}  

export default Options