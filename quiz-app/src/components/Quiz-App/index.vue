<template>
    <div class="quiz-container" id="quiz">
        <div class="quiz-header" v-if="idx>=0">
            <h2 id="question">{{quizData[idx].question}}</h2>
            <ul @click="chooseAns($event)">
                <li v-for="(ans, index) in ansList" :key="index">
                    <input type="radio" name="answer" :id="ans" class="answer" :value="ans">
                    <label :for="ans" :id="`${ans}`+'_text'">{{quizData[idx][ans]}}</label>
                </li>
            </ul>
        </div>
        <div class="quiz-header" v-else="idx>=0">
            <h2>
                You answered {{allScore}}/{{quizData.length}} questions correctly
            </h2> 
        </div>
        <button id="submit" @click="submitAns" v-show="idx>=0">Submit</button>
        <button id="submit" v-show="idx<0" @click="reload">Reload</button>
    </div>
</template>

<script>
    import {
        ref,
        onMounted,
    } from 'vue'
    import {useRouter} from 'vue-router'

    export default {
        name: '',
        setup() {
            const router = useRouter()

            const quizData = [{
                    question: "Which language runs in a web browser?",
                    a: "Java",
                    b: "C",
                    c: "Python",
                    d: "JavaScript",
                    correct: "d",
                },
                {
                    question: "What does CSS stand for?",
                    a: "Central Style Sheets",
                    b: "Cascading Style Sheets",
                    c: "Cascading Simple Sheets",
                    d: "Cars SUVs Sailboats",
                    correct: "b",
                },
                {
                    question: "What does HTML stand for?",
                    a: "Hypertext Markup Language",
                    b: "Hypertext Markdown Language",
                    c: "Hyperloop Machine Language",
                    d: "Helicopters Terminals Motorboats Lamborginis",
                    correct: "a",
                },
                {
                    question: "What year was JavaScript launched?",
                    a: "1996",
                    b: "1995",
                    c: "1994",
                    d: "none of the above",
                    correct: "b",
                },
            ]
            let idx = ref(0)
            const ansList = ['a', 'b', 'c', 'd']
            let currentAns = new Array(4).fill('')
            let answerEls = null
            let allScore = ref(0)

            function deleteChoose() {
                answerEls.forEach(answerEl => {
                    answerEl.checked = false
                });
            }

            function chooseAns(event) {
                let answer = event.target.value
                if (ansList.indexOf(answer) !== -1) {
                    currentAns[idx.value] = answer
                }
            }

            function getScore() {
                let score_1 = 0
                currentAns.forEach((ans, index) => {
                    if (ans == quizData[index].correct) {
                        score_1++
                    }
                })
                return score_1
            }

            function submitAns() {
                if (idx.value < 0) {
                    idx.value = 0
                } else {
                    if (typeof currentAns[idx.value] !== 'undefined') {
                        if (idx.value >= quizData.length - 1) {
                            idx.value = -1
                            allScore.value = getScore()
                        } else {
                            idx.value++
                            deleteChoose()
                        }
                    }
                }
            }

            function reload(){
                idx.value = 0
                currentAns = new Array(4).fill('')
                // router.push({path: '/quiz-app'})
            }

            onMounted(() => {
                answerEls = document.querySelectorAll('.answer')
                deleteChoose()
            })

            /* let context = computed(() => {

            }) */

            return {
                quizData,
                idx,
                ansList,
                allScore,
                chooseAns,
                submitAns,
                reload,
            }
        },
    }
</script>

<style>
    .quiz-container {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
        width: 600px;
        overflow: hidden;
    }

    .quiz-header {
        padding: 4rem;
    }

    h2 {
        padding: 1rem;
        text-align: center;
        margin: 0;
    }

    ul {
        /* 
            list-style-type：设置列表项标记的类型 
        */
        list-style-type: none;
        padding: 0;
    }

    ul li {
        font-size: 1.2rem;
        margin: 1rem 0;
    }

    ul li label {
        cursor: pointer;
    }

    button {
        background-color: #8e44ad;
        color: #fff;
        border: none;
        width: 100%;
        cursor: pointer;
        font-size: 1.1rem;
        font-family: inherit;
        padding: 1.3rem;
    }

    button:hover {
        background-color: #732d91;
    }

    button:focus {
        outline: none;
        background-color: #5e3370;
    }
</style>