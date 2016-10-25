const ObjectId = require('mongodb').ObjectID;

module.exports = {
  preload: [
    { _id: ObjectId(),
      shop_id: 1,
      shop_name: 'teststore1',
      title: 'Test Store 1' },
    { _id: ObjectId(),
      shop_id: 2,
      shop_name: 'teststore2',
      title: 'Test Store 2' }
  ],
  create: [
    { _id: ObjectId(),
      shop_name: 'teststore1', // name conflict -> fail to create
      title: 'Test Store 1' },
    { _id: ObjectId().toString(),
      shop_name: 'teststore3',
      title: 'Test Store 3' }
  ]
}
