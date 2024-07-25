db.persons.aggregate([
  // Stage 1: Match documents based on criteria (optional)
  { 
    $match: { 
      age: { $gte: 18 } 
    } 
  },
  
  // Stage 2: Project to include or exclude fields
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      age: 1,
      city: 1
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
      _id: "$city",
      totalPersons: { $sum: 1 },
      averageAge: { $avg: "$age" }
    }
  },
  
  // Stage 5: Sort results
  {
    $sort: { totalPersons: -1 }
  },
  
  // Stage 6: Limit number of results (optional)
  {
    $limit: 5
  }
]);
