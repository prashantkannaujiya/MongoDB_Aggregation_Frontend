import React, { useState } from "react";

function MonthData()
{
    var [month,setmonth]=useState([])
    function stats(ev)
    {
        
        fetch('http://localhost:2100/monthData/'+ev.target.value)
        .then(res=>res.json())
        .then((data)=>{
setmonth(data)
        })
        .catch(err=>console.log(err))
    }
    return(
        <div>
            <h2>Statistics </h2>
            <select onChange={(e)=>{stats(e)}}>
            <option value='' disabled selected>Select month</option>
        <option value='1'>January</option>
        <option value='2'>February</option>
        <option value='3'>March</option>
        <option value='4'>April</option>
        <option value='5'>May</option>
        <option value='6'>June</option>
        <option value='7'>July</option>
        <option value='8'>August</option>
        <option value='9'>September</option>
        <option value='10'>October</option>
        <option value='11'>November</option>
        <option value='12'>December</option>
    </select>
    <div>{console.log(month)}
    <div id='monthData'>{month.length!=0 ?
     <div><p>Total Sale : {month[0].total}</p>
    <p>Total sold item : {month[0].sold}</p>
    <p>Total items not sold : {month[0].unsold}</p></div>:<h3 style={{textAlign:'center'}}>Select a month</h3>}
</div>

    </div>
        </div>
    )
}
export default MonthData;