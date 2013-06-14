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
                        handler:function(){
                        	function onFail(){alert('failed to email through phonegap camera api')};
                        	function onPhotoDataSuccess(imgUri){
                        		var uri=false;
				            	var subject="Message from Compuware Image Capture application";
				            	var body="This email is sent from <b>Compuware Image Capture application</b>" +
				            			"</br>Please verify the application";
				            	var toRecipients=['kumarsvinodh@gmail.com'];
				            	var ccRecipients=[];
				            	var bccRecipients=[];
				            	var isHtml=true;
				            	//alert(imgUri);
				            	window.resolveLocalFileSystemURI(imgUri, function(fileEntry) {
				            	      //alert(fileEntry.fullPath);
window.plugins.emailComposer.showEmailComposer(subject,body,toRecipients,ccRecipients,bccRecipients,isHtml,[fileEntry.fullPath]);
				            	  }, onFail);
                        	};
                        	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
                                destinationType: navigator.camera.DestinationType.FILE_URI,
                                saveToPhotoAlbum: true });
                        },
						abcd: function(){
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
					            },
					            failure: function() {
					                Ext.Msg.alert('Error', 'There was an error when acquiring the picture.');
					            },
					            scope: this,
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

David,

Good Morning. I am trying to get git access, seems I need to know/have public key for my username. Can you point me the right direction for this?

Thanks,
Vinodh
