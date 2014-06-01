Ext.define('Xiang.controller.demo.abc.FooController', {
	extend : 'Ext.app.Controller',
    
	stores : [ 'demo.abc.FooStore' ],

	views : [ 'demo.abc.FooView', 'demo.abc.FooView_maint' ],
	
	refs: [ {
        ref: 'FooView',
        selector: 'FooView'
    }, {
    	ref: 'FooView_maint',
    	selector: 'FooView_maint'
    }, {
        ref: 'FooGrid',
        selector: 'FooView #FooGrid'
    } ],
	
	FooView_maint: null,
	
	init : function() {
		this.control({
            'FooView #FooGrid': {
            	itemclick: this.itemclick
            },
            'FooView button[action=searchForm_search]': {
            	click: this.onSearchForm_search
            },
            'FooView button[action=searchForm_reset]': {
            	click: this.onSearchForm_reset
            },
			'FooView splitbutton[action=manage]': {
				click: this.onManage
			},
			'FooView menuitem[action=search]': {
				click: this.onSearch
			},
			'FooView menuitem[action=detail]': {
				click: this.onDetail
			},
			'FooView menuitem[action=add]': {
				click: this.onAdd
			},
			'FooView menuitem[action=amend]': {
				click: this.onAmend
			},
			'FooView menuitem[action=del]': {
				click: this.onDel
			},
			'FooView_maint button[action=addForm_save]': {
				click: this.onAddForm_save
			},
			'FooView_maint button[action=addForm_reset]': {
				click: this.onAddForm_reset
			}
        });
	},
	
	onAddForm_save: function() {
		console.log("FooView FooView_maint button[action=addForm_save] -> click");
		 this.getFooView_maint().getComponent('addForm').getForm().isValid();
	},
	
	onAddForm_reset: function() {
		console.log("FooView FooView_maint button[action=addForm_reset] -> click");
		this.getFooView_maint().getComponent('addForm') .getForm().reset();
	},
	
    onSearch: function() {
    	console.log("FooView button[action=search] -> click");
    },
    
    onDetail: function() {
    	console.log("FooView button[action=detail] -> click");
    },
    
    onAdd: function() {
    	console.log("FooView button[action=add] -> click");
    },
    
    onAmend: function() {
    	console.log("FooView button[action=amend] -> click");
    },
    
    onDel: function() {
    	console.log("FooView button[action=del] -> click");
    },
	
	itemclick: function( self, record, item, index, e, eOpts ) {
		console.info("FooView #FooGrid -> itemclick");
	},
	
	onManage: function() {
		console.info("FooView splitbutton[action=manage] -> click");
		if(!this.FooView_maint) {
			this.FooView_maint = Ext.widget('FooView_maint', {
    			renderTo: this.getFooView().getEl()
    		});
    	}
		this.FooView_maint.s();
	},
	
	onSearchForm_search: function(  ) {
		console.info("FooView button[action=searchForm_search] -> click");
		var store = this.getFooGrid().store,
		ownerCt = this.getFooView().ownerCt, 
		filters = [];
	
		var stringField = ownerCt.down('[name=stringField]').getRawValue().trim();
		if( stringField !== '' ) {
			filters.push({
				property : 'stringField',
				value : stringField
			});
		}
		var fromDate = ownerCt.down('[name=fromDate]').getRawValue().trim();
		if( fromDate !== '' ) {
			filters.push({
				property : 'fromDate',
				value : fromDate
			});
		}
		var toDate = ownerCt.down('[name=toDate]').getRawValue().trim();
		if( toDate !== '' ) {
			filters.push({
				property : 'toDate',
				value : toDate
			});
		}
		if(filters && filters.length) {
			store.clearFilter(true);
			store.addFilter(filters);
		} else {
			store.clearFilter();
		}
	},
	
	onSearchForm_reset: function() {
		console.info("FooView button[action=searchForm_reset] -> click");
		var searchForm = this.getFooView().getDockedComponent('TopDock').getComponent('SearchForm');
		searchForm.getForm().reset();
	}
    	
});