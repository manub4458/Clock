 setInterval(()=>{
        // let a = new Date();
        // let h = a.getHours();
        // let m = a.getMinutes();
        // let s = a.getSeconds();
        // let d = a.getDate();
        // // console.log(h,m,s);
        // document.write(h+":"+m+":"+s+":"+d);
        a = new Date();
let date = a.toLocaleDateString();
let time = "Time: "+a.getHours() + ` : `+ a.getMinutes() + ` : ` + a.getSeconds();
document.getElementById('time').innerHTML = time + "  Date:" + date;
 },1000)