import React,{useEffect, useState} from 'react'
import './covid.css';

const Covid = () => {
   const [data, setData] = useState([]);
    const getCovidData = async()=>{
        try {
            
          const res = await fetch('https://data.covid19india.org/v4/min/data.min.json')
           const actualData = await res.json();
           console.log(actualData.PB["total"]);
          //console.log(res);
          setData(actualData.PB["total"])

        }catch (err){
            console.log(err);

        }  
    }

    useEffect(() =>{
        getCovidData();
    },[]);
    
    //console.log("hello")
  return (
    <>
    <section>
    <h1>  <button className='abc' ></button> LIVE</h1>
    
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
           <li className='card_main' id='ab'>
          
           <div className='card_inner'>
           <p className='card_name'> <span> OUR&nbsp;</span> COUNTRY</p>
           <p className='card_total'>INDIA</p>
           
          

           
           </div>


           </li>

           <li className='card_main' id='cd'>
           
           <div className='card_inner'>
           <p className='card_name'> <span> TOTAL&nbsp;</span>RECOVERED</p>
           <p className='card_total'>{data.recovered}</p>
           
          

           
           </div>


           </li>

           <li className='card_main' id='ef'>
          
           <div className='card_inner'>
           <p className='card_name'> <span> TOTAL&nbsp;</span>CONFIRMED</p>
              <p className='card_total'>{data.confirmed}</p>
           
           

           
           </div>


           </li>

           <li className='card_main' id='gh'>
          
           <div className='card_inner'>
           <p className='card_name'> <span> TOTAL&nbsp;</span>DEATH</p>
           <p className='card_total'>{data.deceased}</p>
           
           </div>

           
           


           </li>

           <li className='card_main' id='ij'>
          
           <div className='card_inner'>
           <p className='card_name'> <span> TOTAL&nbsp;</span>ACTIVE</p>
           <p className='card_total'>{data.vaccinated1}</p>
           
           </div>

           
           


           </li>
           <li className='card_main' id='kl'>
          
           <div className='card_inner'>
           <p className='card_name'> <span> LAST&nbsp;</span>UPDATED</p>
           <p className='card_total'>{data.tested}</p>
           
           </div>

           
           


           </li>
        </ul>
        </section>
        
    </>
  )
}
export default Covid
