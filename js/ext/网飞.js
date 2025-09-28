muban.mxpro.二级.desc = '.module-info-item:eq(-1)&&Text;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(2)&&Text'
muban.mxpro.二级.tabs = '#y-playList&&.tab-item'
var rule = 

{
    
    title:'网飞',
    模板:'mxpro',
    host:'https://www.wangfei.tv',
    url:'/vodshow/id/fyfilter.html',
    //url:'/vodshow/id/fyclass/page/fypage.html',
    
    filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
    filter_def:
    {
        dy:{cateId:'dy',by:'/by/time'},
        juji:{cateId:'juji',by:'/by/time'},
        zongyi:{cateId:'zongyi',by:'/by/time'},
        dongman:{cateId:'dongman',by:'/by/time'},
        jilupian:{cateId:'jilupian',by:'/by/time'}
    },
    searchUrl: '/vodsearch/page/fypage/wd/**.html',
    class_parse: '.navbar-items li:gt(1):lt(7);a&&title;a&&href;.*/(.*?).html',
    lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",
    
}