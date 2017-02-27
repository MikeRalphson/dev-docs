---
title: BigCommerce Catalog API v3.0.0b
layout: "layout"
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - python: Python
  - ruby: Ruby
  - java: Java
toc_footers: []
includes: []
search: true
highlight_theme: darkula
---

# BigCommerce Catalog API v3.0.0b

A Swagger Document for the BigCommmerce API V3.



# Catalog

BigCommerce Catalog API Definition.

## getProducts

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products?id=0&name=string&sku=string&upc=string&price=0&weight=0&condition=0&brand_id=0&date_modified=string&date_last_imported=string&is_visible=0&is_featured=0&is_free_shipping=0&inventory_level=0&inventory_low=0&out_of_stock=0&total_sold=0&type=string&categories=0&keyword=string&keyword_context=shopper&channel_id=0&status=0&include=variants&availability=available&page=0&limit=0&direction=asc&sort=id \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products?id=0&name=string&sku=string&upc=string&price=0&weight=0&condition=0&brand_id=0&date_modified=string&date_last_imported=string&is_visible=0&is_featured=0&is_free_shipping=0&inventory_level=0&inventory_low=0&out_of_stock=0&total_sold=0&type=string&categories=0&keyword=string&keyword_context=shopper&channel_id=0&status=0&include=variants&availability=available&page=0&limit=0&direction=asc&sort=id HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products',
  method: 'get',
  data: '?id=0&name=string&sku=string&upc=string&price=0&weight=0&condition=0&brand_id=0&date_modified=string&date_last_imported=string&is_visible=0&is_featured=0&is_free_shipping=0&inventory_level=0&inventory_low=0&out_of_stock=0&total_sold=0&type=string&categories=0&keyword=string&keyword_context=shopper&channel_id=0&status=0&include=variants&availability=available&page=0&limit=0&direction=asc&sort=id',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products?id=0&name=string&sku=string&upc=string&price=0&weight=0&condition=0&brand_id=0&date_modified=string&date_last_imported=string&is_visible=0&is_featured=0&is_free_shipping=0&inventory_level=0&inventory_low=0&out_of_stock=0&total_sold=0&type=string&categories=0&keyword=string&keyword_context=shopper&channel_id=0&status=0&include=variants&availability=available&page=0&limit=0&direction=asc&sort=id',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products', params: {
  'id':'integer',
  'name':'string',
  'sku':'string',
  'upc':'string',
  'price':'number',
  'weight':'number',
  'condition':'integer',
  'brand_id':'integer',
  'date_modified':'string',
  'date_last_imported':'string',
  'is_visible':'integer',
  'is_featured':'integer',
  'is_free_shipping':'integer',
  'inventory_level':'integer',
  'inventory_low':'integer',
  'out_of_stock':'integer',
  'total_sold':'integer',
  'type':'string',
  'categories':'integer',
  'keyword':'string',
  'keyword_context':'string',
  'channel_id':'integer',
  'status':'integer',
  'include':'string',
  'availability':'string',
  'page':'integer',
  'limit':'integer',
  'direction':'string',
  'sort':'string'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products?id=0&name=string&sku=string&upc=string&price=0&weight=0&condition=0&brand_id=0&date_modified=string&date_last_imported=string&is_visible=0&is_featured=0&is_free_shipping=0&inventory_level=0&inventory_low=0&out_of_stock=0&total_sold=0&type=string&categories=0&keyword=string&keyword_context=shopper&channel_id=0&status=0&include=variants&availability=available&page=0&limit=0&direction=asc&sort=id");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products`

Returns a paginated collection of `Products` objects from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|query|integer|false|Filter items by id.
name|query|string|false|Filter items by name.
sku|query|string|false|Filter items by sku.
upc|query|string|false|Filter items by upc.
price|query|number|false|Filter items by price.
weight|query|number|false|Filter items by weight.
condition|query|integer|false|Filter items by condition.
brand_id|query|integer|false|Filter items by brand_id.
date_modified|query|string|false|Filter items by date_modified.
date_last_imported|query|string|false|Filter items by date_last_imported.
is_visible|query|integer|false|Filter items by is_visible.
is_featured|query|integer|false|Filter items by is_featured.
is_free_shipping|query|integer|false|Filter items by is_free_shipping.
inventory_level|query|integer|false|Filter items by inventory_level.
inventory_low|query|integer|false|Filter items by inventory_low; values: 1, 0.
out_of_stock|query|integer|false|Filter items by out_of_stock. To enable the filter, pass `out_of_stock`=`1`.
total_sold|query|integer|false|Filter items by total_sold.
type|query|string|false|Filter items by type: `physical` or `digital`.
categories|query|integer|false|Filter items by categories.
keyword|query|string|false|Filter items by keywords found in the name, description, sku, keywords, or brand name.
keyword_context|query|string|false|Set context for a product search.
channel_id|query|integer|false|Filter items by channel.
status|query|integer|false|Filter items by status.
include|query|string|false|Include sub-resources on a product, with a comma-separated list. Valid expansions currently include `variants`, `images`, `custom_fields`, and `bulk_pricing_rules`.
availability|query|string|false|Filter items by availability. Values are: available, disabled, preorder.
page|query|integer|false|Control the page in a limited list of products.
limit|query|integer|false|Control the items per page.
direction|query|string|false|Sort direction. Values are: asc, desc.
sort|query|string|false|Field name to sort by.


#### Enumerated Values

|Parameter|Value|
|---|---|
keyword_context|shopper|
keyword_context|merchant|
include|variants|
include|images|
include|custom_fields|
include|bulk_pricing_rules|
availability|available|
availability|disabled|
availability|preorder|
direction|asc|
direction|desc|
sort|id|
sort|name|
sort|sku|
sort|price|
sort|date_modified|
sort|date_last_imported|
sort|channel_count|
sort|inventory_level|
sort|is_visible|

##### id
Filter items by id.

##### name
Filter items by name.

##### sku
Filter items by sku.

##### upc
Filter items by upc.

##### price
Filter items by price.

##### weight
Filter items by weight.

##### condition
Filter items by condition.

##### brand_id
Filter items by brand_id.

##### date_modified
Filter items by date_modified.

##### date_last_imported
Filter items by date_last_imported.

##### is_visible
Filter items by is_visible.

##### is_featured
Filter items by is_featured.

##### is_free_shipping
Filter items by is_free_shipping.

##### inventory_level
Filter items by inventory_level.

##### inventory_low
Filter items by inventory_low; values: 1, 0.

##### out_of_stock
Filter items by out_of_stock. To enable the filter, pass `out_of_stock`=`1`.

##### total_sold
Filter items by total_sold.

##### type
Filter items by type: `physical` or `digital`.

##### categories
Filter items by categories.

##### keyword
Filter items by keywords found in the name, description, sku, keywords, or brand name.

##### keyword_context
Set context for a product search.

##### channel_id
Filter items by channel.

##### status
Filter items by status.

##### include
Include sub-resources on a product, with a comma-separated list. Valid expansions currently include `variants`, `images`, `custom_fields`, and `bulk_pricing_rules`.

##### availability
Filter items by availability. Values are: available, disabled, preorder.

##### page
Control the page in a limited list of products.

##### limit
Control the items per page.

##### direction
Sort direction. Values are: asc, desc.

##### sort
Field name to sort by.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of products and metadata.

> Example responses

````json
{
  "data": [
    {
      "name": "string",
      "type": "physical",
      "sku": "string",
      "description": "string",
      "weight": 0,
      "width": 0,
      "depth": 0,
      "height": 0,
      "price": 0,
      "cost_price": 0,
      "retail_price": 0,
      "sale_price": 0,
      "tax_class_id": 0,
      "product_tax_code": "string",
      "categories": [
        0
      ],
      "brand_id": 0,
      "inventory_level": 0,
      "inventory_warning_level": 0,
      "inventory_tracking": "none",
      "fixed_cost_shipping_price": 0,
      "is_free_shipping": true,
      "is_visible": true,
      "is_featured": true,
      "related_products": [
        0
      ],
      "warranty": "string",
      "bin_picking_number": "string",
      "layout_file": "string",
      "upc": "string",
      "search_keywords": "string",
      "availability": "available",
      "availability_description": "string",
      "gift_wrapping_options_type": "any",
      "gift_wrapping_options_list": [
        0
      ],
      "sort_order": 0,
      "condition": "New",
      "is_condition_shown": true,
      "order_quantity_minimum": 0,
      "order_quantity_maximum": 0,
      "page_title": "string",
      "meta_keywords": [
        "string"
      ],
      "meta_description": "string",
      "view_count": 0,
      "preorder_release_date": "string",
      "preorder_message": "string",
      "is_preorder_only": true,
      "is_price_hidden": true,
      "price_hidden_label": "string",
      "custom_url": {
        "url": "string",
        "is_customized": true
      },
      "bulk_pricing_rules": [
        {
          "id": 0,
          "quantity_min": 0,
          "quantity_max": 0,
          "type": "price",
          "amount": 0
        }
      ],
      "id": 0,
      "calculated_price": 0,
      "custom_fields": [
        {
          "id": 1,
          "name": "string",
          "value": "string",
          "product_id": 0
        }
      ],
      "date_created": "string",
      "date_modified": "string",
      "images": [
        {
          "is_thumbnail": true,
          "sort_order": 0,
          "description": "string",
          "id": 0,
          "product_id": 0,
          "image_file": "string",
          "url_zoom": "string",
          "url_standard": "string",
          "url_thumbnail": "string",
          "url_tiny": "string"
        }
      ],
      "videos": [
        {
          "title": "string",
          "description": "string",
          "sort_order": 1,
          "id": 0,
          "product_id": 0,
          "length": "string"
        }
      ],
      "variants": [
        {
          "cost_price": 0,
          "price": 0,
          "weight": 0,
          "purchasing_disabled": true,
          "purchasing_disabled_message": "string",
          "image_url": "string",
          "upc": "string",
          "inventory_level": 0,
          "inventory_warning_level": 0,
          "bin_picking_number": "string",
          "id": 0,
          "product_id": 0,
          "sku": "string",
          "sku_id": 0,
          "option_values": [
            {
              "option_display_name": "string",
              "label": "string",
              "id": 0,
              "option_id": 0
            }
          ]
        }
      ]
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createProduct

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "name": "string",
  "type": "physical",
  "sku": "string",
  "description": "string",
  "weight": 0,
  "width": 0,
  "depth": 0,
  "height": 0,
  "price": 0,
  "cost_price": 0,
  "retail_price": 0,
  "sale_price": 0,
  "tax_class_id": 0,
  "product_tax_code": "string",
  "categories": [
    0
  ],
  "brand_id": 0,
  "inventory_level": 0,
  "inventory_warning_level": 0,
  "inventory_tracking": "none",
  "fixed_cost_shipping_price": 0,
  "is_free_shipping": true,
  "is_visible": true,
  "is_featured": true,
  "related_products": [
    0
  ],
  "warranty": "string",
  "bin_picking_number": "string",
  "layout_file": "string",
  "upc": "string",
  "search_keywords": "string",
  "availability": "available",
  "availability_description": "string",
  "gift_wrapping_options_type": "any",
  "gift_wrapping_options_list": [
    0
  ],
  "sort_order": 0,
  "condition": "New",
  "is_condition_shown": true,
  "order_quantity_minimum": 0,
  "order_quantity_maximum": 0,
  "page_title": "string",
  "meta_keywords": [
    "string"
  ],
  "meta_description": "string",
  "view_count": 0,
  "preorder_release_date": "string",
  "preorder_message": "string",
  "is_preorder_only": true,
  "is_price_hidden": true,
  "price_hidden_label": "string",
  "custom_url": {
    "url": "string",
    "is_customized": true
  },
  "bulk_pricing_rules": [
    {
      "id": 0,
      "quantity_min": 0,
      "quantity_max": 0,
      "type": "price",
      "amount": 0
    }
  ],
  "custom_fields": [
    {
      "id": 1,
      "name": "string",
      "value": "string"
    }
  ],
  "variants": [
    {
      "cost_price": 0,
      "price": 0,
      "weight": 0,
      "purchasing_disabled": true,
      "purchasing_disabled_message": "string",
      "image_url": "string",
      "upc": "string",
      "inventory_level": 0,
      "inventory_warning_level": 0,
      "bin_picking_number": "string",
      "product_id": 0,
      "sku": "string",
      "option_values": [
        {
          "option_display_name": "string",
          "label": "string"
        }
      ]
    }
  ]
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/products`

Creates a `Product` in the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product|body|ProductPost|true|A BigCommerce `Product` object.


##### product
A BigCommerce `Product` object.

> Body parameter

````json
{
  "name": "string",
  "type": "physical",
  "sku": "string",
  "description": "string",
  "weight": 0,
  "width": 0,
  "depth": 0,
  "height": 0,
  "price": 0,
  "cost_price": 0,
  "retail_price": 0,
  "sale_price": 0,
  "tax_class_id": 0,
  "product_tax_code": "string",
  "categories": [
    0
  ],
  "brand_id": 0,
  "inventory_level": 0,
  "inventory_warning_level": 0,
  "inventory_tracking": "none",
  "fixed_cost_shipping_price": 0,
  "is_free_shipping": true,
  "is_visible": true,
  "is_featured": true,
  "related_products": [
    0
  ],
  "warranty": "string",
  "bin_picking_number": "string",
  "layout_file": "string",
  "upc": "string",
  "search_keywords": "string",
  "availability": "available",
  "availability_description": "string",
  "gift_wrapping_options_type": "any",
  "gift_wrapping_options_list": [
    0
  ],
  "sort_order": 0,
  "condition": "New",
  "is_condition_shown": true,
  "order_quantity_minimum": 0,
  "order_quantity_maximum": 0,
  "page_title": "string",
  "meta_keywords": [
    "string"
  ],
  "meta_description": "string",
  "view_count": 0,
  "preorder_release_date": "string",
  "preorder_message": "string",
  "is_preorder_only": true,
  "is_price_hidden": true,
  "price_hidden_label": "string",
  "custom_url": {
    "url": "string",
    "is_customized": true
  },
  "bulk_pricing_rules": [
    {
      "id": 0,
      "quantity_min": 0,
      "quantity_max": 0,
      "type": "price",
      "amount": 0
    }
  ],
  "custom_fields": [
    {
      "id": 1,
      "name": "string",
      "value": "string"
    }
  ],
  "variants": [
    {
      "cost_price": 0,
      "price": 0,
      "weight": 0,
      "purchasing_disabled": true,
      "purchasing_disabled_message": "string",
      "image_url": "string",
      "upc": "string",
      "inventory_level": 0,
      "inventory_warning_level": 0,
      "bin_picking_number": "string",
      "product_id": 0,
      "sku": "string",
      "option_values": [
        {
          "option_display_name": "string",
          "label": "string"
        }
      ]
    }
  ]
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A product.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|`Product` was in conflict with another product. This is the result of duplicate unique values, such as name or SKU; a missing or invalid category id, brand id, or tax_class id; or a conflicting `bulk_pricing_rule`.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|`Product` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "name": "string",
    "type": "physical",
    "sku": "string",
    "description": "string",
    "weight": 0,
    "width": 0,
    "depth": 0,
    "height": 0,
    "price": 0,
    "cost_price": 0,
    "retail_price": 0,
    "sale_price": 0,
    "tax_class_id": 0,
    "product_tax_code": "string",
    "categories": [
      0
    ],
    "brand_id": 0,
    "inventory_level": 0,
    "inventory_warning_level": 0,
    "inventory_tracking": "none",
    "fixed_cost_shipping_price": 0,
    "is_free_shipping": true,
    "is_visible": true,
    "is_featured": true,
    "related_products": [
      0
    ],
    "warranty": "string",
    "bin_picking_number": "string",
    "layout_file": "string",
    "upc": "string",
    "search_keywords": "string",
    "availability": "available",
    "availability_description": "string",
    "gift_wrapping_options_type": "any",
    "gift_wrapping_options_list": [
      0
    ],
    "sort_order": 0,
    "condition": "New",
    "is_condition_shown": true,
    "order_quantity_minimum": 0,
    "order_quantity_maximum": 0,
    "page_title": "string",
    "meta_keywords": [
      "string"
    ],
    "meta_description": "string",
    "view_count": 0,
    "preorder_release_date": "string",
    "preorder_message": "string",
    "is_preorder_only": true,
    "is_price_hidden": true,
    "price_hidden_label": "string",
    "custom_url": {
      "url": "string",
      "is_customized": true
    },
    "bulk_pricing_rules": [
      {
        "id": 0,
        "quantity_min": 0,
        "quantity_max": 0,
        "type": "price",
        "amount": 0
      }
    ],
    "id": 0,
    "calculated_price": 0,
    "custom_fields": [
      {
        "id": 1,
        "name": "string",
        "value": "string",
        "product_id": 0
      }
    ],
    "date_created": "string",
    "date_modified": "string",
    "images": [
      {
        "is_thumbnail": true,
        "sort_order": 0,
        "description": "string",
        "id": 0,
        "product_id": 0,
        "image_file": "string",
        "url_zoom": "string",
        "url_standard": "string",
        "url_thumbnail": "string",
        "url_tiny": "string"
      }
    ],
    "videos": [
      {
        "title": "string",
        "description": "string",
        "sort_order": 1,
        "id": 0,
        "product_id": 0,
        "length": "string"
      }
    ],
    "variants": [
      {
        "cost_price": 0,
        "price": 0,
        "weight": 0,
        "purchasing_disabled": true,
        "purchasing_disabled_message": "string",
        "image_url": "string",
        "upc": "string",
        "inventory_level": 0,
        "inventory_warning_level": 0,
        "bin_picking_number": "string",
        "id": 0,
        "product_id": 0,
        "sku": "string",
        "sku_id": 0,
        "option_values": [
          {
            "option_display_name": "string",
            "label": "string",
            "id": 0,
            "option_id": 0
          }
        ]
      }
    ]
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteProducts

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products?name=string&sku=string&price=0&weight=0&condition=0&brand_id=0&date_modified=string&date_last_imported=string&is_visible=0&is_featured=0&inventory_level=0&total_sold=0&type=string&categories=0&keyword=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products?name=string&sku=string&price=0&weight=0&condition=0&brand_id=0&date_modified=string&date_last_imported=string&is_visible=0&is_featured=0&inventory_level=0&total_sold=0&type=string&categories=0&keyword=string HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products',
  method: 'delete',
  data: '?name=string&sku=string&price=0&weight=0&condition=0&brand_id=0&date_modified=string&date_last_imported=string&is_visible=0&is_featured=0&inventory_level=0&total_sold=0&type=string&categories=0&keyword=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products?name=string&sku=string&price=0&weight=0&condition=0&brand_id=0&date_modified=string&date_last_imported=string&is_visible=0&is_featured=0&inventory_level=0&total_sold=0&type=string&categories=0&keyword=string',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products', params: {
  'name':'string',
  'sku':'string',
  'price':'number',
  'weight':'number',
  'condition':'integer',
  'brand_id':'integer',
  'date_modified':'string',
  'date_last_imported':'string',
  'is_visible':'integer',
  'is_featured':'integer',
  'inventory_level':'integer',
  'total_sold':'integer',
  'type':'string',
  'categories':'integer',
  'keyword':'string'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products?name=string&sku=string&price=0&weight=0&condition=0&brand_id=0&date_modified=string&date_last_imported=string&is_visible=0&is_featured=0&inventory_level=0&total_sold=0&type=string&categories=0&keyword=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/products`

Deletes one or more `Product` objects from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
name|query|string|false|Filter items by name.
sku|query|string|false|Filter items by sku.
price|query|number|false|Filter items by price.
weight|query|number|false|Filter items by weight.
condition|query|integer|false|Filter items by condition.
brand_id|query|integer|false|Filter items by brand_id.
date_modified|query|string|false|Filter items by date_modified.
date_last_imported|query|string|false|Filter items by date_last_imported.
is_visible|query|integer|false|Filter items by is_visible.
is_featured|query|integer|false|Filter items by is_featured.
inventory_level|query|integer|false|Filter items by inventory_level.
total_sold|query|integer|false|Filter items by total_sold.
type|query|string|false|Filter items by type: `physical` or `digital`.
categories|query|integer|false|Filter items by categories.
keyword|query|string|false|Filter items by keywords found in the name, description, sku, keywords, or brand name.


##### name
Filter items by name.

##### sku
Filter items by sku.

##### price
Filter items by price.

##### weight
Filter items by weight.

##### condition
Filter items by condition.

##### brand_id
Filter items by brand_id.

##### date_modified
Filter items by date_modified.

##### date_last_imported
Filter items by date_last_imported.

##### is_visible
Filter items by is_visible.

##### is_featured
Filter items by is_featured.

##### inventory_level
Filter items by inventory_level.

##### total_sold
Filter items by total_sold.

##### type
Filter items by type: `physical` or `digital`.

##### categories
Filter items by categories.

##### keyword
Filter items by keywords found in the name, description, sku, keywords, or brand name.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getProductById

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}?include=variants \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}?include=variants HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}',
  method: 'get',
  data: '?include=variants',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}?include=variants',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}', params: {
  'include':'string',
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}?include=variants");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}`

