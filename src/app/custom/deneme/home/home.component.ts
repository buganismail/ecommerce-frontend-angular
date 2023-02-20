import {Component} from '@angular/core';
// import {AuthService} from '../service/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {

    //
    // constructor() {
    // }
    //
    // productArray = [
    //     {
    //         prodId: 1,
    //         img: "../../assets/p1.jpg",
    //         amt: 400,
    //         qnt: 1
    //     },
    //     {
    //         prodId: 2,
    //         img: "../../assets/p2.jpg",
    //         amt: 600,
    //         qnt: 1
    //     },
    //     {
    //         prodId: 3,
    //         img: "../../assets/p3.jpg",
    //         amt: 800,
    //         qnt: 1
    //     },
    //     {
    //         prodId: 4,
    //         img: "../../assets/p4.jpg",
    //         amt: 1000,
    //         qnt: 1
    //     }
    // ];
    //
    // inc(prod) {
    //     if (prod.qnt != 5) {
    //         prod.qnt += 1;
    //     }
    // }
    //
    // dec(prod) {
    //     if (prod.qnt != 1) {
    //         prod.qnt -= 1;
    //     }
    // }
    //
    // itemsCart: any = [];
    //
    // addCart(category) {
    //     let cartDataNull = localStorage.getItem('localCart');
    //     if (cartDataNull == null) {
    //         let storeDataGet: any = [];
    //         storeDataGet.push(category);
    //         localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    //     } else {
    //         var id = category.prodId;
    //         let index: number = -1;
    //         this.itemsCart = JSON.parse(localStorage.getItem('localCart'));
    //         for (let i = 0; i < this.itemsCart.length; i++) {
    //             if (parseInt(id) === parseInt(this.itemsCart[i].prodId)) {
    //                 this.itemsCart[i].qnt = category.qnt;
    //                 index = i;
    //                 break;
    //             }
    //         }
    //         if (index == -1) {
    //             this.itemsCart.push(category);
    //             localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
    //         } else {
    //             localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
    //         }
    //     }
    //     this.cartNumberFunc();
    // }
    //
    // cartNumber: number = 0;
    //
    // cartNumberFunc() {
    //     var cartValue = JSON.parse(localStorage.getItem('localCart'));
    //     this.cartNumber = cartValue.length;
    //     this.auth.cartSubject.next
    //     (this.cartNumber);
    // }
}
