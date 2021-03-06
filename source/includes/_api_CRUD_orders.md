|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_orders
||store_v2_orders_read_only

### <span class="jumptarget"> List Orders </span>

Gets the collection of orders. (The default sort is by order id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/orders`
*   Basic Auth
>`GET /api/v2/orders`

#### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific orders in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| min_id | int | /api/v2/orders?min_id={value} |
| max_id | int | /api/v2/orders?max_id={value} |
| min_total | decimal | /api/v2/orders?min_total={value} |
| max_total | decimal | /api/v2/orders?max_total={value} |
| customer_id | string | /api/v2/orders?customer_id={value} |
| email | string | /api/v2/orders?email={value} |
| status_id | string | /api/v2/orders?status_id={value} |
| is_deleted | string ('true' or 'false') | /api/v2/orders?is_deleted={value} |
| payment_method | string | /api/v2/orders?payment_method={value} |
| min_date_created | dateTime or date | /api/v2/orders?min_date_created={value} |
| max_date_created | dateTime or date | /api/v2/orders?max_date_created={value} |
| min_date_modified | dateTime or date | /api/v2/orders?min_date_modified={value} |
| max_date_modified | dateTime or date | /api/v2/orders?max_date_modified={value} |

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 orders are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/orders?page={number} |
| limit | int | /api/v2/orders?limit={count} |
| sort | string | /api/v2/orders?sort=date_created:desc |


#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 100,
    "customer_id": 10,
    "date_created": "Wed, 14 Nov 2012 19:26:23 +0000",
    "date_modified": "Wed, 14 Nov 2012 19:26:23 +0000",
    "date_shipped": "",
    "status_id": 11,
    "status": "Awaiting Fulfillment",
    "subtotal_ex_tax": "79.0000",
    "subtotal_inc_tax": "79.0000",
    "subtotal_tax": "0.0000",
    "base_shipping_cost": "0.0000",
    "shipping_cost_ex_tax": "0.0000",
    "shipping_cost_inc_tax": "0.0000",
    "shipping_cost_tax": "0.0000",
    "shipping_cost_tax_class_id": 2,
    "base_handling_cost": "0.0000",
    "handling_cost_ex_tax": "0.0000",
    "handling_cost_inc_tax": "0.0000",
    "handling_cost_tax": "0.0000",
    "handling_cost_tax_class_id": 2,
    "base_wrapping_cost": "0.0000",
    "wrapping_cost_ex_tax": "0.0000",
    "wrapping_cost_inc_tax": "0.0000",
    "wrapping_cost_tax": "0.0000",
    "wrapping_cost_tax_class_id": 3,
    "total_ex_tax": "79.0000",
    "total_inc_tax": "79.0000",
    "total_tax": "0.0000",
    "items_total": 1,
    "items_shipped": 0,
    "payment_method": "cash",
    "payment_provider_id": null,
    "payment_status": "",
    "refunded_amount": "0.0000",
    "order_is_digital": false,
    "store_credit_amount": "0.0000",
    "gift_certificate_amount": "0.0000",
    "ip_address": "50.58.18.2",
    "geoip_country": "",
    "geoip_country_iso2": "",
    "currency_id": 1,
    "currency_code": "USD",
    "currency_exchange_rate": "1.0000000000",
    "default_currency_id": 1,
    "default_currency_code": "USD",
    "staff_notes": "",
    "customer_message": "",
    "discount_amount": "0.0000",
    "coupon_discount": "0.0000",
    "shipping_address_count": 1,
    "is_deleted": false,
    "billing_address": {
      "first_name": "Trisha",
      "last_name": "McLaughlin",
      "company": "",
      "street_1": "12345 W Anderson Ln",
      "street_2": "",
      "city": "Austin",
      "state": "Texas",
      "zip": "78757",
      "country": "United States",
      "country_iso2": "US",
      "phone": "",
      "email": "elsie@example.com"
    },
    "products": {
      "url": "https://store-bwvr466.mybigcommerce.com/api/v2/orders/100/products.json",
      "resource": "/orders/100/products"
    },
    "shipping_addresses": {
      "url": "https://store-bwvr466.mybigcommerce.com/api/v2/orders/100/shippingaddresses.json",
      "resource": "/orders/100/shippingaddresses"
    },
    "coupons": {
      "url": "https://store-bwvr466.mybigcommerce.com/api/v2/orders/100/coupons.json",
      "resource": "/orders/100/coupons"
    }
  }
]
```

### <span class="jumptarget"> Get an Order </span>

Gets an order.

*   OAuth
>`GET /stores/{store_hash}/v2/orders/{id}`
*   Basic Auth
>`GET /api/v2/orders/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 100,
  "customer_id": 10,
  "date_created": "Wed, 14 Nov 2012 19:26:23 +0000",
  "date_modified": "Wed, 14 Nov 2012 19:26:23 +0000",
  "date_shipped": "",
  "status_id": 11,
  "status": "Awaiting Fulfillment",
  "subtotal_ex_tax": "79.0000",
  "subtotal_inc_tax": "79.0000",
  "subtotal_tax": "0.0000",
  "base_shipping_cost": "0.0000",
  "shipping_cost_ex_tax": "0.0000",
  "shipping_cost_inc_tax": "0.0000",
  "shipping_cost_tax": "0.0000",
  "shipping_cost_tax_class_id": 2,
  "base_handling_cost": "0.0000",
  "handling_cost_ex_tax": "0.0000",
  "handling_cost_inc_tax": "0.0000",
  "handling_cost_tax": "0.0000",
  "handling_cost_tax_class_id": 2,
  "base_wrapping_cost": "0.0000",
  "wrapping_cost_ex_tax": "0.0000",
  "wrapping_cost_inc_tax": "0.0000",
  "wrapping_cost_tax": "0.0000",
  "wrapping_cost_tax_class_id": 3,
  "total_ex_tax": "79.0000",
  "total_inc_tax": "79.0000",
  "total_tax": "0.0000",
  "items_total": 1,
  "items_shipped": 0,
  "payment_method": "cash",
  "payment_provider_id": null,
  "payment_status": "",
  "refunded_amount": "0.0000",
  "order_is_digital": false,
  "store_credit_amount": "0.0000",
  "gift_certificate_amount": "0.0000",
  "ip_address": "50.58.18.2",
  "geoip_country": "",
  "geoip_country_iso2": "",
  "currency_id": 1,
  "currency_code": "USD",
  "currency_exchange_rate": "1.0000000000",
  "default_currency_id": 1,
  "default_currency_code": "USD",
  "staff_notes": "",
  "customer_message": "",
  "discount_amount": "0.0000",
  "coupon_discount": "0.0000",
  "shipping_address_count": 1,
  "is_deleted": false,
  "billing_address": {
    "first_name": "Trisha",
    "last_name": "McLaughlin",
    "company": "",
    "street_1": "12345 W Anderson Ln",
    "street_2": "",
    "city": "Austin",
    "state": "Texas",
    "zip": "78757",
    "country": "United States",
    "country_iso2": "US",
    "phone": "",
    "email": "elsie@example.com"
  },
  "products": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/orders/100/products.json",
    "resource": "/orders/100/products"
  },
  "shipping_addresses": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/orders/100/shippingaddresses.json",
    "resource": "/orders/100/shippingaddresses"
  },
  "coupons": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/orders/100/coupons.json",
    "resource": "/orders/100/coupons"
  }
}
```

### <span class="jumptarget"> Get a Count of Orders </span>

Gets a count of the number of orders in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/orders/count`
*   Basic Auth
>`GET /api/v2/orders/count`


#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "count": 9
}
```

### <span class="jumptarget"> Create an Order </span>

Manually create and submit an order.

*   OAuth
>`POST /stores/{store_hash}/v2/orders`
*   Basic Auth
`POST /api/v2/orders`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the order are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   date_modified
*   date_shipped
*   status
*   order_source
*   subtotal_tax
*   shipping_cost_tax
*   shipping_cost_tax_class_id
*   handling_cost_tax
*   handling_cost_tax_class_id
*   wrapping_cost_tax
*   wrapping_cost_tax_class_id
*   total_tax
*   payment_status
*   currency_id
*   currency_code
*   currency_exchange_rate
*   default_currency_id
*   default_currency_code
*   coupon_discount
*   store_credit_amount
*   gift_certificate_amount
*   shipping_address_count
*   is_deleted
*   coupons

#### <span class="jumptarget"> Requirements </span>

The following properties of the order are required. The request won’t be fulfilled unless these properties are valid.

*   products
*   billing_address


<aside class="warning">
<span class="aside-warning-hd">Tax Notes</span><br><br>

  <ul>
	<li>If a store has automatic tax enabled, BigCommerce does not compute sales tax on orders created via the API.
	</li>
	<li>Abbreviated state names in shipping and billing addresses will prevent tax documents from being submitted to Avalara. To ensure successful Avalara tax-document submission, spell state names out in full. For example, supplying <code>CA</code> as a state name leads to no tax-document submission. Supplying <code>California</code> as a state name leads to a successful submission.
	</li>
  </ul>
</aside>


#### <span class="jumptarget"> Overriding Preset Values </span>

You can create overrides for calculated values such as product prices, subtotal and totals by sending a fixed value in the request. If values are not supplied for these properties, they will be automatically calculated based on the pre-set store values and tax rules.

#### <span class="jumptarget"> Order Products </span>

*   Existing products can be added to the order with a reference to their `product_id`.
*   Custom products can be added to the order using the [`products` array](#order-products-array).
*   If price is not specified, it will automatically pick up the price from the store’s product catalog. However, you can override this via `price_inc_tax` and `price_ex_tax`.
*   If `price_inc_tax` and `price_ex_tax` are specified, price and rulesets are ignored, and the `price_inc_tax` or `price_ex_tax` are written to `base_price` according to the store settings.
*   When the store is subscribed to Avalara Premium, a value of `API Tax Override` is written to the Order Tax object's `name` field.
*   Tax will be calculated based on the tax rules specified in the store, except in the case of automatic taxes. However, in both cases, you can optionally override the tax values by specifying `price_inc_tax` and `price_ex_tax`.
*   For products that are configured to track stock, the quantity specified on the order will reduce the stock on hand. When there is not enough inventory to fulfill the order, the order will be rejected with an "out of stock" error code.
*   For products that have min and max quantities specified in their settings, the API will honor these, and will reject orders appropriately.
*   For products where product options are required, the API will validate these requirements to ensure that the product options are specified.
*   Product quantity must be specified.

#### <span class="jumptarget"> Calculation of Totals </span>

*   When not specified, order subtotal and total are automatically calculated.
*   You can override order subtotal and/or total. If you choose to override one, we strongly recommend that override both, because the system will not be able to accurately calculate the other.

#### <span class="jumptarget"> Order Properties </span>

*   Billing address is mandatory.
*   Shipping address is not mandatory, and can optionally be specified as composite records.
    *   When the shipping address is not specified, the system will fall back to using the billing address as the shipping address.
    *   Multiple shipments are not supported, so the API will assume the first address in the collection.
*   In the shipping and billing addresses, there is no requirement to specify `country` when `country_ISO2` is specified.
    *   The value specified for `country_ISO2` will always override any value specified for `country`.
*   Coupon redemption is not currently supported.
*   To specify a guest checkout, set `customer_id` to `0`.
*   `order_source` cannot be specified, and will be set to `external`.
    *   You can optionally specify a value for `external_source` to specify which external source the order is coming from - e.g., POS system X, accounting system Y, etc.

#### <span class="jumptarget"> Changing the Order Status </span>

*   You can specify `status_id`, which will automatically set the corresponding `status`. When `status_id` is not specified, it will be automatically set to `1`, which will set `status` to `Pending`.

*   `POST` or `PUT` orders on stores with Avalara Premium cause tax documents to be submitted. If a store has subscribed to Avalara Premium, BigCommerce automatically submits tax documents to Avalara when the order achieves a paid status. The following statuses are of the paid type:
    *   Shipped
    *   Partially Shipped
    *   Awaiting Pickup
    *   Awaiting Shipment
    *   Completed
    *   Awaiting Fulfillment
*   BigCommerce considers all statuses other than those above to be of the unpaid type, except `Refunded`, which is considered neither paid or unpaid. Orders that are created using the `POST` method, and that include a status of the paid type, cause the submission of tax documents to Avalara.


#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "customer_id": 0,
  "status_id": 11,
  "date_created": "Thu, 04 Oct 2012 03:24:40 +0000",
  "subtotal_ex_tax": 1705,
  "subtotal_inc_tax": 1915,
  "base_shipping_cost": 0,
  "shipping_cost_ex_tax": 0,
  "shipping_cost_inc_tax": 0,
  "base_handling_cost": 0,
  "handling_cost_ex_tax": 0,
  "handling_cost_inc_tax": 0,
  "base_wrapping_cost": 0,
  "wrapping_cost_ex_tax": 0,
  "wrapping_cost_inc_tax": 0,
  "total_ex_tax": 1705,
  "total_inc_tax": 1915,
  "refunded_amount": 0,
  "order_is_digital": false,
  "staff_notes": "",
  "customer_message": "",
  "discount_amount": 10,
  "billing_address": {
    "first_name": "Trisha",
    "last_name": "McLaughlin",
    "company": "",
    "street_1": "12345 W Anderson Ln",
    "street_2": "",
    "city": "Austin",
    "state": "Texas",
    "zip": "78757",
    "country": "United States",
    "country_iso2": "US",
    "phone": "",
    "email": "elsie@example.com"
  },
  "shipping_addresses": [
    {
      "first_name": "Trisha",
      "last_name": "McLaughlin",
      "company": "Acme Pty Ltd",
      "street_1": "566 Sussex St",
      "street_2": "",
      "city": "Austin",
      "state": "Texas",
      "zip": "78757",
      "country": "United States",
      "country_iso2": "US",
      "phone": "",
      "email": "elsie@example.com"
    }
  ],
  "products": [
    {
      "product_id": 32,
      "quantity": 2
    },
    {
      "product_id": 33,
      "quantity": 2,
      "product_options": [
        {
          "id": 87,
          "value": 10
        }
      ]
    },
    {
      "name": "My custom product",
      "quantity": 2,
      "price_inc_tax": 10.8,
      "price_ex_tax": 10
    }
  ],
  "external_source": "POS"
}
```


#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 100,
  "customer_id": 0,
  "date_created": "Thu, 04 Oct 2012 03:24:40 +0000",
  "date_modified": "Thu, 30 May 2013 01:48:39 +0000",
  "date_shipped": "",
  "status_id": 1,
  "status": "Pending",
  "subtotal_ex_tax": "1705.0000",
  "subtotal_inc_tax": "1915.0000",
  "subtotal_tax": "210.0000",
  "base_shipping_cost": "0.0000",
  "shipping_cost_ex_tax": "0.0000",
  "shipping_cost_inc_tax": "0.0000",
  "shipping_cost_tax": "0.0000",
  "shipping_cost_tax_class_id": 0,
  "base_handling_cost": "0.0000",
  "handling_cost_ex_tax": "0.0000",
  "handling_cost_inc_tax": "0.0000",
  "handling_cost_tax": "0.0000",
  "handling_cost_tax_class_id": 0,
  "base_wrapping_cost": "0.0000",
  "wrapping_cost_ex_tax": "0.0000",
  "wrapping_cost_inc_tax": "0.0000",
  "wrapping_cost_tax": "0.0000",
  "wrapping_cost_tax_class_id": 0,
  "total_ex_tax": "1705.0000",
  "total_inc_tax": "1915.0000",
  "total_tax": "210.0000",
  "items_total": 4,
  "items_shipped": 0,
  "payment_method": "Manual",
  "payment_provider_id": null,
  "payment_status": "",
  "refunded_amount": "0.0000",
  "order_is_digital": false,
  "store_credit_amount": "0.0000",
  "gift_certificate_amount": "0.0000",
  "ip_address": "",
  "geoip_country": "",
  "geoip_country_iso2": "",
  "currency_id": 0,
  "currency_code": null,
  "currency_exchange_rate": "0.0000000000",
  "default_currency_id": 0,
  "default_currency_code": null,
  "staff_notes": "",
  "customer_message": "",
  "discount_amount": "10.0000",
  "coupon_discount": "0.0000",
  "shipping_address_count": 1,
  "is_deleted": false,
  "billing_address": {
    "first_name": "Trisha",
    "last_name": "McLaughlin",
    "company": "",
    "street_1": "12345 W Anderson Ln",
    "street_2": "",
    "city": "Austin",
    "state": "Texas",
    "zip": "78757",
    "country": "United States",
    "country_iso2": "US",
    "phone": "",
    "email": "elsie@example.com"
  },
  "order_source": "external",
  "external_source": "POS",
  "products": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/orders/100/products.json",
    "resource": "/orders/100/products"
  },
  "shipping_addresses": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/orders/100/shippingaddresses.json",
    "resource": "/orders/100/shippingaddresses"
  },
  "coupons": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/orders/100/coupons.json",
    "resource": "/orders/100/coupons"
  }
}
```

### <span class="jumptarget"> Update an Order </span>

Updates an existing order.

*   OAuth
>`PUT /stores/{store_hash}/v2/orders/{id}`
*   Basic Auth
>`PUT /api/v2/orders/{id}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the order are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   date_modified
*   date_shipped
*   status
*   order_source
*   subtotal_tax
*   shipping_cost_tax
*   shipping_cost_tax_class_id
*   handling_cost_tax
*   handling_cost_tax_class_id
*   wrapping_cost_tax
*   wrapping_cost_tax_class_id
*   total_tax
*   payment_status
*   currency_id
*   currency_code
*   currency_exchange_rate
*   default_currency_id
*   default_currency_code
*   coupon_discount
*   store_credit_amount
*   gift_certificate_amount
*   shipping_address_count
*   coupons


<aside class="warning">
<span class="aside-warning-hd"> Known Issue </span><br><br>

If a store has automatic tax enabled, BigCommerce does not compute sales tax on orders updated via the API.
</aside>


#### <span class="jumptarget"> Changing the Order Status </span>

The `status` property cannot be edited directly, because it is generated based on the `status_id`.

Use the `status_id` property to set the order to a specific state. The list of available statuses is provided by the [Order Statuses](/api/v2#order_statuses) resource. If the store has subscribed to Avalara Premium, tax documents are submitted when the `status_id` property changes. The following table details the behavior for `PUT` operations. See also the list of [Paid Statuses](#paid-status).

| Existing Status | Status Passed | Resultant Status | Avalara Tax Document Submission |
| --- | --- | --- | --- |
| Any | None | `Pending` | None |
| Paid or `Refunded` | Paid | Paid | None |
| Unpaid or `Refunded` | Unpaid | Unpaid | None |
| Paid or `Refunded` | Unpaid | Unpaid | Tax document voided |
| Unpaid or `Refunded` | Paid | Paid | Tax document submitted |

#### <span class="jumptarget"> Calculated Fields </span>

Edits to the following properties will trigger a recalculation of the subtotal and total:

*   products
*   discount_amount
*   shipping_cost_ex_tax
*   shipping_cost_inc_tax
*   handling_cost_ex_tax
*   handling_cost_inc_tax
*   wrapping_cost_ex_tax
*   wrapping_cost_inc_tax
*   billing_address
*   shipping_addresses


<aside class="warning">
<span class="aside-warning-hd"> Limitation on Coupons/Discounts </span><br><br>

The Orders resource currently does not support coupon redemptions or discounts, apart from manual discount. You should modify the above fields only if you have created the order via the POST operation, or if you intend to manually override the subtotals and totals.
</aside>


### <span class="jumptarget"> Delete an Order </span>

Deletes an order.

*   OAuth
>`DELETE /stores/{store_hash}/v2/orders/{id}`
*   Basic Auth
>`DELETE /api/v2/orders/{id}`

<aside class="warning">
<span class="aside-warning-hd"> Deletion Blocked by Automatic Tax  </span><br><br>

Any attempts to <code>DELETE</code> an order on a store with automatic tax enabled will fail, and will return <code>405 Method not allowed</code>.
</aside>



### <span class="jumptarget"> Delete All Orders </span>

Deletes all orders in the store.

*   OAuth
>`DELETE /stores/{store_hash}/v2/orders`
*   Basic Auth
>`DELETE /api/v2/orders`
