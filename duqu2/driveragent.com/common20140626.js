

dom = (document.getElementById) ? true : false;
ismsie = 0;

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function antispam(domain, user, display, linkclass) {
	if (!display) display = user + '@' + domain;
	if (!linkclass) linkclass = 'link';
	document.write('<a href="mailto:' + user + '@' + domain + '" class="' + linkclass + '">' + display + '</a>');
}

function download(link) {
	if (window.chrome) return;		// google chrome is handled on the next page
	if (ismsie) return;				// don't open a popup window for msie
	window.open(link, 'download_window', 'toolbar=0,location=no,directories=0,status=0,scrollbars=0,resizeable=0,width=1,height=1,top=0,left=0');
}

function download_noplugin(link) {
	if (!hasplugin) {
		download(link);
	}
}

function disableSelect() {
	var element = document.getElementById('content_disable');
	element.onselectstart = function () { alert('Sorry, text selection is disabled for this report.'); return false; } // ie
	element.onmousedown = function () { return false; } // Mozilla
}

function showscan(){
	var m1 = MM_findObj('viewscan');
	var m2 = MM_findObj('hidescan');
	if (m1) {m1.style.display = 'none'; m2.style.display='inline';}
} 

function hidescan() {
	var m1 = MM_findObj('hidescan');
	var m2 = MM_findObj('viewscan');
	if (m1) {m1.style.display = 'none'; m2.style.display='inline';}
}

function setCookie(c_name,value,expiredays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name + '=' +escape(value) + ((expiredays==null) ? '' : ';expires=' + exdate.toGMTString());
}

function getCookie(c_name){
	if (document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name + '=');
		if (c_start!=-1){
			c_start=c_start + c_name.length+1;
			c_end=document.cookie.indexOf(';',c_start);
			if (c_end==-1) c_end=document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end));
		}
	}
	return '';
}

function toggleLayer( whichLayer )
{
	var elem, vis;
	if( document.getElementById ) // this is the way the standards work
		elem = document.getElementById( whichLayer );
	else if( document.all ) // this is the way old msie versions work
		elem = document.all[whichLayer];
	else if( document.layers ) // this is the way nn4 works, but who cares about Netscape Navigator 4?
		elem = document.layers[whichLayer];
	vis = elem.style;
	// if the style.display value is blank we try to figure it out here
	if( vis.display == '' && elem.offsetWidth != undefined && elem.offsetHeight != undefined ){
		if( elem.offsetWidth != 0 && elem.offsetHeight != 0 ){
			vis.display = 'block';
			showscan();
		}else{
			vis.display = 'none';
			hidescan();
		}
	}
	if( vis.display == '' || vis.display == 'block' ){
		vis.display = 'none';
		hidescan();
	}else{
		vis.display = 'block';
		showscan();
	}	
}

function showFeedback_b(){
  if (dom) {document.getElementById("classic_box").style.visibility='visible';}

} 
function hideFeedback_b() {
  if (dom) {document.getElementById("classic_box").style.visibility='hidden';}
}

function addLoadEvent(func) {
	var oldOnload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldOnload();
			func();
		}
	}
}

function _click(spanid) {
	var d, m, sel;

	current_tab.className = 'tab2 deselect';
	m = MM_findObj('detail' + current_tab.id);
	m.className = 'detail0';
	
	current_tab = MM_findObj(spanid);
	current_tab.className = 'tab2 selected';
	m = MM_findObj('detail' + spanid);
	m.className = 'detail1';
	return false;
}

function generateFlash() {
  	if (UseFlash) { 
  	    document.write('<' + 'object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' +
		'codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" '+
		'width="140" height="80" id="driver_scroll" align="middle" class="flashobject">' + 
		' <param name="movie" value="/img/driver_scroll2.swf" />'+
		' <param name="quality" value="high" /><param name="bgcolor" value="#ffffff" />'+
		' <embed src="/img/driver_scroll2.swf" quality="high" bgcolor="#EEF8E0" width="140" height="80" '+ 
		' name="driver_scroll" align="middle" allowScriptAccess="sameDomain" '+
		' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'+
		'</object>');
  	} 
}

function generateFlashVideo(wd, ht, video) {
  	if (UseFlash) { 
  	    document.write('<object width="' + wd + '" height="' + ht + '"><param name="movie" value="' + video + '">'+
		'</param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param>'+
		'<embed src="' + video + '" type="application/x-shockwave-flash" allowscriptaccess="always" '+
		' allowfullscreen="true" width="' + wd + '" height="' + ht + '"></embed></object>');
  	} else {
		document.write('<p>Flash 9 or later is required to view video</p>');
	}
}

