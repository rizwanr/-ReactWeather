// //normal callback function
//
// function getTempCallback(location, callback){
//   callback(undefined,78);
//   callback('City not found');
//
// }
//
// getTempCallback('Philadelphia', function(err,temp){
//  if(err){
//    console.log('error', err);
//  } else {
//    console.log('success',temp);
//  }
// });
//
// //es6 promises
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     resolve(79);
//     reject('City not found')
//
// });   // we return a promise object ; calling a new promise constructir passing in an arguement
// }
//
// getTempPromise('Philadelphia').then(function(temp){
// console.log('promise success', temp);
//
// },  function(err){
// console.log('promise failure', err);
//
// });


function addPromise(a,b){
return new Promise(function(resolve, reject){
  var sum = a+b;
  if (typeof sum === 'number'){
  resolve(sum);
} else {
  reject('not possible');
}
});
}

addPromise(2,4).then(function(sum){
console.log('promise success', sum);
  }, function(err){
console.log('promise unsuccessful', err);
  });

  addPromise('d','r').then(function(sum){
  console.log('promise success', sum);
    }, function(err){
  console.log('promise unsuccessful', err);
    });
