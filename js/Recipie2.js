// const first = ()=>{
//     return 'this is first call'
// }

//  const second =  () =>{
//      return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             resolve('this is second call')
//          },3000)
//      })
// }

// const third = ()=>{
//     return 'this is third call'
// }

// const callFuns = async () => {
//     const valOne = first();
//     console.log(valOne);
//     const valTwo = await second();
//     console.log(valTwo);
//     const valThree = third();
//     console.log(valThree);
// }

// callFuns();
const { log } = require('console');
const fetch = require('node-fetch')

const mypromise = new Promise((resolve,reject)=>{
    const randomNum = Math.floor(Math.random()* 2);
    if (randomNum == 0) {
        resolve();
    }
    else{
        reject();
    }
})

mypromise.then(()=> console.log('Success')).catch(()=>console.error('Something Wrong'))


const fetchData =  () => {
    setTimeout( async ()=>{
        await  fetch('http://ww16.poekapi.co/api/v2/pokemon/ditto')
        .then((res) => console.log(res))
        .catch((error)=>console.log(error));
    },2000)


}

fetchData()



