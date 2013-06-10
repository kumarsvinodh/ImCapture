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
								source: 'camera',
								destination: 'file',
								//destination: 'data',
					            success: function(image) {
					                //this.fireEvent('change', this, url);
					            	//imageView.setSrc(url);
					            	var uri=false;
					            	var subject="hi there";
					            	var body="hello sir";
					            	var toRecipients=['vinodh@vinodh.com'];
					            	var ccRecipients=false;
					            	var bccRecipients=false;
					            	var isHtml=true;
					            	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(){alert('file system success');},
					            			function(){alert('file system fail');});
					            	window.resolveLocalFileSystemURI(image, function(acuri){
					            		alert('return url is '+acuri);
					            		uri=acuri;
window.plugins.emailComposer.showEmailComposer(subject,body,toRecipients,ccRecipients,bccRecipients,isHtml,[acuri]);
					            		}, 
					            			function(msg){alert('failed'+msg)});
			/*		            	alert(image);
					            	alert(uri);
 */
					            	/*Ext.define('ImCapture.view.PreviewImage', {
					                    title: 'Test photo',
					                    description: 'Testing a camera capture',    
					                    src: image,
					                    fullscreen: true
					                });*/
					            },
					            failure: function() {
					                Ext.Msg.alert('Error', 'There was an error when acquiring the picture.');
					            },
					            scope: this,

								
							   /* success: function(image) {
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
							    },*/
							    quality: 75,
							    width: 200,
							    height: 200
							});
                        }
                    }
                ]
                    
            }
        ]
    }
});
