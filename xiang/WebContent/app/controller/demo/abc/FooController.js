Ext.define('Xiang.controller.demo.abc.FooController', {
	extend : 'Ext.app.Controller',
    	
	stores : [ 'demo.abc.FooStore' ],

	views : [ 'demo.abc.FooView' ],
	
	init : function() {
		this.control({
            'demo_abc_Foo #FooGrid': {
            	itemclick: this.itemclick
            }
        });
	},
	
	itemclick: function( self, record, item, index, e, eOpts ) {
		var t;
	}
    	
});