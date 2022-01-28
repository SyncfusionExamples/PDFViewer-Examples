import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import {
    PdfViewerComponent, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
    ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormFieldsService,ValidateFormFieldsArgs,AjaxRequestInitiateEventArgs,PageClickEventArgs,AnnotationSelectEventArgs, FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:max-line-length
    providers: [LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormFieldsService, FormDesignerService]
})
export class AppComponent implements OnInit {
 
  public service: string = 'https://localhost:44399/pdfviewer';
  public document: string = 'PDF_Succinctly.pdf';
  ngOnInit(): void {
      // ngOnInit function
	    
  }
  saveDocument() {
    var pdfviewer = (<any>document.getElementById('pdfViewer'))
      .ej2_instances[0];
    //Sending the request to the server to save the document in server.
    pdfviewer.serverActionSettings.download = 'SaveDocument';
    pdfviewer.download();
    pdfviewer.serverActionSettings.download = 'Download';
  }


}
