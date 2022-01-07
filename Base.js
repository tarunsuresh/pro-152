// Registering component in log-component.js
AFRAME.registerComponent('car', {
    schema: {
      clickCounter:{type:"number",default:0}
    },
    
      update:function(){
        window.addEventListener("click",e =>{
          this.data.clickCounter=this.data.clickCounter+1
          if(this.data.clickCounter=== 1){
            const rotation={x:0,y:1,z:0}
            this.el.setAttribute("rotation",rotation)
          }else if (this.data.clickCounter ===2){
            const rotation ={x:0,y:2,z:0}
          }
        })
      }
  });
 