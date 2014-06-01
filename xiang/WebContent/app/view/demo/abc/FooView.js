Ext.define('Xiang.view.demo.abc.FooView', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.FooView',
    
    layout: 'fit',
    
    bodyCls: 'x-border-layout-ct',
    
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
    		itemId : 'TopDock',
    		dock: 'top',
    		
            xtype: 'toolbar',
            items: [me._createManageButton(), {
            	itemId : 'SearchForm',
            	xtype: 'form',
            	layout: 'hbox',
            	border: 0,
            	defaults: { 
            		// defaults are applied to items, not the container
            		margin : '0 0 0 10'
            	},
            	items: [ {
                	xtype: 'textfield',
                    fieldLabel: 'String Field',
                    labelWidth: 80,
                    width: 200,
                    name: 'stringField'
                }, {
                	xtype: 'datefield',
                    fieldLabel: 'Form Date',
                    labelWidth: 80,
                    width: 200,
                    name: 'fromDate'
                }, {
                	xtype: 'datefield',
                    fieldLabel: 'To Date',
                    labelWidth: 80,
                    width: 200,
                    name: 'toDate'
                } ]
            }, {
            	xtype: 'button',
            	text: '查询',
            	action: 'searchForm_search'
            },{
            	xtype: 'button',
            	text: '重置',
            	action: 'searchForm_reset'
            }]
        }];

        this.callParent(arguments);
    },
    
    _createManageButton: function() {
    	return {
        	xtype: 'splitbutton',
            text: '管理',
            action: 'manage',
            menu: {
            	items: [{
            		text: '查询',
            		action: 'search'
                }, {
                	text: '详细信息',
                	action: 'detail'
                }, {
                	text: '添加',
                	action: 'add'
                }, {
                	text: '修改',
                	action: 'amend'
                }, {
                	text: '删除',
                	action: 'del'
                }],
            }
        };
    }
    	
});