Ext.define('Xiang.view.demo.abc.FooView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.demo_abc_Foo',
    layout: 'vbox',
    
    bodyCls: 'x-border-layout-ct',
    
    initComponent: function() {
    	
    	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
    	
    	this.items = [ {
    		itemId: 'FooGrid',
    		flex: 1,
    		xtype: 'gridpanel',
    	    title: 'Foo',
    	    store: 'demo.abc.FooStore',
    	    columns: [
    	        { text: 'Id',  dataIndex: 'id' },
    	        { text: 'IntField', dataIndex: 'intField' },
    	        { text: 'DoubleField', dataIndex: 'doubleField' },
    	        { text: 'IntegerField', dataIndex: 'integerField' },
    	        { text: 'DoubleBoxField', dataIndex: 'doubleBoxField' },
    	        { text: 'StringField', dataIndex: 'stringField' },
    	        { text: 'DateField', dataIndex: 'dateField', xtype:'datecolumn', format:'Y-m-d' },
    	        { text: 'BigDecimalField', dataIndex: 'bigDecimalField' }
    	    ],
    	    width: '100%',
			forceFit: true,
			header: false,
			bbar: {
                xtype: 'pagingtoolbar',
                store: 'demo.abc.FooStore',
                displayInfo: true
            }
    	}, {
    		xtype: 'splitter'
    	}, {
    		itemId: 'FooForm',
    		flex: 2,
            xtype: 'form',
            bodyPadding: 5,
            width: '100%',
            fieldDefaults: {
                labelAlign: 'top',
                msgTarget: 'side'
            },
            defaults: {
                anchor: '100%'
            },

            items: [{
                xtype: 'container',
                layout:'hbox',
                items:[{
                    xtype: 'container',
                    flex: 1,
                    border:false,
                    layout: 'anchor',
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'First Name',
                        afterLabelTextTpl: required,
                        allowBlank: false,
                        name: 'first',
                        anchor:'95%'
                    }, {
                        fieldLabel: 'Company',
                        name: 'company',
                        anchor:'95%'
                    }]
                },{
                    xtype: 'container',
                    flex: 1,
                    layout: 'anchor',
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Last Name',
                        afterLabelTextTpl: required,
                        allowBlank: false,
                        name: 'last',
                        anchor:'95%'
                    },{
                        fieldLabel: 'Email',
                        afterLabelTextTpl: required,
                        allowBlank: false,
                        name: 'email',
                        vtype:'email',
                        anchor:'95%'
                    }]
                }]
            },{
                xtype:'tabpanel',
                plain:true,
                activeTab: 0,
                defaults:{
                    bodyPadding: 10
                },
                items:[{
                    title:'Personal Details',
                    defaults: {
                        width: 230
                    },
                    defaultType: 'textfield',

                    items: [{
                        fieldLabel: 'First Name',
                        name: 'first',
                        value: 'Jamie'
                    },{
                        fieldLabel: 'Last Name',
                        name: 'last',
                        value: 'Avins'
                    },{
                        fieldLabel: 'Company',
                        name: 'company',
                        value: 'Ext JS'
                    }, {
                        fieldLabel: 'Email',
                        name: 'email',
                        vtype:'email'
                    }]
                },{
                    title:'Phone Numbers',
                    defaults: {
                        width: 230
                    },
                    defaultType: 'textfield',

                    items: [{
                        fieldLabel: 'Home',
                        name: 'home',
                        value: '(888) 555-1212'
                    },{
                        fieldLabel: 'Business',
                        name: 'business'
                    },{
                        fieldLabel: 'Mobile',
                        name: 'mobile'
                    },{
                        fieldLabel: 'Fax',
                        name: 'fax'
                    }]
                },{
                    cls: 'x-plain',
                    title: 'Biography',
                    layout: 'fit',
                    items: {
                        xtype: 'htmleditor',
                        name: 'bio2',
                        fieldLabel: 'Biography'
                    }
                }]
            }],

            buttons: [{
                text: 'Save',
                handler: function() {
                    this.up('form').getForm().isValid();
                }
            },{
                text: 'Cancel',
                handler: function() {
                    this.up('form').getForm().reset();
                }
            }]
        } ];
    	
        this.callParent(arguments);
    }
    	
});