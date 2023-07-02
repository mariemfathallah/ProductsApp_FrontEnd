import React, { useEffect, useState } from 'react'
import { instanceAxios } from '../Components/instanceAxios'
import { Table } from 'antd'




const ListProduits = () =>{

     const [data, setData] = useState([])

const columns=[

  {
    key:'2',
    title:'Nom',
    dataIndex:'nom'

  },
  {
    key:'3',
    title:'Type',
    dataIndex:'type'

  },
  {
    key:'4',
    title:'Image',
    dataIndex:'image',


    render:(t,r)=><img src={`${r.image}`} style={{width:'90%',height:'150px'}} alt='' />

  },
  {
    key:'5',
    title:'Prix',
    dataIndex:'prix'

  },

]


     
useEffect(() =>{

   instanceAxios.get('/Produits')
  .then((response)=> setData(response.data)
  ) 

  


},[])



    return (
      <div style={{ width: '800px' }}>
<Table columns={columns} dataSource={data}      scroll={{ x: true }}/>

 </div>
    )
  

}


export default  ListProduits