const loadPhone=()=>
{
    const serachField=document.getElementById('inputField');
    const serachText=serachField.value;
    
    const url=`https://openapi.programming-hero.com/api/phones?search=${serachText}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayPhone(data.data))
    serachField.value='';
    
}

const displayPhone=(phones)=>
{
  //console.log(phones.slice(0,10));
  if(phones.length==0)
  {
    const alert=document.getElementById('alert');
    alert.style.display='block';
  }
  else{
    const alert=document.getElementById('alert');
    alert.style.display='none';


  const phns=phones.slice(0,20);
    const phnContainer=document.getElementById('phnCard-div');
    phnContainer.textContent='';
    phns.forEach(phone=>{
        //console.log(phone);
       const div=document.createElement('div');
       
      
       
       
       div.innerHTML=`<div class="col">
       <div class="card h-100">
         <img src="${phone.image}" class=" card-img-top  alt="...">
         <div class="card-body">
         
           <h5>Name: ${phone.phone_name} </h5>
           <h5>Brand: ${phone.brand} </h5>
           <button onClick="loadPhnDetails('${phone.slug}')" type="button" class="btn btn-success ">Details</button>
           
         </div>
       </div>
     </div>`;

     phnContainer.appendChild(div);


    })
  }
    
}

const loadPhnDetails=(id)=>
{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayPhnDetails(data.data))
}


const displayPhnDetails=(dispPhnDetails)=>
{
  
  console.log(dispPhnDetails.others);
  const others=dispPhnDetails.others;
  const sensorField=dispPhnDetails.mainFeatures.sensors;
  const phnDetailsfield=document.getElementById('phnDetailsArea');
  phnDetailsfield.textContent='';
  const divContainer=document.createElement('divContainer');



  function cj(){
   if(dispPhnDetails?.releaseDate)
  {
    const p=(dispPhnDetails.releaseDate)
    return p;
  }
  else{
    const p=("Not Found");
    return p;
  } 
}
const pa=cj();
console.log(pa);

 //sensorField.forEach(sensor=>{
  // console.log(sensor);




 

  

  
 
  divContainer.innerHTML=`<div id="web" class="  card mx-auto mb-3" style="width: 33rem;">
  <img src="${dispPhnDetails.image}" class=" card-img-top" alt="...">;




  
 
     
     <p><b>relaeseDate:</b> ${pa}</p>
     <p><b>chipSet:</b> ${dispPhnDetails.mainFeatures.chipSet}  </p>
     <p><b>displaySize:</b> ${dispPhnDetails.mainFeatures.displaySize}</p>
     <p><b>memory:</b> ${dispPhnDetails.mainFeatures.memory}</p>
     <p><b>sensor:</b> ${sensorField[0]},${sensorField[1]},${sensorField[2]},${sensorField[3]}, ${sensorField[4]}, ${sensorField[5]}</p>
     <p><b>others:</b> ${others.Bluetooth},${others.GPS},${others.NFC},${others.Radio}, ${others.USB},${others.WLAN}</p>
     
    

  
  </div>
</div>`

phnDetailsfield.appendChild(divContainer);





  

}
