import readlineSync = require('readline-sync');
import { IPayment } from './IPayment';

//read in data, validate, encrypt, and process
export class PaymentSystemExecutor{



    //Create interface for factory method pattern?
    //which info to obtain based on payment method
    //should this be an abstract method?
    public obtain_info(paymentType: string){
        if(paymentType == "Credit card"){
            //obtain card info
        }
        else if(paymentType == "Bank draft"){
            //obtain bank info
        }
        else if(paymentType == "Online"){
            //obtain online pay info
        }
        else
            //obtain offline pay info
            console.log();

    }
    //how to validate that info based on payment method
    //should this be an abstract method?
    public validate_info(paymentType: string){
        if(paymentType == "Credit card"){
            //validate card info
        }
        else if(paymentType == "Bank draft"){
            //validate bank info
        }
        else if(paymentType == "Online"){
            //validate online pay info
        }
        else
            console.log();
    }

    //2 functions as arguments
    constructor(infoFunc: Function, validateFunc: Function){
        infoFunc();
        validateFunc();
    }

    
    //steps through and prints the relevant workflow info to console
    //call obtain_info and validate_info ?
    //step through encryption and processing
    public execute(){



        let valid:boolean = true;
        if (valid) {
            console.log("Your payment information is being encrypted.");
      
            console.log("The payment is being processed.")
        }
        else {
            console.log('The payment is invalid.');
        }

    }

    
}

export class Credit_card implements IPayment {
    private name: string;
    private card_number: string;
    private expiration_date: string;
    public isValid: boolean;
    paymentSystemExecutor: PaymentSystemExecutor;

    public getName(){
        return this.name;
    }

    public setName(name: string){
        this.name = name;
    }

    public getCardNum(){
        return this.card_number;
    }

    public setCardNum(num: string){
        this.card_number = num;
    }

    public getExpiration(){
        return this.expiration_date;
    }

    public setExpiration(expiration: string){
        this.expiration_date = expiration;
    }


    constructor(){
        this.name = '';
        this.card_number = '';
        this.expiration_date = ''
        this.isValid = true;
    }

    public obtain_info(){
        // this.name = readlineSync.question('  Name: ');
        // this.card_number = readlineSync.question('  Credit Card Number: ');
        // this.expiration_date = readlineSync.question('  Credit Card Expiration Date (MM/DD): ');
        console.log("obtain");
    }

    public validate_info(){
        //let valid = /^[\w.' ]+$/.test(this.name) && /\d{15,16}/.test(this.card_number) && /\d\d\/\d\d/.test(this.expiration_date);
        console.log("val");
    }

    //set up paymentsystemexecutor with 2 functions
    public build(){
       this.paymentSystemExecutor = 
            new PaymentSystemExecutor(this.obtain_info, this.validate_info);



    }
    //return paymentSystemExecutor set up for payment system
    //how do you get paymentSystemExecutor from build function??
    public getExecutor(){
        return this.paymentSystemExecutor;
    }

}
