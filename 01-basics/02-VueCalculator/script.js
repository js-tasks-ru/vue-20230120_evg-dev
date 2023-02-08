import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = defineComponent({
    name: 'App',
    data() {
        return {
            result: 0,
            operator: 'sum',
            operandOne: 0,
            operandTwo: 0,
        }
    },
    methods: {
        calc() {
            if (this.operator === 'sum') {
                this.result = this.operandOne + this.operandTwo
            }
            else if (this.operator === 'subtract') {
                this.result = this.operandOne - this.operandTwo
            }
            else if (this.operator === 'multiply') {
                this.result = this.operandOne * this.operandTwo
            }
            else if (this.operator === 'divide') {
                this.result = this.operandOne / this.operandTwo
            }
        }
    }
});

const app = createApp(App).mount('#app');