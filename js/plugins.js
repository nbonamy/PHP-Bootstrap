
// window log
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

// define some globals for alerts
$.alertGlobals = {
	title: null,
	fade: false,
	confirm: 'OK',
	dismiss: 'Cancel'
};

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
  
  // show alert
  // msg: can be a text or a jquery selector
  // opts:
  //   title:     title of modal
  //   fade:      fade modal on show/hide
  //	 confirm:   label of confirm button
  //   dismiss:   label of dismiss button
  //   noDismiss: force that no dismiss button is displayed
  //   onDismiss: function called when modal is dismissed
  //   onConfirm: function called when modal is confirmed
  $.alert = function(msg, opts) {
  	
  	// defaults
  	var settings = {
  		title: $.alertGlobals.title,
  		fade: $.alertGlobals.fade,
  		confirm: $.alertGlobals.confirm,
  		dismiss: $.alertGlobals.cancel,
  		noDismiss: false,
  		onDismiss: null,
  		onConfirm: null
  	};
  	
  	// take care of opts
  	if (typeof(opts) == 'function') {
  		
  		// simple opts with onConfirm only
  		opts = {
  				onConfirm: opts
  		};
  		
  	} else if (opts == null) {
  		opts = {};
  	}

		// now merge
		settings = $.extend(settings, opts);

		// by default confirm dismisses
		var showDismiss = true;
		if (settings.onConfirm == null) {
			showDismiss = false;
			settings.onConfirm = function() {
				modal.modal('hide');
			};
		}
		
  	// build markup
  	var modal = $('<div class="modal"></div>');
  	if (settings.fade === true) {
  		modal.addClass('fade');
  	}
  	
  	// is show dismiss overridden?
  	showDismiss = (showDismiss && settings.noDismiss != true);

  	// header
  	if (settings.title != null) {
  		var header = $('<div class="modal-header"></div>');
  		if (showDismiss) {
  			header.append('<button type="button" class="close" data-dismiss="modal">×</button>');
  		}
  		header.append('<h3>'+settings.title+'</h3>');
  		modal.append(header);
  	}
  	
  	// add buttons in footer
  	var footer = $('<div class="modal-footer"></div>');
  	if (showDismiss) {
	  	var dismiss = $('<a href="#" class="btn" data-dismiss="modal">'+settings.dismiss+'</a>');
	  	dismiss.on('click', function() {
	  		if (settings.onDismiss != null) {
	  			settings.onDismiss();
	  		}
	  	});
  	}
  	var confirm = $('<a href="#" class="btn btn-primary">'+settings.confirm+'</a>');
  	confirm.on('click', function() {
  		if (settings.onConfirm != null) {
  			if (settings.onConfirm() !== false) {
  				modal.modal('hide');
  			}
  		}
  	});
  	
  	// done with footer
  	footer.append(dismiss);
  	footer.append(confirm);

  	// body depends
  	debugger;
  	var body = $('<div class="modal-body"></div>');
  	if (typeof(msg) == 'string') {
  		body.append('<p>'+msg+'</p>');
  	} else {
  		msg.show();
  		body.append(msg);
  	}
  	
  	// tooltip on body
  	body.find('.modal-popover').popover();
  	body.find('.modal-tooltip').tooltip();
  	
  	// done
  	modal.append(body);
  	modal.append(footer);
  	modal.modal();
  	
  };
  
  // shortcut
  $.fn.alert = function(opts) {
  	$.alert(this, opts);
  	return this;
  };
		
})( jQuery );

