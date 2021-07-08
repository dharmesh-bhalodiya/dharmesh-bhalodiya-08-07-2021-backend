const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { messageService } = require('../services');

const getPing = catchAsync(async (req, res) => {
  res.send({
    message: "It works",
  });
});

const createMessage = catchAsync(async (req, res) => {
  const message = await messageService.createMessage(req.body);
  res.status(httpStatus.CREATED).send(message);
});


const getMessage = catchAsync(async (req, res) => {
  const message = await messageService.getMessageById(req.params.messageId);
  if (!message) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Message not found');
  }
  res.send(message);
});

const getMessagesBySender = catchAsync(async (req, res) => {
  const result = await messageService.getMessagesBySender(req.params.username);
  res.send(result);
});

const getMessagesByReceiver = catchAsync(async (req, res) => {
  const result = await messageService.getMessagesByReceiver(req.params.username);
  res.send(result);
});

const deleteMessage = catchAsync(async (req, res) => {
  await messageService.deleteMessageById(req.params.messageId);
  res.status(httpStatus.NO_CONTENT).send();
});


module.exports = {
  getPing,
  createMessage,
  getMessage,
  getMessagesBySender,
  getMessagesByReceiver,
  deleteMessage
};