import { useState } from "react";

import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

function DtChart() {
   
    var [dataChart,setdataChart]=useState([]);
function stats(ev)
{
fetch('http://localhost:2100/monthGraph/'+ev.target.value)
.then(res=>res.json())
.then((data)=>{
//arranging data according to the requiremnt of component from rechart package
    var dChart=[];
data.forEach((a)=>{
    let k={name:''+a._id+'-'+(a._id+100),
	 value:a.count};
	 dChart.push(k)
})

console.log(dChart)
setdataChart(dChart);
}).catch(err=>console.log(err))
}
    return (
	<div className="dataChart">
	<h2>Bar Chart</h2>
    <div>
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
<div><p>Y-axis : No.of Items</p><p> X-axis : Price Range</p></div>
    </div>
	<div id='chart'>
    {/*using component from recharts package to generate chart*/}
	<BarChart width={600} height={400} data={dataChart}>
            <Bar dataKey="value" fill="yellow" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </BarChart>
	</div>
	</div>
);
}

export default DtChart;
