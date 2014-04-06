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
			var viewer = this.getViewer(), 
				viewName = record.data.viewName;
			var tab = viewer.getComponent(viewName);
			if (!tab) {
				if( viewName && viewName != '' ) {
					this.addController( viewName + 'Controller');
				}
				var viewFullName = "Xiang.view." + (viewName || "Default") + 'View';
				tab = Ext.create(viewFullName, {
					title : record.data.text,
					id : viewName,
					itemId : viewName,
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