Ext.define('Xiang.store.demo.abc.FooStore', {
	extend : 'Ext.data.Store',
	storeId : 'demo.abc.FooStore',

	fields : [ 'id', 'intField', 'doubleField', 'integerField',
			'doubleBoxField', 'stringField', 'bigDecimalField', {
				name : 'dateField',
				type : 'date',
				dateFormat : 'time'
			} ],

	autoLoad : true,
	pageSize : 2,
	proxy : {
		type : 'ajax',
		url : Xiang.api('demo.abc.Foo', 'list').url,
		pageParam : 'page.page',
		limitParam : 'page.size',
		startParam : undefined,
		noCache : false,
		reader : {
			type : 'json',
			root : 'content',
			idProperty : 'id',
			totalProperty : 'totalElements',
		}
	}

});