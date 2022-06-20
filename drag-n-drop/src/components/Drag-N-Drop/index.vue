<template>
    <div 
        class="empty" 
        v-for="(item, index) in itemsDiv" 
        :key="index"
    >
        <!-- draggable 属性规定元素是否可拖动 -->
        <div 
            v-if="index==0" 
            class="fill" 
            draggable="true"
        >
        </div>
    </div>
</template>

<script>
    import { ref, onBeforeUnmount, onMounted, getCurrentInstance } from 'vue'

    export default {
        name: '',
        setup(){
            let itemsDiv = ref(5)
            let idx = ref(0)
            // getCurrentInstance()：得到当前实例

            let timer = null
            let fill = null
            let empties = null

            function dragStart(){
                this.className += ' hold'
                timer = setTimeout(() => this.className = 'invisible', 0)
            }

            function dragEnd(){
                this.className = 'fill'
            }

            function dragOver(event){
                // event.preventDefault() 方法阻止元素发生默认的行为
                event.preventDefault()
            }

            function dragEnter(event){
                event.preventDefault()
                this.className += ' hovered'
            }

            function dragLeave(){
                this.className = 'empty'
            }

            function dragDrop(){
                this.className = 'empty'
                this.append(fill)
            }

            onMounted(() => {
                fill = document.querySelector('.fill')
                empties = document.querySelectorAll('.empty')
                for(const empty of empties){
                    empty.addEventListener('dragover', dragOver)
                    empty.addEventListener('dragenter', dragEnter)
                    empty.addEventListener('dragleave', dragLeave)
                    empty.addEventListener('drop', dragDrop)
                }
                fill.addEventListener('dragstart', dragStart)
                fill.addEventListener('dragend', dragEnd)
            })

            onBeforeUnmount(() => {
                clearTimeout(timer)
            })

            return {
                itemsDiv,
                idx,
                dragStart,
                dragEnd,
                dragOver, 
                dragEnter,
                dragLeave,
                dragDrop,
            }
        }
    }
</script>

<style>
    .empty {
        height: 150px;
        width: 150px;
        margin: 10px;
        border: solid 3px black;
        background-color: white;
    }

    .fill {
        background-image: url('https://source.unsplash.com/random/150x150');
        height: 145px;
        width: 145px;
        cursor: pointer;
    }

    .hold {
        border: solid 5px #ccc;
    }

    .hovered {
        background-color: #333;
        border-color: white;
        /* 
            border-style：设置一个元素的四个边框的样式
            dashed：定义虚线
        */
        border-style: dashed;
    }

</style>