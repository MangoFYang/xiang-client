Ext.define('Xiang.controller.demo.abc.FooController', {
	extend : 'Ext.app.Controller',
    	
	stores : [ 'demo.abc.FooStore' ],

	views : [ 'demo.abc.FooView', 'demo.abc.FooView_maint' ],
	
	init : function() {
		this.control({
            'FooView #FooGrid': {
            	itemclick: this.itemclick
            },
            'FooView button[action=searchForm_search]': {
            	click: this.buttonClick
            }
        });
	},
	
	itemclick: function( self, record, item, index, e, eOpts ) {
		console.info("FooView #FooGrid -> itemclick");
	}, 
	
	buttonClick: function(  ) {
		console.info("FooView button[action=searchForm_search] -> click");
	}
    	
});