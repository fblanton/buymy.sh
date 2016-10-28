const ObjectId = require('mongodb').ObjectID;

module.exports = {
  preload: [
    { _id: ObjectId().toString(),
      shopName: 'teststore1',
      title: 'Item 1',
      description: 'Really Cool First Item' },
    { _id: ObjectId().toString(),
      shopName: 'teststore1',
      title: 'Item 2',
      description: 'Really Cool Second Item' },
    { _id: ObjectId().toString(),
      shopName: 'teststore2',
      title: 'Item 1',
      description: 'Really Cool First Item For Store 2' }
  ],
  create: [
    { _id: ObjectId().toString(),
      shopName: 'teststore2',
      title: 'Item 2',
      description: 'Really cool second item for second store.' }
  ]
}
