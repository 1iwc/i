muban.mxone5.二级.desc = '.video-info-actor:eq(0)&&Text;.video-info-actor:eq(1)&&Text;.video-info-items:eq(6)&&Text'
var rule = 

{
    
    title:'子子',
    模板:'mxone5',
    host:'https://www.ziziys.com',
    url:'/list/fyclass/page/fypage.html',
    //url:'/list/fyfilter/page/fypage.html',
    headers:{'User-Agent':'PC_UA',},
    //searchUrl:'/vsearch/**--fypage.html',
    searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
    detailUrl:'/vdetail/fyid.html',
    搜索:'json:list;name;pic;;id',

}