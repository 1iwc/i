var rule =

{
    
    title: '555',
    host: 'https://5moov.vip',
    //host: 'https://www.5app.online',
    
    homeUrl:'/api.php/app/index_video',
    url: '/api.php/app/video?tid=fyclassfyfilter&limit=20&pg=fypage',
    
    detailUrl:'/api.php/app/video_detail?id=fyid',
    searchUrl: '/api.php/app/search?text=**&pg=fypage',
    
    headers:{'User-Agent':'PC_UA',},
    class_name:'学英语i&连续剧&综艺&动漫&',
    class_url:'1&2&3&4&124',
    
    一级:'json:list;vod_name;vod_pic;vod_remarks;vod_id',
    二级:'js:try{let html=request(input);print(html);html=JSON.parse(html);let node=html.data;VOD={vod_id:node["vod_id"],vod_name:node["vod_name"],vod_pic:node["vod_pic"],type_name:node["vod_class"],vod_year:node["vod_year"],vod_area:node["vod_area"],vod_remarks:node["vod_remarks"],vod_actor:node["vod_actor"],vod_director:node["vod_director"],vod_content:node["vod_content"].strip()};let episodes=node.vod_url_with_player;let playMap={};if(typeof play_url==="undefined"){var play_url=""}episodes.forEach(function(ep){let source=ep["name"];if(!playMap.hasOwnProperty(source)){playMap[source]=[]}playMap[source].append(ep["url"])});let playFrom=[];let playList=[];Object.keys(playMap).forEach(function(key){playFrom.append(key);playList.append(playMap[key])});let vod_play_from=playFrom.join("$$$");let vod_play_url=playList.join("$$$");VOD["vod_play_from"]=vod_play_from;VOD["vod_play_url"]=vod_play_url}catch(e){log("获取二级详情页发生错误:"+e.message)}',
    
    搜索:'*',

}