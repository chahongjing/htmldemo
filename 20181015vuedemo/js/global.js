/**
 * 实例化全局变量
 * 全局的事件调度中心
 */
let EventBus = new Vue();

/**
 * 全局的EventBus 信道
 */
const CHANEL = {
    CUIHUA_TO_DANIU: 'CUIHUA_TO_DANIU',
    DANIU_TO_CUIHUA: 'DANIU_TO_CUIHUA'
}