export enum EVENT_TYPE{
    'USER_CREATED'='USER_CREATED',
    'USER_DISABLED'='USER_DISABLED',
    'USER_RESET_PASSWORD'='USER_RESET_PASSWORD',
    'VENDOR_CREATED'='VENDOR_CREATED',
    'VENDOR_ACTIVATED'='VENDOR_ACTIVATED',
    'VENDOR_DEACTIVATED'='VENDOR_DEACTIVATED',
    'VENDOR_BANK_CREATED'='VENDOR_BANK_CREATED',
    'VENDOR_AUTHENTICATED'='VENDOR_AUTHENTICATED',
    'VENDOR_ADMIN_KYC_FAILED'='VENDOR_ADMIN_KYC_FAILED',
    'VENDOR_ADMIN_KYC_PASSED'='VENDOR_ADMIN_KYC_PASSED',
    'VENDOR_COMPLIANCE_KYC_PASSED'='VENDOR_ADMIN_KYC_PASSED',
    'VENDOR_COMPLIANCE_KYC_FAILED'='VENDOR_ADMIN_KYC_FAILED',
    'CHARGEBACK_RAISED'='CHARGEBACK_RAISED',
    'FRAUD_CHARGEBACK_RAISED'='FRAUD_CHARGEBACK_RAISED',
    'CHARGEBACK_ACCEPTED'='CHARGEBACK_ACCEPTED',
    'CHARGEBACK_REJECTED'='CHARGEBACK_REJECTED',
    'SUBMERCHANT_CREATED'='SUBMERCHANT_CREATED',
    'SUBMERCHANT_UPDATED'='SUBMERCHANT_UPDATED',
    'SUBMERCHANT_BANK_UPDATED'='SUBMERCHANT_BANK_UPDATED',
    'SEND_RECON_TO_MERCHANT'='SEND_RECON_TO_MERCHANT',
    'ORDER_CREATED'="ORDER_CREATED",
    'ORDER_UPDATED'='ORDER_UPDATED',
    'ORDER_CANCELLED'='ORDER_CANCELLED',
    'ORDER_CLOSED'='ORDER_CLOSED',
    'NOTIFY_ADMIN'='NOTIFY_ADMIN',
    'NOTIFY_COMPLIANCE'='NOIFY_COMPLIANCE',
    'NOTIFY_MERCHANT'='NOTIFY_MERCHANT',
    'CUSTOMER_LOGGEDIN'="CUSTOMER_LOGGEDIN",
    'CUSTOMER_LOGGEDOUT'='CUSTOMER_LOGGEDOUT'
    
}
