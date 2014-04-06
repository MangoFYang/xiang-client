Ext.define('Xiang.store.demo.abc.FooStore', {
	extend : 'Xiang.store.GridStore',
	model: 'Xiang.model.demo.abc.Foo',
			
	constructor : function(config) {
		config = Ext.Object.merge({
			proxy : {
				url : Xiang.api('demo.abc.Foo', 'list').url,
			},
			sorters : [ {
				property : 'intField'
			}, {
				property : 'doubleField',
				direction : 'DESC'
			} ],
			filters : [ {
				property : 'intField',
				value : 32
			}, {
				property : 'stringField',
				value : 'bbb'
			}, {
				property : 'stringField',
				value : 'aa'
			} ]
		}, config);

		this.callParent([ config ]);
	}

});