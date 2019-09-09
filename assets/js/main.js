var app = new Vue({
    el: '#app',
    data: {
        navbrand: myData.navbrand,
        title: myData.title,
        menuItems: [],
        headers: myData.headers,
        posts: myData.posts,
        bg: palette[myData.color].bg,
        color: palette[myData.color].color,
        fonts: myFonts[myData.font]
    }
})