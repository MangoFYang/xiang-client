Ext.Loader.setConfig({
	enabled : true,
	disableCaching: false
});
Ext.Loader.setPath('Ext.ux', 'lib/extjs/ux');

Ext.application({
	requires : [ 'Xiang.config.Global' ],
	name : 'Xiang',
	appFolder : 'app',
	controllers : [ 'ViewportController' ],
	autoCreateViewport : true,
	launch : function() {
		// Ext.create('Xiang.view.workingcalendar.TypeEdit').show();

	}
});