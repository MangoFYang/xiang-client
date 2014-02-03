Ext.define('Xiang.config.Global', {
	singleton : true,

	debug : true,

	constructor : function() {
		if (this.debug) {
			Ext.require([ 'Xiang.debug.ExtdataConnection' ]);
		}
	},

	getObj : function(path) {
		var ret = window;
		if (path) {
			var ps = path.split('.');
			for ( var p in ps) {
				ret = ret[ps[p]];
			}
		}
		return ret;
	},

	api : function(file, apiName) {
		var debug = Xiang.config.Global.debug, 
			cad = {
				'true': 'debug',
				'false': 'config'
			},
			priExp = 'Xiang.' + cad[debug] + '.apis.' + file;
		Ext.syncRequire([ priExp ]);
		var api = Xiang.config.Global.getObj(priExp + '.' + apiName);
		if (api['debug']) {
			var secExp = 'Xiang.' + cad[!debug] + '.apis.' + file;
			Ext.syncRequire([ secExp ]);
			api = Xiang.config.Global.getObj(secExp + '.' + apiName);
		}
		return api;
	}

});

Xiang.Global = Xiang.config.Global;
Xiang.api = Xiang.Global.api;
