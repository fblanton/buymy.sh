const ObjectId = require('mongodb').ObjectID;

module.exports = {
  preload: [
    { _id: ObjectId().toString(),
      shopId: 1,
      shopName: 'teststore1',
      title: 'Test Store 1' },
    { _id: ObjectId().toString(),
      shopId: 2,
      shopName: 'teststore2',
      title: 'Test Store 2' }
  ],
  create: [
    { _id: ObjectId().toString(),
      shopName: 'teststore3',
      title: 'Test Store 3' },
    { _id: ObjectId().toString(),
      shopName: 'teststore1', // name conflict -> fail to create
      title: 'Test Store 1' }
  ]
}