function compare_version(current, desired) {
	var vc, vd;
	var c = current.split('.');
	var d = desired.split('.');
	for(var i = 0; i < c.length; i++) {
		vc = parseInt(c[i]);
		vd = parseInt(d[i]);
		if (vc != vd) {
			return (vc < vd) ? -1 : 1;
		}
	}
	return 0;		// versions are the same
}

function generateDriverAgent(path, version) {

	document.write('<' + 'object name="agent" id="agent" codebase="' + path + '/driveragent.cab#version=' + version + 
		'" classid="clsid:E8F628B5-259A-4734-97EE-BA914D7BE941" width="5" height="5" hspace="0" vspace="0" viewastext>' +
		'</object>.');
}

function locatetext(id) {
	for(var i = 0;i < data.length;i+=2) {
		if (id ==data[i]) return data[i + 1];
	}
	return '';
}

function toggle(id) {
	var h = MM_findObj('h' + id);
	var t = MM_findObj('t' + id);
	h.className = (h.className == 'support_faq_link') ? 'support_faq_link1' : 'support_faq_link';
	
	if (h.className == 'support_faq_link1') {
		t.style.display = 'block';
	} else {
		t.style.display = 'none';
	}
}

function toggle_r(sel){
	var choice = sel.options[sel.selectedIndex].value;
	
	if(choice != 0)
		document.getElementById(choice).style.display = "block";
	else{
		document.getElementById('man').style.display = "none";
		document.getElementById('cat').style.display = "none";
	}
	if(choice != 'cat')
		document.getElementById('cat').style.display = "none";
	if(choice != 'man')
		document.getElementById('man').style.display = "none";
}

function checkpost(formname){
	if(formname.display.checked==true){
		postval = true;
	}else{
		hideUpdate();
		postval = false;
	}
}

function showregister(){
	var reg = MM_findObj('notification_landing_pop');
	if (reg) {
		reg.style.display='block';
		movediv();
	}
}
var move_y = 5; //Starting Location - top
var dest_y = 235;  //Ending Location - top
var interval = 15;

function movediv() {
	//Keep on moving the image till the target is achieved
	if(move_y<dest_y) move_y += interval;
	document.getElementById("notification_landing_pop").style.top= move_y + 'px';
	if ((move_y + interval < dest_y)) {
		window.setTimeout('movediv()',80);
	}
}

function hidediv() {
	document.getElementById("notification_landing_pop").style.display='none';
}

function hideUpdate(){
  if (dom) {
	document.getElementById("notification_update_pop").style.display='none';
	document.getElementById("notification_landing_pop_back").style.display='none';
	document.body.style.overflow='scroll';
  }

} 

function noexitpop(){
	SHOULDPOP = false;
}

function reasonclick(cbox) {
	var e;
	var itemid = parseInt(cbox.id.substr(6));
	var i = 0;
	if (itemid) {
		if (cbox.checked) {		// one of the problems has been checked, so not ok
			var f = MM_findObj('reason0');
			f.checked = false;
		}
		
		if(itemid == 3){
			if (cbox.checked) {				
				$.ajax({
				type: "POST",		
				url: "feedback.php?installissue=" + itemid,	
				success: function(data) {			
				var subtype = $('#SubTopic');
					subtype.replaceWith(data);
					}	
				});		
			}else{
				$("#SubTopic").html("");
				$("#Answers").html("");			
			}
		}
		
		return;
	}
	
	if (cbox.checked) {			// all ok has been checked  - so no problems
		while(true) {
			i++;
			e = MM_findObj('reason' + i);
			if (!e) return;
			e.checked = false;
		}
	}
}

function generateAnswers(str){
		$.ajax({
		type: "POST",		
		url: "feedback.php?showanswer=" + str,	
		success: function(data) {			
			var subtype = $('#Answers');
			subtype.replaceWith(data);
		}		
		});	
	}


function toggleDiv2(id,flagit) {
	if (flagit==1){
		if (document.layers) document.layers[''+id+''].visibility = "show"
		else if (document.all) document.all[''+id+''].style.visibility = "visible"
		else if (document.getElementById) document.getElementById(''+id+'').style.visibility = "visible";
	} else {
		if (document.layers) document.layers[''+id+''].visibility = "hide"
		else if (document.all) document.all[''+id+''].style.visibility = "hidden"
		else if (document.getElementById) document.getElementById(''+id+'').style.visibility = "hidden";
	}
}

