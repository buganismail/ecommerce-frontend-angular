import {Component} from '@angular/core';
// import {AuthService} from '../service/auth.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent {
    // constructor(private auth: AuthService) {
    // }
    //
    // ngOnInit(): void {
    //     this.CartDetails();
    //     this.loadCart();
    // }
    //
    // getCartDetails: any = [];
    //
    // CartDetails() {
    //     if (localStorage.getItem('localCart')) {
    //         this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
    //     }
    // }
    //
    // incQnt(prodId, qnt) {
    //     for (let i = 0; i < this.getCartDetails.length; i++) {
    //         if (this.getCartDetails[i].prodId === prodId) {
    //             if (qnt != 5)
    //                 this.getCartDetails[i].qnt = parseInt(qnt) + 1;
    //         }
    //     }
    //     localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    //     this.loadCart();
    // }
    //
    // decQnt(prodId, qnt) {
    //     for (let i = 0; i < this.getCartDetails.length; i++) {
    //         if (this.getCartDetails[i].prodId === prodId) {
    //             if (qnt != 1)
    //                 this.getCartDetails[i].qnt = parseInt(qnt) - 1;
    //         }
    //     }
    //     localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    //     this.loadCart();
    // }
    //
    // total: number = 0;
    //
    // loadCart() {
    //     if
    //     (localStorage.getItem
    //     ('localCart')) {
    //         this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
    //         this.total = this.getCartDetails.reduce(function (acc, val) {
    //             return acc + (val.amt * val.qnt);
    //         }, 0);
    //     }
    // }
    //
    // removeall() {
    //     localStorage.removeItem('localCart');
    //     this.getCartDetails = [];
    //     this.total = 0;
    //     this.cartNumber = 0;
    //     this.auth.cartSubject.next(this.cartNumber);
    // }
    //
    // singleDelete(getCartDetail) {
    //     console.log(getCartDetail);
    //     if (localStorage.getItem('localCart')) {
    //         this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
    //         for (let i = 0; i < this.getCartDetails.length; i++) {
    //             if
    //             (this.getCartDetails[i].prodId === getCartDetail) {
    //                 this.getCartDetails.splice(i, 1);
    //                 localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    //                 this.loadCart();
    //                 this.cartNumberFunc();
    //             }
    //         }
    //     }
    // }
    //
    // cartNumber: number = 0;
    //
    // cartNumberFunc() {
    //     var cartValue = JSON.parse(localStorage.getItem('localCart'));
    //     this.cartNumber = cartValue.length;
    //     this.auth.cartSubject.next(this.cartNumber);
    // }
}
