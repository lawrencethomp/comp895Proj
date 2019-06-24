var express = require('express');
var contactController = require('../ContactController');



const contactRouter = express.Router();

contactRouter.route("/")
    .post(contactController.contactController.createContact)
    .get(contactController.contactController.getContacts);

contactRouter.route("/:id")
    .post(contactController.contactController.updateContact)
    .get(contactController.contactController.getContact)
    .delete(contactController.contactController.deleteContact);

    module.exports.contactRouter = contactRouter;