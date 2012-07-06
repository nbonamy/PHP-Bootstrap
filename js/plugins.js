
// window log
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

(function( $ ) {
  
  // mustache rendering
  $.fn.render = function(data) {
    return $.render(this.html(), data);
  };
  
  // mustache rendering
  $.render = function(tmpl, data) {
    return Mustache.render(tmpl, data);
  };
  
  // check
  $.fn.check = function() {
    return this.attr('checked', true);
  };
  $.fn.uncheck = function() {
    return this.attr('checked', false);
  };  
		
})( jQuery );

