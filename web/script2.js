
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        age :24,
       parson : [
        {name:'brahim',class :'a', age :30 },
        {name:'moh',class :'a', age :35 } 
      ]
      }
    },methods:{
      hande(){
        console.log("heloooo");
        this.age++;
      }
    }
  }).mount('#app')
