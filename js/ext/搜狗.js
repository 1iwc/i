var rule = 

{

    title:'搜狗',
    host:'https://waptv.sogou.com',
    searchUrl:'https://v.sogou.com/v?query=**&typemask=6&p=&dp=&dr=&_asf=v.sogou.com&enter=1&ie=utf8',

    url:'/napi/video/classlist?abtest=0&iploc=CN1304&spver=&listTab=fyclass&filter=&start=((fypage-1)*15)&len=15&fr=filter',
    filter_url:'style={{fl.style}}&zone={{fl.zone}}&year={{fl.year}}&fee={{fl.fee}}&order={{fl.order}}',

    headers:{'User-Agent':'PC_UA'},
    class_name:'学英语i&电视剧&动漫&综艺&纪录片',
    class_url:'film&teleplay&cartoon&tvshow&documentary',
    
    play_parse:true,

    lazy:'js:print(input);fetch_params.headers["User-Agent"]=MOBILE_UA;print(fetch_params);let html=request(input);let rurl=html.match(/window\\.open\\(\'(.*?)\',/)[1];rurl=urlDeal(rurl);input={parse:1,jx:1,url:rurl};',
    
    一级:'js:let d=[];let html=request(input);html=JSON.parse(html);let list=html.listData.results;list.forEach(function(it){let desc1=it.ipad_play_for_list.finish_episode?it.ipad_play_for_list.episode===it.ipad_play_for_list.finish_episode?"全集"+it.ipad_play_for_list.finish_episode:"连载"+it.ipad_play_for_list.episode+"/"+it.ipad_play_for_list.finish_episode:"";let desc2=it.score?"评分:"+it.score:"";let desc3=it.date?"更至:"+it.date:"";d.push({title:it.name,img:it.v_picurl,url:"https://v.sogou.com"+it.url.replace("teleplay","series").replace("cartoon","series"),desc:desc1||desc2||desc3})});setResult(d);',
    二级:'js:VOD={};let html=request(input);function adhead(url){let hd="https://v.sogou.com";if(!url.startsWith(hd)){url=hd+url}return urlencode(url)}try{let json=JSON.parse(html.match(/INITIAL_STATE.*?({.*});/)[1]).detail.itemData;let key=json.dockey;let name=json.name;let zone=json.zone;let score=json.score?json.score:"";let style=json.style;let emcee=json.emcee?""+json.emcee:json.name;let director=json.director?"🇨🇳微博@学英语i-"+json.director:name;director=director.replace(/;/g,"\\t");let starring=json.starring?""+json.starring:""+json.shengyou;starring=starring.replace(/.*undefined/,"").replace(/;/g,"\\t");let update=json.update_wordstr?json.update_wordstr:"";let tv_station=json.tv_station?json.tv_station:zone;let introduction=json.introduction;let shengyou=json.shengyou;let shows=json.play_from_open_index;let plays=json.play.item_list;if(shows){VOD.vod_name=name;VOD.vod_area=emcee+","+tv_station;VOD.vod_director=director;VOD.vod_actor=starring;VOD.vod_pic=jsp.pd(html,"#thumb_img&&img&&src");VOD.vod_remarks=style+""+score+","+update;VOD.vod_content=introduction}else{VOD.vod_name=name;VOD.vod_director=director;VOD.vod_actor=starring;VOD.vod_pic=jsp.pd(html,"#thumb_img&&img&&src");VOD.vod_content=introduction}let tp="&type=json";try{let tabs=[];let lists=[];plays.forEach(function(it){lists.push(it.info);let tbn=it.sitename[0]||it.site.replace(".com","");tbn=tbn.split("").join(" ");tabs.push(tbn)});VOD.vod_play_from=tabs.join("$$$");let vod_lists=[];print("play_url1:"+play_url);play_url=play_url.replace("&play_url=","&type=json&play_url=");print("play_url2:"+play_url);lists.forEach(function(item,idex){if(item||shows){if(item&&Array.isArray(item)&&item.length>1){let tmp=item.slice(1).map(function(its){return its.index+"$"+play_url+base64Encode(adhead(its.url))});vod_lists.push(tmp.join("#"))}if(shows){let arr=[];let tmp=[];let zy=shows.item_list[idex];zy.date.forEach(function(date){let day=date.day;for(let j=0;j<day.length;j++){let dayy=day[j][0]>=10?day[j][0]:"0"+day[j][0];let Tdate=date.year+date.month+dayy;arr.push(Tdate)}});for(let k=0;k<arr.length;k++){let url="https://v.sogou.com/vc/eplay?query="+arr[k]+"&date="+arr[k]+"&key="+key+"&st=5&tvsite="+plays[idex].site;tmp.push("第"+arr[k]+"期"+"$"+play_url+base64Encode(adhead(url)))}vod_lists.push(tmp.join("#"))}}else if(plays[idex].site){let tmp=[];if(!plays[idex].flag_list.includes("trailer")){tmp.push(plays[idex].sitename[0]+"$"+play_url+base64Encode(adhead(plays[idex].url)))}else{tmp.push(plays[idex].sitename[0]+"—预告"+"$"+play_url+base64Encode(adhead(plays[idex].url)))}vod_lists.push(tmp.join("#"))}});VOD.vod_play_url=vod_lists.join("$$$")}catch(e){let img=json.photo.item_list;VOD.vod_name="本片无选集";VOD.vod_pic=img.length>0?img[0]:""}}catch(e){print("发生了错误:"+e.message)}',
    
    搜索:'js:let d=[];let html=request(input);let jsonA=JSON.parse(html.match(/INITIAL_STATE.*?({.*});/)[1]);print(jsonA);jsonA=jsonA.result.longVideo.results;jsonA.forEach(function(it){let name=it.name;let introduction=it.introduction;let pic=it.v_picurl;let url=it.tiny_url;let zone=it.zone;let score=it.score||"暂无";let style=it.style;if(it.play.item_list){let r={};r.title=name.replace(//,"").replace(//,"");r.url="https://v.sogou.com"+url;r.desc=it.list_category.join(",");r.content=introduction;r.pic_url=pic;d.push(r)}});setResult(d);',
    
}
