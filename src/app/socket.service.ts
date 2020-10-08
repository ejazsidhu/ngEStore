import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

 
public getMessages = () => {
  return Observable.create((observer) => {
          this.socket.on('new-message', (message) => {
              observer.next(message);
          });
  });
}
}
