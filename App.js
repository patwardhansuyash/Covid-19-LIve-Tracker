const covid= new Covid;
const ui= new UI;
const btn= document.getElementById('btn');
const state=document.getElementById('state');
const country=document.getElementById('country')
const progress=document.querySelector('.progress')
const light=document.getElementById('light');
const lastupd=document.getElementById('lastupd')
const burger=document.querySelector('.navbar-toggler-icon')
const nav=document.getElementById('navx');
const searchtxt=document.getElementById('searcht');
const searchbtn=document.getElementById('searchb');
const homie=document.getElementById('homeie');

window.onscroll=()=>{
  homie.style.transition='.5s'
  if(window.pageYOffset>100){
    homie.innerHTML=`<a id="gotop" href="#navx"><i class="fas fa-angle-double-up fa-2x"></i></a>`

  }
  else{
    homie.innerHTML='';
  }
}

searchbtn.addEventListener('click',()=>{
  searchbtn.setAttribute('href',`#${(searchtxt.value.split(" ").join("")).toLowerCase()}`)
 document.getElementById(`${(searchtxt.value.split(" ").join("")).toLowerCase()}`).classList.add('high');
  document.getElementById(`${(searchtxt.value.split(" ").join("")).toLowerCase()}`).animation="change 5s forwards 1s ease-in-out"
 
  // const highlight=document.getElementById(`#${searchtxt.value.split(" ").join("")}`)
 // console.log(highlight);
 // console.log(searchtxt.value)
 
})





const dark =document.getElementById('customSwitch1');
dark.addEventListener('click',(e)=>{
  
  if(light.textContent==='Lights OFF'){
    document.body.classList.add('bodydark');
    light.textContent='Lights ON';
    light.style.color="white";
    btn.style.backgroundColor='#74B9FF';
    nav.className='navbar navbar-expand-lg navbar-dark bg-dark'
    if(btn.textContent==='Hide Stats'){
      state.innerHTML=''
      covid.GetStats().then((data)=>{
        const Stat= data.data.regional
        
  
       ui.showStatsDark(Stat);
       
    
    
    })
    }
  }
  else{
    light.textContent='Lights OFF';
    document.body.classList.remove('bodydark');
    light.style.color="black";
    btn.style.backgroundColor='black';
    nav.className='navbar navbar-expand-lg navbar-light bg-light'
    if(btn.textContent==='Hide Stats'){
      state.innerHTML=''
      covid.GetStats().then((data)=>{
        const Stat= data.data.regional
        
  
       ui.showStats(Stat);
       
    
    
    })
      
    }
    

  }
  
})



setTimeout(()=>progress.style.display="none",3000)
covid.GetStats().then((data)=>{console.log(data.data.summary)
    country.innerHTML=`<div class="card text-white bg-danger" style="width: 22rem; ">
    <div class="card-header">India</div>
    <div class="card-body">
      <h4 class="card-title"> Total Cases: ${data.data.summary.total}
      <img id="map" src="./india.svg" alt=""></h4>
      <p class="card-text">
        <ul id="stats">
        <li>Discharged: ${data.data.summary.discharged}</li>
        <li>Deaths: ${data.data.summary.deaths}</li>
        </ul>
      </p>
    </div>
  </div>`
  country.style.animation='countryfade .4s';

  setTimeout(()=>btn.style.display="block",3000)
  setTimeout(()=>btn.style.animation='countryfade .2s',3000)

})
btn.addEventListener('click',(e)=>{
        if(e.target.textContent==='Show Statewise'){
            e.target.textContent='Hide Stats'
            covid.GetStats().then((data)=>{
                const Stat= data.data.regional
                if(light.textContent==='Lights OFF'){
                  ui.showStats(Stat);
                }
                else{
                  ui.showStatsDark(Stat);
                } 
            
            })
        }
        else{
            e.target.textContent='Show Statewise'
            state.innerHTML=''
        }
    
})


covid.GetStats().then((data)=>{
  console.log(data)
  const split=data.lastRefreshed.split('T');
  lastupd.innerHTML=`<div id="alert" class="alert alert-dismissible alert-success" style="width: 300px;">
  <strong>Last Updated: ${split[0]} at ${split[1]} IST</strong>
</div>`
})
setTimeout(()=>lastupd.style.display="block",6000)
setTimeout(()=>lastupd.style.display="none",12000)
lastupd.style.animation='notifyfade .4s';

burger.addEventListener('click',(e)=>{
  document.body.classList.toggle('bodyactive')
})