import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
   seralNO:"",
    qunatity:"", 
    unit:"", 
    asset_Price:"", 
    available_in_store:"",
     date:"",
      productID:"", 
      supplyID:""
 
}
function AddEditAsset() {
  const [state,setState]=useState(initialstate)
  const{ seralNO, qunatity, unit, asset_Price, available_in_store, date, productID, supplyID}=state
 
  const navigate=useNavigate()
  const {assetID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateasset/${assetID}`).then((resp)=>setState({...resp.data[0]}))
  },[assetID])
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(!seralNO||!qunatity||!qunatity||!unit||!asset_Price||!available_in_store||!date||!productID||!supplyID){
      alert("please provide the value for each input field");
    }else{
      if(!assetID){
        axios.post("http://localhost:5000/postasset",{
          qunatity, unit, asset_Price, available_in_store, date, productID, supplyID
        }).then(()=>{
          setState({qunatity:"",unit:"",asset_Price:"",available_in_store:"",date:"",productID:"",supplyID:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
         
      }else{
        axios.put(`http://localhost:5000/updateasset/${assetID}`,{
          
        qunatity, unit, asset_Price, available_in_store, date, productID, supplyID
        }).then(()=>{
          setState({qunatity:"",unit:"",asset_Price:"",available_in_store:"",date:"",productID:"",supplyID:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("/category")
        },500)
      }
     
  }
  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  return (
    <div className='one' style={{marignTop:"100px"}}>
      <form 
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
      }}
      onSubmit={handleSubmit}
      > 
        <div className='seven'>
<label  htmlFor="qunatity">qunatity</label>
<input type="number" id="qunatity" name="qunatity" placeholder='qunatity ...' value={qunatity||""} onChange={handleInputChange}/>
<label htmlFor="unit">unit</label>
<input type="number" id="unit" name="unit" placeholder='unit...' value={unit||""} onChange={handleInputChange}/>
<label htmlFor="asset_Price">asset_Price</label>
<input type="number" id="asset_Price" name="asset_Price" placeholder='asset_Price...' value={asset_Price||""} onChange={handleInputChange}/>
<label  htmlFor="available_in_store">available_in_store</label>
<input type="text" id="available_in_store" name="available_in_store" placeholder='available_in_store ...' value={available_in_store||""} onChange={handleInputChange}/>
<label  htmlFor="date">date</label>
<input type="date" id="date" name="date" placeholder='date ...' value={date||""} onChange={handleInputChange}/>
<label  htmlFor="productID">productID</label>
<input type="number" id="productID" name="productID" placeholder='productID ...' value={productID||""} onChange={handleInputChange}/>
<label  htmlFor="supplyID">supplyID</label>
<input type="number" id="supplyID" name="supplyID" placeholder='supplyID ...' value={supplyID||""} onChange={handleInputChange}/>
<div className='eight' >
     <input type="submit" value={assetID ? "update":"save"}   />
     <Link to="/asset">
      <button className='nine'>Go Back</button>
     </Link>

     </div>
</div>
      </form>

    </div>
  )
}

export default AddEditAsset