Returns a `Product` from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
include|query|string|false|Include sub-resources on a product, with a comma-separated list. Valid expansions currently include `variants`, `images`, `custom_fields`, and `bulk_pricing_rules`.


#### Enumerated Values

|Parameter|Value|
|---|---|
include|variants|
include|images|
include|custom_fields|
include|bulk_pricing_rules|

##### product_id
The ID of the `Product` the resource belongs to.

##### include
Include sub-resources on a product, with a comma-separated list. Valid expansions currently include `variants`, `images`, `custom_fields`, and `bulk_pricing_rules`.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A product.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "name": "string",
    "type": "physical",
    "sku": "string",
    "description": "string",
    "weight": 0,
    "width": 0,
    "depth": 0,
    "height": 0,
    "price": 0,
    "cost_price": 0,
    "retail_price": 0,
    "sale_price": 0,
    "tax_class_id": 0,
    "product_tax_code": "string",
    "categories": [
      0
    ],
    "brand_id": 0,
    "inventory_level": 0,
    "inventory_warning_level": 0,
    "inventory_tracking": "none",
    "fixed_cost_shipping_price": 0,
    "is_free_shipping": true,
    "is_visible": true,
    "is_featured": true,
    "related_products": [
      0
    ],
    "warranty": "string",
    "bin_picking_number": "string",
    "layout_file": "string",
    "upc": "string",
    "search_keywords": "string",
    "availability": "available",
    "availability_description": "string",
    "gift_wrapping_options_type": "any",
    "gift_wrapping_options_list": [
      0
    ],
    "sort_order": 0,
    "condition": "New",
    "is_condition_shown": true,
    "order_quantity_minimum": 0,
    "order_quantity_maximum": 0,
    "page_title": "string",
    "meta_keywords": [
      "string"
    ],
    "meta_description": "string",
    "view_count": 0,
    "preorder_release_date": "string",
    "preorder_message": "string",
    "is_preorder_only": true,
    "is_price_hidden": true,
    "price_hidden_label": "string",
    "custom_url": {
      "url": "string",
      "is_customized": true
    },
    "bulk_pricing_rules": [
      {
        "id": 0,
        "quantity_min": 0,
        "quantity_max": 0,
        "type": "price",
        "amount": 0
      }
    ],
    "id": 0,
    "calculated_price": 0,
    "custom_fields": [
      {
        "id": 1,
        "name": "string",
        "value": "string",
        "product_id": 0
      }
    ],
    "date_created": "string",
    "date_modified": "string",
    "images": [
      {
        "is_thumbnail": true,
        "sort_order": 0,
        "description": "string",
        "id": 0,
        "product_id": 0,
        "image_file": "string",
        "url_zoom": "string",
        "url_standard": "string",
        "url_thumbnail": "string",
        "url_tiny": "string"
      }
    ],
    "videos": [
      {
        "title": "string",
        "description": "string",
        "sort_order": 1,
        "id": 0,
        "product_id": 0,
        "length": "string"
      }
    ],
    "variants": [
      {
        "cost_price": 0,
        "price": 0,
        "weight": 0,
        "purchasing_disabled": true,
        "purchasing_disabled_message": "string",
        "image_url": "string",
        "upc": "string",
        "inventory_level": 0,
        "inventory_warning_level": 0,
        "bin_picking_number": "string",
        "id": 0,
        "product_id": 0,
        "sku": "string",
        "sku_id": 0,
        "option_values": [
          {
            "option_display_name": "string",
            "label": "string",
            "id": 0,
            "option_id": 0
          }
        ]
      }
    ]
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateProduct

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "name": "string",
  "type": "physical",
  "sku": "string",
  "description": "string",
  "weight": 0,
  "width": 0,
  "depth": 0,
  "height": 0,
  "price": 0,
  "cost_price": 0,
  "retail_price": 0,
  "sale_price": 0,
  "tax_class_id": 0,
  "product_tax_code": "string",
  "categories": [
    0
  ],
  "brand_id": 0,
  "inventory_level": 0,
  "inventory_warning_level": 0,
  "inventory_tracking": "none",
  "fixed_cost_shipping_price": 0,
  "is_free_shipping": true,
  "is_visible": true,
  "is_featured": true,
  "related_products": [
    0
  ],
  "warranty": "string",
  "bin_picking_number": "string",
  "layout_file": "string",
  "upc": "string",
  "search_keywords": "string",
  "availability": "available",
  "availability_description": "string",
  "gift_wrapping_options_type": "any",
  "gift_wrapping_options_list": [
    0
  ],
  "sort_order": 0,
  "condition": "New",
  "is_condition_shown": true,
  "order_quantity_minimum": 0,
  "order_quantity_maximum": 0,
  "page_title": "string",
  "meta_keywords": [
    "string"
  ],
  "meta_description": "string",
  "view_count": 0,
  "preorder_release_date": "string",
  "preorder_message": "string",
  "is_preorder_only": true,
  "is_price_hidden": true,
  "price_hidden_label": "string",
  "custom_url": {
    "url": "string",
    "is_customized": true
  },
  "bulk_pricing_rules": [
    {
      "id": 0,
      "quantity_min": 0,
      "quantity_max": 0,
      "type": "price",
      "amount": 0
    }
  ],
  "id": 0,
  "custom_fields": [
    {
      "id": 1,
      "name": "string",
      "value": "string"
    }
  ],
  "variants": [
    {
      "cost_price": 0,
      "price": 0,
      "weight": 0,
      "purchasing_disabled": true,
      "purchasing_disabled_message": "string",
      "image_url": "string",
      "upc": "string",
      "inventory_level": 0,
      "inventory_warning_level": 0,
      "bin_picking_number": "string",
      "product_id": 0,
      "sku": "string"
    }
  ]
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/products/{product_id}`

Updates a `Product` in the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
product|body|ProductPut|true|A BigCommerce `Product` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### product
A BigCommerce `Product` object.

> Body parameter

````json
{
  "name": "string",
  "type": "physical",
  "sku": "string",
  "description": "string",
  "weight": 0,
  "width": 0,
  "depth": 0,
  "height": 0,
  "price": 0,
  "cost_price": 0,
  "retail_price": 0,
  "sale_price": 0,
  "tax_class_id": 0,
  "product_tax_code": "string",
  "categories": [
    0
  ],
  "brand_id": 0,
  "inventory_level": 0,
  "inventory_warning_level": 0,
  "inventory_tracking": "none",
  "fixed_cost_shipping_price": 0,
  "is_free_shipping": true,
  "is_visible": true,
  "is_featured": true,
  "related_products": [
    0
  ],
  "warranty": "string",
  "bin_picking_number": "string",
  "layout_file": "string",
  "upc": "string",
  "search_keywords": "string",
  "availability": "available",
  "availability_description": "string",
  "gift_wrapping_options_type": "any",
  "gift_wrapping_options_list": [
    0
  ],
  "sort_order": 0,
  "condition": "New",
  "is_condition_shown": true,
  "order_quantity_minimum": 0,
  "order_quantity_maximum": 0,
  "page_title": "string",
  "meta_keywords": [
    "string"
  ],
  "meta_description": "string",
  "view_count": 0,
  "preorder_release_date": "string",
  "preorder_message": "string",
  "is_preorder_only": true,
  "is_price_hidden": true,
  "price_hidden_label": "string",
  "custom_url": {
    "url": "string",
    "is_customized": true
  },
  "bulk_pricing_rules": [
    {
      "id": 0,
      "quantity_min": 0,
      "quantity_max": 0,
      "type": "price",
      "amount": 0
    }
  ],
  "id": 0,
  "custom_fields": [
    {
      "id": 1,
      "name": "string",
      "value": "string"
    }
  ],
  "variants": [
    {
      "cost_price": 0,
      "price": 0,
      "weight": 0,
      "purchasing_disabled": true,
      "purchasing_disabled_message": "string",
      "image_url": "string",
      "upc": "string",
      "inventory_level": 0,
      "inventory_warning_level": 0,
      "bin_picking_number": "string",
      "product_id": 0,
      "sku": "string"
    }
  ]
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A product.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|`Product` was in conflict with another product. This is the result of duplicate unique values such as name or SKU, a missing category, brand, or tax_class that the product is being associate to, or a conflicting bulk pricing rule.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|`Product` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "name": "string",
    "type": "physical",
    "sku": "string",
    "description": "string",
    "weight": 0,
    "width": 0,
    "depth": 0,
    "height": 0,
    "price": 0,
    "cost_price": 0,
    "retail_price": 0,
    "sale_price": 0,
    "tax_class_id": 0,
    "product_tax_code": "string",
    "categories": [
      0
    ],
    "brand_id": 0,
    "inventory_level": 0,
    "inventory_warning_level": 0,
    "inventory_tracking": "none",
    "fixed_cost_shipping_price": 0,
    "is_free_shipping": true,
    "is_visible": true,
    "is_featured": true,
    "related_products": [
      0
    ],
    "warranty": "string",
    "bin_picking_number": "string",
    "layout_file": "string",
    "upc": "string",
    "search_keywords": "string",
    "availability": "available",
    "availability_description": "string",
    "gift_wrapping_options_type": "any",
    "gift_wrapping_options_list": [
      0
    ],
    "sort_order": 0,
    "condition": "New",
    "is_condition_shown": true,
    "order_quantity_minimum": 0,
    "order_quantity_maximum": 0,
    "page_title": "string",
    "meta_keywords": [
      "string"
    ],
    "meta_description": "string",
    "view_count": 0,
    "preorder_release_date": "string",
    "preorder_message": "string",
    "is_preorder_only": true,
    "is_price_hidden": true,
    "price_hidden_label": "string",
    "custom_url": {
      "url": "string",
      "is_customized": true
    },
    "bulk_pricing_rules": [
      {
        "id": 0,
        "quantity_min": 0,
        "quantity_max": 0,
        "type": "price",
        "amount": 0
      }
    ],
    "id": 0,
    "calculated_price": 0,
    "custom_fields": [
      {
        "id": 1,
        "name": "string",
        "value": "string",
        "product_id": 0
      }
    ],
    "date_created": "string",
    "date_modified": "string",
    "images": [
      {
        "is_thumbnail": true,
        "sort_order": 0,
        "description": "string",
        "id": 0,
        "product_id": 0,
        "image_file": "string",
        "url_zoom": "string",
        "url_standard": "string",
        "url_thumbnail": "string",
        "url_tiny": "string"
      }
    ],
    "videos": [
      {
        "title": "string",
        "description": "string",
        "sort_order": 1,
        "id": 0,
        "product_id": 0,
        "length": "string"
      }
    ],
    "variants": [
      {
        "cost_price": 0,
        "price": 0,
        "weight": 0,
        "purchasing_disabled": true,
        "purchasing_disabled_message": "string",
        "image_url": "string",
        "upc": "string",
        "inventory_level": 0,
        "inventory_warning_level": 0,
        "bin_picking_number": "string",
        "id": 0,
        "product_id": 0,
        "sku": "string",
        "sku_id": 0,
        "option_values": [
          {
            "option_display_name": "string",
            "label": "string",
            "id": 0,
            "option_id": 0
          }
        ]
      }
    ]
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteProductById

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/products/{product_id}`

