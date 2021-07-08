const express = require('express');
const validate = require('../../middlewares/validate');
const { messageValidation } = require('../../validations');
const { messageController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .get(messageController.getPing);

router
  .route('/')
  .post(validate(messageValidation.createMessage), messageController.createMessage)

router
  .route('/:messageId')
  .get(validate(messageValidation.getMessage), messageController.getMessage)
  .delete(validate(messageValidation.deleteMessage), messageController.deleteMessage);

router
  .route('/:username/sent')
  .get(validate(messageValidation.getMessages), messageController.getMessagesBySender)

router
  .route('/:username/receive')
  .get(validate(messageValidation.getMessages), messageController.getMessagesByReceiver)

module.exports = router;