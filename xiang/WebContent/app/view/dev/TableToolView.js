Ext.define('Xiang.view.dev.TableToolView', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.dev_TableTool',
	layout : 'fit',
	id : 'dev_TableTool',

	initComponent : function() {

		Ext.apply(this, {
			dockedItems : [ {
				xtype : 'toolbar',
				dock : 'top',
				items : [ {
					xtype : 'button',
					itemId : 'tableType',
					text : 'Table Type',
					menu : {
						itemId : 'tableTypeMenu',
						items : [ {
							xtype : 'menucheckitem',
							itemId : 'table',
							text : 'TABLE',
							checkHandler: this.onItemCheck
						}, {
							xtype : 'menucheckitem',
							itemId : 'view',
							text : 'VIEW',
							checkHandler: this.onItemCheck
						}, {
							xtype : 'menucheckitem',
							itemId : 'systemTable',
							text : 'SYSTEM TABLE',
							checkHandler: this.onItemCheck
						}, {
							xtype : 'menucheckitem',
							itemId : 'globalTemporary',
							text : 'GLOBAL TEMPORARY',
							checkHandler: this.onItemCheck
						}, {
							xtype : 'menucheckitem',
							itemId : 'localTemporary',
							text : 'LOCAL TEMPORARY',
							checkHandler: this.onItemCheck
						}, {
							xtype : 'menucheckitem',
							itemId : 'alias',
							text : 'ALIAS',
							checkHandler: this.onItemCheck
						}, {
							xtype : 'menucheckitem',
							itemId : 'synonym',
							text : 'SYNONYM',
							checkHandler: this.onItemCheck
						} ]
					}
				}, {
					xtype : 'textfield',
					name : 'catalog',
					fieldLabel : 'Catalog',
					labelWidth : 50,
					width : 155,
					margin : '0 0 0 10'
				}, {
					xtype : 'textfield',
					name : 'schemaPattern',
					fieldLabel : 'Schema Pattern',
					labelWidth : 100,
					width : 205,
					margin : '0 0 0 10'
				}, {
					xtype : 'textfield',
					name : 'tableNamePattern',
					fieldLabel : 'TableName Pattern',
					labelWidth : 120,
					width : 225,
					margin : '0 0 0 10'
				} ]
			} ]

		});

		this.callParent(arguments);
	},
	
	onItemCheck: function( self, checked, eOpts ) {
		var t;
	}

});