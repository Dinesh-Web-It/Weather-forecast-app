import React, { useState } from 'react'

const Referance = () => {

  //https://documentation-resources.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100
    fetch(` https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100 `)
        .then((response)=> response.json())
        .then((res)=> console.log(res))
   

    

    return (
        <div>
            <iframe  src="https://public.opendatasoft.com/explore/embed/dataset/geonames-all-cities-with-a-population-1000/table/?disjunctive.cou_name_en&sort=name&static=false&datasetcard=false" width="" height="1200" frameborder="0" style={{width:"100%"}}></iframe>
        </div>
    )
}

export default Referance