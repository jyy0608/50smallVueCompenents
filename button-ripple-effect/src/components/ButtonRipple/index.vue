<template>
    <div class="container">
        <button class="ripple" @click="getClick">
            Click Me
            <span 
                v-show="isShow" 
                :style="{top:yInside, left:xInside}" 
                :class="{circle:isShow}"
            >
            </span>
        </button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShow: false,
                xInside: '-1px',
                yInside: '-1px',
            }
        },
        methods: {
            getClick(event){
                const x = event.clientX
                const y = event.clientY

                const buttonTop = event.target.offsetTop
                const buttonLeft = event.target.offsetLeft

                this.xInside = x - buttonLeft + 'px'
                this.yInside = y - buttonTop + 'px'

                this.isShow = true

                setTimeout(()=>{
                    this.isShow = false
                }, 500)
            }
        },
    }
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        /* 垂直居中 */
        align-items: center;
        /* 垂直居中 */
        justify-content: center;
        height: 100vh;
    }

    button {
        background-color: purple;
        color: #fff;
        border: 1px purple solid;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 20px 30px;
        overflow: hidden;
        margin: 10px 0;
        position: relative;
    }

    button:focus {
        outline: none;
    }

    button .circle {
        position: absolute;
        background-color: #fff;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: scale 0.5s ease-in;
    }

    /* 
        创建动画 
        from (和0%相同)
        to (和100%相同)    
    */
    @keyframes scale {
        to {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
        }
    }
</style>