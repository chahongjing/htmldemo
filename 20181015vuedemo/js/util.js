/**
 * @description:
 * 产生一全局的唯一的Id
 */
let globalId = 1;
function createUniqueId(){
    return `ztree-${globalId++}`;
}