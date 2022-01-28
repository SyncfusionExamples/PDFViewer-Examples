import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from '@syncfusion/ej2-angular-pdfviewer';
//import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { GridModule } from '@syncfusion/ej2-angular-grids';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent	
  ],
  imports: [
    PdfViewerModule,GridModule ,
   // ToolbarModule,
    DialogModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
