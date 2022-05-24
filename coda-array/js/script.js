// creo array a
let a = ["pippo", "pluto", 3, 11, true, "mario", false]

let aLastFive =[];

// 
for (let i = (a.length - 5); i < a.length; i++) {
    let element = a[i]
    console.log(element)
    aLastFive.push(element)
    
}

console.log(aLastFive);


