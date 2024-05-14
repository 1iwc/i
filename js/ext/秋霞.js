muban.首图2.二级.title = '.pic&&title;.data--span:eq(0)&&Text'
muban.首图2.二级.desc = '.data--span:eq(1)&&Text;.data--span:eq(2)&&Text'
muban.首图2.二级.content = '.desc--a&&Text'
muban.首图2.二级.tabs = '.bottom-line&&h3'
var rule = 

{
    
    title:'秋霞',
    模板:'首图2',
    host:'https://www.7xiady.cc',
    url:'/show/fyclassfyfilter/',
    //url:'/type/fyclass-fypage/',
    
    filter_url:'-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',

    tab_rename:{'快速播放':'@学英语i'},
    class_parse:'.stui-header__menu li;a&&Text;a&&href;/type/(.*?)/',
    searchUrl:'/search/**----------fypage---.html',

    搜索:'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    图片来源:'@Referer=https://www.7xiady.cc/',
    
}