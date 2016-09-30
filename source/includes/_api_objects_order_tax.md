## <span class="jumptarget"> Order Taxes </span>

Each tax applied to an order. This information can be useful for reporting purposes. All values are read-only.

### <span class="jumptarget"> Order Tax Object – Properties </span>

| Name | Type | Description |
| --- | --- | --- |
| id | int | The unique numeric identifier of the taxes object. |
| order_id | int | The unique numeric identifier of the order to which the tax was applied. NOTE: Not included if the store was using the automatic tax feature. |
| order_address_id | int | The unique numeric identifier of the order address object associated with the order. NOTE: Not included if the store was using the automatic tax feature. |
| tax_rate_id | int |
| tax_class_id | int | The unique numeric identifier of the tax class object. NOTE: will be 0 if automatic tax was enabled or if the default tax class was used. |
| name | string | The name of the tax class object. |
| class | string | The name of the type of tax that was applied. NOTE: will be "Automatic Tax" if automatic tax was enabled. |
| rate | decimal | The tax rate in percentage form. |
| priority | int |
| priority_amount | decimal |
| line_amount | decimal |
