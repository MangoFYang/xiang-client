Ext.define('Xiang.view.demo.abc.FooView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.demo_abc_Foo',
    layout: 'fit',
    
    initComponent: function() {
    	this.items = {
    		itemId: 'FooGrid',
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
    	};
    	
        this.callParent(arguments);
    }
    	
});