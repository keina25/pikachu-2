import string from './css.js'
//默认导入 

//先把函数搞进来，再把对象弄进来
const player = {
    id: undefined,
    time: 100,
    ui: {
      demo: document.querySelector('#demo'),
      demo2: document.querySelector('#demo2')
    },
    //单独一个对象包裹它，它是界面里的元素
    events: {
        '#btnPause': 'pause',  //pause这里是字符串
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
      },  
   n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play()
  },  
  //一般一个对象，需要一个初始化的方法

  bindEvents: () => {   //bindEvents绑定事件
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) { 
        //如果这个key是player自身属性,而不是继承属性，再执行后面的
        const value = player.events[key] //value = pause / play / slow
        document.querySelector(key).onclick = player[value]
      }
    }

  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight   //移动滚动条
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    // window.clearInterval(id)
    //time = 300
    // id = setInterval(handler. ()=>{
    //  run()
    // },time)
    player.pause()
    player.time = 300
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}
// demo.innerText = string.substring(from:0,n)
// demo2.innerHTML = string.substring(from:0,n)

// let time = 100

//const run = ()=>{     可以改成箭头函数run:()=>{}
//  n +=1
//if(n > string.length){
  //window.clearInterval(id)
  //return
  //}
  //console.log(n + ':' + string.substr(from:0,n))
  //demo.innerText = string.substring(from:0,n)
  //demo2.innerHTML = string.substring(from:0,n)
  //demo.scrollTop = demo.scrollHeight
//}


//const play = ()=>{
// return setInterval(player.run, time)  
//}
// const pause = ()=>{
//  window.clearInterval(id)
//}
// const slow = ()=>{
//  player.pause()
//  time = 300
//  id = player.play()
//}
// const normal = ()=>{
//  player.pause()
//  time = 100
//  id = player.play()
//}
// const fast = ()=>{
//  player.pause()
//  time = 0
//  id = player.play()
//}
// let id = player.play()
//  document.querySelector(selectors:'#btnPause').onclick = player.pause()
//  document.querySelector(selectors:'#btnPlay').onclick = ()=>{
//  id = player.play()
//}
//  document.querySelector(selectors:'#btnSlow').onclick = player.slow
//  document.querySelector(selectors:'#btnNormal').onclick = player.normal
//  document.querySelector(selectors:'#btnFast').onclick = player.fast



player.init()