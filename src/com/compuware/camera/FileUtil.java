package com.compuware.camera;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStream;

import org.apache.cordova.api.LOG;

import com.pdfjet.A4;
import com.pdfjet.CoreFont;
import com.pdfjet.Font;
import com.pdfjet.Image;
import com.pdfjet.ImageType;
import com.pdfjet.PDF;
import com.pdfjet.Page;
import com.pdfjet.TextLine;

public class FileUtil {
	
	public static void preparePdf(String filePath) {
		try {
			PDF pdf = new PDF(
			        new BufferedOutputStream(
			                new FileOutputStream("/storage/emulated/0/Duck.pdf")));
			Page page = new Page(pdf, A4.PORTRAIT);

	        Font f1 = new Font(pdf, CoreFont.HELVETICA);
	        InputStream is = new BufferedInputStream(new FileInputStream(filePath));
	        Image image2 = new Image(
	                pdf,
	                is,
	                ImageType.JPG);
	        TextLine text = new TextLine(f1,
	                "The map below is an embedded PNG image");
	        text.setLocation(90f, 30f);
	        text.drawOn(page);

	        image2.setLocation(90f, 40f);
	        image2.drawOn(page);
	        Page page2 = new Page(pdf, A4.PORTRAIT);
	        //  image1.drawOn(page2);

	          pdf.close();
			
		} catch (FileNotFoundException e) {
			
			LOG.e("FileUtil", "Error handling file: " + e.toString());
		} catch (Exception e) {
			LOG.e("FileUtil", "Error handling file: " + e.toString());
		}
		
	}

}
