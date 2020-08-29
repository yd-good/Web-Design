window.onload = function () {
/*无缝滑动 */

/*table切换 */
    var boxArr = document.getElementsByClassName("box");
    for(var i=0;i<boxArr.length;i++){
        fn(boxArr[i]);
    }
    function fn(ele){
        var liArr = ele.getElementsByTagName("li");
        var spanArr = ele.getElementsByTagName("span");
        for(var i=0;i<liArr.length;i++){
            liArr[i].index = i;
            liArr[i].onmouseover = function () {
                for(var j=0;j<liArr.length;j++){
                    liArr[j].className = "";
                    spanArr[j].className = "";
                }
                this.className = "current";
                spanArr[this.index].className = "show";
            }
        }
    }
}
