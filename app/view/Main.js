Ext.define('ToolbarSpinner.view.Main', {
    extend: 'Ext.Container',

    config: {
		layout: 'fit',
        items : [{
			title  : 'Home',
			iconCls: 'home',
			items  : [{
				docked: 'top',
				xtype : 'titlebar',
				title : 'Ext.jsv.ToolbarSpinner',
				items : {
					xtype : 'tbarspinner',
					align : 'right',
					hidden: true
				}
			}, {
				xtype: 'button',
				text : 'Show Spinner',
				id   : 'ToggleSpinner'
			}],
			styleHtmlContent: true
		}]
    }
});
