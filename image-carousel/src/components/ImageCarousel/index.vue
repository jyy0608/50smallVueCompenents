<template>
    <div class="carousel">
        <div 
            class="image-container" 
            id="imgs"
            :style="{transform:`translateX(${-idx * 500}px)`}"
        >
            <img v-for="(imgInfo, index) in imageInfos" :key="index.url" :src="imgInfo.url" :alt="imgInfo.altText">
        </div>

        <div class="buttons-container">
            <button id="left" class="btn" @click="subIdx">Prev</button>
            <button id="right" class="btn" @click="addIdx">Next</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                imageInfos: [
                    {url:'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80', altText: 'first-image'},
                    {url:'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', altText: 'second-image'},
                    {url:'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', altText: 'third-image'},
                    {url:'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80', altText: 'fourth-image'},
                ], 
                idx: 0,
                imgs: null,
                timer: null,
            }
        },
        mounted() {
            this.imgs = document.querySelector('#imgs')
            this.timer = setInterval(() => {
                this.idx++
                this.changeImage()
            }, 2000)
        },
        methods: {
            changeImage(){
                if(this.idx > this.imageInfos.length - 1){
                    this.idx = 0
                } else if(this.idx < 0){
                    this.idx = this.imageInfos.length - 1
                }
            },
            subIdx(){
                this.idx--
                this.changeImage()
            },
            addIdx(){
                this.idx++
                this.changeImage()
            },
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
    }
</script>

<style>
    img {
        width: 500px;
        height: 500px;
        /* 
            object-fit：指定元素的内容应该如何去适应指定容器的高度与宽度
        */
        object-fit: cover;
    }

    .carousel {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        height: 530px;
        width: 500px;
        overflow: hidden;
    }

    .image-container {
        display: flex;
        transform: translateX(0);
        transition: transform 0.5s ease-in-out;
    }

    .buttons-container {
        display: flex;
        justify-content: space-between;
    }

    .btn {
        background-color: rebeccapurple;
        color: #fff;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        width: 49.5%;
    }

    .btn:hover {
        opacity: 0.9;
    }

    .btn:focus {
        outline: none;
    }

</style>