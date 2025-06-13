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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, NgOptimizedImage],
  providers: [AppRepository, AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public profile: ProfileCollection = DataCollection;
  isLoading = false;
  isLoadingNumber: number = this.profile.latestWork.length;
  constructor() {}

  downloadNewResume() {
    window.open(this.profile.resumeLink, '_blank');
  }

  copyToClipboard(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    Swal.fire({
      position: 'top',
      text: 'Phone Number Copied',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
