var rule =

{
    
    title:'骚火',
    host:'https://shdy3.com',
    //host:'http://shapp.us',
    
    url:'/list/fyfilter-fypage.html',

    filter_url:'{{fl.cateId}}',
    filter_def:
    {
        1:{cateId:'1'},
        2:{cateId:'2'},
        4:{cateId:'4'}
    },

    searchUrl:'/search.php?searchword=**',
    headers:{'User-Agent':'MOBILE_UA', },

    class_name:'电影&电视剧&动漫',
    class_url:'1&2&4',
    tab_rename:{'1号线路':'@学英语i','2号线路':'iwcwc'}, 
    
    一级:'.v_list li;a&&title;.lazyload&&data-original;.v_note&&Text;a&&href',
    二级:
    {
        "title":"h1&&Text;",
        "img":".lazyload&&data-original",
        "desc":";;;.v_info_box&&p&&Text",
        "content":".p_txt.show_part&&Text",
        "tabs":".from_list li",
        "lists":"#play_link:eq(#id) li a"
    },

    搜索:'*',

}