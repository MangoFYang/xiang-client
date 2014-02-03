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
    	        { text: 'Name',  dataIndex: 'name' },
    	        { text: 'Email', dataIndex: 'email', flex: 1 },
    	        { text: 'Phone', dataIndex: 'phone' }
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