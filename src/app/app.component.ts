import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileCollection } from './app.collection';
import Swal from 'sweetalert2';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRepository } from './app.repository';
import { DataCollection } from './app.mock';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import html2canvas from 'html2canvas';
import { concatMap, from } from 'rxjs';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SafePipe } from './safe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    NgOptimizedImage,
    PdfViewerModule,
    SafePipe,
  ],
  providers: [AppRepository, AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public profile: ProfileCollection = DataCollection;
  isLoading = false;
  isLoadingNumber: number = this.profile.latestWork.length;
  pdfSrc = 'assets/portfolio.pdf';
  page = 1;
  totalPages = 0;

  constructor() {}

  onPdfLoadComplete(pdf: any) {
    this.totalPages = pdf.numPages;
  }

  nextPage() {
    if (this.page < this.totalPages) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }
}
