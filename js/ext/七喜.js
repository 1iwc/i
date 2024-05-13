muban.短视2.二级.title = '.slide-info-title&&Text;.slide-info:eq(0)&&Text';
muban.短视2.二级.img = '.lazy&&data-src';
muban.短视2.二级.desc = '.fraction&&Text;;;.slide-info:eq(3)--strong&&Text;.slide-info:eq(2)--strong&&Text';
muban.短视2.二级.tab_text = 'body--i--span&&Text';
var rule = 

{
    
    title:'七喜',
    模板:'短视2',
    host:'https://7xi.tv',
    detailUrl:'/voddetail/fyid.html',
    class_name:'学英语i&短剧&电影&电视剧&综艺&动漫',
    class_url:'57&56&1&2&3&4',
    tab_rename:{'悦享蓝光':'@学英语i'},
    
    lazy:`js:
    var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
    var url = html.url;
    if (html.encrypt == '1') {url = unescape(url)} 
    else if (html.encrypt == '2') {url = unescape(base64Decode(url))}
    if (/m3u8|mp4/.test(url)) {input = url} 
    else {input}`,

    推荐:'.public-list-box;a&&title;.lazy&&data-src;.public-list-prb&&Text;a&&href',
    
}