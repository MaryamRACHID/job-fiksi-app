import { Component } from '@angular/core';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.scss'
})
export class DocumentListComponent {
  documents = [
    { name: 'Mon CV', fileName: 'cv_userName.pdf', expanded: false },
    { name: 'Ma lettre de motivation', fileName: 'lm_userName.pdf', expanded: false },
    { name: 'Ma pièce d\'identité', fileName: 'pieceIdentite.pdf', expanded: false },
    { name: 'Ma carte vitale', fileName: 'carteVitale.pdf', expanded: false },
    { name: 'Mon RIB', fileName: 'rib.pdf', expanded: false }
  ];

  toggleExpand(document: any) {
    document.expanded = !document.expanded;
  }

  viewDocument(document: any) {
    // Implement view logic here
    console.log(`Viewing ${document.fileName}`);
  }

  editDocument(document: any) {
    // Implement edit logic here
    console.log(`Editing ${document.fileName}`);
  }
}
