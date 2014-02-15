Ext.define('Xiang.store.demo.abc.FooStore', {
	extend : 'Xiang.store.GridStore',
	model: 'Xiang.model.demo.abc.Foo',
			
	constructor : function(config) {
		config = Ext.Object.merge({
			proxy : {
				url : Xiang.api('demo.abc.Foo', 'list').url,
			}
		}, config);

		this.callParent([ config ]);
	}

});