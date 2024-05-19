var rule = 

{
    
    title:'奈飞',
    host:'https://www.naifei.io',
    url:'/vodshow/id/fyclass/page/fypage.html',
    searchUrl: '/search/**----------fypage---.html',
    class_parse: '.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
    
    一级:'.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
    二级:
    {
        "title": "h1&&Text;.tag-link&&Text",
        "img": ".module-item-pic&&img&&data-src",
        "desc": ".video-info-aux&&.tag-link&&Text;.video-info-aux&&a:eq(1)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(5)&&Text",
        "content": ".vod_content&&Text",
        "tabs": ".module-tab-item",
        "lists": ".module-player-list:eq(#id)&&.scroll-content&&a"
    },
    搜索: '.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',

}