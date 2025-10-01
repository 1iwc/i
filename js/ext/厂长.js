var rule = 

{
    
    title:'厂长资源',
    host:'https://www.czys.top',
    //host:'https://cz01.vip',
    url:'/fyclassfyfilter',
    filter_url:'{{fl.cateId}}{{fl.class}}{{fl.area}}/page/fypage',
    searchUrl:'/page/fypage?s=**',

    headers:{'User-Agent':'MOBILE_UA','Cookie':'esc_search_captcha=1'},
    class_name:'豆瓣Top250&最新电影&剧场版&国产剧&美剧&韩剧&番剧',
    class_url:'dbtop250&zuixindianying&dongmanjuchangban&gcj&meijutt&hanjutv&fanju',

    lazy:`js:pdfh = jsp.pdfh;var html = request(input);var ohtml = pdfh(html, '.videoplay&&Html');var url = pdfh(ohtml, "body&&iframe&&src");if (/Cloud/.test(url)) {var ifrwy = request(url);let code = ifrwy.match(/var url = '(.*?)'/)[1].split('').reverse().join('');let temp = '';for (let i = 0x0; i < code.length; i = i + 0x2) {temp += String.fromCharCode(parseInt(code[i] + code[i + 0x1], 0x10))}input = {jx: 0,url: temp.substring(0x0, (temp.length - 0x7) / 0x2) + temp.substring((temp.length - 0x7) / 0x2 + 0x7),parse: 0}} else if (/decrypted/.test(ohtml)) {var phtml = pdfh(ohtml, "body&&script:not([src])&&Html");eval(getCryptoJS());var scrpt = phtml.match(/var.*?\\)\\);/g)[0];var data = [];eval(scrpt.replace(/md5/g, 'CryptoJS').replace('eval', 'data = '));input = {jx: 0,url: data.match(/url:.*?[\\'\\"](.*?)[\\'\\"]/)[1],parse: 0}} else {input}`,

    play_parse: true,
    一级:'.bt_img&&ul&&li;h3.dytit&&Text;img.lazy&&data-original;.jidi&&Text;a&&href',
    二级:
    {
        "title":"h1&&Text;.moviedteail_list li&&a&&Text",
        "img":"div.dyimg img&&src",
        "desc":".moviedteail_list li:eq(3) a&&Text;.moviedteail_list li:eq(2) a&&Text;.moviedteail_list li:eq(1) a&&Text;.moviedteail_list li:eq(7)&&Text;.moviedteail_list li:eq(5)&&Text",
        "content":".yp_context&&Text",
        "tabs":".mi_paly_box span",
        "lists":".paly_list_btn:eq(#id) a"
    },

    搜索:'.search_list&&ul&&li;*;*;*;*',
    
}