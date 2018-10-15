/**
 *  <button @click="sendToCuiHua">发消息给大牛</button>
 * <button @click="sendMessage(passMessage)">发消息给大牛</button>
 */
const DaNiu = {
    template: `
    <div style="width:200px;height:150px; border:1px solid black">
       <h2>我是王大牛</h2>
       接收大牛消息:<span style="color:red">{{message}}</span><br/> 
       <button @click="sendToCuiHua">发消息给大牛</button>
    </div>
    `,
    mixins:[CommonActions],
    data() {
        return {
            message:'初始消息',
            sendChanelName:CHANEL.DANIU_TO_CUIHUA,
            passMessage:'你好！刘翠花 send by 大牛'
        }
    },
    created() {
        EventBus.$on(CHANEL.CUIHUA_TO_DANIU,  (data) => {
            this.message = data.passMessage
        })
    },
    methods:{
        sendToCuiHua(){
            EventBus.$emit(this.sendChanelName,{passMessage:this.passMessage});
        }
    }
}
//全局注册组件
Vue.component('da-niu',DaNiu);