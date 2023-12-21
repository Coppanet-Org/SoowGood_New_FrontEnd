import { environment } from 'src/environments/environment';
import { DocumentsAttachmentService } from './../../proxy/services/documents-attachment.service';
import { Observable, catchError, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class GetDocuments {
    constructor(private DocumentsAttachmentService : DocumentsAttachmentService) { }
    picUrl = `${environment.apis.default.url}/`;

    getDocumentsFilebyIdUseFolder(id: number, user: string, folder: string): Observable<any> {
        return this.DocumentsAttachmentService
          .getDocumentInfoByEntityTypeAndEntityIdAndAttachmentType(user, id, folder)
          .pipe(
            map((at) => {
              let profilePic = "";
              let url = "";
      
              if (at) {
                let prePaths: string = '';
                var re = /wwwroot/gi;
                prePaths = at.path ? at.path : '';
                profilePic = prePaths.replace(re, '');
                url = this.picUrl + profilePic;
              }
      
              return url;
            }),
            catchError((error) => {
              // Handle errors here
              console.error('Error fetching profile pic:', error);
              return of(''); // You can return a default value or rethrow the error as needed
            })
          );
      }
}