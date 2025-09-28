var rule =

{
    
    title:'99',
    host:'https://99itv.net',

    url:'/show/fyclass--------fypage---.html',
    searchUrl:'/search/**----------fypage---.html',

    headers:{'User-Agent':'UC_UA',},
    class_name:'电影&电视剧&综艺&动漫&国产剧&香港剧&韩国剧&日本剧&欧美剧&泰国剧',
    class_url:'movie&drama&variety&anime&china&hkg&kr&jp&usa&tailan',
    
    limit:6,
    一级:'.myui-vodlist li;a&&title;a&&data-original;.text-right&&Text;a&&href',
    二级:{"title":".myui-content__detail .title&&Text;.text-muted:eq(-1)&&Text","img":".myui-content__thumb .lazyload&&data-original","desc":".text-muted:eq(-1)&&Text;.text-muted:eq(-1)&&Text;.myui-content__detail p:eq(1)&&Text;.myui-content__detail p:eq(3)&&Text;.myui-content__detail p:eq(4)&&Text","content":".content&&Text","tabs":".nav-tabs:eq(0) li","lists":".myui-content__list:eq(#id) li"},
    
    搜索:'#searchList li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href;.text-muted:eq(-1)&&Text',

}