function bulkTotal() {
	var checkbox, unit;
	var totalsize = 0;
	for(var i=0; i < archives.length; i+=2) {
		checkbox = MM_findObj('cb' + archives[i]);
		if (checkbox && checkbox.checked) totalsize += archives[i + 1];
	}

	if (totalsize < 1) {
		totalsize = '-';
		unit = ''
	} else if (totalsize < 10000) {
		unit = ' B';
	} else if (totalsize < 3000000) {
		unit = ' kiB';
		totalsize = parseInt(totalsize / 102.4) / 10;
	} else {
		unit = ' MiB';
		totalsize = parseInt(totalsize / 104857.6) / 10;
	}

	var show = MM_findObj('show');
	show.innerHTML = totalsize + unit;
}

quotes = new Array();
UseFlash=0;
pluginVersion=0;

if (navigator.plugins) {
	for(i=0;i<navigator.mimeTypes.length;i++){
		var name = navigator.mimeTypes[i].type;
		var n = name.indexOf(";"); 
		if (n > -1) {		// we have some version info
			var mimetype = name.substring(0, n);
			if (mimetype == 'application/x-driveragent') {
				hasplugin = 1;
				n = name.indexOf("=") + 1; 
				pluginVersion = name.substr(n, 20);
				break;
			}
		}
	}
}

if (navigator.mimeTypes && navigator.mimeTypes['application/x-shockwave-flash']) {
	var plugin = navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin; 
	if (plugin) {
		var words = plugin.description.split(' ');
		for (var i = 0; i < words.length; i++) {
			var ver = parseFloat(words[i]);
			if (!isNaN(ver) && ver > 3) {
				UseFlash = 1;
				break;
			}
		}
	}
}

function res_click(spanid) {
	var d, m, sel;

	if (current_tab) {
		if (current_tab.x_highlight) {
			current_tab.className = 'tab2 alert';
		} else { 
			current_tab.className = 'tab2 deselect';
		}
		m = MM_findObj('detail' + current_tab.id);
		if (m) m.className = 'detail0';
	}
	
	current_tab = MM_findObj(spanid);
	if (!current_tab) return false;
	current_tab.className = 'tab2 selected';
	m = MM_findObj('detail' + spanid);
	m.className = 'detail1';
	return false;
}

function res_updatealerts() {
	var mapping = new Array('_01', '_08', '', '', '_04', '_05', '_07', '_06');
	for(var i = 1; i < 7; i++) {
		if (mapping[i] != '') {
			var j = MM_findObj(mapping[i]);
			if (j) {
				j.x_highlight = alerts[i];
				if (alerts[i]) j.className = 'tab2 alert'; 
			}
		}
	}
}
	
function res_init() {
	var anchorvalue;
	var strippedUrl = document.location.toString().split('#');
	if (strippedUrl.length > 1) anchorvalue = strippedUrl[1];

	if (!document.getElementsByTagName) return;
	var tabs=document.getElementsByTagName('span');
	for (var i = 0; i < tabs.length; i++) {
		if (tabs[i].className.indexOf('selected') > -1) current_tab = tabs[i];
	}
	res_updatealerts();
	var v = MM_findObj('_06');
	var v2 = MM_findObj('_09');
	
	if (anchorvalue == 'summary') res_click('_01');
	if (anchorvalue == 'guide') res_click('_08');
	if (anchorvalue == 'alt') res_click('_02');
	if (anchorvalue == 'preview') res_click('_04');
	if (anchorvalue == 'notes') res_click('_05');
	if (anchorvalue == 'tss' && v) res_click('_06');
	if (anchorvalue == 'lang' && v2) res_click('_09');
}

addLoadEvent(res_init);

function jchange(o) {
	var fold_image = new Array();
	fold_image[0] = "/img/results/icon_min.gif";
	fold_image[1] = "/img/results/icon_max.gif";

	if(document.getElementById(o).style.display=='none') {
		document.getElementById(o).style.display='block';
		if(document.getElementById(o +'_img')) document.getElementById(o +'_img').src=fold_image[0];
	} else {
		document.getElementById(o).style.display='none';
		if(document.getElementById(o +'_img')) document.getElementById(o +'_img').src=fold_image[1];
	}
}
