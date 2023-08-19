/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yy1d8ctu1wmha65")

  // remove
  collection.schema.removeField("cuavajm3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wv2my9aw",
    "name": "done",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yy1d8ctu1wmha65")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cuavajm3",
    "name": "done",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 100,
      "max": 600,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("wv2my9aw")

  return dao.saveCollection(collection)
})
