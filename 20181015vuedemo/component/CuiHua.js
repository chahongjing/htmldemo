/**
 *  <button style="margin-top:10px" @click="sendToDaNiu">发消息给大牛</button>
 *  <button style="margin-top:10px" @click="sendMessage(passMessage)">发消息给大牛</button>
 */

const CuiHua = {
    name:'CuiHua',
    template: `
    <div style="width:200px;height:150px; border:1px solid black">
       <h2>我是刘翠花</h2>
       接收大牛消息:<span style="color:red;">{{message}}</span><br/> 
       <button style="margin-top:10px" @click="sendToDaNiu">发消息给大牛</button>
    </div>
    `,
    mixins:[CommonActions],
    data() {
        return {
            message:'初始消息',
            sendChanelName:CHANEL.CUIHUA_TO_DANIU,
            passMessage:'你好！王大牛 send by 翠花'
        }
    },
    created() {
        //注意这里的箭头函数,绑定当前vm上下文
        EventBus.$on(CHANEL.DANIU_TO_CUIHUA,  (data) => {
            this.message = data.passMessage
        })
    },
    methods:{
        sendToDaNiu(){
            EventBus.$emit(this.sendChanelName,{passMessage:this.passMessage})
        }
    }

}
//组件全局注册
Vue.component('cui-hua',CuiHua);