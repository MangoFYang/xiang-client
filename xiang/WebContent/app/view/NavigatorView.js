Ext.define('Xiang.view.NavigatorView', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.navigator',

	layout : 'fit',
	useArrows : true,
	store : 'NavigatorStore',
	rootVisible : true

});