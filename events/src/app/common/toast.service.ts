import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  // pour ce module, la version automatique ne convenait pas il
  // fallait telecharger une version moins recente: ngx-toastr@11.3
  constructor(private toast : ToastrService) { }

  toastrSuccess(event){
    this.toast.success(event);
  }

}
