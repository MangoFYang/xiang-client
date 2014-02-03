Ext.define('Xiang.store.demo.abc.FooStore', {
	extend : 'Ext.data.Store',
	storeId: 'demo.abc.FooStore',

	fields:['name', 'email', 'phone'],
	
	autoLoad : true,
    proxy: {
        type: 'ajax',
        url : Xiang.api('demo.abc.Foo', 'list').url,
        reader: {
            type: 'json',
            root: 'items'
        }
    }

});