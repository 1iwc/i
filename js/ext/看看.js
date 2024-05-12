muban.mxpro.二级.desc = 
'.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
var rule = 

{
    
    title:'看看',
    模板:'mxpro',
    host:'https://www.kkw300.com',
    url:'/vodshow/fyclass--------fypage---.html',
    //url:'/vodshow/fyfilter.html',
    
    class_parse: '.navbar-items&&li:gt(1):lt(7);a&&title;a&&href;.*/(.*?).html',
    
    searchUrl:'/index.php/ajax/suggest?mid=fypage&wd=**',
    搜索:'json:list;name;pic;;id',

}