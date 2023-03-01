import { Component, ViewChild } from '@angular/core';
import { BTNTYPES } from 'src/app/shared/dynamic-button/btn-types';
import { DynamicModalComponent } from 'src/app/shared/dynamic-modal/dynamic-modal.component';

@Component({
  selector: 'app-test-dynamic-component',
  templateUrl: './test-dynamic-component.component.html',
  styleUrls: ['./test-dynamic-component.component.css']
})
export class TestDynamicComponentComponent {
  @ViewChild('dynamicModal') dynamicModal! : DynamicModalComponent;
  buttonTypePrimary: BTNTYPES = BTNTYPES.primary;
  buttonTypeDanger: BTNTYPES = BTNTYPES.danger;
  buttonTypeNormal: BTNTYPES = BTNTYPES.normal;
  buttonTypeLink: BTNTYPES = BTNTYPES.link;
  title = 'Titulo de prueba';

  generateRandomString(length: number): void {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    this.title = result;
  }

  openModal() {
    this.dynamicModal.toggleModal();
  }
}
