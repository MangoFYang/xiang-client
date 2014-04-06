Ext.define('Xiang.store.GridStore', {
	extend : 'Ext.data.Store',

	constructor : function(config) {
		config = Ext.Object.merge({
			autoLoad : true,
			pageSize : 10,
			proxy : {
				type : 'ajax',
				url : undefined,
				pageParam : 'core.page',
				limitParam : 'core.size',
				startParam : undefined,
				sortParam : 'core.sorters',
				filterParam : 'core.filters',
				noCache : false,
				reader : {
					type : 'json',
					root : 'content',
					idProperty : 'id',
					totalProperty : 'totalElements'
				}
//				,encodeSorters : function(sorters) {
//					var sortStrs = [];
//					for (var i = 0; i < sorters.length; i++) {
//						var sorter = sorters[i];
//						sortStrs[i] = sorter.property + '#' + sorter.direction;
//					}
//					return sortStrs.join(",");
//				},
//				encodeFilters : function(filters) {
//					var filterStrs = [];
//					for (var i = 0; i < filters.length; i++) {
//						var filter = filters[i];
//						filterStrs[i] = filter.property + '#' + filter.value;
//					}
//					return filterStrs.join(",");
//				}
			},
			
			remoteSort : true,
			defaultSortDirection : 'ASC',
			remoteFilter : true
			
		}, config);

		this.callParent([ config ]);
	}

});