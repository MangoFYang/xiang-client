Ext.define('Xiang.debug.ExtdataConnection', {
	override: 'Ext.data.Connection',

    parseStatus: function(status) {
        
        status = status == 1223 ? 204 : status;

		// status == 0 add by Mango F Yang on 2014-01-12, 
		// I think this is success that ajax response status is 0 in local.
		// in order to read local file on debug.
        var success = (status >= 200 && status < 300) || status == 304 || status == 0,
            isException = false;

        if (!success) {
            switch (status) {
                case 12002:
                case 12029:
                case 12030:
                case 12031:
                case 12152:
                case 13030:
                    isException = true;
                    break;
            }
        }
        return {
            success: success,
            isException: isException
        };
    }

});