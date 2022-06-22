<template>
    <div class="slider-container">
        <div class="left-slide" :style="{transform:`translateY(${activeSliderIndex * sliderHeight}px)`}">
            <div v-for="(info, index) in infos" :key="index" :style="{'background-color':info.color}">
                <h1>{{info.h1}}</h1>
                <p>{{info.p}}</p>
            </div>
        </div>
        <div class="right-slide" :style="{transform:`translateY(-${activeSliderIndex * sliderHeight}px)`}">
            <div v-for="(imageUrl, index) in imageUrls" :key="index" :style="{'background-image':'url('+imageUrl+')'}">
            </div>
        </div>
        <div class="action-buttons">
            <button class="down-button" @click="changeSlide('down')">
                <i class="fas fa-arrow-down"></i>
            </button>
            <button class="up-button" @click="changeSlide('up')">
                <i class="fas fa-arrow-up"></i>
            </button>
        </div>
    </div>
</template>

<script>
    import {
        reactive,
        ref,
        onMounted,
    } from 'vue'

    export default {
        name: '',
        setup() {
            const imageUrls = reactive([
                'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80',
                'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80',
                'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80',
            ])
            const infos = reactive([{
                    h1: 'Nature flower',
                    p: 'all in pink',
                    color: '#FD3555'
                },
                {
                    h1: 'Bluuue Sky',
                    p: 'with it\'s mountains',
                    color: '#2A86BA'
                },
                {
                    h1: 'Lonely castle',
                    p: 'in the wilderness',
                    color: '#252E33'
                },
                {
                    h1: 'Flying eagle',
                    p: 'in the sunset',
                    color: '#FFB866'
                },
            ])
            let sliderHeight = ref(0)
            let activeSliderIndex = ref(0)

            const slidesLength = imageUrls.length
            let slideLeft = null
            let sliderContainer = null

            function changeSlide(direction) {
                if (direction == 'up') {
                    activeSliderIndex.value++
                    if (activeSliderIndex.value > slidesLength - 1) {
                        activeSliderIndex.value = 0
                    }
                } else if (direction == 'down') {
                    activeSliderIndex.value--
                    if (activeSliderIndex.value < 0) {
                        activeSliderIndex.value = slidesLength - 1
                    }
                }
            }

            onMounted(() => {
                sliderContainer = document.querySelector('.slider-container')
                slideLeft = document.querySelector('.left-slide')
                window.onresize = function(){
                    sliderHeight.value = sliderContainer.clientHeight
                }
                
                slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
            })

            return {
                imageUrls,
                infos,
                changeSlide,
                activeSliderIndex,
                sliderHeight,
            }
        },
    }
</script>

<style>
    .slider-container {
        position: relative;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
    }

    .left-slide {
        height: 100%;
        width: 35%;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.5s ease-in-out;
    }

    .left-slide>div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* 垂直居中 */
        align-items: center;
        /* 水平居中 */
        justify-content: center;
        color: #fff;
    }

    .left-slide h1 {
        font-size: 40px;
        margin-bottom: 10px;
        margin-top: -30px;
    }

    .right-slide {
        height: 100%;
        position: absolute;
        top: 0;
        left: 35%;
        width: 65%;
        transition: transform 0.5s ease-in-out;
    }

    .right-slide>div {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 100%;
        widows: 100%;
    }

    button {
        background-color: #fff;
        border: none;
        color: #aaa;
        cursor: pointer;
        font-size: 16px;
        padding: 15px;
    }

    button:hover {
        color: #222;
    }

    button:focus {
        outline: none;
    }

    .slider-container .action-buttons button {
        position: absolute;
        left: 35%;
        top: 50%;
        z-index: 100;
    }

    .slider-container .action-buttons .down-button {
        transform: translateX(-100%);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .slider-container .action-buttons .up-button {
        transform: translateY(-100%);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
</style>