Deletes a `Product` object from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.


##### product_id
The ID of the `Product` the resource belongs to.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getProductImages

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/images`

Gets all images on a product.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.


##### product_id
The ID of the `Product` the resource belongs to.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of product images and metadata.

204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|There are not any images on this product.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The product ID does not exist.

> Example responses

````json
{
  "data": [
    {
      "is_thumbnail": true,
      "sort_order": 0,
      "description": "string",
      "id": 0,
      "product_id": 0,
      "image_file": "string",
      "url_zoom": "string",
      "url_standard": "string",
      "url_thumbnail": "string",
      "url_tiny": "string"
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createProductImage

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "is_thumbnail": true,
  "sort_order": 0,
  "description": "string",
  "image_url": "string",
  "image_file": "string"
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/products/{product_id}/images`

Creates an image on a product. Publically accessible URLs and files (form post) are valid parameters.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
productImage|body|ProductImagePost|true|A BigCommerce `ProductImage` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### productImage
A BigCommerce `ProductImage` object.

> Body parameter

````json
{
  "is_thumbnail": true,
  "sort_order": 0,
  "description": "string",
  "image_url": "string",
  "image_file": "string"
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A product image.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The product ID does not exist.

> Example responses

````json
{
  "data": {
    "is_thumbnail": true,
    "sort_order": 0,
    "description": "string",
    "id": 0,
    "product_id": 0,
    "image_file": "string",
    "url_zoom": "string",
    "url_standard": "string",
    "url_thumbnail": "string",
    "url_tiny": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## getProductImageById

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/images/{image_id}`

Gets image on a product.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
image_id|path|integer|true|The ID of the `Image` that is being operated on.


##### product_id
The ID of the `Product` the resource belongs to.

##### image_id
The ID of the `Image` that is being operated on.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of product images and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "is_thumbnail": true,
    "sort_order": 0,
    "description": "string",
    "id": 0,
    "product_id": 0,
    "image_file": "string",
    "url_zoom": "string",
    "url_standard": "string",
    "url_thumbnail": "string",
    "url_tiny": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateProductImage

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "is_thumbnail": true,
  "sort_order": 0,
  "description": "string"
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/products/{product_id}/images/{image_id}`

Updates an image on a product. Publicly accessible URLs and files (form post) are valid parameters.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
image_id|path|integer|true|The ID of the `Image` that is being operated on.
productImage|body|ProductImagePut|true|A BigCommerce `ProductImage` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### image_id
The ID of the `Image` that is being operated on.

##### productImage
A BigCommerce `ProductImage` object.

> Body parameter

````json
{
  "is_thumbnail": true,
  "sort_order": 0,
  "description": "string"
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A product image.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "is_thumbnail": true,
    "sort_order": 0,
    "description": "string",
    "id": 0,
    "product_id": 0,
    "image_file": "string",
    "url_zoom": "string",
    "url_standard": "string",
    "url_thumbnail": "string",
    "url_tiny": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteProductImage

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/images/{image_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/products/{product_id}/images/{image_id}`

Deletes a `ProductImage` in the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
image_id|path|integer|true|The ID of the `Image` that is being operated on.


##### product_id
The ID of the `Product` the resource belongs to.

##### image_id
The ID of the `Image` that is being operated on.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getProductVideos

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/videos`

Gets all videos on a product.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.


##### product_id
The ID of the `Product` the resource belongs to.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of product videos and metadata.

> Example responses

````json
{
  "data": [
    {
      "title": "string",
      "description": "string",
      "sort_order": 1,
      "id": 0,
      "product_id": 0,
      "length": "string"
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createProductVideo

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "title": "string",
  "description": "string",
  "sort_order": 1,
  "id": 0,
  "product_id": 0
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/products/{product_id}/videos`

Creates a video on a product, using a video ID from YouTube.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
productVideo|body|ProductVideoPost|true|A BigCommerce `ProductVideo` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### productVideo
A BigCommerce `ProductVideo` object.

> Body parameter

````json
{
  "title": "string",
  "description": "string",
  "sort_order": 1,
  "id": 0,
  "product_id": 0
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A product video.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "title": "string",
    "description": "string",
    "sort_order": 1,
    "id": 0,
    "product_id": 0,
    "length": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## getProductVideoById

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/videos/{video_id}`

Gets video on a product.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
video_id|path|string|true|The ID of the `Video` being operated on.


##### product_id
The ID of the `Product` the resource belongs to.

##### video_id
The ID of the `Video` being operated on.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of product videos and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "title": "string",
    "description": "string",
    "sort_order": 1,
    "id": 0,
    "product_id": 0,
    "length": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateProductVideo

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "title": "string",
  "description": "string",
  "sort_order": 1
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/products/{product_id}/videos/{video_id}`

Updates a video on a product.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
video_id|path|string|true|The ID of the `Video` being operated on.
productVideo|body|ProductVideoPut|true|A BigCommerce `ProductVideo` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### video_id
The ID of the `Video` being operated on.

##### productVideo
A BigCommerce `ProductVideo` object.

> Body parameter

````json
{
  "title": "string",
  "description": "string",
  "sort_order": 1
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A product video.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "title": "string",
    "description": "string",
    "sort_order": 1,
    "id": 0,
    "product_id": 0,
    "length": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteProductVideo

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/videos/{video_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/products/{product_id}/videos/{video_id}`

Deletes a `ProductVideo` in the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
video_id|path|string|true|The ID of the `Video` being operated on.


##### product_id
The ID of the `Product` the resource belongs to.

##### video_id
The ID of the `Video` being operated on.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getVariantsByProductId

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants?page=0&limit=0 \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants?page=0&limit=0 HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants',
  method: 'get',
  data: '?page=0&limit=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants?page=0&limit=0',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants', params: {
  'page':'integer',
  'limit':'integer',
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants?page=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/variants`

Returns a `Variant` object list from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
page|query|integer|false|Control the page in a limited list of products.
limit|query|integer|false|Control the items per page.


##### product_id
The ID of the `Product` the resource belongs to.

##### page
Control the page in a limited list of products.

##### limit
Control the items per page.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of variants and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": [
    {
      "cost_price": 0,
      "price": 0,
      "weight": 0,
      "purchasing_disabled": true,
      "purchasing_disabled_message": "string",
      "image_url": "string",
      "upc": "string",
      "inventory_level": 0,
      "inventory_warning_level": 0,
      "bin_picking_number": "string",
      "id": 0,
      "product_id": 0,
      "sku": "string",
      "sku_id": 0,
      "option_values": [
        {
          "option_display_name": "string",
          "label": "string",
          "id": 0,
          "option_id": 0
        }
      ]
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createVariant

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "cost_price": 0,
  "price": 0,
  "weight": 0,
  "purchasing_disabled": true,
  "purchasing_disabled_message": "string",
  "image_url": "string",
  "upc": "string",
  "inventory_level": 0,
  "inventory_warning_level": 0,
  "bin_picking_number": "string",
  "product_id": 0,
  "sku": "string",
  "option_values": [
    {
      "id": 0,
      "option_id": 0
    }
  ]
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/products/{product_id}/variants`

Creates a `Variant` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
Variant|body|VariantPost|true|`Variant` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### Variant
`Variant` object.

> Body parameter

````json
{
  "cost_price": 0,
  "price": 0,
  "weight": 0,
  "purchasing_disabled": true,
  "purchasing_disabled_message": "string",
  "image_url": "string",
  "upc": "string",
  "inventory_level": 0,
  "inventory_warning_level": 0,
  "bin_picking_number": "string",
  "product_id": 0,
  "sku": "string",
  "option_values": [
    {
      "id": 0,
      "option_id": 0
    }
  ]
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A variant and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "cost_price": 0,
    "price": 0,
    "weight": 0,
    "purchasing_disabled": true,
    "purchasing_disabled_message": "string",
    "image_url": "string",
    "upc": "string",
    "inventory_level": 0,
    "inventory_warning_level": 0,
    "bin_picking_number": "string",
    "id": 0,
    "product_id": 0,
    "sku": "string",
    "sku_id": 0,
    "option_values": [
      {
        "option_display_name": "string",
        "label": "string",
        "id": 0,
        "option_id": 0
      }
    ]
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## getVariantById

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/variants/{variant_id}`

Gets a `Variant` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
variant_id|path|number|true|The ID of the `Variant` to which the resource belongs.


##### product_id
The ID of the `Product` the resource belongs to.

##### variant_id
The ID of the `Variant` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A variant and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "cost_price": 0,
    "price": 0,
    "weight": 0,
    "purchasing_disabled": true,
    "purchasing_disabled_message": "string",
    "image_url": "string",
    "upc": "string",
    "inventory_level": 0,
    "inventory_warning_level": 0,
    "bin_picking_number": "string",
    "id": 0,
    "product_id": 0,
    "sku": "string",
    "sku_id": 0,
    "option_values": [
      {
        "option_display_name": "string",
        "label": "string",
        "id": 0,
        "option_id": 0
      }
    ]
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateVariant

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "cost_price": 0,
  "price": 0,
  "weight": 0,
  "purchasing_disabled": true,
  "purchasing_disabled_message": "string",
  "image_url": "string",
  "upc": "string",
  "inventory_level": 0,
  "inventory_warning_level": 0,
  "bin_picking_number": "string",
  "id": 0
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/products/{product_id}/variants/{variant_id}`

Updates a `Variant` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
variant_id|path|number|true|The ID of the `Variant` to which the resource belongs.
Variant|body|VariantPut|true|A `Variant` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### variant_id
The ID of the `Variant` to which the resource belongs.

##### Variant
A `Variant` object.

> Body parameter

````json
{
  "cost_price": 0,
  "price": 0,
  "weight": 0,
  "purchasing_disabled": true,
  "purchasing_disabled_message": "string",
  "image_url": "string",
  "upc": "string",
  "inventory_level": 0,
  "inventory_warning_level": 0,
  "bin_picking_number": "string",
  "id": 0
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A variant and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "cost_price": 0,
    "price": 0,
    "weight": 0,
    "purchasing_disabled": true,
    "purchasing_disabled_message": "string",
    "image_url": "string",
    "upc": "string",
    "inventory_level": 0,
    "inventory_warning_level": 0,
    "bin_picking_number": "string",
    "id": 0,
    "product_id": 0,
    "sku": "string",
    "sku_id": 0,
    "option_values": [
      {
        "option_display_name": "string",
        "label": "string",
        "id": 0,
        "option_id": 0
      }
    ]
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteVariantById

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/products/{product_id}/variants/{variant_id}`

Deletes a `Variant`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
variant_id|path|number|true|The ID of the `Variant` to which the resource belongs.


##### product_id
The ID of the `Product` the resource belongs to.

##### variant_id
The ID of the `Variant` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getVariantMetafieldsByProductIdAndVariantId

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields?page=0&limit=0&key=string&namespace=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields?page=0&limit=0&key=string&namespace=string HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields',
  method: 'get',
  data: '?page=0&limit=0&key=string&namespace=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields?page=0&limit=0&key=string&namespace=string',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields', params: {
  'page':'integer',
  'limit':'integer',
  'key':'string',
  'namespace':'string',
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields?page=0&limit=0&key=string&namespace=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/variants/{variant_id}/metafields`

Gets a `Metafield` object list, by product_id and variant_id.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
variant_id|path|number|true|The ID of the `Variant` to which the resource belongs.
page|query|integer|false|Control the page in a limited list of products.
limit|query|integer|false|Control the items per page.
key|query|string|false|Filter based on a metafield's key.
namespace|query|string|false|Filter based on a metafield's key.


##### product_id
The ID of the `Product` the resource belongs to.

##### variant_id
The ID of the `Variant` to which the resource belongs.

##### page
Control the page in a limited list of products.

##### limit
Control the items per page.

##### key
Filter based on a metafield's key.

##### namespace
Filter based on a metafield's key.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of metafields and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": [
    {
      "permission_set": "app_only",
      "namespace": "string",
      "key": "string",
      "value": "string",
      "description": "string",
      "resource_type": "category",
      "resource_id": 0,
      "id": 0,
      "created_at": "2017-02-27T18:29:36Z",
      "updated_at": "2017-02-27T18:29:36Z"
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createVariantMetafield

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/products/{product_id}/variants/{variant_id}/metafields`

Creates a variant `Metafield`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
variant_id|path|number|true|The ID of the `Variant` to which the resource belongs.
Metafield|body|MetafieldPost|true|A `Metafield` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### variant_id
The ID of the `Variant` to which the resource belongs.

##### Metafield
A `Metafield` object.

> Body parameter

````json
{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Metafield` object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `Metafield` was in conflict with another `Metafield`. This can be the result of duplicate unique-key combinations of the app's client id, namespace, key, resource_type, and resource_id.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `Metafield` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "permission_set": "app_only",
    "namespace": "string",
    "key": "string",
    "value": "string",
    "description": "string",
    "resource_type": "category",
    "resource_id": 0,
    "id": 0,
    "created_at": "2017-02-27T18:29:36Z",
    "updated_at": "2017-02-27T18:29:36Z"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## getVariantMetafieldByProductIdAndVariantId

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}`

Gets a `Metafield`, by product_id and variant_id.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
metafield_id|path|number|true|The ID of the `Metafield`.
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
variant_id|path|number|true|The ID of the `Variant` to which the resource belongs.


##### metafield_id
The ID of the `Metafield`.

##### product_id
The ID of the `Product` the resource belongs to.

##### variant_id
The ID of the `Variant` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Metafield` object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "permission_set": "app_only",
    "namespace": "string",
    "key": "string",
    "value": "string",
    "description": "string",
    "resource_type": "category",
    "resource_id": 0,
    "id": 0,
    "created_at": "2017-02-27T18:29:36Z",
    "updated_at": "2017-02-27T18:29:36Z"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateVariantMetafield

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0,
  "id": 0
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}`

Updates a `Metafield` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
metafield_id|path|number|true|The ID of the `Metafield`.
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
variant_id|path|number|true|The ID of the `Variant` to which the resource belongs.
Metafield|body|MetafieldPut|true|A `Metafield` object.


##### metafield_id
The ID of the `Metafield`.

##### product_id
The ID of the `Product` the resource belongs to.

##### variant_id
The ID of the `Variant` to which the resource belongs.

##### Metafield
A `Metafield` object.

> Body parameter

````json
{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0,
  "id": 0
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A metafield and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "permission_set": "app_only",
    "namespace": "string",
    "key": "string",
    "value": "string",
    "description": "string",
    "resource_type": "category",
    "resource_id": 0,
    "id": 0,
    "created_at": "2017-02-27T18:29:36Z",
    "updated_at": "2017-02-27T18:29:36Z"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteVariantMetafieldById

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}`

Deletes a `Metafield`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
metafield_id|path|number|true|The ID of the `Metafield`.
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
variant_id|path|number|true|The ID of the `Variant` to which the resource belongs.


##### metafield_id
The ID of the `Metafield`.

##### product_id
The ID of the `Product` the resource belongs to.

##### variant_id
The ID of the `Variant` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## createVariantImage

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/image \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: multipart/form-data'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/image HTTP/1.1
Host: api.bigcommerce.com
Content-Type: multipart/form-data
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'multipart/form-data'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/image',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'multipart/form-data'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/image',
{ 
  method: 'POST'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'multipart/form-data'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/image', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'multipart/form-data'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/image', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/variants/{variant_id}/image");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/products/{product_id}/variants/{variant_id}/image`

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
variant_id|path|number|true|The ID of the `Variant` to which the resource belongs.
image_file|formData|file|true|An image file. Supported MIME types include GIF, JPEG, and PNG.


##### product_id
The ID of the `Product` the resource belongs to.

##### variant_id
The ID of the `Variant` to which the resource belongs.

##### image_file
An image file. Supported MIME types include GIF, JPEG, and PNG.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A ResourceImage and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Image was not valid. This is the result of a missing image_file field or an incorrect file type. See the response for more details.

> Example responses

````json
{
  "data": {
    "image_url": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## getOptions

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/options`

Gets an array of `Option` objects.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.


##### product_id
The ID of the `Product` the resource belongs to.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of options and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": [
    {
      "id": 0,
      "product_id": 0,
      "display_name": "string",
      "type": "radio_buttons",
      "config": {
        "default_value": "string",
        "checked_by_default": true,
        "checkbox_label": "string",
        "date_limited": true,
        "date_limit_mode": "earliest",
        "date_earliest_value": "2017-02-27",
        "date_latest_value": "2017-02-27",
        "file_types_mode": "specific",
        "file_types_supported": [
          "string"
        ],
        "file_types_other": [
          "string"
        ],
        "file_max_size": 0,
        "text_characters_limited": true,
        "text_min_length": 0,
        "text_max_length": 0,
        "text_lines_limited": true,
        "text_max_lines": 0,
        "number_limited": true,
        "number_limit_mode": "lowest",
        "number_lowest_value": 0,
        "number_highest_value": 0,
        "number_integers_only": true,
        "product_list_adjusts_inventory": true,
        "product_list_adjusts_pricing": true,
        "product_list_shipping_calc": "none"
      },
      "option_values": [
        {
          "id": 0,
          "is_default": true,
          "label": "string",
          "sort_order": 0,
          "value_data": {}
        }
      ],
      "name": "string"
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createOption

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "id": 0,
  "product_id": 0,
  "display_name": "string",
  "type": "radio_buttons",
  "config": {
    "default_value": "string",
    "checked_by_default": true,
    "checkbox_label": "string",
    "date_limited": true,
    "date_limit_mode": "earliest",
    "date_earliest_value": "2017-02-27",
    "date_latest_value": "2017-02-27",
    "file_types_mode": "specific",
    "file_types_supported": [
      "string"
    ],
    "file_types_other": [
      "string"
    ],
    "file_max_size": 0,
    "text_characters_limited": true,
    "text_min_length": 0,
    "text_max_length": 0,
    "text_lines_limited": true,
    "text_max_lines": 0,
    "number_limited": true,
    "number_limit_mode": "lowest",
    "number_lowest_value": 0,
    "number_highest_value": 0,
    "number_integers_only": true,
    "product_list_adjusts_inventory": true,
    "product_list_adjusts_pricing": true,
    "product_list_shipping_calc": "none"
  },
  "option_values": [
    {
      "id": 0,
      "is_default": true,
      "label": "string",
      "sort_order": 0,
      "value_data": {}
    }
  ]
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/products/{product_id}/options`

Creates an `Option`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
Option|body|OptionPost|true|An `Option` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### Option
An `Option` object.

> Body parameter

````json
{
  "id": 0,
  "product_id": 0,
  "display_name": "string",
  "type": "radio_buttons",
  "config": {
    "default_value": "string",
    "checked_by_default": true,
    "checkbox_label": "string",
    "date_limited": true,
    "date_limit_mode": "earliest",
    "date_earliest_value": "2017-02-27",
    "date_latest_value": "2017-02-27",
    "file_types_mode": "specific",
    "file_types_supported": [
      "string"
    ],
    "file_types_other": [
      "string"
    ],
    "file_max_size": 0,
    "text_characters_limited": true,
    "text_min_length": 0,
    "text_max_length": 0,
    "text_lines_limited": true,
    "text_max_lines": 0,
    "number_limited": true,
    "number_limit_mode": "lowest",
    "number_lowest_value": 0,
    "number_highest_value": 0,
    "number_integers_only": true,
    "product_list_adjusts_inventory": true,
    "product_list_adjusts_pricing": true,
    "product_list_shipping_calc": "none"
  },
  "option_values": [
    {
      "id": 0,
      "is_default": true,
      "label": "string",
      "sort_order": 0,
      "value_data": {}
    }
  ]
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An `Option` object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Option was in conflict with another option. This is the result of duplicate unique fields, such as `name`.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Option was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "id": 0,
    "product_id": 0,
    "display_name": "string",
    "type": "radio_buttons",
    "config": {
      "default_value": "string",
      "checked_by_default": true,
      "checkbox_label": "string",
      "date_limited": true,
      "date_limit_mode": "earliest",
      "date_earliest_value": "2017-02-27",
      "date_latest_value": "2017-02-27",
      "file_types_mode": "specific",
      "file_types_supported": [
        "string"
      ],
      "file_types_other": [
        "string"
      ],
      "file_max_size": 0,
      "text_characters_limited": true,
      "text_min_length": 0,
      "text_max_length": 0,
      "text_lines_limited": true,
      "text_max_lines": 0,
      "number_limited": true,
      "number_limit_mode": "lowest",
      "number_lowest_value": 0,
      "number_highest_value": 0,
      "number_integers_only": true,
      "product_list_adjusts_inventory": true,
      "product_list_adjusts_pricing": true,
      "product_list_shipping_calc": "none"
    },
    "option_values": [
      {
        "id": 0,
        "is_default": true,
        "label": "string",
        "sort_order": 0,
        "value_data": {}
      }
    ],
    "name": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## getOptionById

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/options/{option_id}`

Gets `Option` object by product ID and option id.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
option_id|path|integer|true|The ID of the `Option`.


##### product_id
The ID of the `Product` the resource belongs to.

##### option_id
The ID of the `Option`.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An `Option` object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "id": 0,
    "product_id": 0,
    "display_name": "string",
    "type": "radio_buttons",
    "config": {
      "default_value": "string",
      "checked_by_default": true,
      "checkbox_label": "string",
      "date_limited": true,
      "date_limit_mode": "earliest",
      "date_earliest_value": "2017-02-27",
      "date_latest_value": "2017-02-27",
      "file_types_mode": "specific",
      "file_types_supported": [
        "string"
      ],
      "file_types_other": [
        "string"
      ],
      "file_max_size": 0,
      "text_characters_limited": true,
      "text_min_length": 0,
      "text_max_length": 0,
      "text_lines_limited": true,
      "text_max_lines": 0,
      "number_limited": true,
      "number_limit_mode": "lowest",
      "number_lowest_value": 0,
      "number_highest_value": 0,
      "number_integers_only": true,
      "product_list_adjusts_inventory": true,
      "product_list_adjusts_pricing": true,
      "product_list_shipping_calc": "none"
    },
    "option_values": [
      {
        "id": 0,
        "is_default": true,
        "label": "string",
        "sort_order": 0,
        "value_data": {}
      }
    ],
    "name": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateOption

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "id": 0,
  "product_id": 0,
  "display_name": "string",
  "type": "radio_buttons",
  "config": {
    "default_value": "string",
    "checked_by_default": true,
    "checkbox_label": "string",
    "date_limited": true,
    "date_limit_mode": "earliest",
    "date_earliest_value": "2017-02-27",
    "date_latest_value": "2017-02-27",
    "file_types_mode": "specific",
    "file_types_supported": [
      "string"
    ],
    "file_types_other": [
      "string"
    ],
    "file_max_size": 0,
    "text_characters_limited": true,
    "text_min_length": 0,
    "text_max_length": 0,
    "text_lines_limited": true,
    "text_max_lines": 0,
    "number_limited": true,
    "number_limit_mode": "lowest",
    "number_lowest_value": 0,
    "number_highest_value": 0,
    "number_integers_only": true,
    "product_list_adjusts_inventory": true,
    "product_list_adjusts_pricing": true,
    "product_list_shipping_calc": "none"
  },
  "option_values": [
    {
      "id": 0,
      "is_default": true,
      "label": "string",
      "sort_order": 0,
      "value_data": {}
    }
  ]
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/products/{product_id}/options/{option_id}`

Updates a Product's `Option`, based on the product_id and option_id.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
option_id|path|integer|true|The ID of the `Option`.
option|body|OptionPut|true|A BigCommerce `Option` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### option_id
The ID of the `Option`.

##### option
A BigCommerce `Option` object.

> Body parameter

````json
{
  "id": 0,
  "product_id": 0,
  "display_name": "string",
  "type": "radio_buttons",
  "config": {
    "default_value": "string",
    "checked_by_default": true,
    "checkbox_label": "string",
    "date_limited": true,
    "date_limit_mode": "earliest",
    "date_earliest_value": "2017-02-27",
    "date_latest_value": "2017-02-27",
    "file_types_mode": "specific",
    "file_types_supported": [
      "string"
    ],
    "file_types_other": [
      "string"
    ],
    "file_max_size": 0,
    "text_characters_limited": true,
    "text_min_length": 0,
    "text_max_length": 0,
    "text_lines_limited": true,
    "text_max_lines": 0,
    "number_limited": true,
    "number_limit_mode": "lowest",
    "number_lowest_value": 0,
    "number_highest_value": 0,
    "number_integers_only": true,
    "product_list_adjusts_inventory": true,
    "product_list_adjusts_pricing": true,
    "product_list_shipping_calc": "none"
  },
  "option_values": [
    {
      "id": 0,
      "is_default": true,
      "label": "string",
      "sort_order": 0,
      "value_data": {}
    }
  ]
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An `Option` object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `Option` was in conflict with another option. This is the result of duplicate unique fields, such as `name`.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `Option` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "id": 0,
    "product_id": 0,
    "display_name": "string",
    "type": "radio_buttons",
    "config": {
      "default_value": "string",
      "checked_by_default": true,
      "checkbox_label": "string",
      "date_limited": true,
      "date_limit_mode": "earliest",
      "date_earliest_value": "2017-02-27",
      "date_latest_value": "2017-02-27",
      "file_types_mode": "specific",
      "file_types_supported": [
        "string"
      ],
      "file_types_other": [
        "string"
      ],
      "file_max_size": 0,
      "text_characters_limited": true,
      "text_min_length": 0,
      "text_max_length": 0,
      "text_lines_limited": true,
      "text_max_lines": 0,
      "number_limited": true,
      "number_limit_mode": "lowest",
      "number_lowest_value": 0,
      "number_highest_value": 0,
      "number_integers_only": true,
      "product_list_adjusts_inventory": true,
      "product_list_adjusts_pricing": true,
      "product_list_shipping_calc": "none"
    },
    "option_values": [
      {
        "id": 0,
        "is_default": true,
        "label": "string",
        "sort_order": 0,
        "value_data": {}
      }
    ],
    "name": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteOptionById

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/options/{option_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/products/{product_id}/options/{option_id}`

Deletes a Product's `Option`, based on the product_id and option_id.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
option_id|path|integer|true|The ID of the `Option`.


##### product_id
The ID of the `Product` the resource belongs to.

##### option_id
The ID of the `Option`.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getModifiers

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/modifiers`

Gets an array of `Modifier` objects.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.


##### product_id
The ID of the `Product` the resource belongs to.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of modifiers and metadata.

> Example responses

````json
{
  "data": [
    {
      "type": "date",
      "required": true,
      "config": {
        "default_value": "string",
        "checked_by_default": true,
        "checkbox_label": "string",
        "date_limited": true,
        "date_limit_mode": "earliest",
        "date_earliest_value": "2017-02-27",
        "date_latest_value": "2017-02-27",
        "file_types_mode": "specific",
        "file_types_supported": [
          "string"
        ],
        "file_types_other": [
          "string"
        ],
        "file_max_size": 0,
        "text_characters_limited": true,
        "text_min_length": 0,
        "text_max_length": 0,
        "text_lines_limited": true,
        "text_max_lines": 0,
        "number_limited": true,
        "number_limit_mode": "lowest",
        "number_lowest_value": 0,
        "number_highest_value": 0,
        "number_integers_only": true,
        "product_list_adjusts_inventory": true,
        "product_list_adjusts_pricing": true,
        "product_list_shipping_calc": "none"
      },
      "option_values": [
        {
          "id": 0,
          "is_default": true,
          "label": "string",
          "sort_order": 0,
          "value_data": {},
          "adjusters": {
            "price": {
              "adjuster": "relative",
              "adjuster_value": 0
            },
            "weight": {
              "adjuster": "relative",
              "adjuster_value": 0
            },
            "image_url": "string",
            "purchasing_disabled": {
              "status": true,
              "message": "string"
            }
          }
        }
      ],
      "id": 0,
      "product_id": 0,
      "name": "string",
      "display_name": "string"
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createModifier

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "type": "date",
  "required": true,
  "config": {
    "default_value": "string",
    "checked_by_default": true,
    "checkbox_label": "string",
    "date_limited": true,
    "date_limit_mode": "earliest",
    "date_earliest_value": "2017-02-27",
    "date_latest_value": "2017-02-27",
    "file_types_mode": "specific",
    "file_types_supported": [
      "string"
    ],
    "file_types_other": [
      "string"
    ],
    "file_max_size": 0,
    "text_characters_limited": true,
    "text_min_length": 0,
    "text_max_length": 0,
    "text_lines_limited": true,
    "text_max_lines": 0,
    "number_limited": true,
    "number_limit_mode": "lowest",
    "number_lowest_value": 0,
    "number_highest_value": 0,
    "number_integers_only": true,
    "product_list_adjusts_inventory": true,
    "product_list_adjusts_pricing": true,
    "product_list_shipping_calc": "none"
  },
  "option_values": [
    {
      "id": 0,
      "is_default": true,
      "label": "string",
      "sort_order": 0,
      "value_data": {},
      "adjusters": {
        "price": {
          "adjuster": "relative",
          "adjuster_value": 0
        },
        "weight": {
          "adjuster": "relative",
          "adjuster_value": 0
        },
        "image_url": "string",
        "purchasing_disabled": {
          "status": true,
          "message": "string"
        }
      }
    }
  ],
  "display_name": "string"
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/products/{product_id}/modifiers`

Creates a `Modifier`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
Modifier|body|ModifierPost|true|A `Modifier` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### Modifier
A `Modifier` object.

> Body parameter

````json
{
  "type": "date",
  "required": true,
  "config": {
    "default_value": "string",
    "checked_by_default": true,
    "checkbox_label": "string",
    "date_limited": true,
    "date_limit_mode": "earliest",
    "date_earliest_value": "2017-02-27",
    "date_latest_value": "2017-02-27",
    "file_types_mode": "specific",
    "file_types_supported": [
      "string"
    ],
    "file_types_other": [
      "string"
    ],
    "file_max_size": 0,
    "text_characters_limited": true,
    "text_min_length": 0,
    "text_max_length": 0,
    "text_lines_limited": true,
    "text_max_lines": 0,
    "number_limited": true,
    "number_limit_mode": "lowest",
    "number_lowest_value": 0,
    "number_highest_value": 0,
    "number_integers_only": true,
    "product_list_adjusts_inventory": true,
    "product_list_adjusts_pricing": true,
    "product_list_shipping_calc": "none"
  },
  "option_values": [
    {
      "id": 0,
      "is_default": true,
      "label": "string",
      "sort_order": 0,
      "value_data": {},
      "adjusters": {
        "price": {
          "adjuster": "relative",
          "adjuster_value": 0
        },
        "weight": {
          "adjuster": "relative",
          "adjuster_value": 0
        },
        "image_url": "string",
        "purchasing_disabled": {
          "status": true,
          "message": "string"
        }
      }
    }
  ],
  "display_name": "string"
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Modifier` object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `Modifier` was in conflict with another option. This is the result of duplicate unique fields, such as `name`.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `Modifier` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "type": "date",
    "required": true,
    "config": {
      "default_value": "string",
      "checked_by_default": true,
      "checkbox_label": "string",
      "date_limited": true,
      "date_limit_mode": "earliest",
      "date_earliest_value": "2017-02-27",
      "date_latest_value": "2017-02-27",
      "file_types_mode": "specific",
      "file_types_supported": [
        "string"
      ],
      "file_types_other": [
        "string"
      ],
      "file_max_size": 0,
      "text_characters_limited": true,
      "text_min_length": 0,
      "text_max_length": 0,
      "text_lines_limited": true,
      "text_max_lines": 0,
      "number_limited": true,
      "number_limit_mode": "lowest",
      "number_lowest_value": 0,
      "number_highest_value": 0,
      "number_integers_only": true,
      "product_list_adjusts_inventory": true,
      "product_list_adjusts_pricing": true,
      "product_list_shipping_calc": "none"
    },
    "option_values": [
      {
        "id": 0,
        "is_default": true,
        "label": "string",
        "sort_order": 0,
        "value_data": {},
        "adjusters": {
          "price": {
            "adjuster": "relative",
            "adjuster_value": 0
          },
          "weight": {
            "adjuster": "relative",
            "adjuster_value": 0
          },
          "image_url": "string",
          "purchasing_disabled": {
            "status": true,
            "message": "string"
          }
        }
      }
    ],
    "id": 0,
    "product_id": 0,
    "name": "string",
    "display_name": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## getModifierById

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/modifiers/{modifier_id}`

Gets a `Modifier` by product_id and modifier_id.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
modifier_id|path|integer|true|The ID of the `Modifier`.


##### product_id
The ID of the `Product` the resource belongs to.

##### modifier_id
The ID of the `Modifier`.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Modifier` object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "type": "date",
    "required": true,
    "config": {
      "default_value": "string",
      "checked_by_default": true,
      "checkbox_label": "string",
      "date_limited": true,
      "date_limit_mode": "earliest",
      "date_earliest_value": "2017-02-27",
      "date_latest_value": "2017-02-27",
      "file_types_mode": "specific",
      "file_types_supported": [
        "string"
      ],
      "file_types_other": [
        "string"
      ],
      "file_max_size": 0,
      "text_characters_limited": true,
      "text_min_length": 0,
      "text_max_length": 0,
      "text_lines_limited": true,
      "text_max_lines": 0,
      "number_limited": true,
      "number_limit_mode": "lowest",
      "number_lowest_value": 0,
      "number_highest_value": 0,
      "number_integers_only": true,
      "product_list_adjusts_inventory": true,
      "product_list_adjusts_pricing": true,
      "product_list_shipping_calc": "none"
    },
    "option_values": [
      {
        "id": 0,
        "is_default": true,
        "label": "string",
        "sort_order": 0,
        "value_data": {},
        "adjusters": {
          "price": {
            "adjuster": "relative",
            "adjuster_value": 0
          },
          "weight": {
            "adjuster": "relative",
            "adjuster_value": 0
          },
          "image_url": "string",
          "purchasing_disabled": {
            "status": true,
            "message": "string"
          }
        }
      }
    ],
    "id": 0,
    "product_id": 0,
    "name": "string",
    "display_name": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateModifier

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "type": "date",
  "required": true,
  "config": {
    "default_value": "string",
    "checked_by_default": true,
    "checkbox_label": "string",
    "date_limited": true,
    "date_limit_mode": "earliest",
    "date_earliest_value": "2017-02-27",
    "date_latest_value": "2017-02-27",
    "file_types_mode": "specific",
    "file_types_supported": [
      "string"
    ],
    "file_types_other": [
      "string"
    ],
    "file_max_size": 0,
    "text_characters_limited": true,
    "text_min_length": 0,
    "text_max_length": 0,
    "text_lines_limited": true,
    "text_max_lines": 0,
    "number_limited": true,
    "number_limit_mode": "lowest",
    "number_lowest_value": 0,
    "number_highest_value": 0,
    "number_integers_only": true,
    "product_list_adjusts_inventory": true,
    "product_list_adjusts_pricing": true,
    "product_list_shipping_calc": "none"
  },
  "option_values": [
    {
      "id": 0,
      "is_default": true,
      "label": "string",
      "sort_order": 0,
      "value_data": {},
      "adjusters": {
        "price": {
          "adjuster": "relative",
          "adjuster_value": 0
        },
        "weight": {
          "adjuster": "relative",
          "adjuster_value": 0
        },
        "image_url": "string",
        "purchasing_disabled": {
          "status": true,
          "message": "string"
        }
      }
    }
  ]
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/products/{product_id}/modifiers/{modifier_id}`

Updates an Product's `Modifier` based on the product_id and modifier_id.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
modifier_id|path|integer|true|The ID of the `Modifier`.
modifier|body|ModifierPut|true|A BigCommerce `Modifier` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### modifier_id
The ID of the `Modifier`.

##### modifier
A BigCommerce `Modifier` object.

> Body parameter

````json
{
  "type": "date",
  "required": true,
  "config": {
    "default_value": "string",
    "checked_by_default": true,
    "checkbox_label": "string",
    "date_limited": true,
    "date_limit_mode": "earliest",
    "date_earliest_value": "2017-02-27",
    "date_latest_value": "2017-02-27",
    "file_types_mode": "specific",
    "file_types_supported": [
      "string"
    ],
    "file_types_other": [
      "string"
    ],
    "file_max_size": 0,
    "text_characters_limited": true,
    "text_min_length": 0,
    "text_max_length": 0,
    "text_lines_limited": true,
    "text_max_lines": 0,
    "number_limited": true,
    "number_limit_mode": "lowest",
    "number_lowest_value": 0,
    "number_highest_value": 0,
    "number_integers_only": true,
    "product_list_adjusts_inventory": true,
    "product_list_adjusts_pricing": true,
    "product_list_shipping_calc": "none"
  },
  "option_values": [
    {
      "id": 0,
      "is_default": true,
      "label": "string",
      "sort_order": 0,
      "value_data": {},
      "adjusters": {
        "price": {
          "adjuster": "relative",
          "adjuster_value": 0
        },
        "weight": {
          "adjuster": "relative",
          "adjuster_value": 0
        },
        "image_url": "string",
        "purchasing_disabled": {
          "status": true,
          "message": "string"
        }
      }
    }
  ]
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Modifier` object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `Modifier` was in conflict with another modifier or option. This is the result of duplicate unique fields, such as `name`.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `Modifier` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "type": "date",
    "required": true,
    "config": {
      "default_value": "string",
      "checked_by_default": true,
      "checkbox_label": "string",
      "date_limited": true,
      "date_limit_mode": "earliest",
      "date_earliest_value": "2017-02-27",
      "date_latest_value": "2017-02-27",
      "file_types_mode": "specific",
      "file_types_supported": [
        "string"
      ],
      "file_types_other": [
        "string"
      ],
      "file_max_size": 0,
      "text_characters_limited": true,
      "text_min_length": 0,
      "text_max_length": 0,
      "text_lines_limited": true,
      "text_max_lines": 0,
      "number_limited": true,
      "number_limit_mode": "lowest",
      "number_lowest_value": 0,
      "number_highest_value": 0,
      "number_integers_only": true,
      "product_list_adjusts_inventory": true,
      "product_list_adjusts_pricing": true,
      "product_list_shipping_calc": "none"
    },
    "option_values": [
      {
        "id": 0,
        "is_default": true,
        "label": "string",
        "sort_order": 0,
        "value_data": {},
        "adjusters": {
          "price": {
            "adjuster": "relative",
            "adjuster_value": 0
          },
          "weight": {
            "adjuster": "relative",
            "adjuster_value": 0
          },
          "image_url": "string",
          "purchasing_disabled": {
            "status": true,
            "message": "string"
          }
        }
      }
    ],
    "id": 0,
    "product_id": 0,
    "name": "string",
    "display_name": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteModifierById

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/products/{product_id}/modifiers/{modifier_id}`

Deletes a Product's `Modifier` based on the product_id and modifier_id.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
modifier_id|path|integer|true|The ID of the `Modifier`.


##### product_id
The ID of the `Product` the resource belongs to.

##### modifier_id
The ID of the `Modifier`.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## createModifierImage

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: multipart/form-data'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image HTTP/1.1
Host: api.bigcommerce.com
Content-Type: multipart/form-data
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'multipart/form-data'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'multipart/form-data'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image',
{ 
  method: 'POST'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'multipart/form-data'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'multipart/form-data'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image`

Adds an image to a modifier value; the image will show on the storefront when the value is selected.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
modifier_id|path|integer|true|The ID of the `Modifier`.
value_id|path|integer|true|The ID of the `Modifier`.
image_file|formData|file|true|An image file. Supported MIME types include GIF, JPEG, and PNG.


##### product_id
The ID of the `Product` the resource belongs to.

##### modifier_id
The ID of the `Modifier`.

##### value_id
The ID of the `Modifier`.

##### image_file
An image file. Supported MIME types include GIF, JPEG, and PNG.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A ResourceImage and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Modifier image was not valid. This is the result of missing `image_file` fields, orof a non-URL value for the `image_file` field. See the response for more details.

> Example responses

````json
{
  "data": {
    "image_url": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteModifierImage

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image`

Deletes the image applied to show when the modifier value is selected

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
modifier_id|path|integer|true|The ID of the `Modifier`.
value_id|path|integer|true|The ID of the `Modifier`.


##### product_id
The ID of the `Product` the resource belongs to.

##### modifier_id
The ID of the `Modifier`.

##### value_id
The ID of the `Modifier`.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Image cleared for the modifier value.

<aside class="success">
This operation does not require authentication
</aside>

## getComplexRules

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/complex-rules`

Gets an array of `ComplexRule` objects.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.


##### product_id
The ID of the `Product` the resource belongs to.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of `ComplexRule` objects and metadata.

> Example responses

````json
{
  "data": [
    {
      "product_id": 0,
      "sort_order": 0,
      "enabled": true,
      "stop": true,
      "purchasing_disabled": true,
      "purchasing_disabled_message": "string",
      "purchasing_hidden": true,
      "price_adjuster": {
        "adjuster": "relative",
        "adjuster_value": 0
      },
      "weight_adjuster": {
        "adjuster": "relative",
        "adjuster_value": 0
      },
      "id": 0,
      "image_url": "string",
      "conditions": [
        {
          "id": 0,
          "rule_id": 0,
          "modifier_id": 0,
          "modifier_value_id": 0,
          "variant_id": 0,
          "combination_id": 0
        }
      ]
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createComplexRule

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "product_id": 0,
  "sort_order": 0,
  "enabled": true,
  "stop": true,
  "purchasing_disabled": true,
  "purchasing_disabled_message": "string",
  "purchasing_hidden": true,
  "price_adjuster": {
    "adjuster": "relative",
    "adjuster_value": 0
  },
  "weight_adjuster": {
    "adjuster": "relative",
    "adjuster_value": 0
  },
  "conditions": [
    {
      "id": 0,
      "rule_id": 0,
      "modifier_id": 0,
      "modifier_value_id": 0,
      "variant_id": 0
    }
  ]
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/products/{product_id}/complex-rules`

Creates a `ComplexRule`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
ComplexRule|body|ComplexRulePost|true|`ComplexRule` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### ComplexRule
`ComplexRule` object.

> Body parameter

````json
{
  "product_id": 0,
  "sort_order": 0,
  "enabled": true,
  "stop": true,
  "purchasing_disabled": true,
  "purchasing_disabled_message": "string",
  "purchasing_hidden": true,
  "price_adjuster": {
    "adjuster": "relative",
    "adjuster_value": 0
  },
  "weight_adjuster": {
    "adjuster": "relative",
    "adjuster_value": 0
  },
  "conditions": [
    {
      "id": 0,
      "rule_id": 0,
      "modifier_id": 0,
      "modifier_value_id": 0,
      "variant_id": 0
    }
  ]
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `ComplexRule` object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `ComplexRule` was in conflict with another `ComplexRule`. This is the result of duplicate conditions.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `ComplexRule` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "product_id": 0,
    "sort_order": 0,
    "enabled": true,
    "stop": true,
    "purchasing_disabled": true,
    "purchasing_disabled_message": "string",
    "purchasing_hidden": true,
    "price_adjuster": {
      "adjuster": "relative",
      "adjuster_value": 0
    },
    "weight_adjuster": {
      "adjuster": "relative",
      "adjuster_value": 0
    },
    "id": 0,
    "image_url": "string",
    "conditions": [
      {
        "id": 0,
        "rule_id": 0,
        "modifier_id": 0,
        "modifier_value_id": 0,
        "variant_id": 0,
        "combination_id": 0
      }
    ]
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## getComplexRuleById

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/complex-rules/{complex_rule_id}`

Gets a `ComplexRule` by product_id.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
complex_rule_id|path|integer|true|The ID of the `ComplexRule`.


##### product_id
The ID of the `Product` the resource belongs to.

##### complex_rule_id
The ID of the `ComplexRule`.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Modifier` object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "product_id": 0,
    "sort_order": 0,
    "enabled": true,
    "stop": true,
    "purchasing_disabled": true,
    "purchasing_disabled_message": "string",
    "purchasing_hidden": true,
    "price_adjuster": {
      "adjuster": "relative",
      "adjuster_value": 0
    },
    "weight_adjuster": {
      "adjuster": "relative",
      "adjuster_value": 0
    },
    "id": 0,
    "image_url": "string",
    "conditions": [
      {
        "id": 0,
        "rule_id": 0,
        "modifier_id": 0,
        "modifier_value_id": 0,
        "variant_id": 0,
        "combination_id": 0
      }
    ]
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateComplexRule

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "product_id": 0,
  "sort_order": 0,
  "enabled": true,
  "stop": true,
  "purchasing_disabled": true,
  "purchasing_disabled_message": "string",
  "purchasing_hidden": true,
  "price_adjuster": {
    "adjuster": "relative",
    "adjuster_value": 0
  },
  "weight_adjuster": {
    "adjuster": "relative",
    "adjuster_value": 0
  },
  "id": 0,
  "conditions": [
    {
      "id": 0,
      "rule_id": 0,
      "modifier_id": 0,
      "modifier_value_id": 0,
      "variant_id": 0
    }
  ]
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/products/{product_id}/complex-rules/{complex_rule_id}`

Updates an Product's `ComplexRule`, based on the `product_id` and `complex_rule_id`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
complex_rule_id|path|integer|true|The ID of the `ComplexRule`.
ComplexRule|body|ComplexRulePut|true|`ComplexRule` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### complex_rule_id
The ID of the `ComplexRule`.

##### ComplexRule
`ComplexRule` object.

> Body parameter

````json
{
  "product_id": 0,
  "sort_order": 0,
  "enabled": true,
  "stop": true,
  "purchasing_disabled": true,
  "purchasing_disabled_message": "string",
  "purchasing_hidden": true,
  "price_adjuster": {
    "adjuster": "relative",
    "adjuster_value": 0
  },
  "weight_adjuster": {
    "adjuster": "relative",
    "adjuster_value": 0
  },
  "id": 0,
  "conditions": [
    {
      "id": 0,
      "rule_id": 0,
      "modifier_id": 0,
      "modifier_value_id": 0,
      "variant_id": 0
    }
  ]
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `ComplexRule` object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `ComplexRule` was in conflict with another `ComplexRule`. This is the result of duplicate conditions.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `ComplexRule` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "product_id": 0,
    "sort_order": 0,
    "enabled": true,
    "stop": true,
    "purchasing_disabled": true,
    "purchasing_disabled_message": "string",
    "purchasing_hidden": true,
    "price_adjuster": {
      "adjuster": "relative",
      "adjuster_value": 0
    },
    "weight_adjuster": {
      "adjuster": "relative",
      "adjuster_value": 0
    },
    "id": 0,
    "image_url": "string",
    "conditions": [
      {
        "id": 0,
        "rule_id": 0,
        "modifier_id": 0,
        "modifier_value_id": 0,
        "variant_id": 0,
        "combination_id": 0
      }
    ]
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteComplexRuleById

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/complex-rules/{complex_rule_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/products/{product_id}/complex-rules/{complex_rule_id}`

Deletes a Product's `ComplexRule`, based on the `product_id` and `complex_rule_id`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
complex_rule_id|path|integer|true|The ID of the `ComplexRule`.


##### product_id
The ID of the `Product` the resource belongs to.

##### complex_rule_id
The ID of the `ComplexRule`.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getProductMetafieldsByProductId

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields?page=0&limit=0&key=string&namespace=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields?page=0&limit=0&key=string&namespace=string HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields',
  method: 'get',
  data: '?page=0&limit=0&key=string&namespace=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields?page=0&limit=0&key=string&namespace=string',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields', params: {
  'page':'integer',
  'limit':'integer',
  'key':'string',
  'namespace':'string',
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields?page=0&limit=0&key=string&namespace=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/metafields`

Gets a `Metafield` object list, by `product_id`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
page|query|integer|false|Control the page in a limited list of products.
limit|query|integer|false|Control the items per page.
key|query|string|false|Filter based on a metafield's key.
namespace|query|string|false|Filter based on a metafield's key.


##### product_id
The ID of the `Product` the resource belongs to.

##### page
Control the page in a limited list of products.

##### limit
Control the items per page.

##### key
Filter based on a metafield's key.

##### namespace
Filter based on a metafield's key.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of metafields and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": [
    {
      "permission_set": "app_only",
      "namespace": "string",
      "key": "string",
      "value": "string",
      "description": "string",
      "resource_type": "category",
      "resource_id": 0,
      "id": 0,
      "created_at": "2017-02-27T18:29:36Z",
      "updated_at": "2017-02-27T18:29:36Z"
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createProductMetafield

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/products/{product_id}/metafields`

Creates a product `Metafield`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
Metafield|body|MetafieldPost|true|A `Metafield` object.


##### product_id
The ID of the `Product` the resource belongs to.

##### Metafield
A `Metafield` object.

> Body parameter

````json
{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Metafield` object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `Metafield` was in conflict with another `Metafield`. This can be the result of duplicate unique key combinations of the app's client id, namespace, key, resource_type, and resource_id.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `Metafield` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "permission_set": "app_only",
    "namespace": "string",
    "key": "string",
    "value": "string",
    "description": "string",
    "resource_type": "category",
    "resource_id": 0,
    "id": 0,
    "created_at": "2017-02-27T18:29:36Z",
    "updated_at": "2017-02-27T18:29:36Z"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## getProductMetafieldByProductId

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/products/{product_id}/metafields/{metafield_id}`

Gets a `Metafield`, by `product_id`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
metafield_id|path|number|true|The ID of the `Metafield`.
product_id|path|integer|true|The ID of the `Product` the resource belongs to.


##### metafield_id
The ID of the `Metafield`.

##### product_id
The ID of the `Product` the resource belongs to.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Metafield` object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "permission_set": "app_only",
    "namespace": "string",
    "key": "string",
    "value": "string",
    "description": "string",
    "resource_type": "category",
    "resource_id": 0,
    "id": 0,
    "created_at": "2017-02-27T18:29:36Z",
    "updated_at": "2017-02-27T18:29:36Z"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateProductMetafield

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0,
  "id": 0
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/products/{product_id}/metafields/{metafield_id}`

Updates a `Metafield` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
metafield_id|path|number|true|The ID of the `Metafield`.
product_id|path|integer|true|The ID of the `Product` the resource belongs to.
Metafield|body|MetafieldPut|true|A `Metafield` object.


##### metafield_id
The ID of the `Metafield`.

##### product_id
The ID of the `Product` the resource belongs to.

##### Metafield
A `Metafield` object.

> Body parameter

````json
{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0,
  "id": 0
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A metafield and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "permission_set": "app_only",
    "namespace": "string",
    "key": "string",
    "value": "string",
    "description": "string",
    "resource_type": "category",
    "resource_id": 0,
    "id": 0,
    "created_at": "2017-02-27T18:29:36Z",
    "updated_at": "2017-02-27T18:29:36Z"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteProductMetafieldById

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/products/{product_id}/metafields/{metafield_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/products/{product_id}/metafields/{metafield_id}`

Deletes a `Metafield`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
metafield_id|path|number|true|The ID of the `Metafield`.
product_id|path|integer|true|The ID of the `Product` the resource belongs to.


##### metafield_id
The ID of the `Metafield`.

##### product_id
The ID of the `Product` the resource belongs to.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getCategories

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories?name=string&parent_id=0&page_title=string&keyword=string&is_visible=0&page=0&limit=0 \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories?name=string&parent_id=0&page_title=string&keyword=string&is_visible=0&page=0&limit=0 HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories',
  method: 'get',
  data: '?name=string&parent_id=0&page_title=string&keyword=string&is_visible=0&page=0&limit=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories?name=string&parent_id=0&page_title=string&keyword=string&is_visible=0&page=0&limit=0',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories', params: {
  'name':'string',
  'parent_id':'integer',
  'page_title':'string',
  'keyword':'string',
  'is_visible':'integer',
  'page':'integer',
  'limit':'integer'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories?name=string&parent_id=0&page_title=string&keyword=string&is_visible=0&page=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/categories`

Returns a paginated categories collection from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
name|query|string|false|Filter items by name.
parent_id|query|integer|false|Filter items by parent_id.
page_title|query|string|false|Filter items by page_title.
keyword|query|string|false|Filter items by keywords.
is_visible|query|integer|false|Filter items by is_visible.
page|query|integer|false|Control the page in a limited list of products.
limit|query|integer|false|Control the items per page.


##### name
Filter items by name.

##### parent_id
Filter items by parent_id.

##### page_title
Filter items by page_title.

##### keyword
Filter items by keywords.

##### is_visible
Filter items by is_visible.

##### page
Control the page in a limited list of products.

##### limit
Control the items per page.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of category objects and metadata.

> Example responses

````json
{
  "data": [
    {
      "parent_id": 0,
      "name": "string",
      "description": "string",
      "views": 0,
      "sort_order": 0,
      "page_title": "string",
      "search_keywords": "string",
      "meta_keywords": [
        "string"
      ],
      "meta_description": "string",
      "layout_file": "string",
      "is_visible": true,
      "default_product_sort": "use_store_settings",
      "image_url": "string",
      "custom_url": {
        "url": "string",
        "is_customized": true
      },
      "id": 0
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createCategory

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "parent_id": 0,
  "name": "string",
  "description": "string",
  "views": 0,
  "sort_order": 0,
  "page_title": "string",
  "search_keywords": "string",
  "meta_keywords": [
    "string"
  ],
  "meta_description": "string",
  "layout_file": "string",
  "is_visible": true,
  "default_product_sort": "use_store_settings",
  "image_url": "string",
  "custom_url": {
    "url": "string",
    "is_customized": true
  }
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/categories`

Creates a `Category` in the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
category|body|CategoryPost|true|A BigCommerce `Category` object.


##### category
A BigCommerce `Category` object.

> Body parameter

````json
{
  "parent_id": 0,
  "name": "string",
  "description": "string",
  "views": 0,
  "sort_order": 0,
  "page_title": "string",
  "search_keywords": "string",
  "meta_keywords": [
    "string"
  ],
  "meta_description": "string",
  "layout_file": "string",
  "is_visible": true,
  "default_product_sort": "use_store_settings",
  "image_url": "string",
  "custom_url": {
    "url": "string",
    "is_customized": true
  }
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A category object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `Category` was in conflict with another category. This is the result of duplicate unique values, such as `name` or `custom_url`.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `Category` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "parent_id": 0,
    "name": "string",
    "description": "string",
    "views": 0,
    "sort_order": 0,
    "page_title": "string",
    "search_keywords": "string",
    "meta_keywords": [
      "string"
    ],
    "meta_description": "string",
    "layout_file": "string",
    "is_visible": true,
    "default_product_sort": "use_store_settings",
    "image_url": "string",
    "custom_url": {
      "url": "string",
      "is_customized": true
    },
    "id": 0
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteCategories

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories?name=string&parent_id=0&page_title=string&keyword=string&is_visible=0 \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories?name=string&parent_id=0&page_title=string&keyword=string&is_visible=0 HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories',
  method: 'delete',
  data: '?name=string&parent_id=0&page_title=string&keyword=string&is_visible=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories?name=string&parent_id=0&page_title=string&keyword=string&is_visible=0',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories', params: {
  'name':'string',
  'parent_id':'integer',
  'page_title':'string',
  'keyword':'string',
  'is_visible':'integer'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories?name=string&parent_id=0&page_title=string&keyword=string&is_visible=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/categories`

Deletes a product or products from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
name|query|string|false|Filter items by name.
parent_id|query|integer|false|Filter items by parent_id.
page_title|query|string|false|Filter items by page_title.
keyword|query|string|false|Filter items by keywords.
is_visible|query|integer|false|Filter items by is_visible.


##### name
Filter items by name.

##### parent_id
Filter items by parent_id.

##### page_title
Filter items by page_title.

##### keyword
Filter items by keywords.

##### is_visible
Filter items by is_visible.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getCategoryById

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/categories/{category_id}`

Returns a `Category` from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
category_id|path|number|true|The ID of the `Category` to which the resource belongs.


##### category_id
The ID of the `Category` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A category object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "parent_id": 0,
    "name": "string",
    "description": "string",
    "views": 0,
    "sort_order": 0,
    "page_title": "string",
    "search_keywords": "string",
    "meta_keywords": [
      "string"
    ],
    "meta_description": "string",
    "layout_file": "string",
    "is_visible": true,
    "default_product_sort": "use_store_settings",
    "image_url": "string",
    "custom_url": {
      "url": "string",
      "is_customized": true
    },
    "id": 0
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateCategory

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "parent_id": 0,
  "name": "string",
  "description": "string",
  "views": 0,
  "sort_order": 0,
  "page_title": "string",
  "search_keywords": "string",
  "meta_keywords": [
    "string"
  ],
  "meta_description": "string",
  "layout_file": "string",
  "is_visible": true,
  "default_product_sort": "use_store_settings",
  "image_url": "string",
  "custom_url": {
    "url": "string",
    "is_customized": true
  }
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/categories/{category_id}`

Updates a `Category` in the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
category_id|path|number|true|The ID of the `Category` to which the resource belongs.
category|body|CategoryPut|true|A BigCommerce `Category` object.


##### category_id
The ID of the `Category` to which the resource belongs.

##### category
A BigCommerce `Category` object.

> Body parameter

````json
{
  "parent_id": 0,
  "name": "string",
  "description": "string",
  "views": 0,
  "sort_order": 0,
  "page_title": "string",
  "search_keywords": "string",
  "meta_keywords": [
    "string"
  ],
  "meta_description": "string",
  "layout_file": "string",
  "is_visible": true,
  "default_product_sort": "use_store_settings",
  "image_url": "string",
  "custom_url": {
    "url": "string",
    "is_customized": true
  }
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A category object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `Category` was in conflict with another category. This is the result of duplicate unique values, such as `name` or `custom_url`.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `Category` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "parent_id": 0,
    "name": "string",
    "description": "string",
    "views": 0,
    "sort_order": 0,
    "page_title": "string",
    "search_keywords": "string",
    "meta_keywords": [
      "string"
    ],
    "meta_description": "string",
    "layout_file": "string",
    "is_visible": true,
    "default_product_sort": "use_store_settings",
    "image_url": "string",
    "custom_url": {
      "url": "string",
      "is_customized": true
    },
    "id": 0
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteCategoryById

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/categories/{category_id}`

Deletes one or more `Category` objects from the BigCommerce catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
category_id|path|number|true|The ID of the `Category` to which the resource belongs.


##### category_id
The ID of the `Category` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getCategoryMetafieldsByCategoryId

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields?page=0&limit=0&key=string&namespace=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields?page=0&limit=0&key=string&namespace=string HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields',
  method: 'get',
  data: '?page=0&limit=0&key=string&namespace=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields?page=0&limit=0&key=string&namespace=string',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields', params: {
  'page':'integer',
  'limit':'integer',
  'key':'string',
  'namespace':'string',
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields?page=0&limit=0&key=string&namespace=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/categories/{category_id}/metafields`

Gets a `Metafield` object list, by category_id.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
category_id|path|number|true|The ID of the `Category` to which the resource belongs.
page|query|integer|false|Control the page in a limited list of products.
limit|query|integer|false|Control the items per page.
key|query|string|false|Filter based on a metafield's key.
namespace|query|string|false|Filter based on a metafield's key.


##### category_id
The ID of the `Category` to which the resource belongs.

##### page
Control the page in a limited list of products.

##### limit
Control the items per page.

##### key
Filter based on a metafield's key.

##### namespace
Filter based on a metafield's key.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of metafields and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": [
    {
      "permission_set": "app_only",
      "namespace": "string",
      "key": "string",
      "value": "string",
      "description": "string",
      "resource_type": "category",
      "resource_id": 0,
      "id": 0,
      "created_at": "2017-02-27T18:29:36Z",
      "updated_at": "2017-02-27T18:29:36Z"
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createCategoryMetafield

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/categories/{category_id}/metafields`

Creates a product `Metafield`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
category_id|path|number|true|The ID of the `Category` to which the resource belongs.
Metafield|body|MetafieldPost|true|A `Metafield` object.


##### category_id
The ID of the `Category` to which the resource belongs.

##### Metafield
A `Metafield` object.

> Body parameter

````json
{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Metafield` object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `Metafield` was in conflict with another `Metafield`. This can be the result of duplicate unique key combinations of the app's client id, namespace, key, resource_type, and resource_id.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `Metafield` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "permission_set": "app_only",
    "namespace": "string",
    "key": "string",
    "value": "string",
    "description": "string",
    "resource_type": "category",
    "resource_id": 0,
    "id": 0,
    "created_at": "2017-02-27T18:29:36Z",
    "updated_at": "2017-02-27T18:29:36Z"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## getCategoryMetafieldByCategoryId

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/categories/{category_id}/metafields/{metafield_id}`

Gets a `Metafield` by category_id.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
metafield_id|path|number|true|The ID of the `Metafield`.
category_id|path|number|true|The ID of the `Category` to which the resource belongs.


##### metafield_id
The ID of the `Metafield`.

##### category_id
The ID of the `Category` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Metafield` object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "permission_set": "app_only",
    "namespace": "string",
    "key": "string",
    "value": "string",
    "description": "string",
    "resource_type": "category",
    "resource_id": 0,
    "id": 0,
    "created_at": "2017-02-27T18:29:36Z",
    "updated_at": "2017-02-27T18:29:36Z"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateCategoryMetafield

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0,
  "id": 0
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/categories/{category_id}/metafields/{metafield_id}`

Updates a `Metafield` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
metafield_id|path|number|true|The ID of the `Metafield`.
category_id|path|number|true|The ID of the `Category` to which the resource belongs.
Metafield|body|MetafieldPut|true|A `Metafield` object.


##### metafield_id
The ID of the `Metafield`.

##### category_id
The ID of the `Category` to which the resource belongs.

##### Metafield
A `Metafield` object.

> Body parameter

````json
{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0,
  "id": 0
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A metafield and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "permission_set": "app_only",
    "namespace": "string",
    "key": "string",
    "value": "string",
    "description": "string",
    "resource_type": "category",
    "resource_id": 0,
    "id": 0,
    "created_at": "2017-02-27T18:29:36Z",
    "updated_at": "2017-02-27T18:29:36Z"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteCategoryMetafieldById

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/metafields/{metafield_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/categories/{category_id}/metafields/{metafield_id}`

Deletes a `Metafield`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
metafield_id|path|number|true|The ID of the `Metafield`.
category_id|path|number|true|The ID of the `Category` to which the resource belongs.


##### metafield_id
The ID of the `Metafield`.

##### category_id
The ID of the `Category` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## createCategoryImage

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: multipart/form-data'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image HTTP/1.1
Host: api.bigcommerce.com
Content-Type: multipart/form-data
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'multipart/form-data'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'multipart/form-data'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image',
{ 
  method: 'POST'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'multipart/form-data'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'multipart/form-data'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/categories/{category_id}/image`

Creates an image on a category. Publicly accessible URLs and files (form post) are valid parameters.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
category_id|path|number|true|The ID of the `Category` to which the resource belongs.
image_file|formData|file|true|An image file. Supported MIME types include GIF, JPEG, and PNG.


##### category_id
The ID of the `Category` to which the resource belongs.

##### image_file
An image file. Supported MIME types include GIF, JPEG, and PNG.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A ResourceImage and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Image was not valid. This is the result of a missing `image_file` field or an incorrect file type. See the response for more details.

> Example responses

````json
{
  "data": {
    "image_url": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteCategoryImage

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/{category_id}/image");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/categories/{category_id}/image`

Deletes a `Category` image from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
category_id|path|number|true|The ID of the `Category` to which the resource belongs.


##### category_id
The ID of the `Category` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getCategoryTree

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/tree \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/tree HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/tree',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/tree',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/tree', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/tree', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/categories/tree");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/categories/tree`

Returns the categories tree, a nested lineage of the categories with parent->child relationship. The `Category` objects returned are simplified versions of the category objects returned in the rest of this API.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A array of nested category tree objects and metadata.

> Example responses

````json
{
  "data": [
    {}
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## getBrands

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands?name=string&page_title=string&page=0&limit=0 \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands?name=string&page_title=string&page=0&limit=0 HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands',
  method: 'get',
  data: '?name=string&page_title=string&page=0&limit=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands?name=string&page_title=string&page=0&limit=0',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands', params: {
  'name':'string',
  'page_title':'string',
  'page':'integer',
  'limit':'integer'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands?name=string&page_title=string&page=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/brands`

Gets `Brand` objects.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
name|query|string|false|Filter items by name.
page_title|query|string|false|Filter items by page_title.
page|query|integer|false|Control the page in a limited list of products.
limit|query|integer|false|Control the items per page.


##### name
Filter items by name.

##### page_title
Filter items by page_title.

##### page
Control the page in a limited list of products.

##### limit
Control the items per page.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of brand objects and metadata.

> Example responses

````json
{
  "data": [
    {
      "name": "string",
      "page_title": "string",
      "meta_keywords": [
        "string"
      ],
      "meta_description": "string",
      "search_keywords": "string",
      "image_url": "string",
      "id": 0
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createBrand

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "name": "string",
  "page_title": "string",
  "meta_keywords": [
    "string"
  ],
  "meta_description": "string",
  "search_keywords": "string",
  "image_url": "string"
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/brands`

Creates a `Brand` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
Brand|body|BrandPost|true|A `Brand` object.


##### Brand
A `Brand` object.

> Body parameter

````json
{
  "name": "string",
  "page_title": "string",
  "meta_keywords": [
    "string"
  ],
  "meta_description": "string",
  "search_keywords": "string",
  "image_url": "string"
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Brand` object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Brand was in conflict with another brand. This is the result of duplicate unique fields such as name.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Brand was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "name": "string",
    "page_title": "string",
    "meta_keywords": [
      "string"
    ],
    "meta_description": "string",
    "search_keywords": "string",
    "image_url": "string",
    "id": 0
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteBrands

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands?name=string&page_title=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands?name=string&page_title=string HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands',
  method: 'delete',
  data: '?name=string&page_title=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands?name=string&page_title=string',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands', params: {
  'name':'string',
  'page_title':'string'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands?name=string&page_title=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/brands`

Deletes one or more `Brand` objects from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
name|query|string|false|Filter items by name.
page_title|query|string|false|Filter items by page_title.


##### name
Filter items by name.

##### page_title
Filter items by page_title.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getBrandById

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/brands/{brand_id}`

Gets a `Brand` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
brand_id|path|number|true|The ID of the `Brand` to which the resource belongs.


##### brand_id
The ID of the `Brand` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Brand` object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "name": "string",
    "page_title": "string",
    "meta_keywords": [
      "string"
    ],
    "meta_description": "string",
    "search_keywords": "string",
    "image_url": "string",
    "id": 0
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateBrand

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "name": "string",
  "page_title": "string",
  "meta_keywords": [
    "string"
  ],
  "meta_description": "string",
  "search_keywords": "string",
  "image_url": "string",
  "id": 0
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/brands/{brand_id}`

Updates a `Brand` in the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
brand_id|path|number|true|The ID of the `Brand` to which the resource belongs.
brand|body|BrandPut|true|Returns a `Brand` from the BigCommerce Catalog.


##### brand_id
The ID of the `Brand` to which the resource belongs.

##### brand
Returns a `Brand` from the BigCommerce Catalog.

> Body parameter

````json
{
  "name": "string",
  "page_title": "string",
  "meta_keywords": [
    "string"
  ],
  "meta_description": "string",
  "search_keywords": "string",
  "image_url": "string",
  "id": 0
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Brand` object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `Brand` was in conflict with another product. This is the result of duplicate unique values, such as `name`.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `Brand` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "name": "string",
    "page_title": "string",
    "meta_keywords": [
      "string"
    ],
    "meta_description": "string",
    "search_keywords": "string",
    "image_url": "string",
    "id": 0
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteBrandById

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/brands/{brand_id}`

Deletes a `Brand` from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
brand_id|path|number|true|The ID of the `Brand` to which the resource belongs.


##### brand_id
The ID of the `Brand` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getBrandMetafieldsByBrandId

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields?page=0&limit=0&key=string&namespace=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields?page=0&limit=0&key=string&namespace=string HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields',
  method: 'get',
  data: '?page=0&limit=0&key=string&namespace=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields?page=0&limit=0&key=string&namespace=string',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields', params: {
  'page':'integer',
  'limit':'integer',
  'key':'string',
  'namespace':'string',
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields?page=0&limit=0&key=string&namespace=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/brands/{brand_id}/metafields`

Gets a `Metafield` object list, by `category_id`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
brand_id|path|number|true|The ID of the `Brand` to which the resource belongs.
page|query|integer|false|Control the page in a limited list of products.
limit|query|integer|false|Control the items per page.
key|query|string|false|Filter based on a metafield's key.
namespace|query|string|false|Filter based on a metafield's key.


##### brand_id
The ID of the `Brand` to which the resource belongs.

##### page
Control the page in a limited list of products.

##### limit
Control the items per page.

##### key
Filter based on a metafield's key.

##### namespace
Filter based on a metafield's key.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of metafields and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": [
    {
      "permission_set": "app_only",
      "namespace": "string",
      "key": "string",
      "value": "string",
      "description": "string",
      "resource_type": "category",
      "resource_id": 0,
      "id": 0,
      "created_at": "2017-02-27T18:29:36Z",
      "updated_at": "2017-02-27T18:29:36Z"
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createBrandMetafield

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/brands/{brand_id}/metafields`

Creates a product `Metafield`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
brand_id|path|number|true|The ID of the `Brand` to which the resource belongs.
Metafield|body|MetafieldPost|true|A `Metafield` object.


##### brand_id
The ID of the `Brand` to which the resource belongs.

##### Metafield
A `Metafield` object.

> Body parameter

````json
{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Metafield` object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `Metafield` was in conflict with another `Metafield`. This can be the result of duplicate unique key combination of the app's client id, namespace, key, resource_type, and resource_id.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `Metafield` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "permission_set": "app_only",
    "namespace": "string",
    "key": "string",
    "value": "string",
    "description": "string",
    "resource_type": "category",
    "resource_id": 0,
    "id": 0,
    "created_at": "2017-02-27T18:29:36Z",
    "updated_at": "2017-02-27T18:29:36Z"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## getBrandMetafieldByBrandId

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/brands/{brand_id}/metafields/{metafield_id}`

Gets a `Metafield`, by `category_id`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
metafield_id|path|number|true|The ID of the `Metafield`.
brand_id|path|number|true|The ID of the `Brand` to which the resource belongs.


##### metafield_id
The ID of the `Metafield`.

##### brand_id
The ID of the `Brand` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Metafield` object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "permission_set": "app_only",
    "namespace": "string",
    "key": "string",
    "value": "string",
    "description": "string",
    "resource_type": "category",
    "resource_id": 0,
    "id": 0,
    "created_at": "2017-02-27T18:29:36Z",
    "updated_at": "2017-02-27T18:29:36Z"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateBrandMetafield

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0,
  "id": 0
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /catalog/brands/{brand_id}/metafields/{metafield_id}`

Updates a `Metafield` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
metafield_id|path|number|true|The ID of the `Metafield`.
brand_id|path|number|true|The ID of the `Brand` to which the resource belongs.
Metafield|body|MetafieldPut|true|A `Metafield` object.


##### metafield_id
The ID of the `Metafield`.

##### brand_id
The ID of the `Brand` to which the resource belongs.

##### Metafield
A `Metafield` object.

> Body parameter

````json
{
  "permission_set": "app_only",
  "namespace": "string",
  "key": "string",
  "value": "string",
  "description": "string",
  "resource_type": "category",
  "resource_id": 0,
  "id": 0
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A metafield and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "permission_set": "app_only",
    "namespace": "string",
    "key": "string",
    "value": "string",
    "description": "string",
    "resource_type": "category",
    "resource_id": 0,
    "id": 0,
    "created_at": "2017-02-27T18:29:36Z",
    "updated_at": "2017-02-27T18:29:36Z"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteBrandMetafieldById

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/metafields/{metafield_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/brands/{brand_id}/metafields/{metafield_id}`

Deletes a `Metafield`.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
metafield_id|path|number|true|The ID of the `Metafield`.
brand_id|path|number|true|The ID of the `Brand` to which the resource belongs.


##### metafield_id
The ID of the `Metafield`.

##### brand_id
The ID of the `Brand` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## createBrandImage

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: multipart/form-data'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image HTTP/1.1
Host: api.bigcommerce.com
Content-Type: multipart/form-data
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'multipart/form-data'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'multipart/form-data'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image',
{ 
  method: 'POST'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'multipart/form-data'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'multipart/form-data'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /catalog/brands/{brand_id}/image`

Creates an image on a `Brand`. Publicly accessible URLs and files (form post) are valid parameters.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
brand_id|path|number|true|The ID of the `Brand` to which the resource belongs.
image_file|formData|file|true|An image file. Supported MIME types include GIF, JPEG, and PNG.


##### brand_id
The ID of the `Brand` to which the resource belongs.

##### image_file
An image file. Supported MIME types include GIF, JPEG, and PNG.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A ResourceImage and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Image was not valid. This is the result of a missing `image_file` field or an incorrect file type. See the response for more details.

> Example responses

````json
{
  "data": {
    "image_url": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteBrandImage

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/brands/{brand_id}/image");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /catalog/brands/{brand_id}/image`

Deletes a `Brand` image from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
brand_id|path|number|true|The ID of the `Brand` to which the resource belongs.


##### brand_id
The ID of the `Brand` to which the resource belongs.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Image cleared from the brand.

<aside class="success">
This operation does not require authentication
</aside>

## getVariants

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/variants?id=0&sku=string&page=0&limit=0 \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/variants?id=0&sku=string&page=0&limit=0 HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/variants',
  method: 'get',
  data: '?id=0&sku=string&page=0&limit=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/variants?id=0&sku=string&page=0&limit=0',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/variants', params: {
  'id':'integer',
  'sku':'string',
  'page':'integer',
  'limit':'integer'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/variants', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/variants?id=0&sku=string&page=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /catalog/variants`

Returns a `Variant` object list from the BigCommerce Catalog.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|query|integer|false|Filter items by id.
sku|query|string|false|Filter items by sku.
page|query|integer|false|Control the page in a limited list of products.
limit|query|integer|false|Control the items per page.


##### id
Filter items by id.

##### sku
Filter items by sku.

##### page
Control the page in a limited list of products.

##### limit
Control the items per page.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of variants and metadata.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": [
    {
      "cost_price": 0,
      "price": 0,
      "weight": 0,
      "purchasing_disabled": true,
      "purchasing_disabled_message": "string",
      "image_url": "string",
      "upc": "string",
      "inventory_level": 0,
      "inventory_warning_level": 0,
      "bin_picking_number": "string",
      "id": 0,
      "product_id": 0,
      "sku": "string",
      "sku_id": 0,
      "option_values": [
        {
          "option_display_name": "string",
          "label": "string",
          "id": 0,
          "option_id": 0
        }
      ]
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## GET /catalog/summary

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/summary \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/summary HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/summary',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/summary',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/summary', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/summary', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/catalog/summary");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

Returns a lightweight inventory summary from the BigCommerce Catalog.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of catalog summary and metadata.

> Example responses

````json
{
  "data": {
    "inventory_count": 0,
    "inventory_value": 0,
    "primary_category_id": 0,
    "primary_category_name": "string"
  },
  "meta": {}
}
````
<aside class="success">
This operation does not require authentication
</aside>

# Customers

## getSubscribers

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers?email=string&first_name=string&last_name=string&source=string&order_id=0&date_created=string&date_modified=string&page=0&limit=0 \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers?email=string&first_name=string&last_name=string&source=string&order_id=0&date_created=string&date_modified=string&page=0&limit=0 HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers',
  method: 'get',
  data: '?email=string&first_name=string&last_name=string&source=string&order_id=0&date_created=string&date_modified=string&page=0&limit=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers?email=string&first_name=string&last_name=string&source=string&order_id=0&date_created=string&date_modified=string&page=0&limit=0',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers', params: {
  'email':'string',
  'first_name':'string',
  'last_name':'string',
  'source':'string',
  'order_id':'integer',
  'date_created':'string',
  'date_modified':'string',
  'page':'integer',
  'limit':'integer'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers?email=string&first_name=string&last_name=string&source=string&order_id=0&date_created=string&date_modified=string&page=0&limit=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /customers/subscribers`

Returns a paginated Subscribers collection.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
email|query|string|false|Filter items by email.
first_name|query|string|false|Filter items by first_name.
last_name|query|string|false|Filter items by last_name.
source|query|string|false|Filter items by source.
order_id|query|integer|false|Filter items by order_id.
date_created|query|string|false|Filter items by date_created.
date_modified|query|string|false|Filter items by date_modified.
page|query|integer|false|Control the page in a limited list of products.
limit|query|integer|false|Control the items per page.


##### email
Filter items by email.

##### first_name
Filter items by first_name.

##### last_name
Filter items by last_name.

##### source
Filter items by source.

##### order_id
Filter items by order_id.

##### date_created
Filter items by date_created.

##### date_modified
Filter items by date_modified.

##### page
Control the page in a limited list of products.

##### limit
Control the items per page.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An array of subscriber objects and metadata.

> Example responses

````json
{
  "data": [
    {
      "id": 0,
      "email": "string",
      "first_name": "string",
      "last_name": "string",
      "source": "string",
      "order_id": 1,
      "date_modified": "string",
      "date_created": "string"
    }
  ],
  "meta": {
    "total": 0,
    "count": 0,
    "per_page": 0,
    "current_page": 0,
    "total_pages": 0,
    "links": {
      "previous": "string",
      "current": "string",
      "next": "string"
    }
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## createSubscriber

> Code samples

````shell
# You can also use wget
curl -X post https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "id": 0,
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "source": "string",
  "order_id": 1
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers',
{ 
  method: 'POST',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.post 'https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /customers/subscribers`

Creates a `Subscriber` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
subscriber|body|SubscriberPost|true|`Subscriber` object.


##### subscriber
`Subscriber` object.

> Body parameter

````json
{
  "id": 0,
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "source": "string",
  "order_id": 1
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Subscriber` object.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `Subscriber` was in conflict with another subscriber. This is the result of duplicate unique values such as email

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `Subscriber` was not valid. This is the result of missing required fields or invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "id": 0,
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "source": "string",
    "order_id": 1,
    "date_modified": "string",
    "date_created": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteSubscribers

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers?email=string&first_name=string&last_name=string&source=string&order_id=0&date_created=string&date_modified=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers?email=string&first_name=string&last_name=string&source=string&order_id=0&date_created=string&date_modified=string HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers',
  method: 'delete',
  data: '?email=string&first_name=string&last_name=string&source=string&order_id=0&date_created=string&date_modified=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers?email=string&first_name=string&last_name=string&source=string&order_id=0&date_created=string&date_modified=string',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers', params: {
  'email':'string',
  'first_name':'string',
  'last_name':'string',
  'source':'string',
  'order_id':'integer',
  'date_created':'string',
  'date_modified':'string'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers?email=string&first_name=string&last_name=string&source=string&order_id=0&date_created=string&date_modified=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /customers/subscribers`

Deletes a Subscriber or Subscribers from BigCommerce Customers.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
email|query|string|false|Filter items by email.
first_name|query|string|false|Filter items by first_name.
last_name|query|string|false|Filter items by last_name.
source|query|string|false|Filter items by source.
order_id|query|integer|false|Filter items by order_id.
date_created|query|string|false|Filter items by date_created.
date_modified|query|string|false|Filter items by date_modified.


##### email
Filter items by email.

##### first_name
Filter items by first_name.

##### last_name
Filter items by last_name.

##### source
Filter items by source.

##### order_id
Filter items by order_id.

##### date_created
Filter items by date_created.

##### date_modified
Filter items by date_modified.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>

## getSubscriberById

> Code samples

````shell
# You can also use wget
curl -X get https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}',
  method: 'get',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}',
{ 
  method: 'GET'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.get 'https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /customers/subscribers/{subscriber_id}`

Gets `Subscriber` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
subscriber_id|path|number|true|The ID of the `Subscriber` requested.


##### subscriber_id
The ID of the `Subscriber` requested.

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Subscriber` object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

> Example responses

````json
{
  "data": {
    "id": 0,
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "source": "string",
    "order_id": 1,
    "date_modified": "string",
    "date_created": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## updateSubscriber

> Code samples

````shell
# You can also use wget
curl -X put https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{
  "id": 0,
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "source": "string",
  "order_id": 1
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}',
{ 
  method: 'PUT',
  body: inputBody
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.put 'https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /customers/subscribers/{subscriber_id}`

Updates a `Subscriber` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
subscriber_id|path|number|true|The ID of the `Subscriber` requested.
subscriber|body|SubscriberPut|true|Returns a `Subscriber` object.


##### subscriber_id
The ID of the `Subscriber` requested.

##### subscriber
Returns a `Subscriber` object.

> Body parameter

````json
{
  "id": 0,
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "source": "string",
  "order_id": 1
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A `Subscriber` object.

404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The resource was not found.

409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The `Subscriber` was in conflict with another subscriber. This is the result of duplicate unique values, such as `email`.

422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The `Subscriber` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.

> Example responses

````json
{
  "data": {
    "id": 0,
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "source": "string",
    "order_id": 1,
    "date_modified": "string",
    "date_created": "string"
  },
  "meta": {}
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string"
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
````json
{
  "status": 0,
  "title": "string",
  "type": "string",
  "instance": "string",
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteSubscriberById

> Code samples

````shell
# You can also use wget
curl -X delete https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id} HTTP/1.1
Host: api.bigcommerce.com
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}',
  method: 'delete',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}',
{ 
  method: 'DELETE'
  
  
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

result = RestClient.delete 'https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}', headers=headers)

print r.json()

````

````java
URL obj = new URL("https://api.bigcommerce.com/stores/{{store_id}}/v3/customers/subscribers/{subscriber_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /customers/subscribers/{subscriber_id}`

Deletes a `Subscriber` object.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
subscriber_id|path|number|true|The ID of the `Subscriber` requested.


##### subscriber_id
The ID of the `Subscriber` requested.

### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response.

<aside class="success">
This operation does not require authentication
</aside>



