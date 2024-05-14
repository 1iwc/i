var rule = 

{
    
    title:'9U',
    模板:'mxone5',
    host:'https://www.9udy.com',
    url:'/index.php/vod/show/id/fyfilter.html',
    //url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
    filter_def:
    {
        1:{cateId:'1'},
        2:{cateId:'2'},
        3:{cateId:'3'},
        35:{cateId:'35'}
    },
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    class_parse: '.navbar-items&&li:gt(1):lt(7);a&&title;a&&href;.*/(.*?).html',
    lazy:'js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=="1"){url=unescape(url)}else if(html.encrypt=="2"){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}',
    tab_rename:{'暴风播放器1':'@学英语i'},
    
    一级:'.module-items .module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级访问前:'log(MY_URL);MY_URL=MY_URL.replace("play","detail").replace("/sid/1/nid/1","")',
    二级:
    {
        "title": "h1&&Text;.module-info-tag&&Text",
        "img": ".ls-is-cached&&data-original",
        "desc": ".module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text",
        "content": ".module-info-introduction-content&&Text",
        "tabs": "#y-playList .tab-item",
        "lists": ".module-play-list:eq(#id) a"
    },
    
    搜索: '*;strong&&Text;*;*;*',
    
}