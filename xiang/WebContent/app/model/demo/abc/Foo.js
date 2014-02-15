Ext.define('Xiang.model.demo.abc.Foo', {
	extend : 'Ext.data.Model',

	fields : [ 'id', 'intField', 'doubleField', 'integerField',
			'doubleBoxField', 'stringField', 'bigDecimalField', {
				name : 'dateField',
				type : 'date',
				dateFormat : 'time'
			} ],

});