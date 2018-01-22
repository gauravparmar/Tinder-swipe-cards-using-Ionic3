import { Component, ViewChild, ViewChildren, ViewEncapsulation,TemplateRef,EventEmitter,NgModule  } from '@angular/core';
import { NavController } from 'ionic-angular';

// For swipe cards
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { SwipeCardsModule } from 'ng2-swipe-cards';
import { empty } from 'rxjs/observable/empty';
import { isEmpty } from 'rxjs/operator/isEmpty';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/// For swipe cards


@Component({
  selector: 'page-home',
  templateUrl: 'home.html' 
})

export class HomePage {
  @ViewChild('cardLog') cardLogContainer: any;
  @ViewChild('tinderCardLog') tinderCardLogContainer: any;


  cards: any[] = [];
  cardCursor: number = 0;
  orientation: string = "x";
  overlay: any = {
      like: {
          backgroundColor: '#28e93b'
      },
      dislike: {
          backgroundColor: '#e92828'
      }
  };

  cardLogs: any = [];
  tinderCardLogs: any = [];


  constructor() {
      for (var i = 0; i < 50; i++) {
          this.cards.push({
              id: i + 1,
              likeEvent: new EventEmitter(),
              destroyEvent: new EventEmitter(),
              url: this.getKittenUrl()
          });
      }
  }

  like(like) {
      var self = this;
      if (this.cards.length > 0) {
          self.cards[this.cardCursor++].likeEvent.emit({ like });
          // DO STUFF WITH YOUR CARD
          this.tinderCardLogs.push("callLike(" + JSON.stringify({ like }) + ")");
          this.scrollToBottom(this.tinderCardLogContainer);
      }
  }

  onCardLike(event) {
      var item = this.cards[this.cardCursor++];
      // DO STUFF WITH YOUR CARD
      this.tinderCardLogs.push("onLike(" + JSON.stringify(event) + ")");
      this.scrollToBottom(this.tinderCardLogContainer);
  }

  getKittenUrl() {
      var w = 500 - Math.floor((Math.random() * 100) + 1);
      var h = 500 - Math.floor((Math.random() * 100) + 1);
      return "http://placekitten.com/" + w + "/" + h;
  }

  onRelease(event) {
      this.cardLogs.push("onRelease(event)");
      this.scrollToBottom(this.cardLogContainer);

  }

  onAbort(event) {
      this.cardLogs.push("onAbort(event)");
      this.scrollToBottom(this.cardLogContainer);
  }

  onSwipe(event) {
      this.cardLogs.push("onSwipe(event)");
      this.scrollToBottom(this.cardLogContainer);
  }

  scrollToBottom(el) {
      setTimeout(() => {
          el.nativeElement.scrollTop = el.nativeElement.scrollHeight;
      }, 100);
  }
}