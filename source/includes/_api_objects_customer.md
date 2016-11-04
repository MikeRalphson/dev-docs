# <span class="jumptarget"> Customers Reference </span>

Customers APIs manage identity and account details for customers shopping on BigCommerce stores. They include Customers, Customer Addresses, Customer Groups, and Customer Login.

## <span class="jumptarget"> Customers </span>

Identity and account details for customers shopping on Bigcommerce stores.

### <span class="jumptarget"> Customer Object – Properties </span>

| Name | Type | Description |
| --- | --- | --- |
| id | int |
| _authentication | object | Not returned in any responses, but accepts up to two fields allowing you to set the customer's password. If not supplied, a password is generated automatically. See the customers resource documentation for more information about the use of this object. |
| company | string | The name of the company that the customer works for. |
| first_name | string | First name of the customer |
| last_name | string | Last name of the customer |
| email | string | Email address of the customer |
| phone | string | Phone number of the customer |
| date_created | date |
| date_modified | date |
| store_credit | decimal | The amount of credit the customer has |
| registration_ip_address | string | The IP address of the customer when they signed up |
| customer_group_id | int | The group the customer belongs to |
| notes | text | Store owner notes on the customer |
| tax_exempt_category | string | Used to identify customers that fall into special sales tax categories, in particular, those who are fully or partially exempt from paying sales tax. Stores that subscribe to Avalara Premium will use this code to determine how/whether to apply sales tax. Doesn't affect the sales tax calculations of stores that don't subscribe to Avalara Premium. Either blank or contains/accepts a single AvaTax code. Should not contain more than one code. The codes are case-sensitive. Refer to the following page for further information and the full list of codes: http://developer.avalara.com/api-docs/designing-your-integration/handling-tax-exempt-customers |
| accepts_marketing | boolean | Records whether the customer would like to receive marketing content from this store. Read&#x2011;only. |
| addresses | resource | |
| form_fields | object | Array of custom fields. |

### <span class="jumptarget"> Customer Events </span>

The following customer events are available:

#### <span class="jumptarget"> Customer Created </span>

`store/customer/created`

Occurs when a customer registers from the storefront or is created in the control panel.

#### <span class="jumptarget"> Customer Updated </span>

`store/customer/updated`

Occurs when a customer updates their details in the storefront or is updated in the control panel.

#### <span class="jumptarget"> Customer Deleted </span>

`store/customer/deleted`

Occurs when a customer is deleted in the control panel.
