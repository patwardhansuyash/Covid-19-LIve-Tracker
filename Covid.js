class Covid{


 async GetStats(){
    const response= await fetch('https://api.rootnet.in/covid19-in/stats/latest')

    const resdata= await response.json();

    return resdata
}
}


