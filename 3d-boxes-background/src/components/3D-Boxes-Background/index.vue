<template>
    <button id="btn" class="magic" @click="activeBtn">Magic 🎩</button>
    <div id="boxes" class="boxes big"></div>
</template>

<script>
    import { reactive, onMounted } from 'vue'

  export default {
    name: '',
    setup(){
        let boxesContainer = reactive({})
        
        function createBoxes(){
            for(let i = 0; i < 4; i++) {
                for(let j = 0; j < 4; j++){
                    const box = document.createElement('div')
                    box.classList.add('box')
                    // backgroundPosition：设置或返回元素的背景图像的位置
                    box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
                    boxesContainer.appendChild(box)
                }
            }
        }

        function activeBtn(){
            // toggle；给dom元素添加类，消除类
            boxesContainer.classList.toggle('big')
        }

        onMounted(() => {
            boxesContainer = document.querySelector('#boxes')
            createBoxes()
        })

        return {
            activeBtn,
        }
    }
  }
</script>

<style>
  .magic {
    background-color: #f9ca24;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    border: 0;
    border-radius: 3px;
    font-size: 16px;
    padding: 12px 20px;
    cursor: pointer;
    position: fixed;
    top: 20px;
    letter-spacing: 1px;
    box-shadow: 0 3px rgba(249, 202, 36, 0.5);
    z-index: 100;
  }

  .magic:focus {
    outline: none;
  }

  .magic:active {
    box-shadow: none;
    transform: translateY(2px);
  }

  .boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 500px;
    width: 500px;
    position: relative;
    transition: 0.4s ease;
  }

  .boxes.big {
    width: 600px;
    height: 600px;
  }

  .boxes.big .box {
    transform: rotateZ(360deg);
  }

  .box {
    background-image: url('https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif');
    background-repeat: no-repeat;
    background-size: 500px 500px;
    position: relative;
    height: 125px;
    width: 125px;
    transition: 0.4s ease;
  }

  .box::after {
    content: '';
    background-color: #f6e58d;
    position: absolute;
    top: 8px;
    right: -15px;
    height: 100%;
    width: 15px;
    /* 
        skewY(): 包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜
    */
    transform: skewY(45deg);
  }

  .box::before {
    content: '';
    background-color: #f9ca24;
    position: absolute;
    bottom: -15px;
    left: 8px;
    height: 15px;
    width: 100%;
    transform: skewX(45deg);
  }

</style>