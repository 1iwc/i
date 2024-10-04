var rule =

{
    
    title:'荐片',
    host:'http://api2.rinhome.com',
    
    homeUrl:'/api/tag/hand?code=unknown601193cf375db73d&channel=wandoujia',
    url:'/api/crumb/list?area=0&page=fypage&type=0&limit=24&fyfilter',

    class_name:'学英语i&电影&电视剧&动漫&综艺',
    class_url:'0&1&2&3&4',
    tab_rename:{'边下边播':'@学英语i'}, 

    detailUrl:'/api/node/detail?channel=wandoujia&token=&id=fyid',
    searchUrl:'/api/video/search?key=**&page=fypage',

    filter:{},
    filter_url:'sort={{fl.sort or "update"}}&year={{fl.year or "0"}}&category_id={{fl.cateId}}',
    图片来源:'@Referer=www.jianpianapp.com@User-Agent=jianpian-version353',
    filter_def:
    {
        0:{cateId:'0'},
        1:{cateId:'1'},
        2:{cateId:'2'},
        3:{cateId:'3'},
        4:{cateId:'4'}
    },
    headers:
    {
        'User-Agent':'jianpian-android/350',
        'JPAUTH':'y261ow7kF2dtzlxh1GS9EB8nbTxNmaK/QQIAjctlKiEv'
    },

    一级:'json:data;title;path;playlist.title;id',
    二级:
    {
        title:'data.title;data.types[0].name',
        desc:'data.score;data.year.title;data.area.title;data.actors[0].name;data.directors[0].name',
        img:'data.thumbnail',
        content:'data.description',
        is_json:1,
        tabs:
        `js:
        TABS = [];
        if (html.data.have_ftp_ur == 1) {TABS.push("边下边播")}
        if (html.data.have_m3u8_ur == 1) {TABS.push("在线点播")}
        `,
        lists:`js:log(TABS);LISTS = [];TABS.forEach
        (
            function(tab) 
            {
                if(/边下边播/.test(tab))
                {
                    let ftp = html.data.new_ftp_list;let d = ftp.map
                    (
                        function(it)
                        {
                            return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
                        }
                    );
                    LISTS.push(d)
                }
                else if(/在线点播/.test(tab))
                {
                    let m3u = html.data.new_m3u8_list;let d = m3u.map
                    (
                        function(it)
                        {
                            return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
                        }
                    );
                    LISTS.push(d)
                }
            }
        );
        `,
    },

    搜索:'json:data;*;thumbnail;mask;*',

}