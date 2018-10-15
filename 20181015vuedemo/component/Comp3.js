const Comp3 = {
    name: 'Comp3',
    template: `<div>
         <span>{{dataMessage}}</span>
         <button @click="btnHandler">详情</button>
         <button @click="btnHandler">取消</button>
         </div>`,
    data() {
        return {
            dataMessage: 'I am Comp3'
        }
    },
    methods: {
        btnHandler() {
            this.$emit('btn-click', {
                passMessage: 'I am from Comp3'
            })
        }
    }
};