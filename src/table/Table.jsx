import React, { useState } from 'react'

const Table = () => {

  
      const tableurl = <iframe  src="https://public.opendatasoft.com/explore/embed/dataset/geonames-all-cities-with-a-population-1000/table/?disjunctive.cou_name_en&sort=name&static=false&datasetcard=false" width="" height="1200" frameborder="0" style={{width:"95%", marginTop:"100px",padding:"1rem",paddingRight:"1rem" }}></iframe>
    console.log(tableurl)
    
    
    

  return (
    <div>
      <div className="table" style={{display:"flex",justifyContent:"space-evenly"}}>
        <h1>Geonames - All Cities</h1>
        {tableurl}
      </div>
    </div>
  )
}

export default Table