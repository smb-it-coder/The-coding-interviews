

// case I not working 
  db.Posts.updateMany(
  { }, // Match all documents in the `posts` collection
  [
    { 
      $set: { 
        userId: {
          $arrayElemAt: [
            db.Users.aggregate([
              { $project: { _id: 1 } }
            ]),
            0
          ]
        }
      }
    }
  ]
)
  
//Case -II working fine 

db.Posts.aggregate([
    {
      $lookup: {
        from: "Users", // Assuming the collection name is Users
        pipeline: [
          { $project: { _id: 1 } }
        ],
        as: "usersIds"
      }
    },
    {
      $set: {
        userId: { $arrayElemAt: ["$usersIds._id", 0] }
      }
    }
  ]);

  
    
  // case III not working  
db.Posts.updateMany(
    { }, // Match all documents in the `Posts` collection
    [
      {
        $lookup: {
          from: "Users", // Assuming the collection name is Users
          pipeline: [
            { $project: { _id: 1 } }
          ],
          as: "usersIds"
        }
      },
      {
        $set: {
          userId: { $arrayElemAt: ["$usersIds._id", 0] }
        }
      }
    ]
  );
  









