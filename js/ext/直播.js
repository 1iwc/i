var rule = 

{

    title:'好趣',
    host:'http://tv.haoqu99.com',

    url:'/fyclass',
    searchUrl:'/e/sch/index.php?page=fypage&keyboard=**&sear=1',
    
    headers:{'User-Agent': 'MOBILE_UA'},
    
    class_name:'学外语i&央视&卫视&港澳台&海外',
    class_url:'&1&2&4&5',
    tab_rename:{'道长在线':'@学英语i'},
    
    lazy:'js:input=input.replace("tv", "m")',
        
    编码:'GBK',
    一级:'.bx-sya&&li;span&&Text;img&&src;;a&&href',
    二级:'*',
    搜索:'div.list-box.J-medal&&li;a&&Text;;;a&&href',
    
}