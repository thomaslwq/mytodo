(function () {
    // 初次加载时路由 的初始化
    function handleHashChange() {
        // 清空hash
        window.location.hash = "";
        app.visibility = "all";
    }
    // 检测 hash 的变化
    let routes = [
        { path: "all" }, { path: "active" }, { path: "finish" }
    ]
    window.addEventListener("hashchange", function () {
        console.log(window.location.hash);
        let visibility = window.location.hash.replace("#/", "");
        // 如果 hash 为空那么就将app.visibility 设置为 "all"
        let index = routes.findIndex((v, i) => {
            if (v.path === visibility) {
                return true;
            }
        })
        if (index === -1) {
            window.location.hash = "";
            app.visibility = "all"
        } else
            app.visibility = visibility;

    })
    handleHashChange();
    // app.visibility = "all";
})()