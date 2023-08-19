/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yy1d8ctu1wmha65",
    "created": "2023-08-17 06:03:17.806Z",
    "updated": "2023-08-17 06:03:17.806Z",
    "name": "todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bmcdudpj",
        "name": "doit",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 6,
          "max": 100,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yy1d8ctu1wmha65");

  return dao.deleteCollection(collection);
})
