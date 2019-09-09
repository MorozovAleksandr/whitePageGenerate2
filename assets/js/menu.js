Vue.component('menu-items', {
    props: ['item', 'color'],
    template:`<li><a href="#">{{item.text}}</a></li>`
});

myData.menuItems.forEach((item, i) => {
    app.menuItems.push({
        id: ++i,
        text: item
    })
})