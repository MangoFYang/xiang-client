Ext.define('Xiang.controller.ViewportController', {
	extend : 'Ext.app.Controller',

	stores : [ 'NavigatorStore' ],

	views : [ 'ViewerView', 'NavigatorView' ],

	refs : [ {
		ref : 'navigator',
		selector : 'navigator'
	}, {
		ref : 'viewer',
		selector : 'viewer'
	} ],

	init : function() {
		this.control({
			'navigator' : {
				itemclick : this.addTab
			}
		});
	},

	addTab : function(self, record, index, eOpts) {
		if (record.data.leaf) {
			var viewer = this.getViewer();
			var tab = viewer.getComponent(record.data.text);
			if (!tab) {
				var viewName = record.data.viewName;
				if( viewName && viewName != '' ) {
					this.addController( record.data.viewName + 'Controller');
				}
				var viewName = "Xiang.view."
					+ (record.data.viewName || "Default") + 'View';
				tab = Ext.create(viewName, {
					title : record.data.text,
					itemId : record.data.text,
					closable : true
				});
				viewer.add(tab);
			}
			viewer.setActiveTab(tab);
		}
	},

	addController : function(controller) {
		this.application.getController(controller);
	}

});