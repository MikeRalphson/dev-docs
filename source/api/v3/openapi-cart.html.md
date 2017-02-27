---
title: Order API v2.0.0
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

# Order API v2.0.0





# Default

## POST /billing

> Code samples

````shell
# You can also use wget
curl -X post ://undefined/billing?quote=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST ://undefined/billing?quote=string HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/billing',
  method: 'post',
  data: '?quote=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('://undefined/billing?quote=string',
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

result = RestClient.post '://undefined/billing', params: {
  'quote':'string',
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('://undefined/billing', params={
        'quote':'string'

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("://undefined/billing?quote=string");
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

Add / Update the billing address in quote object

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
quote|query|string|false|No description
billingData|body|BillingRequestData|false|No description


> Body parameter

````json
{}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Billing address has been successfully updated

> Example responses

````json
{}
````
<aside class="success">
This operation does not require authentication
</aside>

## GET /cart

> Code samples

````shell
# You can also use wget
curl -X get ://undefined/cart \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET ://undefined/cart HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/cart',
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

fetch('://undefined/cart',
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

result = RestClient.get '://undefined/cart', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('://undefined/cart', headers=headers)

print r.json()

````

````java
URL obj = new URL("://undefined/cart");
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

*Retrieve cart data*

Retrieves a cart, which is the composition of set of items

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The cart

> Example responses

````json
{
  "meta": {},
  "data": {}
}
````
<aside class="success">
This operation does not require authentication
</aside>

## POST /coupon

> Code samples

````shell
# You can also use wget
curl -X post ://undefined/coupon \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST ://undefined/coupon HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/coupon',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = ''string'';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('://undefined/coupon',
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

result = RestClient.post '://undefined/coupon', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('://undefined/coupon', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("://undefined/coupon");
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

Adding coupon or gift certificate code to the cart

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
couponCode|body|string|false|coupon or gift certificate code


> Body parameter

````json
"string"
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Cart with coupon or gift certificate added
422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|The coupon or gift certificate code cannot be added to the cart e.g. coupon code expired

> Example responses

````json
{}
````
<aside class="success">
This operation does not require authentication
</aside>

## DELETE /coupon/{couponCode}

> Code samples

````shell
# You can also use wget
curl -X delete ://undefined/coupon/{couponCode} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE ://undefined/coupon/{couponCode} HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/coupon/{couponCode}',
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

fetch('://undefined/coupon/{couponCode}',
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

result = RestClient.delete '://undefined/coupon/{couponCode}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('://undefined/coupon/{couponCode}', headers=headers)

print r.json()

````

````java
URL obj = new URL("://undefined/coupon/{couponCode}");
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

Removing coupon or gift certificate code from the cart

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
couponCode|path|string|true|coupon or gift certificate code


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Cart with coupon or gift certificate removed
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The coupon or gift certificate code cannot be removed from the cart

> Example responses

````json
{}
````
<aside class="success">
This operation does not require authentication
</aside>

## POST /customer

> Code samples

````shell
# You can also use wget
curl -X post ://undefined/customer?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST ://undefined/customer?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/customer',
  method: 'post',
  data: '?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string',
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

fetch('://undefined/customer?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string',
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
    'Content-Type':'application/json'

}

result = RestClient.post '://undefined/customer', params: {
  'quote':'string',
  'customer':'string',
  'shippingAddress':'string',
  'billingAddress':'string',
  'shippingOptions':'string',
  'cart':'string',
  'order':'string'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('://undefined/customer', params={
        'quote':'string',
        'customer':'string',
        'shippingAddress':'string',
        'billingAddress':'string',
        'shippingOptions':'string',
        'cart':'string',
        'order':'string'

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("://undefined/customer?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string");
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

Associate the quote object to a customer. Parameters are comma separated as values against `includes` key. For example, `/quote?includes=customer,shippingOptions`

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
quote|query|string|false|No description
customer|query|string|false|No description
shippingAddress|query|string|false|No description
billingAddress|query|string|false|No description
shippingOptions|query|string|false|No description
cart|query|string|false|No description
order|query|string|false|No description


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Based on existing query parameters a series of data will be added to response
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If user tries to login but the provided username or password is incorrect
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized Acess

> Example responses

````json
{}
````
<aside class="success">
This operation does not require authentication
</aside>

## GET /customer

> Code samples

````shell
# You can also use wget
curl -X get ://undefined/customer?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET ://undefined/customer?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/customer',
  method: 'get',
  data: '?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string',
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

fetch('://undefined/customer?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string',
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

result = RestClient.get '://undefined/customer', params: {
  'quote':'string',
  'customer':'string',
  'shippingAddress':'string',
  'billingAddress':'string',
  'shippingOptions':'string',
  'cart':'string',
  'order':'string'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('://undefined/customer', headers=headers)

print r.json()

````

````java
URL obj = new URL("://undefined/customer?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string");
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

currently any GET request to /customer end point will result to a `405` response because `getAction()` method does't exists

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
quote|query|string|false|No description
customer|query|string|false|No description
shippingAddress|query|string|false|No description
billingAddress|query|string|false|No description
shippingOptions|query|string|false|No description
cart|query|string|false|No description
order|query|string|false|No description


### Responses

Status|Meaning|Description
---|---|---|
405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method not allowed

<aside class="success">
This operation does not require authentication
</aside>

## DELETE /customer

> Code samples

````shell
# You can also use wget
curl -X delete ://undefined/customer?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
DELETE ://undefined/customer?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/customer',
  method: 'delete',
  data: '?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string',
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

fetch('://undefined/customer?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string',
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

result = RestClient.delete '://undefined/customer', params: {
  'quote':'string',
  'customer':'string',
  'shippingAddress':'string',
  'billingAddress':'string',
  'shippingOptions':'string',
  'cart':'string'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.delete('://undefined/customer', headers=headers)

print r.json()

````

````java
URL obj = new URL("://undefined/customer?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string");
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

Remove customer information from the quote.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
quote|query|string|false|No description
customer|query|string|false|No description
shippingAddress|query|string|false|No description
billingAddress|query|string|false|No description
shippingOptions|query|string|false|No description
cart|query|string|false|No description


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Updated customer data, billing address & shipping address; Mostly empty fields.

> Example responses

````json
{}
````
<aside class="success">
This operation does not require authentication
</aside>

## POST /order

> Code samples

````shell
# You can also use wget
curl -X post ://undefined/order \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST ://undefined/order HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/order',
  method: 'post',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('://undefined/order',
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

result = RestClient.post '://undefined/order', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('://undefined/order', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("://undefined/order");
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

Used to create an order (currently we use session to retrieve quote data)

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
Data|body|RequestOrderData|true|A collection of data consumed by the order endpoint when creating the order for different payment methods and payment providers.


> Body parameter

````json
{}
````
### Responses

Status|Meaning|Description
---|---|---|
201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Successful response
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid input - Happens when request body is not in json or cannot be decoded as json
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The requested payment provider is not implemented correctly
503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Shop order token is missing from quote or quote is empty

### Response Headers

Status|Header|Type|Format|Description
---|---|---|---|---|
201|token|string||JWT token, combination of cart_id, store_id, amount and currency.

> Example responses

````json
{}
````
<aside class="success">
This operation does not require authentication
</aside>

## GET /order/{orderId}

> Code samples

````shell
# You can also use wget
curl -X get ://undefined/order/{orderId} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET ://undefined/order/{orderId} HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/order/{orderId}',
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

fetch('://undefined/order/{orderId}',
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

result = RestClient.get '://undefined/order/{orderId}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('://undefined/order/{orderId}', headers=headers)

print r.json()

````

````java
URL obj = new URL("://undefined/order/{orderId}");
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

*Retrieve order data*

Retrieves an order, which is the composition of set of items

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
orderId|path|integer|true|Id of the Order


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The order
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|No order matching orderId

> Example responses

````json
{}
````
<aside class="success">
This operation does not require authentication
</aside>

## POST /order/{orderId}

> Code samples

````shell
# You can also use wget
curl -X post ://undefined/order/{orderId} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST ://undefined/order/{orderId} HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/order/{orderId}',
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
  'Content-Type':'application/json'

};

fetch('://undefined/order/{orderId}',
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
    'Content-Type':'application/json'

}

result = RestClient.post '://undefined/order/{orderId}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('://undefined/order/{orderId}', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("://undefined/order/{orderId}");
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

Update the order. Finalize in case the order has been set previously in checkout

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
orderId|path|integer|true|Id of the Order


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The updated Order

> Example responses

````json
{
  "id": "string",
  "items": [
    {}
  ],
  "currency": "string",
  "subtotal": {
    "amount": 0,
    "integerAmount": 0
  },
  "coupon": {
    "discountedAmount": 0,
    "coupons": [
      {}
    ]
  },
  "discount": {
    "amount": 0
  },
  "giftCertificate": {
    "totalDiscountedAmount": 0,
    "appliedGiftCertificates": [
      {}
    ]
  },
  "shipping": {
    "amount": 0,
    "amountBeforeDiscount": 0,
    "integerAmount": 0,
    "integerAmountBeforeDiscount": 0,
    "required": true
  },
  "storeCredit": {
    "amount": 0
  },
  "taxSubtotal": {
    "amount": 0,
    "integerAmount": 0
  },
  "taxTotal": {
    "amount": 0,
    "integerAmount": 0
  },
  "handling": {
    "amount": 0,
    "integerAmount": 0
  },
  "grandTotal": {
    "amount": 0,
    "integerAmount": 0
  },
  "discountNotifications": [
    {}
  ],
  "orderId": 0,
  "token": "string",
  "payment": {},
  "socialData": [
    {}
  ],
  "status": "ORDER_STATUS_INCOMPLETE",
  "customerCreated": true,
  "hasDigitaItems": true,
  "isDownloadable": true,
  "isComplete": true,
  "callbackUrl": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## POST /order/{orderId}/payment

> Code samples

````shell
# You can also use wget
curl -X post ://undefined/order/{orderId}/payment \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST ://undefined/order/{orderId}/payment HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/order/{orderId}/payment',
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
  "gateway": "string",
  "status": "PAYMENT_SUCCESS",
  "transactionType": "TRANSACTION_AUTHORIZATION",
  "amount": 0,
  "amountAsInteger": 0,
  "cardType": "string",
  "lastFourDigitsOfCard": 0,
  "providerTransactionId": "string",
  "providerAuthorizationCode": "string",
  "errors": [
    {}
  ]
}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('://undefined/order/{orderId}/payment',
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

result = RestClient.post '://undefined/order/{orderId}/payment', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('://undefined/order/{orderId}/payment', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("://undefined/order/{orderId}/payment");
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

Update the payment and order status from payment service (BigPay) & finalize the order. Requires HAWK authentication.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
orderId|path|integer|true|Id of the Order to be updated
paymentData|body|PaymentRequestData|true|No description


> Body parameter

````json
{
  "gateway": "string",
  "status": "PAYMENT_SUCCESS",
  "transactionType": "TRANSACTION_AUTHORIZATION",
  "amount": 0,
  "amountAsInteger": 0,
  "cardType": "string",
  "lastFourDigitsOfCard": 0,
  "providerTransactionId": "string",
  "providerAuthorizationCode": "string",
  "errors": [
    {}
  ]
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The updated Order

> Example responses

````json
{
  "id": "string",
  "items": [
    {}
  ],
  "currency": "string",
  "subtotal": {
    "amount": 0,
    "integerAmount": 0
  },
  "coupon": {
    "discountedAmount": 0,
    "coupons": [
      {}
    ]
  },
  "discount": {
    "amount": 0
  },
  "giftCertificate": {
    "totalDiscountedAmount": 0,
    "appliedGiftCertificates": [
      {}
    ]
  },
  "shipping": {
    "amount": 0,
    "amountBeforeDiscount": 0,
    "integerAmount": 0,
    "integerAmountBeforeDiscount": 0,
    "required": true
  },
  "storeCredit": {
    "amount": 0
  },
  "taxSubtotal": {
    "amount": 0,
    "integerAmount": 0
  },
  "taxTotal": {
    "amount": 0,
    "integerAmount": 0
  },
  "handling": {
    "amount": 0,
    "integerAmount": 0
  },
  "grandTotal": {
    "amount": 0,
    "integerAmount": 0
  },
  "discountNotifications": [
    {}
  ],
  "orderId": 0,
  "token": "string",
  "payment": {},
  "socialData": [
    {}
  ],
  "status": "ORDER_STATUS_INCOMPLETE",
  "customerCreated": true,
  "hasDigitaItems": true,
  "isDownloadable": true,
  "isComplete": true,
  "callbackUrl": "string"
}
````
<aside class="success">
This operation does not require authentication
</aside>

## GET /payments

> Code samples

````shell
# You can also use wget
curl -X get ://undefined/payments \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET ://undefined/payments HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/payments',
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

fetch('://undefined/payments',
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

result = RestClient.get '://undefined/payments', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('://undefined/payments', headers=headers)

print r.json()

````

````java
URL obj = new URL("://undefined/payments");
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

Retrieve a list of existing payment methods

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of payment methods

> Example responses

````json
{}
````
<aside class="success">
This operation does not require authentication
</aside>

## GET /payments/{providerId}

> Code samples

````shell
# You can also use wget
curl -X get ://undefined/payments/{providerId} \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET ://undefined/payments/{providerId} HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/payments/{providerId}',
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

fetch('://undefined/payments/{providerId}',
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

result = RestClient.get '://undefined/payments/{providerId}', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('://undefined/payments/{providerId}', headers=headers)

print r.json()

````

````java
URL obj = new URL("://undefined/payments/{providerId}");
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

Retrieve a single, existing payment method

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
providerId|path|string|true|Id of the payment provider


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Payment method

> Example responses

````json
{}
````
<aside class="success">
This operation does not require authentication
</aside>

## GET /quote

> Code samples

````shell
# You can also use wget
curl -X get ://undefined/quote?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET ://undefined/quote?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/quote',
  method: 'get',
  data: '?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string',
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

fetch('://undefined/quote?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string',
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

result = RestClient.get '://undefined/quote', params: {
  'quote':'string',
  'customer':'string',
  'shippingAddress':'string',
  'billingAddress':'string',
  'shippingOptions':'string',
  'cart':'string',
  'order':'string'
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('://undefined/quote', headers=headers)

print r.json()

````

````java
URL obj = new URL("://undefined/quote?quote=string&customer=string&shippingAddress=string&billingAddress=string&shippingOptions=string&cart=string&order=string");
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

Parameters are comma separated as values against `includes` key. For example, `/quote?includes=customer,shippingOptions`

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
quote|query|string|false|No description
customer|query|string|false|No description
shippingAddress|query|string|false|No description
billingAddress|query|string|false|No description
shippingOptions|query|string|false|No description
cart|query|string|false|No description
order|query|string|false|No description


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Based on existing query parameters a series of data will be added to response

> Example responses

````json
{}
````
<aside class="success">
This operation does not require authentication
</aside>

## POST /shipping

> Code samples

````shell
# You can also use wget
curl -X post ://undefined/shipping?cart=string&quote=string&shippingOptions=string \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
POST ://undefined/shipping?cart=string&quote=string&shippingOptions=string HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/shipping',
  method: 'post',
  data: '?cart=string&quote=string&shippingOptions=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('://undefined/shipping?cart=string&quote=string&shippingOptions=string',
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

result = RestClient.post '://undefined/shipping', params: {
  'cart':'string',
  'quote':'string',
  'shippingOptions':'string',
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.post('://undefined/shipping', params={
        'cart':'string',
        'quote':'string',
        'shippingOptions':'string'

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("://undefined/shipping?cart=string&quote=string&shippingOptions=string");
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

Add / Update the shipping address in quote object

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
cart|query|string|false|No description
quote|query|string|false|No description
shippingOptions|query|string|false|No description
shippingData|body|ShippingRequestData|false|No description


> Body parameter

````json
{}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Shipping address has been successfully updated

> Example responses

````json
{}
````
<aside class="success">
This operation does not require authentication
</aside>

## GET /shippingOptions

> Code samples

````shell
# You can also use wget
curl -X get ://undefined/shippingOptions \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
GET ://undefined/shippingOptions HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/shippingOptions',
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

fetch('://undefined/shippingOptions',
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

result = RestClient.get '://undefined/shippingOptions', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.get('://undefined/shippingOptions', headers=headers)

print r.json()

````

````java
URL obj = new URL("://undefined/shippingOptions");
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

*Retrieve Shipping Options*

Retrieves a list of all available shipping options for the current quote

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of the shipping options. In case the quote does not have shipping address the response will be an empty array.

> Example responses

````json
{
  "meta": {},
  "data": {
    "shippingOptions": {
      "addressId": [
        {}
      ]
    }
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## PUT /shippingOptions

> Code samples

````shell
# You can also use wget
curl -X put ://undefined/shippingOptions \ 
  -H 'Accept: application/json' \ 
  -H 'Content-Type: application/json'

````

````http
PUT ://undefined/shippingOptions HTTP/1.1
Host: undefined
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: '://undefined/shippingOptions',
  method: 'put',
  
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
var inputBody = '{}';
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('://undefined/shippingOptions',
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

result = RestClient.put '://undefined/shippingOptions', params: {
  
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
    'Accept':'application/json',
    'Content-Type':'application/json'

}

r = requests.put('://undefined/shippingOptions', params={

    },
    headers=headers

)

print r.json()

````

````java
URL obj = new URL("://undefined/shippingOptions");
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

*Set Shipping Option*

Set in the order the selected shipping option

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
ShippingOptionRequestData|body|ShippingOptionRequestData|false|No description


> Body parameter

````json
{}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid shipping method
409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Shipping Option Method has expired
422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Missing Required Fields

> Example responses

````json
{
  "meta": {},
  "data": {
    "shippingOptions": {
      "addressId": [
        {}
      ]
    }
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>



