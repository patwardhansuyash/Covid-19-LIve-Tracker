class UI{
    constructor(){
    this.stat=document.getElementById('state')
    }

    showStats(staty){
        let output=''
        //state.innerHTML='';
        staty.forEach((statx,index)=>{
           const element=document.createElement('li');
            output=`
            <div id="statem" class="card bg-light mb-3" style="width: 20rem;">
            <div id="${statx.loc.toLowerCase().split(" ").join("")}" class="card-header">${statx.loc}</div>
            <div class="card-body">
            <h4 class="card-title">Total Cases: ${statx.totalConfirmed}</h4>
            <p class="card-text">
            <ul id="stats">
            <li>Confirmed Cases Foreign: ${statx.confirmedCasesForeign}</li>
            <li>Confirmed Cases Indian: ${statx.confirmedCasesIndian}</li>
            <li>Discharged: ${statx.discharged}</li>
            <li>Deaths: ${statx.deaths}</li>
            </ul>
            </p>
            </div>
            </div>`
            element.className='statewise'
            element.innerHTML=output;
            state.appendChild(element);

            //console.log(statx.loc.toLowerCase().split(" ").join(""))
            element.style.animation=`countryfade ${index/4 }s`;
            
        })
            


       
        //const strin="hello"

        //console.log(strin.substr(0,3));
        
    }
    showStatsDark(staty){
        let output=''
        //state.innerHTML='';
        staty.forEach((statx,index)=>{
            const element=document.createElement('li');
            
           
            output=`
            <div id="statem" class="card text-white bg-dark mb-3" style="width: 20rem;">
            <div id="${statx.loc.toLowerCase().split(" ").join("")}" class="card-header">${statx.loc}</div>
            <div class="card-body">
            <h4 class="card-title">Total Cases: ${statx.totalConfirmed}</h4>
            <p class="card-text">
            <ul id="stats">
            <li>Confirmed Cases Foreign: ${statx.confirmedCasesForeign}</li>
            <li>Confirmed Cases Indian: ${statx.confirmedCasesIndian}</li>
            <li>Discharged: ${statx.discharged}</li>
            <li>Deaths: ${statx.deaths}</li>
            </ul>
            </p>
            </div>
            </div>`
            element.className='statewise'
            element.innerHTML=output;
            state.appendChild(element);
            element.style.animation=`countryfade ${index/4}s`;
            
        })
        //this.stat.innerHTML=output;
        
        
        
        
    }

   
}