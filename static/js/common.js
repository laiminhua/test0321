class common {
    //日期格式化成年月日 星期几 时分秒
    getDateYMDHMS(time) {
        let date = time ? new Date(time) : new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let a = new Array('日', '一', '二', '三', '四', '五', '六')
        let week = new Date().getDay()
        let times = year + '-' + (+month < 10 ? ('0' + month) : month) + '-' + (+day < 10 ? ('0' + day) : day) + ' '
            + '星期' + a[week] + ' '
            + (+hours < 10 ? ('0' + hours) : hours) + ':' + (+minutes < 10 ? ('0' + minutes) : minutes)
            + ':' + (+seconds < 10 ? ('0' + seconds) : seconds);
        return times;
    }
}