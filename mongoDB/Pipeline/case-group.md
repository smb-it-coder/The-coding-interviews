##added-stage



db.Persons.aggregate([

// match document based criteria condition
{
    $match: {  "eyeColor" : "green"}
 },
  // Stage 2: Project to include or exclude fields
   {
    $project: {
      nameFruitLikes: { $concat: [
        "$name", " has favourate fruit is ", "$favoriteFruit"
        ]
      },
      eyeColor: 1,
      favoriteFruit: 1
    }
  },
  // Stage 3: Add new fields or compute values
  {
    $addFields: {
      status: {
        $switch: {
          branches: [
            { case: { $gte: ["$age", 65] }, then: "Senior" },
            { case: { $gte: ["$age", 18] }, then: "Adult" },
            { case: { $lt: ["$age", 18] }, then: "Minor" }
          ],
          default: "Unknown"
        }
      }
    }
  },
// Stage 4: Group documents and calculate aggregates
 {
    $group: {
      _id: "$gender",
      totalPersons: { $sum: 1 },
      averageAge: { $avg: "$age" }
    }
  },
]);
