Ext.define('Xiang.store.NavigatorStore', {
	extend : 'Ext.data.TreeStore',
	model : 'Xiang.model.Navigator',

	autoLoad : true,
	root : {
		expanded : true
	},
	nodeParam : 'node',
	defaultRootId : 'root',
	defaultRootText : 'Xiang',
	defaultRootProperty : 'children',
	proxy : {
		type : 'ajax',
		url : Xiang.api('Navigator', 'tree').url,
		reader : {
			type : 'json'
		}
	}

});