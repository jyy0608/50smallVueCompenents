<template>
    <div class="container">
        <button class="toggle" @click="changeDark">Dark mode</button>

        <div class="clock-container">
            <div class="clock">
                <div class="needle hour" :style = "{transform:  `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`}"></div>
                <div class="needle minute" :style = "{transform:  `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`}"></div>
                <div class="needle second" :style = "{transform:  `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`}"></div>
                <div class="center-point"></div>
            </div>
        </div>

        <div class="time">{{`${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`}}</div>
        <div class="date">
            {{`${days[day]}, ${months[month]}`}}
            <span class="circle">{{date}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                hoursForClock: -1,
                minutes: -1,
                seconds: -1,
                ampm: '',
                day: -1,
                month: -1,
                date: -1,
                html: null,
                hourEl: null,
                minuteEl: null,
                secondEl: null,
                timeEl: null,
                dateEl: null,
            }
        },
        mounted() {
            this.html = document.querySelector('html');
            this.hourEl = document.querySelector('.hour');
            this.minuteEl = document.querySelector('.minute');
            this.secondEl = document.querySelector('.second');
            this.timeEl = document.querySelector('.time');
            this.dateEl = document.querySelector('.date');

            const time = new Date();
            this.month = time.getMonth();
            this.day = time.getDay();
            this.date = time.getDate();
            this.hours = time.getHours();
            this.hoursForClock = this.hours >= 13 ? this.hours % 12 : this.hours;
            this.minutes = time.getMinutes();
            this.seconds = time.getSeconds();
            this.ampm = this.hours > 12 ? 'PM' : 'AM';

            this.timer = setInterval(() => {
                this.setTime();
            }, 1000);
        },
        methods: {
            changeDark() {
                if (this.html.classList.contains('dark')) {
                    this.html.classList.remove('dark');
                    event.target.innerHTML = 'Dark mode';
                } else {
                    this.html.classList.add('dark');
                    event.target.innerHTML = 'Light mode';
                }
            },
            setTime() {
                const time = new Date();
                this.month = time.getMonth();
                this.day = time.getDay();
                this.date = time.getDate();
                this.hours = time.getHours();
                this.hoursForClock = this.hours >= 13 ? this.hours % 12 : this.hours;
                this.minutes = time.getMinutes();
                this.seconds = time.getSeconds();
                this.ampm = this.hours > 12 ? 'PM' : 'AM';      
            },
            scale(num, in_min, in_max, out_min, out_max) {
                return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
            },
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
    }
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        /* 垂直居中 */
        align-items: center;
        /* 水平居中 */
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin: 0;
    }

    .toggle {
        cursor: pointer;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        border: 0;
        border-radius: 4px;
        padding: 8px 12px;
        position: absolute;
        top: 100px;
    }

    .toggle:focus {
        outline: none;
    }

    .clock-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .clock {
        position: relative;
        width: 200px;
        height: 200px;
    }

    .needle {
        background-color: var(--primary-color);
        position: absolute;
        top: 50%;
        left: 50%;
        height: 65px;
        width: 3px;
        /* 设置旋转元素的基点位置 */
        transform-origin: bottom center;
        transition: all 0.5s ease-in;
    }

    .needle.hour {
        transform: translate(-50%, -100%) rotate(0deg);
    }

    .needle.minute {
        transform: translate(-50%, -100%) rotate(0deg);
        height: 100px;
    }

    .needle.second {
        transform: translate(-50%, -100%) rotate(0deg);
        height: 100px;
        background-color: #e74c3c;
    }

    .center-point {
        background-color: #e74c3c;
        width: 10px;
        height: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }

    .center-point::after {
        content: '';
        background-color: var(--primary-color);
        width: 5px;
        height: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }

    .time {
        font-size: 60px;
    }

    .date {
        color: #aaa;
        font-size: 14px;
        /* 增加或减少字符间的空白（字符间距） */
        letter-spacing: 0.3px;
        /* 控制文本的大小写 */
        text-transform: uppercase;
    }

    .date .circle {
        background-color: var(--primary-color);
        color: var(--secondary-color);
        border-radius: 50%;
        height: 18px;
        width: 18px;
        /* 
            display: flex;  如果没有为父元素main设置宽度，默认为100%
            display: inline-flex; 如果没有给父元素设置宽度，但是父元素默认会根据子元素的宽高去自适应  
        */
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 18px;
        transition: all 0.5s ease-in;
        font-size: 12px;
    }
</style>