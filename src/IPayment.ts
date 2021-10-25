

export interface IPayment {
    obtain_info(paymentType: string): void;
    validate_info(paymentType: string): void;
}