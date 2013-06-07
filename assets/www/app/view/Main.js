Ext.define('ImCapture.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.device.Camera'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
             {
                title: 'Camera',
                iconCls: 'action',

                items: [
                   {
                            xtype: 'image',
                            id: 'capturedImage',
                            src: 'img/logo.png',
                            height: 200,
                            /*left: 200,*/
                            top: 0,
                            width: 300
                    },
                    {
                        xtype: 'button',
                        id: 'CameraClick',  
                        ui: 'action',
                        text: 'Camera',
                        top: 222,
                        /*left: 200,*/
                        padding: 20,
						handler: function(){
							Ext.device.Camera.capture({
							    success: function(image) {
							    	//var imageView = Ext.getCmp('capturedImage');
							    	//window.open('mailto:vinodhskumar@gmail.com');
							        //imageView.setSrc(image);
							    	var extras = {};
							    	extras["android.intent.extra.SUBJECT"] = "Test";
							    	extras["android.intent.extra.TEXT"] = "Test";
							    	window.plugins.webintent.startActivity({
  							    		 action: "android.intent.action.SEND",
							    		 url: "vinodhskumar@gmail.com",
							    		 type: 'image/jpeg',
							    		 extras: extras
							    		 },
							    		 function(args) {
							    		 alert("mail sent");
							    		 },
							    		 function(args) {
							    			 alert(args);
							    		 alert('Failed to send email');
							    		 }
							    		 );
							    },
							    quality: 75,
							    width: 200,
							    height: 200,
							    destination: 'data'
							});
                        }
                    }
                ]
                    
            }
        ]
    }
});
