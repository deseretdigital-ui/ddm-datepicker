!function(e){function t(n){if(a[n])return a[n].exports;var s=a[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";a(4),a(3),a(2),a(1)},function(e,t){"use strict";!function(e){var t="datepick";e.JQPlugin.createPlugin({name:t,defaultRenderer:{picker:'<div class="datepick"><div class="datepick-nav">{link:prev}{link:today}{link:next}</div>{months}{popup:start}<div class="datepick-ctrl">{link:clear}{link:close}</div>{popup:end}<div class="datepick-clear-fix"></div></div>',monthRow:'<div class="datepick-month-row">{months}</div>',month:'<div class="datepick-month"><div class="datepick-month-header">{monthHeader}</div><table><thead>{weekHeader}</thead><tbody>{weeks}</tbody></table></div>',weekHeader:"<tr>{days}</tr>",dayHeader:"<th>{day}</th>",week:"<tr>{days}</tr>",day:"<td>{day}</td>",monthSelector:".datepick-month",daySelector:"td",rtlClass:"datepick-rtl",multiClass:"datepick-multi",defaultClass:"",selectedClass:"datepick-selected",highlightedClass:"datepick-highlight",todayClass:"datepick-today",otherMonthClass:"datepick-other-month",weekendClass:"datepick-weekend",commandClass:"datepick-cmd",commandButtonClass:"",commandLinkClass:"",disabledClass:"datepick-disabled"},commands:{prev:{text:"prevText",status:"prevStatus",keystroke:{keyCode:33},enabled:function(e){var t=e.curMinDate();return!t||a.add(a.day(a._applyMonthsOffset(a.add(a.newDate(e.drawDate),1-e.options.monthsToStep,"m"),e),1),-1,"d").getTime()>=t.getTime()},date:function(e){return a.day(a._applyMonthsOffset(a.add(a.newDate(e.drawDate),-e.options.monthsToStep,"m"),e),1)},action:function(e){a.changeMonth(this,-e.options.monthsToStep)}},prevJump:{text:"prevJumpText",status:"prevJumpStatus",keystroke:{keyCode:33,ctrlKey:!0},enabled:function(e){var t=e.curMinDate();return!t||a.add(a.day(a._applyMonthsOffset(a.add(a.newDate(e.drawDate),1-e.options.monthsToJump,"m"),e),1),-1,"d").getTime()>=t.getTime()},date:function(e){return a.day(a._applyMonthsOffset(a.add(a.newDate(e.drawDate),-e.options.monthsToJump,"m"),e),1)},action:function(e){a.changeMonth(this,-e.options.monthsToJump)}},next:{text:"nextText",status:"nextStatus",keystroke:{keyCode:34},enabled:function(e){var t=e.get("maxDate");return!t||a.day(a._applyMonthsOffset(a.add(a.newDate(e.drawDate),e.options.monthsToStep,"m"),e),1).getTime()<=t.getTime()},date:function(e){return a.day(a._applyMonthsOffset(a.add(a.newDate(e.drawDate),e.options.monthsToStep,"m"),e),1)},action:function(e){a.changeMonth(this,e.options.monthsToStep)}},nextJump:{text:"nextJumpText",status:"nextJumpStatus",keystroke:{keyCode:34,ctrlKey:!0},enabled:function(e){var t=e.get("maxDate");return!t||a.day(a._applyMonthsOffset(a.add(a.newDate(e.drawDate),e.options.monthsToJump,"m"),e),1).getTime()<=t.getTime()},date:function(e){return a.day(a._applyMonthsOffset(a.add(a.newDate(e.drawDate),e.options.monthsToJump,"m"),e),1)},action:function(e){a.changeMonth(this,e.options.monthsToJump)}},current:{text:"currentText",status:"currentStatus",keystroke:{keyCode:36,ctrlKey:!0},enabled:function(e){var t=e.curMinDate(),n=e.get("maxDate"),s=e.selectedDates[0]||a.today();return(!t||s.getTime()>=t.getTime())&&(!n||s.getTime()<=n.getTime())},date:function(e){return e.selectedDates[0]||a.today()},action:function(e){var t=e.selectedDates[0]||a.today();a.showMonth(this,t.getFullYear(),t.getMonth()+1)}},today:{text:"todayText",status:"todayStatus",keystroke:{keyCode:36,ctrlKey:!0},enabled:function(e){var t=e.curMinDate(),n=e.get("maxDate");return(!t||a.today().getTime()>=t.getTime())&&(!n||a.today().getTime()<=n.getTime())},date:function(e){return a.today()},action:function(e){a.showMonth(this)}},clear:{text:"clearText",status:"clearStatus",keystroke:{keyCode:35,ctrlKey:!0},enabled:function(e){return!0},date:function(e){return null},action:function(e){a.clear(this)}},close:{text:"closeText",status:"closeStatus",keystroke:{keyCode:27},enabled:function(e){return!0},date:function(e){return null},action:function(e){a.hide(this)}},prevWeek:{text:"prevWeekText",status:"prevWeekStatus",keystroke:{keyCode:38,ctrlKey:!0},enabled:function(e){var t=e.curMinDate();return!t||a.add(a.newDate(e.drawDate),-7,"d").getTime()>=t.getTime()},date:function(e){return a.add(a.newDate(e.drawDate),-7,"d")},action:function(e){a.changeDay(this,-7)}},prevDay:{text:"prevDayText",status:"prevDayStatus",keystroke:{keyCode:37,ctrlKey:!0},enabled:function(e){var t=e.curMinDate();return!t||a.add(a.newDate(e.drawDate),-1,"d").getTime()>=t.getTime()},date:function(e){return a.add(a.newDate(e.drawDate),-1,"d")},action:function(e){a.changeDay(this,-1)}},nextDay:{text:"nextDayText",status:"nextDayStatus",keystroke:{keyCode:39,ctrlKey:!0},enabled:function(e){var t=e.get("maxDate");return!t||a.add(a.newDate(e.drawDate),1,"d").getTime()<=t.getTime()},date:function(e){return a.add(a.newDate(e.drawDate),1,"d")},action:function(e){a.changeDay(this,1)}},nextWeek:{text:"nextWeekText",status:"nextWeekStatus",keystroke:{keyCode:40,ctrlKey:!0},enabled:function(e){var t=e.get("maxDate");return!t||a.add(a.newDate(e.drawDate),7,"d").getTime()<=t.getTime()},date:function(e){return a.add(a.newDate(e.drawDate),7,"d")},action:function(e){a.changeDay(this,7)}}},defaultOptions:{pickerClass:"",showOnFocus:!0,showTrigger:null,showAnim:"show",showOptions:{},showSpeed:"normal",popupContainer:null,alignment:"bottom",fixedWeeks:!1,firstDay:0,calculateWeek:null,monthsToShow:1,monthsOffset:0,monthsToStep:1,monthsToJump:12,useMouseWheel:!0,changeMonth:!0,yearRange:"c-10:c+10",shortYearCutoff:"+10",showOtherMonths:!1,selectOtherMonths:!1,defaultDate:null,selectDefaultDate:!1,minDate:null,maxDate:null,dateFormat:"mm/dd/yyyy",autoSize:!1,rangeSelect:!1,rangeSeparator:" - ",multiSelect:0,multiSeparator:", ",onDate:null,onShow:null,onChangeMonthYear:null,onSelect:null,onClose:null,altField:null,altFormat:null,constrainInput:!0,commandsAsDateFormat:!1,commands:{}},regionalOptions:{"":{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],dateFormat:"mm/dd/yyyy",firstDay:0,renderer:{},prevText:"&lt;Prev",prevStatus:"Show the previous month",prevJumpText:"&lt;&lt;",prevJumpStatus:"Show the previous year",nextText:"Next&gt;",nextStatus:"Show the next month",nextJumpText:"&gt;&gt;",nextJumpStatus:"Show the next year",currentText:"Current",currentStatus:"Show the current month",todayText:"Today",todayStatus:"Show today's month",clearText:"Clear",clearStatus:"Clear all the dates",closeText:"Close",closeStatus:"Close the datepicker",yearStatus:"Change the year",monthStatus:"Change the month",weekText:"Wk",weekStatus:"Week of the year",dayStatus:"Select DD, M d, yyyy",defaultStatus:"Select a date",isRTL:!1}},_getters:["getDate","isDisabled","isSelectable","retrieveDate"],_disabled:[],_popupClass:t+"-popup",_triggerClass:t+"-trigger",_disableClass:t+"-disable",_monthYearClass:t+"-month-year",_curMonthClass:t+"-month-",_anyYearClass:t+"-any-year",_curDoWClass:t+"-dow-",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,_msPerDay:864e5,ATOM:"yyyy-mm-dd",COOKIE:"D, dd M yyyy",FULL:"DD, MM d, yyyy",ISO_8601:"yyyy-mm-dd",JULIAN:"J",RFC_822:"D, d M yy",RFC_850:"DD, dd-M-yy",RFC_1036:"D, d M yy",RFC_1123:"D, d M yyyy",RFC_2822:"D, d M yyyy",RSS:"D, d M yy",TICKS:"!",TIMESTAMP:"@",W3C:"yyyy-mm-dd",formatDate:function(e,t,a){if("string"!=typeof e&&(a=t,t=e,e=""),!t)return"";e=e||this.defaultOptions.dateFormat,a=a||{};for(var n=a.dayNamesShort||this.defaultOptions.dayNamesShort,s=a.dayNames||this.defaultOptions.dayNames,o=a.monthNamesShort||this.defaultOptions.monthNamesShort,i=a.monthNames||this.defaultOptions.monthNames,r=a.calculateWeek||this.defaultOptions.calculateWeek,l=function(t,a){for(var n=1;p+n<e.length&&e.charAt(p+n)===t;)n++;return p+=n-1,Math.floor(n/(a||1))>1},d=function(e,t,a,n){var s=""+t;if(l(e,n))for(;s.length<a;)s="0"+s;return s},c=function(e,t,a,n){return l(e)?n[t]:a[t]},h="",u=!1,p=0;p<e.length;p++)if(u)"'"!==e.charAt(p)||l("'")?h+=e.charAt(p):u=!1;else switch(e.charAt(p)){case"d":h+=d("d",t.getDate(),2);break;case"D":h+=c("D",t.getDay(),n,s);break;case"o":h+=d("o",this.dayOfYear(t),3);break;case"w":h+=d("w",r(t),2);break;case"m":h+=d("m",t.getMonth()+1,2);break;case"M":h+=c("M",t.getMonth(),o,i);break;case"y":h+=l("y",2)?t.getFullYear():(t.getFullYear()%100<10?"0":"")+t.getFullYear()%100;break;case"@":h+=Math.floor(t.getTime()/1e3);break;case"!":h+=1e4*t.getTime()+this._ticksTo1970;break;case"'":l("'")?h+="'":u=!0;break;default:h+=e.charAt(p)}return h},parseDate:function(e,t,a){if(null==t)throw"Invalid arguments";if(t="object"==typeof t?t.toString():t+"",""===t)return null;e=e||this.defaultOptions.dateFormat,a=a||{};var n=a.shortYearCutoff||this.defaultOptions.shortYearCutoff;n="string"!=typeof n?n:this.today().getFullYear()%100+parseInt(n,10);for(var s=a.dayNamesShort||this.defaultOptions.dayNamesShort,o=a.dayNames||this.defaultOptions.dayNames,i=a.monthNamesShort||this.defaultOptions.monthNamesShort,r=a.monthNames||this.defaultOptions.monthNames,l=-1,d=-1,c=-1,h=-1,u=!1,p=!1,f=function(t,a){for(var n=1;v+n<e.length&&e.charAt(v+n)===t;)n++;return v+=n-1,Math.floor(n/(a||1))>1},m=function(e,a){var n=f(e,a),s=[2,3,n?4:2,11,20]["oy@!".indexOf(e)+1],o=new RegExp("^-?\\d{1,"+s+"}"),i=t.substring(D).match(o);if(!i)throw"Missing number at position {0}".replace(/\{0\}/,D);return D+=i[0].length,parseInt(i[0],10)},g=function(e,a,n,s){for(var o=f(e,s)?n:a,i=0;i<o.length;i++)if(t.substr(D,o[i].length).toLowerCase()===o[i].toLowerCase())return D+=o[i].length,i+1;throw"Unknown name at position {0}".replace(/\{0\}/,D)},y=function(){if(t.charAt(D)!==e.charAt(v))throw"Unexpected literal at position {0}".replace(/\{0\}/,D);D++},D=0,v=0;v<e.length;v++)if(p)"'"!==e.charAt(v)||f("'")?y():p=!1;else switch(e.charAt(v)){case"d":c=m("d");break;case"D":g("D",s,o);break;case"o":h=m("o");break;case"w":m("w");break;case"m":d=m("m");break;case"M":d=g("M",i,r);break;case"y":var w=v;u=!f("y",2),v=w,l=m("y",2);break;case"@":var k=this._normaliseDate(new Date(1e3*m("@")));l=k.getFullYear(),d=k.getMonth()+1,c=k.getDate();break;case"!":var k=this._normaliseDate(new Date((m("!")-this._ticksTo1970)/1e4));l=k.getFullYear(),d=k.getMonth()+1,c=k.getDate();break;case"*":D=t.length;break;case"'":f("'")?y():p=!0;break;default:y()}if(D<t.length)throw"Additional text found at end";if(-1===l?l=this.today().getFullYear():100>l&&u&&(l+=-1===n?1900:this.today().getFullYear()-this.today().getFullYear()%100-(n>=l?0:100)),h>-1){d=1,c=h;for(var _=this.daysInMonth(l,d);c>_;_=this.daysInMonth(l,d))d++,c-=_}var k=this.newDate(l,d,c);if(k.getFullYear()!==l||k.getMonth()+1!==d||k.getDate()!==c)throw"Invalid date";return k},determineDate:function(e,t,n,s,o){n&&"object"!=typeof n&&(o=s,s=n,n=null),"string"!=typeof s&&(o=s,s="");var i=function(e){try{return a.parseDate(s,e,o)}catch(t){}e=e.toLowerCase();for(var i=(e.match(/^c/)&&n?a.newDate(n):null)||a.today(),r=/([+-]?[0-9]+)\s*(d|w|m|y)?/g,l=null;l=r.exec(e);)i=a.add(i,parseInt(l[1],10),l[2]||"d");return i};return t=t?a.newDate(t):null,e=null==e?t:"string"==typeof e?i(e):"number"==typeof e?isNaN(e)||e===1/0||e===-(1/0)?t:a.add(a.today(),e,"d"):a.newDate(e)},daysInMonth:function(e,t){return t=e.getFullYear?e.getMonth()+1:t,e=e.getFullYear?e.getFullYear():e,this.newDate(e,t+1,0).getDate()},dayOfYear:function(e,t,n){var s=e.getFullYear?e:a.newDate(e,t,n),o=a.newDate(s.getFullYear(),1,1);return Math.floor((s.getTime()-o.getTime())/a._msPerDay)+1},iso8601Week:function(e,t,n){var s=e.getFullYear?new Date(e.getTime()):a.newDate(e,t,n);s.setDate(s.getDate()+4-(s.getDay()||7));var o=s.getTime();return s.setMonth(0,1),Math.floor(Math.round((o-s)/a._msPerDay)/7)+1},today:function(){return this._normaliseDate(new Date)},newDate:function(e,t,a){return e?e.getFullYear?this._normaliseDate(new Date(e.getTime())):new Date(e,t-1,a,12):null},_normaliseDate:function(e){return e&&e.setHours(12,0,0,0),e},year:function(e,t){return e.setFullYear(t),this._normaliseDate(e)},month:function(e,t){return e.setMonth(t-1),this._normaliseDate(e)},day:function(e,t){return e.setDate(t),this._normaliseDate(e)},add:function(e,t,n){if("d"===n||"w"===n)this._normaliseDate(e),e.setDate(e.getDate()+t*("w"===n?7:1));else{var s=e.getFullYear()+("y"===n?t:0),o=e.getMonth()+("m"===n?t:0);e.setTime(a.newDate(s,o+1,Math.min(e.getDate(),this.daysInMonth(s,o+1))).getTime())}return e},_applyMonthsOffset:function(t,n){var s=n.options.monthsOffset;return e.isFunction(s)&&(s=s.apply(n.elem[0],[t])),a.add(t,-s,"m")},_init:function(){this.defaultOptions.commands=this.commands,this.defaultOptions.calculateWeek=this.iso8601Week,this.regionalOptions[""].renderer=this.defaultRenderer,this._super()},_instSettings:function(t,n){return{selectedDates:[],drawDate:null,pickingRange:!1,inline:e.inArray(t[0].nodeName.toLowerCase(),["div","span"])>-1,get:function(t){return e.inArray(t,["defaultDate","minDate","maxDate"])>-1?a.determineDate(this.options[t],null,this.selectedDates[0],this.options.dateFormat,this.getConfig()):this.options[t]},curMinDate:function(){return this.pickingRange?this.selectedDates[0]:this.get("minDate")},getConfig:function(){return{dayNamesShort:this.options.dayNamesShort,dayNames:this.options.dayNames,monthNamesShort:this.options.monthNamesShort,monthNames:this.options.monthNames,calculateWeek:this.options.calculateWeek,shortYearCutoff:this.options.shortYearCutoff}}}},_postAttach:function(t,n){n.inline?(n.drawDate=a._checkMinMax(a.newDate(n.selectedDates[0]||n.get("defaultDate")||a.today()),n),n.prevDate=a.newDate(n.drawDate),this._update(t[0]),e.fn.mousewheel&&t.mousewheel(this._doMouseWheel)):(this._attachments(t,n),t.on("keydown."+n.name,this._keyDown).on("keypress."+n.name,this._keyPress).on("keyup."+n.name,this._keyUp),t.attr("disabled")&&this.disable(t[0]))},_optionsChanged:function(t,n,s){if(s.calendar&&s.calendar!==n.options.calendar){var o=function(e){return"object"==typeof n.options[e]?null:n.options[e]};s=e.extend({defaultDate:o("defaultDate"),minDate:o("minDate"),maxDate:o("maxDate")},s),n.selectedDates=[],n.drawDate=null}var i=n.selectedDates;e.extend(n.options,s),this.setDate(t[0],i,null,!1,!0),n.pickingRange=!1,n.drawDate=a.newDate(this._checkMinMax((n.options.defaultDate?n.get("defaultDate"):n.drawDate)||n.get("defaultDate")||a.today(),n)),n.inline||this._attachments(t,n),(n.inline||n.div)&&this._update(t[0])},_attachments:function(t,n){t.off("focus."+n.name),n.options.showOnFocus&&t.on("focus."+n.name,this.show),n.trigger&&n.trigger.remove();var s=n.options.showTrigger;n.trigger=s?e(s).clone().removeAttr("id").addClass(this._triggerClass)[n.options.isRTL?"insertBefore":"insertAfter"](t).click(function(){a.isDisabled(t[0])||a[a.curInst===n?"hide":"show"](t[0])}):e([]),this._autoSize(t,n);var o=this._extractDates(n,t.val());o&&this.setDate(t[0],o,null,!0);var i=n.get("defaultDate");n.options.selectDefaultDate&&i&&0===n.selectedDates.length&&this.setDate(t[0],a.newDate(i||a.today()))},_autoSize:function(e,t){if(t.options.autoSize&&!t.inline){var n=a.newDate(2009,10,20),s=t.options.dateFormat;if(s.match(/[DM]/)){var o=function(e){for(var t=0,a=0,n=0;n<e.length;n++)e[n].length>t&&(t=e[n].length,a=n);return a};n.setMonth(o(t.options[s.match(/MM/)?"monthNames":"monthNamesShort"])),n.setDate(o(t.options[s.match(/DD/)?"dayNames":"dayNamesShort"])+20-n.getDay())}t.elem.attr("size",a.formatDate(s,n,t.getConfig()).length)}},_preDestroy:function(t,a){a.trigger&&a.trigger.remove(),t.empty().off("."+a.name),a.inline&&e.fn.mousewheel&&t.unmousewheel(),!a.inline&&a.options.autoSize&&t.removeAttr("size")},multipleEvents:function(e){var t=arguments;return function(e){for(var a=0;a<t.length;a++)t[a].apply(this,arguments)}},enable:function(t){if(t=e(t),t.hasClass(this._getMarker())){var a=this._getInst(t);a.inline?t.children("."+this._disableClass).remove().end().find("button,select").prop("disabled",!1).end().find("a").attr("href","javascript:void(0)"):(t.prop("disabled",!1),a.trigger.filter("button."+this._triggerClass).prop("disabled",!1).end().filter("img."+this._triggerClass).css({opacity:"1.0",cursor:""})),this._disabled=e.map(this._disabled,function(e){return e===t[0]?null:e})}},disable:function(t){if(t=e(t),t.hasClass(this._getMarker())){var a=this._getInst(t);if(a.inline){var n=t.children(":last"),s=n.offset(),o={left:0,top:0};n.parents().each(function(){return"relative"===e(this).css("position")?(o=e(this).offset(),!1):void 0});var i=t.css("zIndex");i=("auto"===i?0:parseInt(i,10))+1,t.prepend('<div class="'+this._disableClass+'" style="width: '+n.outerWidth()+"px; height: "+n.outerHeight()+"px; left: "+(s.left-o.left)+"px; top: "+(s.top-o.top)+"px; z-index: "+i+'"></div>').find("button,select").prop("disabled",!0).end().find("a").removeAttr("href")}else t.prop("disabled",!0),a.trigger.filter("button."+this._triggerClass).prop("disabled",!0).end().filter("img."+this._triggerClass).css({opacity:"0.5",cursor:"default"});this._disabled=e.map(this._disabled,function(e){return e===t[0]?null:e}),this._disabled.push(t[0])}},isDisabled:function(t){return t&&e.inArray(t,this._disabled)>-1},show:function(t){t=e(t.target||t);var n=a._getInst(t);if(a.curInst!==n&&(a.curInst&&a.hide(a.curInst,!0),!e.isEmptyObject(n))){n.lastVal=null,n.selectedDates=a._extractDates(n,t.val()),n.pickingRange=!1,n.drawDate=a._checkMinMax(a.newDate(n.selectedDates[0]||n.get("defaultDate")||a.today()),n),n.prevDate=a.newDate(n.drawDate),a.curInst=n,a._update(t[0],!0);var s=a._checkOffset(n);n.div.css({left:s.left,top:s.top});var o=n.options.showAnim,i=n.options.showSpeed;if(i="normal"===i&&e.ui&&parseInt(e.ui.version.substring(2))>=8?"_default":i,e.effects&&(e.effects[o]||e.effects.effect&&e.effects.effect[o])){var r=n.div.data();for(var l in r)l.match(/^ec\.storage\./)&&(r[l]=n._mainDiv.css(l.replace(/ec\.storage\./,"")));n.div.data(r).show(o,n.options.showOptions,i)}else n.div[o||"show"](o?i:0)}},_extractDates:function(e,t){if(t!==e.lastVal){e.lastVal=t,t=t.split(e.options.multiSelect?e.options.multiSeparator:e.options.rangeSelect?e.options.rangeSeparator:"\x00");for(var n=[],s=0;s<t.length;s++)try{var o=a.parseDate(e.options.dateFormat,t[s],e.getConfig());if(o){for(var i=!1,r=0;r<n.length;r++)if(n[r].getTime()===o.getTime()){i=!0;break}i||n.push(o)}}catch(l){}return n.splice(e.options.multiSelect||(e.options.rangeSelect?2:1),n.length),e.options.rangeSelect&&1===n.length&&(n[1]=n[0]),n}},_update:function(t,n){t=e(t.target||t);var s=a._getInst(t);e.isEmptyObject(s)||((s.inline||a.curInst===s)&&(!e.isFunction(s.options.onChangeMonthYear)||s.prevDate&&s.prevDate.getFullYear()===s.drawDate.getFullYear()&&s.prevDate.getMonth()===s.drawDate.getMonth()||s.options.onChangeMonthYear.apply(t[0],[s.drawDate.getFullYear(),s.drawDate.getMonth()+1])),s.inline?t.html(this._generateContent(t[0],s)):a.curInst===s&&(s.div||(s.div=e("<div></div>").addClass(this._popupClass).css({display:n?"none":"static",position:"absolute",left:t.offset().left,top:t.offset().top+t.outerHeight()}).appendTo(e(s.options.popupContainer||"body")),e.fn.mousewheel&&s.div.mousewheel(this._doMouseWheel)),s.div.html(this._generateContent(t[0],s)),t.focus()))},_updateInput:function(t,n){var s=this._getInst(t);if(!e.isEmptyObject(s)){for(var o="",i="",r=s.options.multiSelect?s.options.multiSeparator:s.options.rangeSeparator,l=s.options.altFormat||s.options.dateFormat,d=0;d<s.selectedDates.length;d++)o+=n?"":(d>0?r:"")+a.formatDate(s.options.dateFormat,s.selectedDates[d],s.getConfig()),i+=(d>0?r:"")+a.formatDate(l,s.selectedDates[d],s.getConfig());s.inline||n||e(t).val(o),e(s.options.altField).val(i),!e.isFunction(s.options.onSelect)||n||s.inSelect||(s.inSelect=!0,s.options.onSelect.apply(t,[s.selectedDates]),s.inSelect=!1)}},_getBorders:function(e){var t=function(e){return{thin:1,medium:3,thick:5}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(t){var a=t.elem.is(":hidden")&&t.trigger?t.trigger:t.elem,n=a.offset(),s=e(window).width(),o=e(window).height();if(0===s)return n;var i=!1;e(t.elem).parents().each(function(){return i|="fixed"===e(this).css("position"),!i});var r=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop,d=n.top-(i?l:0)-t.div.outerHeight(),c=n.top-(i?l:0)+a.outerHeight(),h=n.left-(i?r:0),u=n.left-(i?r:0)+a.outerWidth()-t.div.outerWidth(),p=n.left-r+t.div.outerWidth()>s,f=n.top-l+t.elem.outerHeight()+t.div.outerHeight()>o;t.div.css("position",i?"fixed":"absolute");var m=t.options.alignment;return n="topLeft"===m?{left:h,top:d}:"topRight"===m?{left:u,top:d}:"bottomLeft"===m?{left:h,top:c}:"bottomRight"===m?{left:u,top:c}:"top"===m?{left:t.options.isRTL||p?u:h,top:d}:{left:t.options.isRTL||p?u:h,top:f?d:c},n.left=Math.max(i?0:r,n.left),n.top=Math.max(i?0:l,n.top),n},_checkExternalClick:function(t){if(a.curInst){var n=e(t.target);0!==n.closest("."+a._popupClass+",."+a._triggerClass).length||n.hasClass(a._getMarker())||a.hide(a.curInst)}},hide:function(t,n){if(t){var s=this._getInst(t);if(e.isEmptyObject(s)&&(s=t),s&&s===a.curInst){var o=n?"":s.options.showAnim,i=s.options.showSpeed;i="normal"===i&&e.ui&&parseInt(e.ui.version.substring(2))>=8?"_default":i;var r=function(){s.div&&(s.div.remove(),s.div=null,a.curInst=null,e.isFunction(s.options.onClose)&&s.options.onClose.apply(t,[s.selectedDates]))};if(s.div.stop(),e.effects&&(e.effects[o]||e.effects.effect&&e.effects.effect[o]))s.div.hide(o,s.options.showOptions,i,r);else{var l="slideDown"===o?"slideUp":"fadeIn"===o?"fadeOut":"hide";s.div[l](o?i:"",r)}o||r()}}},_keyDown:function(t){var n=t.target,s=a._getInst(n),o=!1;if(s.div)if(9===t.keyCode)a.hide(n);else if(13===t.keyCode)a.selectDate(n,e("a."+s.options.renderer.highlightedClass,s.div)[0]),o=!0;else{var i=s.options.commands;for(var r in i){var l=i[r];if(l.keystroke.keyCode===t.keyCode&&!!l.keystroke.ctrlKey==!(!t.ctrlKey&&!t.metaKey)&&!!l.keystroke.altKey===t.altKey&&!!l.keystroke.shiftKey===t.shiftKey){a.performAction(n,r),o=!0;break}}}else{var l=s.options.commands.current;l.keystroke.keyCode===t.keyCode&&!!l.keystroke.ctrlKey==!(!t.ctrlKey&&!t.metaKey)&&!!l.keystroke.altKey===t.altKey&&!!l.keystroke.shiftKey===t.shiftKey&&(a.show(n),o=!0)}return s.ctrlKey=t.keyCode<48&&32!==t.keyCode||t.ctrlKey||t.metaKey,o&&(t.preventDefault(),t.stopPropagation()),!o},_keyPress:function(t){var n=a._getInst(t.target);if(!e.isEmptyObject(n)&&n.options.constrainInput){var s=String.fromCharCode(t.keyCode||t.charCode),o=a._allowedChars(n);return t.metaKey||n.ctrlKey||" ">s||!o||o.indexOf(s)>-1}return!0},_allowedChars:function(e){for(var t=e.options.multiSelect?e.options.multiSeparator:e.options.rangeSelect?e.options.rangeSeparator:"",a=!1,n=!1,s=e.options.dateFormat,o=0;o<s.length;o++){var i=s.charAt(o);if(a)"'"===i&&"'"!==s.charAt(o+1)?a=!1:t+=i;else switch(i){case"d":case"m":case"o":case"w":t+=n?"":"0123456789",n=!0;break;case"y":case"@":case"!":t+=(n?"":"0123456789")+"-",n=!0;break;case"J":t+=(n?"":"0123456789")+"-.",n=!0;break;case"D":case"M":case"Y":return null;case"'":"'"===s.charAt(o+1)?t+="'":a=!0;break;default:t+=i}}return t},_keyUp:function(t){var n=t.target,s=a._getInst(n);if(!e.isEmptyObject(s)&&!s.ctrlKey&&s.lastVal!==s.elem.val())try{var o=a._extractDates(s,s.elem.val());o.length>0&&a.setDate(n,o,null,!0)}catch(t){}return!0},_doMouseWheel:function(t,n){var s=a.curInst&&a.curInst.elem[0]||e(t.target).closest("."+a._getMarker())[0];if(!a.isDisabled(s)){var o=a._getInst(s);o.options.useMouseWheel&&(n=0>n?-1:1,a.changeMonth(s,-o.options[t.ctrlKey?"monthsToJump":"monthsToStep"]*n)),t.preventDefault()}},clear:function(t){var n=this._getInst(t);if(!e.isEmptyObject(n)){n.selectedDates=[],this.hide(t);var s=n.get("defaultDate");n.options.selectDefaultDate&&s?this.setDate(t,a.newDate(s||a.today())):this._updateInput(t)}},getDate:function(t){var a=this._getInst(t);return e.isEmptyObject(a)?[]:a.selectedDates},setDate:function(t,n,s,o,i){var r=this._getInst(t);if(!e.isEmptyObject(r)){e.isArray(n)||(n=[n],s&&n.push(s));var l=r.get("minDate"),d=r.get("maxDate"),c=r.selectedDates[0];r.selectedDates=[];for(var h=0;h<n.length;h++){var u=a.determineDate(n[h],null,c,r.options.dateFormat,r.getConfig());if(u&&(!l||u.getTime()>=l.getTime())&&(!d||u.getTime()<=d.getTime())){for(var p=!1,f=0;f<r.selectedDates.length;f++)if(r.selectedDates[f].getTime()===u.getTime()){p=!0;break}p||r.selectedDates.push(u)}}if(r.selectedDates.splice(r.options.multiSelect||(r.options.rangeSelect?2:1),r.selectedDates.length),r.options.rangeSelect){switch(r.selectedDates.length){case 1:r.selectedDates[1]=r.selectedDates[0];break;case 2:r.selectedDates[1]=r.selectedDates[0].getTime()>r.selectedDates[1].getTime()?r.selectedDates[0]:r.selectedDates[1]}r.pickingRange=!1}r.prevDate=r.drawDate?a.newDate(r.drawDate):null,r.drawDate=this._checkMinMax(a.newDate(r.selectedDates[0]||r.get("defaultDate")||a.today()),r),i||(this._update(t),this._updateInput(t,o))}},isSelectable:function(t,n){var s=this._getInst(t);return e.isEmptyObject(s)?!1:(n=a.determineDate(n,s.selectedDates[0]||this.today(),null,s.options.dateFormat,s.getConfig()),this._isSelectable(t,n,s.options.onDate,s.get("minDate"),s.get("maxDate")))},_isSelectable:function(t,a,n,s,o){var i="boolean"==typeof n?{selectable:n}:e.isFunction(n)?n.apply(t,[a,!0]):{};return i.selectable!==!1&&(!s||a.getTime()>=s.getTime())&&(!o||a.getTime()<=o.getTime())},performAction:function(t,a){var n=this._getInst(t);if(!e.isEmptyObject(n)&&!this.isDisabled(t)){var s=n.options.commands;s[a]&&s[a].enabled.apply(t,[n])&&s[a].action.apply(t,[n])}},showMonth:function(t,n,s,o){var i=this._getInst(t);if(!e.isEmptyObject(i)&&(null!=o||i.drawDate.getFullYear()!==n||i.drawDate.getMonth()+1!==s)){i.prevDate=a.newDate(i.drawDate);var r=this._checkMinMax(null!=n?a.newDate(n,s,1):a.today(),i);i.drawDate=a.newDate(r.getFullYear(),r.getMonth()+1,null!=o?o:Math.min(i.drawDate.getDate(),a.daysInMonth(r.getFullYear(),r.getMonth()+1))),this._update(t)}},changeMonth:function(t,n){var s=this._getInst(t);if(!e.isEmptyObject(s)){var o=a.add(a.newDate(s.drawDate),n,"m");this.showMonth(t,o.getFullYear(),o.getMonth()+1)}},changeDay:function(t,n){var s=this._getInst(t);if(!e.isEmptyObject(s)){var o=a.add(a.newDate(s.drawDate),n,"d");this.showMonth(t,o.getFullYear(),o.getMonth()+1,o.getDate())}},_checkMinMax:function(e,t){var n=t.get("minDate"),s=t.get("maxDate");return e=n&&e.getTime()<n.getTime()?a.newDate(n):e,e=s&&e.getTime()>s.getTime()?a.newDate(s):e},retrieveDate:function(t,a){var n=this._getInst(t);return e.isEmptyObject(n)?null:this._normaliseDate(new Date(parseInt(a.className.replace(/^.*dp(-?\d+).*$/,"$1"),10)))},selectDate:function(t,n){var s=this._getInst(t);if(!e.isEmptyObject(s)&&!this.isDisabled(t)){var o=this.retrieveDate(t,n);if(s.options.multiSelect){for(var i=!1,r=0;r<s.selectedDates.length;r++)if(o.getTime()===s.selectedDates[r].getTime()){s.selectedDates.splice(r,1),i=!0;break}!i&&s.selectedDates.length<s.options.multiSelect&&s.selectedDates.push(o)}else s.options.rangeSelect?(s.pickingRange?s.selectedDates[1]=o:s.selectedDates=[o,o],s.pickingRange=!s.pickingRange):s.selectedDates=[o];s.prevDate=a.newDate(o),this._updateInput(t),s.inline||s.pickingRange||s.selectedDates.length<(s.options.multiSelect||(s.options.rangeSelect?2:1))?this._update(t):this.hide(t)}},_generateContent:function(t,n){var s=n.options.monthsToShow;s=e.isArray(s)?s:[1,s],n.drawDate=this._checkMinMax(n.drawDate||n.get("defaultDate")||a.today(),n);for(var o=a._applyMonthsOffset(a.newDate(n.drawDate),n),i="",r=0;r<s[0];r++){for(var l="",d=0;d<s[1];d++)l+=this._generateMonth(t,n,o.getFullYear(),o.getMonth()+1,n.options.renderer,0===r&&0===d),a.add(o,1,"m");i+=this._prepare(n.options.renderer.monthRow,n).replace(/\{months\}/,l)}var c=this._prepare(n.options.renderer.picker,n).replace(/\{months\}/,i).replace(/\{weekHeader\}/g,this._generateDayHeaders(n,n.options.renderer)),h=function(e,s,o,i,r){if(-1!==c.indexOf("{"+e+":"+i+"}")){var l=n.options.commands[i],d=n.options.commandsAsDateFormat?l.date.apply(t,[n]):null;c=c.replace(new RegExp("\\{"+e+":"+i+"\\}","g"),"<"+s+(l.status?' title="'+n.options[l.status]+'"':"")+' class="'+n.options.renderer.commandClass+" "+n.options.renderer.commandClass+"-"+i+" "+r+(l.enabled(n)?"":" "+n.options.renderer.disabledClass)+'">'+(d?a.formatDate(n.options[l.text],d,n.getConfig()):n.options[l.text])+"</"+o+">")}};for(var u in n.options.commands)h("button",'button type="button"',"button",u,n.options.renderer.commandButtonClass),h("link",'a href="javascript:void(0)"',"a",u,n.options.renderer.commandLinkClass);if(c=e(c),s[1]>1){var p=0;e(n.options.renderer.monthSelector,c).each(function(){var t=++p%s[1];e(this).addClass(1===t?"first":0===t?"last":"")})}var f=this;c.find(n.options.renderer.daySelector+" a").hover(function(){e(this).addClass(n.options.renderer.highlightedClass)},function(){(n.inline?e(this).closest("."+f._getMarker()):n.div).find(n.options.renderer.daySelector+" a").removeClass(n.options.renderer.highlightedClass)}).click(function(){f.selectDate(t,this)}).end().find("select."+this._monthYearClass+":not(."+this._anyYearClass+")").change(function(){var a=e(this).val().split("/");f.showMonth(t,parseInt(a[1],10),parseInt(a[0],10))}).end().find("select."+this._anyYearClass).click(function(){e(this).css("visibility","hidden").next("input").css({left:this.offsetLeft,top:this.offsetTop,width:this.offsetWidth,height:this.offsetHeight}).show().focus()}).end().find("input."+f._monthYearClass).change(function(){try{var a=parseInt(e(this).val(),10);a=isNaN(a)?n.drawDate.getFullYear():a,f.showMonth(t,a,n.drawDate.getMonth()+1,n.drawDate.getDate())}catch(s){alert(s)}}).keydown(function(t){13===t.keyCode?e(t.elem).change():27===t.keyCode&&(e(t.elem).hide().prev("select").css("visibility","visible"),n.elem.focus())}),c.find("."+n.options.renderer.commandClass).click(function(){if(!e(this).hasClass(n.options.renderer.disabledClass)){var s=this.className.replace(new RegExp("^.*"+n.options.renderer.commandClass+"-([^ ]+).*$"),"$1");a.performAction(t,s)}}),n.options.isRTL&&c.addClass(n.options.renderer.rtlClass),s[0]*s[1]>1&&c.addClass(n.options.renderer.multiClass),n.options.pickerClass&&c.addClass(n.options.pickerClass),e("body").append(c);var m=0;return c.find(n.options.renderer.monthSelector).each(function(){m+=e(this).outerWidth()}),c.width(m/s[0]),e.isFunction(n.options.onShow)&&n.options.onShow.apply(t,[c,n]),c},_generateMonth:function(t,n,s,o,i,r){var l=a.daysInMonth(s,o),d=n.options.monthsToShow;d=e.isArray(d)?d:[1,d];var c=n.options.fixedWeeks||d[0]*d[1]>1,h=n.options.firstDay,u=(a.newDate(s,o,1).getDay()-h+7)%7,p=c?6:Math.ceil((u+l)/7),f=n.options.selectOtherMonths&&n.options.showOtherMonths,m=n.pickingRange?n.selectedDates[0]:n.get("minDate"),g=n.get("maxDate"),y=i.week.indexOf("{weekOfYear}")>-1,D=a.today(),v=a.newDate(s,o,1);a.add(v,-u-(c&&v.getDay()===h?7:0),"d");for(var w=v.getTime(),k="",_=0;p>_;_++){for(var C=y?'<span class="dp'+w+'">'+(e.isFunction(n.options.calculateWeek)?n.options.calculateWeek(v):0)+"</span>":"",M="",b=0;7>b;b++){var S=!1;if(n.options.rangeSelect&&n.selectedDates.length>0)S=v.getTime()>=n.selectedDates[0]&&v.getTime()<=n.selectedDates[1];else for(var T=0;T<n.selectedDates.length;T++)if(n.selectedDates[T].getTime()===v.getTime()){S=!0;break}var x=e.isFunction(n.options.onDate)?n.options.onDate.apply(t,[v,v.getMonth()+1===o]):{},O=(f||v.getMonth()+1===o)&&this._isSelectable(t,v,x.selectable,m,g);M+=this._prepare(i.day,n).replace(/\{day\}/g,(O?'<a href="javascript:void(0)"':"<span")+' class="dp'+w+" "+(x.dateClass||"")+(S&&(f||v.getMonth()+1===o)?" "+i.selectedClass:"")+(O?" "+i.defaultClass:"")+((v.getDay()||7)<6?"":" "+i.weekendClass)+(v.getMonth()+1===o?"":" "+i.otherMonthClass)+(v.getTime()===D.getTime()&&v.getMonth()+1===o?" "+i.todayClass:"")+(v.getTime()===n.drawDate.getTime()&&v.getMonth()+1===o?" "+i.highlightedClass:"")+'"'+(x.title||n.options.dayStatus&&O?' title="'+(x.title||a.formatDate(n.options.dayStatus,v,n.getConfig()))+'"':"")+">"+(n.options.showOtherMonths||v.getMonth()+1===o?x.content||v.getDate():"&nbsp;")+(O?"</a>":"</span>")),
a.add(v,1,"d"),w=v.getTime()}k+=this._prepare(i.week,n).replace(/\{days\}/g,M).replace(/\{weekOfYear\}/g,C)}var F=this._prepare(i.month,n).match(/\{monthHeader(:[^\}]+)?\}/);F=F[0].length<=13?"MM yyyy":F[0].substring(13,F[0].length-1),F=r?this._generateMonthSelection(n,s,o,m,g,F,i):a.formatDate(F,a.newDate(s,o,1),n.getConfig());var I=this._prepare(i.weekHeader,n).replace(/\{days\}/g,this._generateDayHeaders(n,i));return this._prepare(i.month,n).replace(/\{monthHeader(:[^\}]+)?\}/g,F).replace(/\{weekHeader\}/g,I).replace(/\{weeks\}/g,k)},_generateDayHeaders:function(e,t){for(var a="",n=0;7>n;n++){var s=(n+e.options.firstDay)%7;a+=this._prepare(t.dayHeader,e).replace(/\{day\}/g,'<span class="'+this._curDoWClass+s+'" title="'+e.options.dayNames[s]+'">'+e.options.dayNamesMin[s]+"</span>")}return a},_generateMonthSelection:function(e,t,n,s,o,i){if(!e.options.changeMonth)return a.formatDate(i,a.newDate(t,n,1),e.getConfig());for(var r=e.options["monthNames"+(i.match(/mm/i)?"":"Short")],l=i.replace(/m+/i,"\\x2E").replace(/y+/i,"\\x2F"),d='<select class="'+this._monthYearClass+'" title="'+e.options.monthStatus+'">',c=1;12>=c;c++)(!s||a.newDate(t,c,a.daysInMonth(t,c)).getTime()>=s.getTime())&&(!o||a.newDate(t,c,1).getTime()<=o.getTime())&&(d+='<option value="'+c+"/"+t+'"'+(n===c?' selected="selected"':"")+">"+r[c-1]+"</option>");d+="</select>",l=l.replace(/\\x2E/,d);var h=e.options.yearRange;if("any"===h)d='<select class="'+this._monthYearClass+" "+this._anyYearClass+'" title="'+e.options.yearStatus+'"><option>'+t+'</option></select><input class="'+this._monthYearClass+" "+this._curMonthClass+n+'" value="'+t+'">';else{h=h.split(":");var u=a.today().getFullYear(),p=h[0].match("c[+-].*")?t+parseInt(h[0].substring(1),10):(h[0].match("[+-].*")?u:0)+parseInt(h[0],10),f=h[1].match("c[+-].*")?t+parseInt(h[1].substring(1),10):(h[1].match("[+-].*")?u:0)+parseInt(h[1],10);d='<select class="'+this._monthYearClass+'" title="'+e.options.yearStatus+'">',p=a.add(a.newDate(p+1,1,1),-1,"d"),f=a.newDate(f,1,1);var m=function(e){0!==e&&(d+='<option value="'+n+"/"+e+'"'+(t===e?' selected="selected"':"")+">"+e+"</option>")};if(p.getTime()<f.getTime()){p=(s&&s.getTime()>p.getTime()?s:p).getFullYear(),f=(o&&o.getTime()<f.getTime()?o:f).getFullYear();for(var g=p;f>=g;g++)m(g)}else{p=(o&&o.getTime()<p.getTime()?o:p).getFullYear(),f=(s&&s.getTime()>f.getTime()?s:f).getFullYear();for(var g=p;g>=f;g--)m(g)}d+="</select>"}return l=l.replace(/\\x2F/,d)},_prepare:function(e,t){var a=function(t,a){for(;;){var n=e.indexOf("{"+t+":start}");if(-1===n)return;var s=e.substring(n).indexOf("{"+t+":end}");s>-1&&(e=e.substring(0,n)+(a?e.substr(n+t.length+8,s-t.length-8):"")+e.substring(n+s+t.length+6))}};a("inline",t.inline),a("popup",!t.inline);for(var n=/\{l10n:([^\}]+)\}/,s=null;s=n.exec(e);)e=e.replace(s[0],t.options[s[1]]);return e}});var a=e.datepick;e(function(){e(document).on("mousedown."+t,a._checkExternalClick).on("resize."+t,function(){a.hide(a.curInst)})})}(jQuery)},function(module,exports){"use strict";!function(){var e=!1;window.JQClass=function(){},JQClass.classes={},JQClass.extend=function t(a){function n(){!e&&this._init&&this._init.apply(this,arguments)}var s=this.prototype;e=!0;var o=new this;e=!1;for(var i in a)o[i]="function"==typeof a[i]&&"function"==typeof s[i]?function(e,t){return function(){var a=this._super;this._super=function(t){return s[e].apply(this,t||[])};var n=t.apply(this,arguments);return this._super=a,n}}(i,a[i]):a[i];return n.prototype=o,n.prototype.constructor=n,n.extend=t,n}}(),function($){function camelCase(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}JQClass.classes.JQPlugin=JQClass.extend({name:"plugin",defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return"is-"+this.name},_init:function(){$.extend(this.defaultOptions,this.regionalOptions&&this.regionalOptions[""]||{});var e=camelCase(this.name);$[e]=this,$.fn[e]=function(t){var a=Array.prototype.slice.call(arguments,1);return $[e]._isNotChained(t,a)?$[e][t].apply($[e],[this[0]].concat(a)):this.each(function(){if("string"==typeof t){if("_"===t[0]||!$[e][t])throw"Unknown method: "+t;$[e][t].apply($[e],[this].concat(a))}else $[e]._attach(this,t)})}},setDefaults:function(e){$.extend(this.defaultOptions,e||{})},_isNotChained:function(e,t){return"option"===e&&(0===t.length||1===t.length&&"string"==typeof t[0])?!0:$.inArray(e,this._getters)>-1},_attach:function(e,t){if(e=$(e),!e.hasClass(this._getMarker())){e.addClass(this._getMarker()),t=$.extend({},this.defaultOptions,this._getMetadata(e),t||{});var a=$.extend({name:this.name,elem:e,options:t},this._instSettings(e,t));e.data(this.name,a),this._postAttach(e,a),this.option(e,t)}},_instSettings:function(e,t){return{}},_postAttach:function(e,t){},_getMetadata:function _getMetadata(elem){try{var data=elem.data(this.name.toLowerCase())||"";data=data.replace(/'/g,'"'),data=data.replace(/([a-zA-Z0-9]+):/g,function(e,t,a){var n=data.substring(0,a).match(/"/g);return n&&n.length%2!==0?t+":":'"'+t+'":'}),data=$.parseJSON("{"+data+"}");for(var name in data){var value=data[name];"string"==typeof value&&value.match(/^new Date\((.*)\)$/)&&(data[name]=eval(value))}return data}catch(e){return{}}},_getInst:function(e){return $(e).data(this.name)||{}},option:function(e,t,a){e=$(e);var n=e.data(this.name);if(!t||"string"==typeof t&&null==a){var s=(n||{}).options;return s&&t?s[t]:s}if(e.hasClass(this._getMarker())){var s=t||{};"string"==typeof t&&(s={},s[t]=a),this._optionsChanged(e,n,s),$.extend(n.options,s)}},_optionsChanged:function(e,t,a){},destroy:function(e){e=$(e),e.hasClass(this._getMarker())&&(this._preDestroy(e,this._getInst(e)),e.removeData(this.name).removeClass(this._getMarker()))},_preDestroy:function(e,t){}}),$.JQPlugin={createPlugin:function(e,t){"object"==typeof e&&(t=e,e="JQPlugin"),e=camelCase(e);var a=camelCase(t.name);JQClass.classes[a]=JQClass.classes[e].extend(t),new JQClass.classes[a]}}}(jQuery)},function(e,t){},function(e,t){}]);