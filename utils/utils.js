/* 公用的工具类 */
(function (Vue) {

    Vue.prototype.getUniqID = function () {
        return Date.now();
    }
    // 定义一个本地存储的工具
    // 获取数据 保存数据
    // key = "mytodos"
    let storageKey = "mytodos";
    let mytodos = {};

    mytodos.storageFunc = {
        // 获取数据
        fetch: function () {
            return JSON.parse(localStorage.getItem(storageKey) || '[]');
        },
        save: function (todos) {
            localStorage.setItem(storageKey, JSON.stringify(todos));
        }
    }
    window.mytodos = mytodos;


})(Vue)