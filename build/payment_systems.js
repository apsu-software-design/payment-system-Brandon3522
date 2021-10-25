"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_card = exports.PaymentSystemExecutor = void 0;
//read in data, validate, encrypt, and process
var PaymentSystemExecutor = /** @class */ (function () {
    //2 functions as arguments
    function PaymentSystemExecutor(infoFunc, validateFunc) {
        infoFunc();
        validateFunc();
    }
    //Create interface for factory method pattern?
    //which info to obtain based on payment method
    //should this be an abstract method?
    PaymentSystemExecutor.prototype.obtain_info = function (paymentType) {
        if (paymentType == "Credit card") {
            //obtain card info
        }
        else if (paymentType == "Bank draft") {
            //obtain bank info
        }
        else if (paymentType == "Online") {
            //obtain online pay info
        }
        else
            //obtain offline pay info
            console.log();
    };
    //how to validate that info based on payment method
    //should this be an abstract method?
    PaymentSystemExecutor.prototype.validate_info = function (paymentType) {
        if (paymentType == "Credit card") {
            //validate card info
        }
        else if (paymentType == "Bank draft") {
            //validate bank info
        }
        else if (paymentType == "Online") {
            //validate online pay info
        }
        else
            console.log();
    };
    //steps through and prints the relevant workflow info to console
    //call obtain_info and validate_info ?
    //step through encryption and processing
    PaymentSystemExecutor.prototype.execute = function () {
        var valid = true;
        if (valid) {
            console.log("Your payment information is being encrypted.");
            console.log("The payment is being processed.");
        }
        else {
            console.log('The payment is invalid.');
        }
    };
    return PaymentSystemExecutor;
}());
exports.PaymentSystemExecutor = PaymentSystemExecutor;
var Credit_card = /** @class */ (function () {
    function Credit_card() {
        this.name = '';
        this.card_number = '';
        this.expiration_date = '';
        this.isValid = true;
    }
    Credit_card.prototype.getName = function () {
        return this.name;
    };
    Credit_card.prototype.setName = function (name) {
        this.name = name;
    };
    Credit_card.prototype.getCardNum = function () {
        return this.card_number;
    };
    Credit_card.prototype.setCardNum = function (num) {
        this.card_number = num;
    };
    Credit_card.prototype.getExpiration = function () {
        return this.expiration_date;
    };
    Credit_card.prototype.setExpiration = function (expiration) {
        this.expiration_date = expiration;
    };
    Credit_card.prototype.obtain_info = function () {
        // this.name = readlineSync.question('  Name: ');
        // this.card_number = readlineSync.question('  Credit Card Number: ');
        // this.expiration_date = readlineSync.question('  Credit Card Expiration Date (MM/DD): ');
        console.log("obtain");
    };
    Credit_card.prototype.validate_info = function () {
        //let valid = /^[\w.' ]+$/.test(this.name) && /\d{15,16}/.test(this.card_number) && /\d\d\/\d\d/.test(this.expiration_date);
        console.log("val");
    };
    //set up paymentsystemexecutor with 2 functions
    Credit_card.prototype.build = function () {
        this.paymentSystemExecutor =
            new PaymentSystemExecutor(this.obtain_info, this.validate_info);
    };
    //return paymentSystemExecutor set up for payment system
    //how do you get paymentSystemExecutor from build function??
    Credit_card.prototype.getExecutor = function () {
        return this.paymentSystemExecutor;
    };
    return Credit_card;
}());
exports.Credit_card = Credit_card;
