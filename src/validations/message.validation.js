const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createMessage = {
    body: Joi.object().keys({
        sender: Joi.string().required(),
        receiver: Joi.string().required(),
        subject: Joi.string().required(),
        message: Joi.string().required(),
    }),
};

const getMessages = {
    params: Joi.object().keys({
        username: Joi.string().required(),
    }),
};

const getMessage = {
    params: Joi.object().keys({
        messageId: Joi.string().custom(objectId),
    }),
};

const deleteMessage = {
    params: Joi.object().keys({
        messageId: Joi.string().custom(objectId),
    }),
};



module.exports = {
    createMessage,
    getMessage,
    getMessages,
    deleteMessage
};