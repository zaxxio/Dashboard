import {NgModule, Component, ViewChild} from '@angular/core';
import {CodeShareService} from "../../services/code-share.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  editorOptions = {theme: 'vs-light', language: 'html'};
  safeHtml: SafeHtml;

  private _code: string = '';


  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
    this.updateCode(); // Trigger updateCode whenever code changes
  }

  constructor(private sanitizer: DomSanitizer) {
    this.updateCode();
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.code);
  }

  updateCode() {
    // Directly binding to `code` does not bypass sanitization
    // This example shows how to safely bypass sanitization for trusted content
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.code);
  }
}
