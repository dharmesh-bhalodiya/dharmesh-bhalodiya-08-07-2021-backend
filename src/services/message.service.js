const { Message } = require('../models');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

/**
 * Create a Message
 * @param {Object} messageBody
 * @returns {Promise<Message>}
 */
const createMessage = async (messageBody) => {
  return Message.create(messageBody);
};


/**
 * Get Message by id
 * @param {ObjectId} id
 * @returns {Promise<Message>}
 */
const getMessageById = async (id) => {
  return Message.findById(id);
};


/**
* Get Messages by sender
* @param {ObjectId} id
* @returns {Promise<Message>}
*/
const getMessagesBySender = async (id) => {
  return Message.find({ sender: id }).sort({'createdAt': 'desc'});
};


/**
* Get Messages by receiver
* @param {ObjectId} id
* @returns {Promise<Message>}
*/
const getMessagesByReceiver = async (id) => {
  return Message.find({ receiver: id }).sort({'createdAt': 'desc'});
};


/**
* Delete Message by id
* @param {ObjectId} messageId
* @returns {Promise<Message>}
*/
const deleteMessageById = async (messageId) => {
  const message = await getMessageById(messageId);
  if (!message) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Message not found');
  }
  await message.remove();
  return message;
};



module.exports = {
  createMessage,
  getMessageById,
  getMessagesBySender,
  getMessagesByReceiver,
  deleteMessageById
};