const Comp2 = {
    name: 'Comp2',
    template: `<div>
         <span>{{dataMessage}}</span>
         <button @click="btnHandler">详情</button>
         <button @click="btnHandler">取消</button>
         </div>`,
    data() {
        return {
            dataMessage: 'I am Comp2'
        }
    },
    methods: {
        btnHandler() {
            this.$emit('btn-click', {
                passMessage: 'I am from Comp2'
            })
        }
    }
};