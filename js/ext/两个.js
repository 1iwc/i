var rule = 

{
    
    title:'两个',
    host:'https://www.bttwo.net',
    //host:'https://www.bttwo.vip/',
    url:'/fyclassfyfilter',
    //url:'/fyclass/page/fypage',

    filter_url:'{{fl.area}}{{fl.year}}{{fl.class}}/page/fypage',
    searchUrl:'/xssearch?q=**&f=_all&p=fypage',

    class_name:'学英语i&最新电影&电视剧&国产剧&美剧&日韩剧&',
    class_url:'gf&new-movie&dsj&zgjun&meiju&jpsrtv&movie_bt/movie_bt_tags/qingse',
    //class_parse:'.navlist li:gt(0):lt(7);a&&Text;a&&href;.*/(\\w+)',
    tab_rename:{'在线观看':'@学英语i'},

    一级:'.bt_img li;.lazy&&alt;.thumb.lazy&&data-original;.jidi span&&Text;a&&href',
    二级:
    {
        "title":"h1&&Text;.moviedteail_list&&li:eq(0)&&Text",
        "img":".dyimg.fl img&&src",
        "desc":".moviedteail_list&&li:eq(9)&&Text;;;.moviedteail_list&&li:eq(7)&&Text;.moviedteail_list&&li:eq(5)&&Text",
        "content":".yp_context&&p:eq(0)&&Text",
        "tabs":".ypxingq_t:eq(1) span",
        "lists":".paly_list_btn:eq(#id) a"
    },
    搜索:'*',
    
}
