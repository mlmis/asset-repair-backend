const functions = require('firebase-functions');
const express = require('express');
const app = express();

// Routes
const { createAssetType } = require('./assetType');
const { addComment } = require('./repair');
const { sendSMSNotification } = require('./notification');

app.post('/asset-types', createAssetType);
app.post('/repairs/:id/comment', addComment);
app.post('/notify/sms', sendSMSNotification);

exports.api = functions.https.onRequest(app);
