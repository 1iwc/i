muban.首图2.二级.desc = '.data:eq(3)&&Text;;;.data:eq(1)&&Text;.data:eq(2)&&Text';
var rule = 

{
    
    title:'在线之家',
    模板:'首图2',
    host:'https://www.zxzjhd.com/',
    //https://www.zxzj.site/
    url:'/vodshow/fyclassfyfilter.html',
    
    filter_url:'-{{fl.area}}-{{fl.by}}-{{fl.class}}-----fypage---{{fl.year}}',
    headers:{'User-Agent':'PC_UA',},
    
    tab_rename:{'播放线路5':'@学英语i'},
    tab_exclude:'夸克网盘|迅雷云盘|百度网盘',
    //隐藏
    
    搜索: 'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    
}