//提取公共行为，模拟mixins
const CommonActions = {
    methods:{
        sendMessage(info){
            EventBus.$emit(this.sendChanelName,{passMessage:info})
        }
    }
}