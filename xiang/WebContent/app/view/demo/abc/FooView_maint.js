Ext.define('Xiang.view.demo.abc.FooView_maint', {
    extend: 'Xiang.view.widget.DockedPanel',
    
    alias: 'widget.FooView_maint',
    
    layout: 'accordion',
    defaults: {
        bodyPadding: 10
    },
    
    initComponent: function(config) {
    	var me = this,
    		required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
    	
    	Ext.apply(me, config, {
        	title: 'Foo',
            width: 390,
            items: [ {
            	title: '查询',
            	
            	itemId: 'searchForm'
            }, {
            	title: '详细信息',
            	
            	itemId: 'detailForm'
            }, me._initAddForm( required ), {
            	title: '修改',
            	
            	itemId: 'amendForm'
            } ]
        });
    	
    	this.callParent(arguments);
    },
    
    _initAddForm: function( required ) {
    	// var me = this;
    	return {
        	title: '添加',
    		
    		itemId: 'addForm',
    		xtype: 'form',
    		body: false,
    		width: '100%',
    		// Fields will be arranged vertically, stretched to full width
    	    layout: 'anchor',
    	    defaultType: 'textfield',
    	    defaults: {
    	        anchor: '100%'
    	    },
    	    fieldDefaults: {
    	        labelAlign: 'left',
    	        labelWidth: 150
    	    },
    		
            items: [ {
                fieldLabel: 'Int Field',
                name: 'intField',
                afterLabelTextTpl: required,
                allowBlank: false
            }, {
                fieldLabel: 'Double Field',
                name: 'doubleField',
                afterLabelTextTpl: required,
                allowBlank: false
            }, {
                fieldLabel: 'Integer Field',
                name: 'integerField'
            }, {
                fieldLabel: 'Double Box Field',
                name: 'doubleBoxField',
                afterLabelTextTpl: required,
                allowBlank: false,
                vtype:'email'
            }, {
                fieldLabel: 'String Field',
                name: 'stringField',
                afterLabelTextTpl: required,
                allowBlank: false
            }, {
                fieldLabel: 'Big Decimal Field',
                name: 'bigDecimalField',
                afterLabelTextTpl: required,
                allowBlank: false
            }, {
            	xtype: 'datefield',
                fieldLabel: 'Date Field',
                name: 'dateField',
                afterLabelTextTpl: required,
                allowBlank: false
            } ],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                layout: { pack: 'center' },
                border: 0,
                items: [{
                    text: '保存',
                    action: 'addForm_save'
                }, {
                    text: '重置',
                    action: 'addForm_reset'
                }]
            }]
        };
    }
    
});