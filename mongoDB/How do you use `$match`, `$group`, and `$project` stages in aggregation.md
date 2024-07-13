In MongoDB's Aggregation Framework, the `$match`, `$group`, and `$project` stages are fundamental for filtering, grouping, and reshaping documents respectively. Let's dive into how each of these stages is used:

### 1. `$match` Stage

The `$match` stage filters documents based on specified criteria, allowing only those that match the conditions to proceed further in the aggregation pipeline.

**Syntax:**
```javascript
{ $match: { <query> } }
```

**Usage:**
- **Filter documents:** Include documents that satisfy a specific condition.
- **Optimize performance:** Reduces the number of documents processed in subsequent pipeline stages.

**Example:**
```javascript
db.orders.aggregate([
  { $match: { status: "A" } }
]);
```
This example filters documents where the `status` field equals `"A"`.

### 2. `$group` Stage

The `$group` stage groups documents by a specified expression and applies accumulator expressions to calculate aggregated values for each group.

**Syntax:**
```javascript
{ $group: { _id: <expression>, <field1>: { <accumulator1> : <expression1> }, ... } }
```

**Usage:**
- **Aggregate data:** Calculate sums, averages, counts, etc., for grouped documents.
- **Group by multiple fields:** Supports multiple fields or expressions for grouping.

**Example:**
```javascript
db.orders.aggregate([
  {
    $group: {
      _id: "$item",
      totalQuantity: { $sum: "$quantity" },
      avgPrice: { $avg: "$price" }
    }
  }
]);
```
This example groups documents by the `item` field, calculating the total quantity and average price for each item.

### 3. `$project` Stage

The `$project` stage reshapes documents, including, excluding, or transforming fields, and computes new fields based on existing fields or expressions.

**Syntax:**
```javascript
{ $project: { <field1>: <1 or 0>, <field2>: <1 or 0>, ... } }
```

**Usage:**
- **Reshape documents:** Include or exclude fields from output documents.
- **Compute new fields:** Create new fields with expressions based on existing fields.

**Example:**
```javascript
db.orders.aggregate([
  {
    $project: {
      _id: 0,
      item: 1,
      totalAmount: { $multiply: ["$price", "$quantity"] }
    }
  }
]);
```
This example projects only the `item` field and calculates a new field `totalAmount` by multiplying `price` and `quantity`.

### Combining Stages in Aggregation Pipeline

You can combine these stages and others (like `$sort`, `$limit`, `$unwind`, etc.) to perform complex data transformations and aggregations. Each stage operates sequentially, with the output of one stage becoming the input for the next.

**Example Pipeline:**
```javascript
db.orders.aggregate([
  { $match: { status: "A" } },         // Filter documents by status "A"
  { $group: { _id: "$item", total: { $sum: "$quantity" } } },  // Group by item and calculate total quantity
  { $project: { _id: 0, item: "$_id", totalQuantity: "$total" } }  // Project fields to reshape output
]);
```

In this pipeline:
- `$match` filters documents where `status` is `"A"`.
- `$group` groups documents by `item` and computes total quantity.
- `$project` reshapes the output to include `item` and `totalQuantity`.

These stages and their combinations provide powerful capabilities for data aggregation and transformation in MongoDB, enabling complex analytics and reporting tasks efficiently within the database.