muban.首图2.二级.desc = 'p.data:eq(-1)&&Text;;;p.data:eq(-2)&&Text;p.data:eq(-3)&&Text';
var rule = 

{
    
    title:'达龟',
    模板:'首图2',
    host:'https://www.dadagui.me',
    url:'/vodshow/fyclassfyfilter.html',
    //url:'/vodshow/fyclass--------fypage---.html',
    filter_url:'-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    
    searchUrl: '/vodsearch/**----------fypage---.html',
    class_parse: '.stui-header__menu li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',

    搜索: 'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    
}