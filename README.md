# The Complete MongoDB Tutorial

Complete MongoDB Tutorial - The Net Ninja

### 1. What is MongoDB

### 2. Installing MongoDB

### 3. Collections and Documents

### 4. Using MongoDB Compass

### 5. Using the MongoDB Shell
```
test> show dbs

admin       40.00 KiB
bookstore   72.00 KiB
config     108.00 KiB
local       72.00 KiB

test> use bookstore

bookstore> show collections
books
bookstore> var name = "yoshi"

bookstore> name
yoshi

bookstore> help

bookstore> exit
```

**rename a collection**
```
db.books.renameCollection("book_v1")
```

### 6. Adding New Documents
```
db.books.insertOne({title: "The Color of Magic", author: "Terry Pratchett", pages: 300, rating: 7, genres: ["fantasy", "magic"]})
{
  acknowledged: true,
  insertedId: ObjectId("63dd957e105ddef1505b2f1a")
}
```
**collections does not need to exists. (Ex. authors does not exists)**
```
db.authors.insertOne({name: "Brandon Sanderson", age: 60})
{
  acknowledged: true,
  insertedId: ObjectId("63dd95e4105ddef1505b2f1b")
}
```

### 7. Finding New Documents
**print the first 20 book.**
```
db.books.find()
```

**return the next 20**
```
it
```

**filter by author**
```
db.books.find({author: "Terry Pratchett})
```

**filter by author and ratings**
```
db.books.find({author: "Terry Pratchett", rating: 7})
```

**filter by author and limit the return columns**
```
db.books.find({author: "Brandon Sanderson"}, {title: 1, author: 1})
```

**no filter and limit the columns**
```
db.books.find({}, {title: 1, author: 1})
```

**filter by id and one result - (in case of multiple result, it just the first one)**
```
db.books.findOne({_id: ObjectId("63dd2828eeb9397ec4dc2368")});
```

### 8. Sorting and Limiting Data
**method chaining**
```
db.books.find().count()
```
```
db.books.find({author: "Brandon Sanderson"}).count()
```
```
db.books.find().limit(3)
```
*sort by title 1 sort by asc, -1 desc*
```
db.books.find().sort({title: 1})
```

```
db.books.find().sort({title: 1}).limit(3)
```

### 9. Nested Documents
```
db.books.insertOne({"title": "The Way of Kings","author": "Brandon Sanderson","pages": 400,"rating": 9,"genres": ["fantasy"],"reviews": [{"name": "Yoshi","body": "Great book!!"},{"name": "mario","body": "so so"}]})
```
```
db.books.insertMany([])
```
```
[{
  "title": "The Light Fantastic",
  "author": "Terry Pratchett",
  "pages": 250,
  "rating": 6,
  "genres": [
    "fantasy",
    "magic"
  ],
  "reviews": [
    {
      "name": "Luigi",
      "body": "It was pretty good"
    },
    {
      "name": "Bowser",
      "body": "Loved It!!!"
    }
  ]
},{
  "title": "The Name of the Wind",
  "author": "Patrick Rothfuss",
  "pages": 500,
  "rating": 10,
  "genres": [
    "fantasy"
  ],
  "reviews": [
    {
      "name": "Peach",
      "body": "One of my favs"
    }
  ]
},{
  "title": "The Color of Magic",
  "author": "Terry Pratchett",
  "pages": 350,
  "rating": 8,
  "genres": [
    "fantasy",
    "magic"
  ],
  "reviews": [
    {
      "name": "Luigi",
      "body": "It was OK"
    },
    {
      "name": "Bowser",
      "body": "Really good book"
    }
  ]
},{
  "title": "1984",
  "author": "George Orwell",
  "pages": 300,
  "rating": 6,
  "genres": [
    "sci-fi",
    "dystopian"
  ],
  "reviews": [
    {
      "name": "Peach",
      "body": "Not my cup of tea"
    },
    {
      "name": "Mario",
      "body": "Meh"
    }
  ]
}]
```

### 10. Operators & Complex Queries

```
db.books.find({rating: {$gt: 8}});

db.books.find({rating: {$lt: 8}});

db.books.find({rating: {$gte: 8}});

db.books.find({rating: {$lte: 8}});

db.books.find({rating: {$gt: 7}, author: "Patrick Rothfuss"});

db.books.find({$or: [{rating: 7}, {rating: 9}]});

db.books.find({$or: [{rating: 7}, {author: "Terry Pratchett"}]});

db.books.find({$or: [{pages: {$lt: 300}}, {pages: {$gt: 400}}]});
```

### 11. Using $in and $nin

```
db.books.find({rating: {$in: [7, 8, 9]}})

db.books.find({$or: [{rating: 7}, {rating: 8}, {rating: 9}]})

db.books.find({rating: {$nin: [7, 8]}})
```

### 12 Querying Arrays

**check one value**
```
db.books.find({genres: "magic"})
```
**exact match - use a an array**
```
db.books.find({genres: ["magic"]})
```

**fantasy and sci-fi needs to be in both inside the array**
```
db.books.find({genres: {$all: ["fantasy", "sci-fi"]}})
```
```
db.books.find({"reviews.name": "Luigi"})
```

### 13. Deleting Documents
```
db.books.deleteOne({_id: ObjectId("63dedb3439074017ea39236b")})

db.books.deleteMany({author: "Terry Pratchett"})
```

### 14. Update Documents
```
db.books.updateOne({_id: ObjectId('63ded5841c406856fc87e8e2')}, {$set: {rating: 8, paging: 360}})

db.books.updateMany({author: "Terry Pratchett"}, {$set: {author: "Terry Pratchet"}})

db.books.updateOne({_id: ObjectId("63ded5841c406856fc87e8e3")}, {$inc: {pages: 2}})

db.books.updateOne({_id: ObjectId("63ded5841c406856fc87e8e3")}, {$inc: {pages: -2}})

db.books.updateOne({_id: ObjectId("63ded5841c406856fc87e8e3")}, {$pull: {"genres": "fantasy"}})

db.books.updateOne({_id: ObjectId("63ded5841c406856fc87e8e3")}, {$push: {"genres": "fantasy"}})

db.books.updateOne({_id: ObjectId("63ded5841c406856fc87e8e3")}, {$push: {"genres": {$each: ["1", "2"]}}})
```

### 15. MongoDB Drivers
```
npm init

npm install express --save

create app.js

npm install -g nodemon
```

*have to setup the path in windows.*
```
nodemon app 

npx nodemon app 

npm install mongodb --save
```

### 16. Indexes
```
db.books.find({rating: 8}).explain('executionStats')

db.books.createIndex({rating: 8 })

db.books.getIndexes()

db.books.dropIndex({rating: 8})
```

