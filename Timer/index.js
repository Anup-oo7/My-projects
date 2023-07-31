const endDate = "10 April 2023 11:00 am"
document.getElementById("end-date").innerText=endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now=new Date;
 const diff=(end-now)/1000;
 if(diff<0) return;

 console.log(diff)
 //days
 inputs[0].value=(Math.floor(diff/3600/24))
 //hours
 inputs[1].value=(Math.floor(diff/3600)%24)
 //minutes
 inputs[2].value=(Math.floor(diff/60)%60)
 //seconds
 inputs[3].value=(Math.floor(diff)%60)

}
 
clock()

//1 day =24 hrs
//1 hr =60 mins
// 60 min =3600 secs

setInterval(
    ()=>{
        clock()
    },
    1000
)