Ext.define('Xiang.view.demo.abc.FooView', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.FooView',
    
    requires:[
	    'Xiang.view.demo.abc.FooView_maint'
	],
    
    layout: 'vbox',
    
    bodyCls: 'x-border-layout-ct',
    
    FooView_maint: null,
    
    initComponent: function() {
    	var me = this;
    	
    	this.items = [ {
    		itemId: 'FooGrid',
    		flex: 1,
    		xtype: 'gridpanel',
    	    title: 'Foo',
    	    store: 'demo.abc.FooStore',
    	    columns: [
    	        { text: 'Id',  dataIndex: 'id' },
    	        { text: 'IntField', dataIndex: 'intField' },
    	        { text: 'DoubleField', dataIndex: 'doubleField' },
    	        { text: 'IntegerField', dataIndex: 'integerField' },
    	        { text: 'DoubleBoxField', dataIndex: 'doubleBoxField' },
    	        { text: 'StringField', dataIndex: 'stringField' },
    	        { text: 'DateField', dataIndex: 'dateField', xtype:'datecolumn', format:'Y-m-d' },
    	        { text: 'BigDecimalField', dataIndex: 'bigDecimalField' }
    	    ],
    	    width: '100%',
			forceFit: true,
			header: false,
			bbar: {
                xtype: 'pagingtoolbar',
                store: 'demo.abc.FooStore',
                displayInfo: true
            }
    	} ];
    	
    	this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                text: 'show',
                handler: function() {
                	if(!me.FooView_maint) {
                		me.FooView_maint = Ext.widget('FooView_maint', {
                			renderTo: me.getEl()
                		});
                	}
                	me.FooView_maint.s();
                }
            }, {
                text: 'hide',
                handler: function() {
                	if(me.FooView_maint) {
                		me.FooView_maint.h();
                	}
                }
            }]
        }];

        this.callParent(arguments);
    	
    }
    	
});