Ext.define('Xiang.model.Navigator', {
	extend : 'Ext.data.TreeModel',

	idProperty : 'id',
	fields : [ {
		name : 'id',
		type : 'string',
		mapping : 'value'
	}, {
		name : 'text',
		type : 'string',
		mapping : 'label'
	}, {
		name : 'viewName',
		type : 'string'
	}, {
		name : 'expanded',
		type : 'boolean'
	}, ]

});