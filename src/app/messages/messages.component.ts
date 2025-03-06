import { Component } from '@angular/core';
import  Stomp from 'stompjs';
import SockJS from 'sockjs-client';


@Component({
  selector: 'app-messages',
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  stompClient:any = null;
  count: number = 0;

  constructor() {
    // this.connect()
  }

  ngOnInit() {
    this.connect()
  }

    connect() {
    // const Stomp = require("stompjs");
    //   var Stomp:Stomp;

      // var SockJS = require("sockjs-client");
    let ws: any = new SockJS("http://localhost:8080/ws");
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({},
    //   () => {
    //   console.log('conncted')
    // }
    this.onConnected
    , () => {
      console.log('error')
    });
  };
    onConnected = () => {
    console.log("connected");

    this.stompClient.subscribe(
      "/topic/notification",
      // "/user/" + currentUser.id + "/queue/messages",
      // onMessageReceived
        (msg: any) => {
        console.log(msg)
        }
    );
  };

  sendMessage(msg: String) {
    this.count++;
    let stringCount = "" + this.count;
    // let msg:String ="message";
    if (msg.trim() !== "") {
      const message = {
        // senderId: currentUser.id,
        // recipientId: activeContact.id,
        // senderName: currentUser.name,
        // recipientName: activeContact.name,
        // content: msg,
        // timestamp: new Date(),
        title: msg + stringCount
      };

      console.log("before seending")
      this.stompClient.send("/app/note", {}, JSON.stringify(message));
      console.log("after sending")
    }
  };


}
