import http from './http'



// top250
export function all(start, count) {
  // return http.get('/top250?start=' + start + '&count=' + count)
  var data = require('../data/top250.json');
  console.log('dddddd',data);
  // return new Promise(resolve => {
  //   return data;
  // });

  var b= new Promise(function(resolve, reject){
    //异步操作
    setTimeout(function(){
      resolve(data);
    }, 40);
  });
  return b; 
}

// 正在热映
export function hot(start, count) {
  // console.log('hot', start, count)
  // return http.get('/in_theaters?start=' + start + '&count=' + count)

  var data = require('../data/hot.json');

  var b = new Promise(function(resolve, reject){
    //异步操作
    setTimeout(function(){
      resolve(data);
    }, 100);
  });
  return b;
}

// 即将上映
export function soon(start, count) {
  // return http.get('/coming_soon?start=' + start + '&count=' + count)

  var data = require('../data/soon.json');

  var b = new Promise(function(resolve, reject){
    //异步操作
    setTimeout(function(){
      resolve(data);
    }, 100);
  });
  return b;
}

// 电影详情
export function detail(id) {
  // return http.get('/subject/' + id)

  var data = require('../data/detail.json');
  var b = new Promise(function(resolve, reject){
    //异步操作
    setTimeout(function(){
        resolve(data);
    }, 100);
  });
  return b;
}
