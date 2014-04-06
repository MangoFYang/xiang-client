Ext.define('Xiang.view.widget.DockedPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.dockedpanel',
    
    isInited: false,
    canSlideIn: true, 
    
    initComponent: function(config) {
    	var me = this;
    	Ext.apply(me, config, {
    		floating: true,
        	height: '100%',
        	shadow: false,
        	tools: [{
        	    type:'right',
        	    tooltip: '隐藏',
        	    handler: function(event, toolEl, panelHeader) {
        	    	me.h();
        	    }
        	}]
    	});
    	
    	this.callParent(arguments);
    },
    
    s: function() {
    	var me = this;
    	if(!me.isInited) {
    		me.getEl().setOpacity( 0, false );
    		me.show();
    		me.getEl().setStyle({
    			top: 0,
    			right: 0,
    			bottom: 0,
    			left: 'auto'
    		});
			me.getEl().slideOut('r', { duration: 0, listeners: {
			    afteranimate: function() {
			    	me.getEl().setOpacity( 1, false );
			    }
			} });
    		me.isInited = true;
    	} 
    	if(me.canSlideIn) {
    		me.getEl().slideIn('r', { duration: 600 });
    		me.canSlideIn = false;
    	}
    },
    
    h: function() {
    	var me = this;
    	if(!me.canSlideIn) {
    		me.getEl().slideOut('r', { duration: 600 });
    		me.canSlideIn = true;
    	}
    },
    
    isS: function() {
    	return this.canSlideIn;
    }
    
});