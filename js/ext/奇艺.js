var rule =

{
    
    title:'奇艺',
    host:'https://www.iqiyi.com',
    
    detailUrl:'https://pcw-api.iqiyi.com/video/video/videoinfowithuser/fyid?agent_type=1&authcookie=&subkey=fyid&subscribe=1',
    searchUrl:'https://search.video.iqiyi.com/o?if=html5&key=**&pageNum=fypage&pos=1&pageSize=24&site=iqiyi',
    
    url:'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=fyclass&data_type=1&page_id=fypage&ret_num=48',
    filter_url:'is_purchase={{fl.is_purchase}}&mode={{fl.mode}}&three_category_id={{fl.three_category_id}}&market_release_date_level={{fl.year}}',
    
    headers:{'User-Agent':'MOBILE_UA'},
    class_name:'电影&电视剧&纪录片&动漫&综艺&音乐&网络电影',
    class_url:'1&2&3&4&6&5&16',
    tab_rename:{'qiyi':'微博@学英语i'},

    一级:'js:let d=[];if(MY_CATE==="16"){input=input.replace("channel_id=16","channel_id=1").split("three_category_id")[0];input+="three_category_id=27401"}else if(MY_CATE==="5"){input=input.replace("data_type=1","data_type=2")}let html=request(input);let json=JSON.parse(html);if(json.code==="A00003"){fetch_params.headers["user-agent"]=PC_UA;json=JSON.parse(fetch(input,fetch_params))}json.data.list.forEach(function(data){if(data.channelId===1){desc=data.hasOwnProperty("score")?data.score+"分\\t":""}else if(data.channelId===2||data.channelId===4){if(data.latestOrder===data.videoCount){desc=(data.hasOwnProperty("score")?data.score+"分\\t":"")+data.latestOrder+"集全"}else{if(data.videoCount){desc=(data.hasOwnProperty("score")?data.score+"分\\t":"")+data.latestOrder+"/"+data.videoCount+"集"}else{desc="更新至 "+data.latestOrder+"集"}}}else if(data.channelId===6){desc=data.period+"期"}else if(data.channelId===5){desc=data.focus}else{if(data.latestOrder){desc="更新至 第"+data.latestOrder+"期"}else if(data.period){desc=data.period}else{desc=data.focus}}url=MY_CATE+"$"+data.albumId;d.push({url:url,title:data.name,desc:desc,pic_url:data.imageUrl.replace(".jpg","_390_520.jpg?caplist=jpg,webp")})});setResult(d);',
    二级:'js:let d=[];let html=request(input);let json=JSON.parse(html).data;VOD={vod_id:"",vod_url:input,vod_name:"",type_name:"",vod_actor:"",vod_year:"",vod_director:"",vod_area:"",vod_content:"",vod_remarks:"",vod_pic:""};VOD.vod_name=json.name;try{if(json.latestOrder){VOD.vod_remarks="类型: "+(json.categories[0].name||"")+"\\t"+(json.categories[1].name||"")+"\\t"+(json.categories[2].name||"")+"\\t"+"评分："+(json.score||"")+"\\n更新至：第"+json.latestOrder+"集(期)/共"+json.videoCount+"集(期)"}else{VOD.vod_remarks="类型: "+(json.categories[0].name||"")+"\\t"+(json.categories[1].name||"")+"\\t"+(json.categories[2].name||"")+"\\t"+"评分："+(json.score||"")+json.period}}catch(e){VOD.vod_remarks=json.subtitle}VOD.vod_area=(json.focus||"")+"\\n资费："+(json.payMark===1?"VIP":"免费")+"\\n地区："+(json.areas||"");let vsize="579_772";try{vsize=json.imageSize[12]}catch(e){}VOD.vod_pic=json.imageUrl.replace(".jpg","_"+vsize+".jpg?caplist=jpg,webp");VOD.type_name=json.categories.map(function(it){return it.name}).join(",");if(json.people.main_charactor){let vod_actors=[];json.people.main_charactor.forEach(function(it){vod_actors.push(it.name)});VOD.vod_actor=vod_actors.join(",")}VOD.vod_content=json.description;let playlists=[];if(json.channelId===1||json.channelId===5){playlists=[{playUrl:json.playUrl,imageUrl:json.imageUrl,shortTitle:json.shortTitle,focus:json.focus,period:json.period}]}else{if(json.channelId===6){let qs=json.period.split("-")[0];let listUrl="https://pcw-api.iqiyi.com/album/source/svlistinfo?cid=6&sourceid="+json.albumId+"&timelist="+qs;let playData=JSON.parse(request(listUrl)).data[qs];playData.forEach(function(it){playlists.push({playUrl:it.playUrl,imageUrl:it.imageUrl,shortTitle:it.shortTitle,focus:it.focus,period:it.period})})}else{let listUrl="https://pcw-api.iqiyi.com/albums/album/avlistinfo?aid="+json.albumId+"&size=200&page=1";let data=JSON.parse(request(listUrl)).data;let total=data.total;playlists=data.epsodelist;if(total>200){for(let i=2;i<total/200+1;i++){let listUrl="https://pcw-api.iqiyi.com/albums/album/avlistinfo?aid="+json.albumId+"&size=200&page="+i;let data=JSON.parse(request(listUrl)).data;playlists=playlists.concat(data.epsodelist)}}}}playlists.forEach(function(it){d.push({title:it.shortTitle||"第"+it.order+"集",desc:it.subtitle||it.focus||it.period,img:it.imageUrl.replace(".jpg","_480_270.jpg?caplist=jpg,webp"),url:it.playUrl})});VOD.vod_play_from="qiyi";VOD.vod_play_url=d.map(function(it){return it.title+"$"+it.url}).join("#");',
    
    搜索:'json:.data.docinfos;.albumDocInfo.albumTitle;.albumDocInfo.albumVImage;.albumDocInfo.channel;.albumDocInfo.albumId;.albumDocInfo.tvFocus',
    
}