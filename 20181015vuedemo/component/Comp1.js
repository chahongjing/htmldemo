//基于 普通对象的语法来构建 组件
//
const Comp1 = {
    name: 'Comp1',
    template: `
    <div>
         <span>{{dataMessage}}</span>
         <button @click="btnHandler">详情</button>
         <button @click="btnHandler">取消</button>
    </div>`,
    data() {
        return {
            dataMessage: 'I am Comp1'
        }
    },
    methods: {
        btnHandler() {
            //对外通知 按钮已经点击
            this.$emit('btn-click', {
                passMessage: 'I am from Comp1'
            })
        }
    }
};