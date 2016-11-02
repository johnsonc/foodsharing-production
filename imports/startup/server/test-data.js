import {
    Meteor
} from 'meteor/meteor';
import {
    ImageItems
} from '../../api/ImageItems/ImageItems.js';
import {
    FoodItems
} from '../../api/FoodItems/FoodItems.js';
import faker from 'faker';
//Users
Meteor.users.remove({});

var numUsers = 5;
for (i = 0; i < numUsers; i++) {
    Accounts.createUser({
        username: 'tom' + i,
        email: 'tom' + i + '@mail.com',
        password: 'password'
    });
};

//ImageItems
ImageItems.remove({});
FoodItems.remove({});

//Create some ImageItems
images = [
    "http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/istock_000050960496_medium.jpg",
    "http://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg",
    "http://www.foodmanufacture.co.uk/var/plain_site/storage/images/publications/food-beverage-nutrition/foodmanufacture.co.uk/npd/top-10-functional-food-trends/11097085-1-eng-GB/Top-10-functional-food-trends_strict_xxl.jpg"
];
users = ['tom0','tom1','tom2']
var numPortions = 5;
var numFoodItems = 5;

for (let j = 0; j < images.length; j++) {
    ImageItems.insert({
        imageURL: images[j],
        foodDescription: faker.lorem.sentence(),
        username: users[j],
        totalItems: numFoodItems,
        location: {
            lat: faker.address.latitude(),
            lng: faker.address.longitude()
        },
    }, function(err, id) {
        if (!err) {
            for (let k = 0; k < numFoodItems; k++) {
                FoodItems.insert({
                    imageID: id,
                    imageURL: images[j],
                    foodName: faker.lorem.sentence(),
                    username: users[j],
                    portions: numPortions,
                    claims: [{
                        username: Meteor.users.find().fetch()[Math.floor(Math.random() * numUsers)].username,
                        requested: 1,
                        accepted: 1,
                        createdAt: new Date(),
                    }, {
                        username: Meteor.users.find().fetch()[Math.floor(Math.random() * numUsers)].username,
                        requested: 5,
                        accepted: 0,
                        createdAt: new Date(),
                    }, {
                        username: Meteor.users.find().fetch()[Math.floor(Math.random() * numUsers)].username,
                        requested: 3,
                        accepted: 2,
                        createdAt: new Date(),
                    }, ],
                });
            }
        }
    });
}



//Create food items by random users
// images = ["http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/istock_000050960496_medium.jpg", "http://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg", "http://www.foodmanufacture.co.uk/var/plain_site/storage/images/publications/food-beverage-nutrition/foodmanufacture.co.uk/npd/top-10-functional-food-trends/11097085-1-eng-GB/Top-10-functional-food-trends_strict_xxl.jpg"];
// var numFoodItems = 20;
// var numPortions = 10;
// for (j = 0; j < images.length; j++) {
//     currUser = Meteor.users.find().fetch()[Math.floor(Math.random() * numUsers)]
//     for (i = 0; i < numFoodItems; i++) {
//         FoodItemsC.insert({
//             foodName: faker.lorem.words(),
//             foodDesc: faker.lorem.sentence(),
//             portionNo: (Math.floor(Math.random() * numPortions)) + 1,
//             portionsClaimed: 0,
//             imgURL: images[j],
//             owner: currUser._id,
//             username: currUser.username,
//             createdAt: new Date(),
//             location: {
//                 lat: faker.address.latitude(),
//                 lng: faker.address.longitude()
//             }
//         });
//     }
// }

// //Create some claims
// var numClaims = 30;

// //Create comments by random users
// var numComments = 35;
// for (i = 0; i < numComments; i++) {
//     currUser = Meteor.users.find().fetch()[Math.floor(Math.random() * numUsers)];
//     currItem = FoodItemsC.find().fetch()[Math.floor(Math.random() * numFoodItems)];
//     Meteor.call('createClaims', currUser.username, Math.floor(Math.random() * currItem.portionNo), currItem._id)
//     FoodItemsC.update({
//         _id: currItem._id
//     }, {
//         $push: {
//             comments: {
//                 username: currUser.username,
//                 comment: faker.lorem.sentences(),
//                 createdAt: new Date()
//             }
//         }
//     });

// }
//Remove privateChat
// PrivateChatC.remove({});

// //Create private messages between people
// var numMessages = 100;
// for (i = 0; i < numComments; i++) {
//     randNumFirst = Math.floor(Math.random() * numUsers);
//     randNumSecond = (randNumFirst + ((Math.floor(Math.random() * (numUsers - 1))) + 1)) % numUsers;
//     allUsers = Meteor.users.find().fetch();
//     firstUser = allUsers[randNumFirst].username;
//     secondUser = allUsers[randNumSecond].username;
//     Meteor.call('addPrivateMessage', [
//         firstUser, secondUser
//     ], firstUser, faker.lorem.sentences());
// }
