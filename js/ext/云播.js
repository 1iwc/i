muban.首图.二级.tabs = '.myui-panel__head.bottom-line h3';
var rule = Object.assign(muban.首图,

{

    title:'云播',
    host:'http://www.tvyb03.com',
        
    url:'/vod/type/id/fyclass/page/fypage.html',
    headers:{'User-Agent':'UC_UA',},

    一级:'.myui-vodlist li;a&&title;a&&data-original;.pic-tag-top&&Text;a&&href',

}
);