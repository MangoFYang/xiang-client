Ext.define('Xiang.view.demo.abc.FooView', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.FooView',
    
    layout: 'fit',
    
    bodyCls: 'x-border-layout-ct',
    
    FooView_maint: null,
    
    initComponent: function() {
    	var me = this;
    	
    	this.items = [ {
    		itemId: 'FooGrid',
    		
    		xtype: 'gridpanel',
    		border: 0,
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
			dockedItems: [{
				dock: 'bottom',
				border: 0,
				
                xtype: 'pagingtoolbar',
                store: 'demo.abc.FooStore',
                displayInfo: true,
                listeners: {
                	beforerender: function( pagingtoolbar, eOpts ) {
                		pagingtoolbar.insert( 0, me._createManageButton());
                	}
                }
            }]
    	} ];
    	
    	this.dockedItems = [{
    		dock: 'top',
    		
            xtype: 'toolbar',
            items: [me._createManageButton()]
        }];

        this.callParent(arguments);
    	
    },
    
    _createManageButton: function() {
    	var me = this;
    	return {
        	xtype: 'splitbutton',
            text: '管理',
            menu: {
            	items: [{
            		text: '查询',
            		handler: me.searchFoo
                }, {
                	text: '详细信息',
                	handler: me.detailFoo
                }, {
                	text: '添加',
                	handler: me.addFoo
                }, {
                	text: '修改',
                	handler: me.amendFoo
                }, {
                	text: '删除',
                	handler: me.delFoo
                }],
            },
            handler: function() {
            	if(!me.FooView_maint) {
            		me.FooView_maint = Ext.widget('FooView_maint', {
            			renderTo: me.getEl()
            		});
            	}
            	me.FooView_maint.s();
            }
        };
    },
    
    searchFoo: function() {
    	console.log("searchFoo");
    },
    
    detailFoo: function() {
    	console.log("detailFoo");
    },
    
    addFoo: function() {
    	console.log("addFoo");
    },
    
    amendFoo: function() {
    	console.log("amendFoo");
    },
    
    delFoo: function() {
    	console.log("delFoo");
    }
    	
});