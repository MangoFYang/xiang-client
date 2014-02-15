Ext.define('Xiang.store.GridStore', {
	extend : 'Ext.data.Store',

	constructor : function(config) {
		config = Ext.Object.merge({
			autoLoad : true,
			pageSize : 20,
			proxy : {
				type : 'ajax',
				url : undefined,
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
		}, config);

		this.callParent([ config ]);
	}

});