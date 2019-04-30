import { Component, OnInit } from '@angular/core';
import Message from '../../Message';
import {MessageService} from "../../message.service"

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[];

  constructor(private ms: MessageService) { }

  deleteMessage(id) {
    this.ms.deleteMessage(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.ms.getMessages().subscribe((data: Message[]) => {
      console.log(data);
      this.messages = data;
    });
  }

}
