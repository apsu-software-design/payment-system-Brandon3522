"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment_selection = void 0;
var payment_selection = /** @class */ (function () {
    function payment_selection() {
    }
    //refactor to switch case?
    payment_selection.payment_selection = function (paymentType) {
        if (paymentType == "credit card") {
            //call payment system builder
            //build PaymentSystemExecutor object
            //return object with getExecutor()
        }
        else if (paymentType == "bank draft") {
            //call payment system builder
            //build PaymentSystemExecutor object
            //return object with getExecutor()
        }
        else if (paymentType == "online") {
            //call payment system builder
            //build PaymentSystemExecutor object
            //return object with getExecutor()
        }
        else if (paymentType == "offline") {
            //call payment system builder
            //build PaymentSystemExecutor object
            //return object with getExecutor()
        }
    };
    return payment_selection;
}());
exports.payment_selection = payment_selection;
