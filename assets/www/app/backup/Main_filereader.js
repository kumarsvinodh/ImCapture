Ext.define('ImCapture.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.device.Camera'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
             {
                title: 'Camera',
                iconCls: 'action',

                items: [
       /*            {
                            xtype: 'image',
                            id: 'capturedImage',
                            src: 'img/logo.png',
                            height: 200,
                            left: 200,
                            top: 0,
                            width: 300
                    },*/
                    {
                        xtype: 'button',
                        id: 'CameraClick',  
                        ui: 'action',
                        text: 'Camera',
                        //top: 222,
                        /*left: 200,*/
                        padding: 20,
                        handler:function(){
                        	function onFail(){alert('failed to email through phonegap camera api')};
                        	
                        	function onPhotoDataSuccess(imgUri){
                        		alert(imgUri);
                        		console.log(imgUri);
                        		imgUri = imgUri.substr(7,imgUri.length-7);
                        		alert(imgUri);
                        		console.log(imgUri);
                        		var uri=false;
				            	var subject="Message from Compuware Image Capture application";
				            	var toRecipients=['kumarsvinodh@gmail.com'],ccRecipients=[],bccRecipients=[],isHtml=true;
				            	var body="This email is sent from <b>Compuware Image Capture application</b>" +
				            			"</br>Please verify the application";
				            	alert('before pdf');
				            	var doc = new jsPDF();
				    			doc.text(20, 20, 'Hello world.');
				    			//imgUri='data:image/jpg;base64,'+imgUri;
				    			 var reader = new FileReader();
				    			    reader.onloadend = function(evt) {
				    			    	alert("read success");
				    			        console.log("read success");
				    			        alert("Result"+evt.target.result);
				    			        console.log(evt.target.result);
				    			    };
				    			    reader.readAsDataURL(imgUri);
				    			    alert('data'+reader.readAsDataURL(imgUri));
				    			//console.log(imgUri);
				    			//alert(imgUri);
				    			//doc.addImage(imgUri, 'JPEG', 15, 40, 180, 180);
				    			var value=doc.output();
				    			//alert(value);
				    			var pdfPath="";
				    			function fail(error) {
				    		        console.log(error.code);
				    		    };
				    		    function gotFileWriter(writer) {
				    		        writer.write(value);
window.plugins.emailComposer.showEmailComposer(subject,body,toRecipients,ccRecipients,bccRecipients,isHtml,[pdfPath]);
				    		    };
				    			function gotFileEntry(fileEntry) {
				    				alert(fileEntry);
				    		        fileEntry.createWriter(gotFileWriter, fail);
				    		    };
				    			function gotFS(fileSystem) {
				    				pdfPath=fileSystem.root.fullPath+'/Test.pdf';
				    				//alert(pdfPath+'Test.pdf');
				    				fileSystem.root.getFile("Test.pdf", {create: true, exclusive: false}, gotFileEntry, fail);
				    			};
				    			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
				    			
				    			/*navigator.file.write('/storage/emulated/0/ImCapture/Test.pdf', value,function(a){
				    				alert('Success'+ a);
				    			}, function(a){
				    				alert('Fail'+ a);
				    			}); */
				    			//alert(doc.save('/storage/emulated/0/ImCapture/Test.pdf'));
				    			
				            	/*window.resolveLocalFileSystemURI(imgUri, function(fileEntry) {
window.plugins.emailComposer.showEmailComposer(subject,body,toRecipients,ccRecipients,bccRecipients,isHtml,[fileEntry.fullPath]);
				            	  }, onFail);  */
                        	};
                        	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
                                destinationType: navigator.camera.DestinationType.FILE_URI,
                                saveToPhotoAlbum: true });//FILE_URI DATA_URL
                        }
                    }
                ]
                    
            }
        ]
    }
});
