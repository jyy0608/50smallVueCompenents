<template>
    <div class="container" id="container">
        <div 
            class="square"
            v-for="(square_1, index) in squares" :key="index"
            @mouseover="setColor"
            @mouseout="removeColor"
        >
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                colors: ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'],
                squares: 500,
            }
        },
        methods: {
            getRandomColor(){
                return this.colors[Math.floor(Math.random() * this.colors.length)]
            }, 
            setColor(event){
                let element = event.target
                let color = this.getRandomColor()
                element.style.background = color
                element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
            }, 
            removeColor(event){
                let element = event.target
                element.style.background = '#1d1d1d'
                element.style.boxShadow = `0 0 2px #000`
            },
        },
    }
</script>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        /* 设置元素的最大宽度 */
        max-width: 400px;
    }

    .square {
        background-color: #1d1d1d;
        box-shadow: 0 0 2px #000;
        height: 16px;
        width: 16px;
        margin: 2px;
        /* 
            transition-property：指定哪个或哪些 CSS 属性用于过渡
            transition-duration:指定过渡的时长
            transition-timing-function:告诉系统过渡动画的运动的速度
            transition-delay:指定延迟，即属性开始变化时与过渡开始发生时之间的时长
        */
        transition: 2s ease;
    }

    .square:hover {
        /* transition-duration 属性规定完成过渡效果需要花费的时间 */
        transition-duration: 0s;
    }
</style>