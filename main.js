
//--------------- For masalasini while bilan hal qilingani--------------------

// // while-1
// let k = prompt("k sonini kiriting: ");
// let n = prompt("n sonini kiriting");
// let i=0;
// while (i!=n){
//     console.log(k)
//     i++
// }


// // while-2
// let a = parseInt(prompt('a sonini kirirting: '))
// let b = prompt('b sonini kiriting: ')

// while(b>(a+1)){
//         console.log(b-1)
//         --b
// }


// // while4

// let narx = prompt('narxni kiriting')
// let i=1;
// while(i<=10){
//     console.log(i*narx)
//     i++
// }




// // while5
// let narx = prompt('narxni kiriting')
// let i=0.1; 
// while(i<=1){
//     console.log(i*narx)
//     i+=0.1
// }


// // while6
// let narx = prompt('narxni kiriting')
// let i=0.2; 
// while(i<=1){
//     console.log(i*narx)
//     i+=0.2
// }


// //whlie-7
// let a = parseInt(prompt('a sonini kirirting: '))
// let b = parseInt(prompt('b sonini kiriting: '))
// let i=0
// while(b>=a){
//     i+=b
//     b--
// }
// console.log(i);


// //while-8
// let a = parseInt(prompt('a sonini kirirting: '))
// let b = parseInt(prompt('b sonini kiriting: '))
// let i=1
// while(b>=a){
//     i*=b
//     b--
// }
// console.log(i);


// // while9
// let a = parseInt(prompt('a sonini kirirting: '))
// let b = parseInt(prompt('b sonini kiriting: '))
// let i=0
// while(b>=a){
//     i+=b**2
//     b--
// }
// console.log(i);


// //while10
// let n = parseInt(prompt('n sonini kiriting: '))
// let counter = 0

// while(n!=0){
//      counter+= 1/n
//      n--
// }
// console.log(counter);


// //while11
// let n = parseInt(prompt('n sonini kiriting: '))
// let counter = 0
// let i=n
// for(n!=0){
//     counter+=(i+n)**2
//     n--
// }
// console.log(counter);



// //while12
// let n = parseInt(prompt('n sonini kiriting: '))
// let counter = 1
// let i=1.1;
// for(i<=n){
//     counter*=i
//     console.log(counter);
//     i+=0.1
// }




// While masalalari

// let a = parseInt(prompt('a sonini kirirting: '))
// let b = parseInt(prompt('b sonini kiriting: '))

// while(a>b){
//     a-=b
// }console.log(a);






// let a = parseInt(prompt('a sonini kirirting: '))
// let b = parseInt(prompt('b sonini kiriting: '))
// let counter=0

// while(a>b){
//     a-=b
//     counter++
// }console.log(counter);



// let k = parseInt(prompt('a sonini kirirting: '))
// let n = parseInt(prompt('b sonini kiriting: '))
// let counter=0

// while(n>k){
//     n-=k
//     counter++
// }console.log(counter);




// let n = parseInt(prompt('b sonini kiriting: '))
// let counter=3

// while(n>3){
//     n-=counter
//     counter*=3
// }
// if(n==3){
//     console.log("3ning darajasi");
// }else{
//     console.log("3ning darajasi emas");
// }



// let n = parseInt(prompt('b sonini kiriting: '))
// let k=0
// let counter=2

// while(n!=0){
//     n-=counter
//     counter*=2
//     k++
// }
// console.log(k);



// let a = parseInt(prompt('a sonini kirirting: '))
// let b = parseInt(prompt('b sonini kiriting: '))
// let counter=0

// while(a>b){
//     a-=b
//     counter++
// }console.log(`butun qism ${counter}, qoldiq qism ${a}`);



// function tubmi(n) {
//     if (n <= 1) 
//         return false;
    
//     for (let i = 2; i*i <= n; i++) {
//         if (n % i === 0) 
//             return false;
//     }
    
//     return true;
// }

// let son = prompt("Istalgan sonni kiriting:");
// son = parseInt(son);

// if (isNaN(son)) {
//     console.log("Noto'g'ri son kiritdingiz.");
// } else {
//     if (tubmi(son))
//         console.log(son + " tub son.");
//     else
//         console.log(son + " murakkab son.");
// }