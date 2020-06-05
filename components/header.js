(function(Vue){
    /* 
    1. 实现私有变量
    2. 延长变量的生命周期
    */
    let appHeaderPrivate = 123;
    Vue.component("app-header", {
        template: `
        <section class="app-header">
         <h1>代办事项</h1>
        </section>
        `
    })

})(Vue)
