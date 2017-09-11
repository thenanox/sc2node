/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.SC2APIProtocol.Response');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.SC2APIProtocol.ResponseAction');
goog.require('proto.SC2APIProtocol.ResponseAvailableMaps');
goog.require('proto.SC2APIProtocol.ResponseCreateGame');
goog.require('proto.SC2APIProtocol.ResponseData');
goog.require('proto.SC2APIProtocol.ResponseDebug');
goog.require('proto.SC2APIProtocol.ResponseGameInfo');
goog.require('proto.SC2APIProtocol.ResponseJoinGame');
goog.require('proto.SC2APIProtocol.ResponseLeaveGame');
goog.require('proto.SC2APIProtocol.ResponseObservation');
goog.require('proto.SC2APIProtocol.ResponsePing');
goog.require('proto.SC2APIProtocol.ResponseQuery');
goog.require('proto.SC2APIProtocol.ResponseQuickLoad');
goog.require('proto.SC2APIProtocol.ResponseQuickSave');
goog.require('proto.SC2APIProtocol.ResponseQuit');
goog.require('proto.SC2APIProtocol.ResponseReplayInfo');
goog.require('proto.SC2APIProtocol.ResponseRestartGame');
goog.require('proto.SC2APIProtocol.ResponseSaveMap');
goog.require('proto.SC2APIProtocol.ResponseSaveReplay');
goog.require('proto.SC2APIProtocol.ResponseStartReplay');
goog.require('proto.SC2APIProtocol.ResponseStep');

goog.forwardDeclare('proto.SC2APIProtocol.Status');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.Response.repeatedFields_, proto.SC2APIProtocol.Response.oneofGroups_);
};
goog.inherits(proto.SC2APIProtocol.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.Response.displayName = 'proto.SC2APIProtocol.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.Response.repeatedFields_ = [98];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SC2APIProtocol.Response.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]];

/**
 * @enum {number}
 */
proto.SC2APIProtocol.Response.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  CREATE_GAME: 1,
  JOIN_GAME: 2,
  RESTART_GAME: 3,
  START_REPLAY: 4,
  LEAVE_GAME: 5,
  QUICK_SAVE: 6,
  QUICK_LOAD: 7,
  QUIT: 8,
  GAME_INFO: 9,
  OBSERVATION: 10,
  ACTION: 11,
  STEP: 12,
  DATA: 13,
  QUERY: 14,
  SAVE_REPLAY: 15,
  REPLAY_INFO: 16,
  AVAILABLE_MAPS: 17,
  SAVE_MAP: 18,
  PING: 19,
  DEBUG: 20
};

/**
 * @return {proto.SC2APIProtocol.Response.ResponseCase}
 */
proto.SC2APIProtocol.Response.prototype.getResponseCase = function() {
  return /** @type {proto.SC2APIProtocol.Response.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.SC2APIProtocol.Response.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    createGame: (f = msg.getCreateGame()) && proto.SC2APIProtocol.ResponseCreateGame.toObject(includeInstance, f),
    joinGame: (f = msg.getJoinGame()) && proto.SC2APIProtocol.ResponseJoinGame.toObject(includeInstance, f),
    restartGame: (f = msg.getRestartGame()) && proto.SC2APIProtocol.ResponseRestartGame.toObject(includeInstance, f),
    startReplay: (f = msg.getStartReplay()) && proto.SC2APIProtocol.ResponseStartReplay.toObject(includeInstance, f),
    leaveGame: (f = msg.getLeaveGame()) && proto.SC2APIProtocol.ResponseLeaveGame.toObject(includeInstance, f),
    quickSave: (f = msg.getQuickSave()) && proto.SC2APIProtocol.ResponseQuickSave.toObject(includeInstance, f),
    quickLoad: (f = msg.getQuickLoad()) && proto.SC2APIProtocol.ResponseQuickLoad.toObject(includeInstance, f),
    quit: (f = msg.getQuit()) && proto.SC2APIProtocol.ResponseQuit.toObject(includeInstance, f),
    gameInfo: (f = msg.getGameInfo()) && proto.SC2APIProtocol.ResponseGameInfo.toObject(includeInstance, f),
    observation: (f = msg.getObservation()) && proto.SC2APIProtocol.ResponseObservation.toObject(includeInstance, f),
    action: (f = msg.getAction()) && proto.SC2APIProtocol.ResponseAction.toObject(includeInstance, f),
    step: (f = msg.getStep()) && proto.SC2APIProtocol.ResponseStep.toObject(includeInstance, f),
    data: (f = msg.getData()) && proto.SC2APIProtocol.ResponseData.toObject(includeInstance, f),
    query: (f = msg.getQuery()) && proto.SC2APIProtocol.ResponseQuery.toObject(includeInstance, f),
    saveReplay: (f = msg.getSaveReplay()) && proto.SC2APIProtocol.ResponseSaveReplay.toObject(includeInstance, f),
    replayInfo: (f = msg.getReplayInfo()) && proto.SC2APIProtocol.ResponseReplayInfo.toObject(includeInstance, f),
    availableMaps: (f = msg.getAvailableMaps()) && proto.SC2APIProtocol.ResponseAvailableMaps.toObject(includeInstance, f),
    saveMap: (f = msg.getSaveMap()) && proto.SC2APIProtocol.ResponseSaveMap.toObject(includeInstance, f),
    ping: (f = msg.getPing()) && proto.SC2APIProtocol.ResponsePing.toObject(includeInstance, f),
    debug: (f = msg.getDebug()) && proto.SC2APIProtocol.ResponseDebug.toObject(includeInstance, f),
    errorList: jspb.Message.getRepeatedField(msg, 98),
    status: jspb.Message.getField(msg, 99)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.Response}
 */
proto.SC2APIProtocol.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.Response;
  return proto.SC2APIProtocol.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.Response}
 */
proto.SC2APIProtocol.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SC2APIProtocol.ResponseCreateGame;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseCreateGame.deserializeBinaryFromReader);
      msg.setCreateGame(value);
      break;
    case 2:
      var value = new proto.SC2APIProtocol.ResponseJoinGame;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseJoinGame.deserializeBinaryFromReader);
      msg.setJoinGame(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.ResponseRestartGame;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseRestartGame.deserializeBinaryFromReader);
      msg.setRestartGame(value);
      break;
    case 4:
      var value = new proto.SC2APIProtocol.ResponseStartReplay;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseStartReplay.deserializeBinaryFromReader);
      msg.setStartReplay(value);
      break;
    case 5:
      var value = new proto.SC2APIProtocol.ResponseLeaveGame;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseLeaveGame.deserializeBinaryFromReader);
      msg.setLeaveGame(value);
      break;
    case 6:
      var value = new proto.SC2APIProtocol.ResponseQuickSave;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseQuickSave.deserializeBinaryFromReader);
      msg.setQuickSave(value);
      break;
    case 7:
      var value = new proto.SC2APIProtocol.ResponseQuickLoad;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseQuickLoad.deserializeBinaryFromReader);
      msg.setQuickLoad(value);
      break;
    case 8:
      var value = new proto.SC2APIProtocol.ResponseQuit;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseQuit.deserializeBinaryFromReader);
      msg.setQuit(value);
      break;
    case 9:
      var value = new proto.SC2APIProtocol.ResponseGameInfo;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseGameInfo.deserializeBinaryFromReader);
      msg.setGameInfo(value);
      break;
    case 10:
      var value = new proto.SC2APIProtocol.ResponseObservation;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseObservation.deserializeBinaryFromReader);
      msg.setObservation(value);
      break;
    case 11:
      var value = new proto.SC2APIProtocol.ResponseAction;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseAction.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 12:
      var value = new proto.SC2APIProtocol.ResponseStep;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseStep.deserializeBinaryFromReader);
      msg.setStep(value);
      break;
    case 13:
      var value = new proto.SC2APIProtocol.ResponseData;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 14:
      var value = new proto.SC2APIProtocol.ResponseQuery;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 15:
      var value = new proto.SC2APIProtocol.ResponseSaveReplay;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseSaveReplay.deserializeBinaryFromReader);
      msg.setSaveReplay(value);
      break;
    case 16:
      var value = new proto.SC2APIProtocol.ResponseReplayInfo;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseReplayInfo.deserializeBinaryFromReader);
      msg.setReplayInfo(value);
      break;
    case 17:
      var value = new proto.SC2APIProtocol.ResponseAvailableMaps;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseAvailableMaps.deserializeBinaryFromReader);
      msg.setAvailableMaps(value);
      break;
    case 18:
      var value = new proto.SC2APIProtocol.ResponseSaveMap;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseSaveMap.deserializeBinaryFromReader);
      msg.setSaveMap(value);
      break;
    case 19:
      var value = new proto.SC2APIProtocol.ResponsePing;
      reader.readMessage(value,proto.SC2APIProtocol.ResponsePing.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    case 20:
      var value = new proto.SC2APIProtocol.ResponseDebug;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseDebug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 98:
      var value = /** @type {string} */ (reader.readString());
      msg.addError(value);
      break;
    case 99:
      var value = /** @type {!proto.SC2APIProtocol.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreateGame();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.SC2APIProtocol.ResponseCreateGame.serializeBinaryToWriter
    );
  }
  f = message.getJoinGame();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.SC2APIProtocol.ResponseJoinGame.serializeBinaryToWriter
    );
  }
  f = message.getRestartGame();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.SC2APIProtocol.ResponseRestartGame.serializeBinaryToWriter
    );
  }
  f = message.getStartReplay();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.SC2APIProtocol.ResponseStartReplay.serializeBinaryToWriter
    );
  }
  f = message.getLeaveGame();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.SC2APIProtocol.ResponseLeaveGame.serializeBinaryToWriter
    );
  }
  f = message.getQuickSave();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.SC2APIProtocol.ResponseQuickSave.serializeBinaryToWriter
    );
  }
  f = message.getQuickLoad();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.SC2APIProtocol.ResponseQuickLoad.serializeBinaryToWriter
    );
  }
  f = message.getQuit();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.SC2APIProtocol.ResponseQuit.serializeBinaryToWriter
    );
  }
  f = message.getGameInfo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.SC2APIProtocol.ResponseGameInfo.serializeBinaryToWriter
    );
  }
  f = message.getObservation();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.SC2APIProtocol.ResponseObservation.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.SC2APIProtocol.ResponseAction.serializeBinaryToWriter
    );
  }
  f = message.getStep();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.SC2APIProtocol.ResponseStep.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.SC2APIProtocol.ResponseData.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.SC2APIProtocol.ResponseQuery.serializeBinaryToWriter
    );
  }
  f = message.getSaveReplay();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.SC2APIProtocol.ResponseSaveReplay.serializeBinaryToWriter
    );
  }
  f = message.getReplayInfo();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.SC2APIProtocol.ResponseReplayInfo.serializeBinaryToWriter
    );
  }
  f = message.getAvailableMaps();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.SC2APIProtocol.ResponseAvailableMaps.serializeBinaryToWriter
    );
  }
  f = message.getSaveMap();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.SC2APIProtocol.ResponseSaveMap.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.SC2APIProtocol.ResponsePing.serializeBinaryToWriter
    );
  }
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.SC2APIProtocol.ResponseDebug.serializeBinaryToWriter
    );
  }
  f = message.getErrorList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      98,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.Status} */ (jspb.Message.getField(message, 99));
  if (f != null) {
    writer.writeEnum(
      99,
      f
    );
  }
};


/**
 * optional ResponseCreateGame create_game = 1;
 * @return {?proto.SC2APIProtocol.ResponseCreateGame}
 */
proto.SC2APIProtocol.Response.prototype.getCreateGame = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseCreateGame} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseCreateGame, 1));
};


/** @param {?proto.SC2APIProtocol.ResponseCreateGame|undefined} value */
proto.SC2APIProtocol.Response.prototype.setCreateGame = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearCreateGame = function() {
  this.setCreateGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasCreateGame = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ResponseJoinGame join_game = 2;
 * @return {?proto.SC2APIProtocol.ResponseJoinGame}
 */
proto.SC2APIProtocol.Response.prototype.getJoinGame = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseJoinGame} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseJoinGame, 2));
};


/** @param {?proto.SC2APIProtocol.ResponseJoinGame|undefined} value */
proto.SC2APIProtocol.Response.prototype.setJoinGame = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearJoinGame = function() {
  this.setJoinGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasJoinGame = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResponseRestartGame restart_game = 3;
 * @return {?proto.SC2APIProtocol.ResponseRestartGame}
 */
proto.SC2APIProtocol.Response.prototype.getRestartGame = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseRestartGame} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseRestartGame, 3));
};


/** @param {?proto.SC2APIProtocol.ResponseRestartGame|undefined} value */
proto.SC2APIProtocol.Response.prototype.setRestartGame = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearRestartGame = function() {
  this.setRestartGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasRestartGame = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ResponseStartReplay start_replay = 4;
 * @return {?proto.SC2APIProtocol.ResponseStartReplay}
 */
proto.SC2APIProtocol.Response.prototype.getStartReplay = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseStartReplay} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseStartReplay, 4));
};


/** @param {?proto.SC2APIProtocol.ResponseStartReplay|undefined} value */
proto.SC2APIProtocol.Response.prototype.setStartReplay = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearStartReplay = function() {
  this.setStartReplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasStartReplay = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ResponseLeaveGame leave_game = 5;
 * @return {?proto.SC2APIProtocol.ResponseLeaveGame}
 */
proto.SC2APIProtocol.Response.prototype.getLeaveGame = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseLeaveGame} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseLeaveGame, 5));
};


/** @param {?proto.SC2APIProtocol.ResponseLeaveGame|undefined} value */
proto.SC2APIProtocol.Response.prototype.setLeaveGame = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearLeaveGame = function() {
  this.setLeaveGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasLeaveGame = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ResponseQuickSave quick_save = 6;
 * @return {?proto.SC2APIProtocol.ResponseQuickSave}
 */
proto.SC2APIProtocol.Response.prototype.getQuickSave = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseQuickSave} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseQuickSave, 6));
};


/** @param {?proto.SC2APIProtocol.ResponseQuickSave|undefined} value */
proto.SC2APIProtocol.Response.prototype.setQuickSave = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearQuickSave = function() {
  this.setQuickSave(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasQuickSave = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ResponseQuickLoad quick_load = 7;
 * @return {?proto.SC2APIProtocol.ResponseQuickLoad}
 */
proto.SC2APIProtocol.Response.prototype.getQuickLoad = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseQuickLoad} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseQuickLoad, 7));
};


/** @param {?proto.SC2APIProtocol.ResponseQuickLoad|undefined} value */
proto.SC2APIProtocol.Response.prototype.setQuickLoad = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearQuickLoad = function() {
  this.setQuickLoad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasQuickLoad = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ResponseQuit quit = 8;
 * @return {?proto.SC2APIProtocol.ResponseQuit}
 */
proto.SC2APIProtocol.Response.prototype.getQuit = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseQuit} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseQuit, 8));
};


/** @param {?proto.SC2APIProtocol.ResponseQuit|undefined} value */
proto.SC2APIProtocol.Response.prototype.setQuit = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearQuit = function() {
  this.setQuit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasQuit = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ResponseGameInfo game_info = 9;
 * @return {?proto.SC2APIProtocol.ResponseGameInfo}
 */
proto.SC2APIProtocol.Response.prototype.getGameInfo = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseGameInfo} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseGameInfo, 9));
};


/** @param {?proto.SC2APIProtocol.ResponseGameInfo|undefined} value */
proto.SC2APIProtocol.Response.prototype.setGameInfo = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearGameInfo = function() {
  this.setGameInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasGameInfo = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ResponseObservation observation = 10;
 * @return {?proto.SC2APIProtocol.ResponseObservation}
 */
proto.SC2APIProtocol.Response.prototype.getObservation = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseObservation} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseObservation, 10));
};


/** @param {?proto.SC2APIProtocol.ResponseObservation|undefined} value */
proto.SC2APIProtocol.Response.prototype.setObservation = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearObservation = function() {
  this.setObservation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasObservation = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ResponseAction action = 11;
 * @return {?proto.SC2APIProtocol.ResponseAction}
 */
proto.SC2APIProtocol.Response.prototype.getAction = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseAction} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseAction, 11));
};


/** @param {?proto.SC2APIProtocol.ResponseAction|undefined} value */
proto.SC2APIProtocol.Response.prototype.setAction = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearAction = function() {
  this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasAction = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ResponseStep step = 12;
 * @return {?proto.SC2APIProtocol.ResponseStep}
 */
proto.SC2APIProtocol.Response.prototype.getStep = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseStep} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseStep, 12));
};


/** @param {?proto.SC2APIProtocol.ResponseStep|undefined} value */
proto.SC2APIProtocol.Response.prototype.setStep = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearStep = function() {
  this.setStep(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasStep = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ResponseData data = 13;
 * @return {?proto.SC2APIProtocol.ResponseData}
 */
proto.SC2APIProtocol.Response.prototype.getData = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseData} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseData, 13));
};


/** @param {?proto.SC2APIProtocol.ResponseData|undefined} value */
proto.SC2APIProtocol.Response.prototype.setData = function(value) {
  jspb.Message.setOneofWrapperField(this, 13, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasData = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ResponseQuery query = 14;
 * @return {?proto.SC2APIProtocol.ResponseQuery}
 */
proto.SC2APIProtocol.Response.prototype.getQuery = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseQuery} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseQuery, 14));
};


/** @param {?proto.SC2APIProtocol.ResponseQuery|undefined} value */
proto.SC2APIProtocol.Response.prototype.setQuery = function(value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearQuery = function() {
  this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ResponseSaveReplay save_replay = 15;
 * @return {?proto.SC2APIProtocol.ResponseSaveReplay}
 */
proto.SC2APIProtocol.Response.prototype.getSaveReplay = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseSaveReplay} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseSaveReplay, 15));
};


/** @param {?proto.SC2APIProtocol.ResponseSaveReplay|undefined} value */
proto.SC2APIProtocol.Response.prototype.setSaveReplay = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearSaveReplay = function() {
  this.setSaveReplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasSaveReplay = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ResponseReplayInfo replay_info = 16;
 * @return {?proto.SC2APIProtocol.ResponseReplayInfo}
 */
proto.SC2APIProtocol.Response.prototype.getReplayInfo = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseReplayInfo} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseReplayInfo, 16));
};


/** @param {?proto.SC2APIProtocol.ResponseReplayInfo|undefined} value */
proto.SC2APIProtocol.Response.prototype.setReplayInfo = function(value) {
  jspb.Message.setOneofWrapperField(this, 16, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearReplayInfo = function() {
  this.setReplayInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasReplayInfo = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ResponseAvailableMaps available_maps = 17;
 * @return {?proto.SC2APIProtocol.ResponseAvailableMaps}
 */
proto.SC2APIProtocol.Response.prototype.getAvailableMaps = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseAvailableMaps} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseAvailableMaps, 17));
};


/** @param {?proto.SC2APIProtocol.ResponseAvailableMaps|undefined} value */
proto.SC2APIProtocol.Response.prototype.setAvailableMaps = function(value) {
  jspb.Message.setOneofWrapperField(this, 17, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearAvailableMaps = function() {
  this.setAvailableMaps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasAvailableMaps = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ResponseSaveMap save_map = 18;
 * @return {?proto.SC2APIProtocol.ResponseSaveMap}
 */
proto.SC2APIProtocol.Response.prototype.getSaveMap = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseSaveMap} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseSaveMap, 18));
};


/** @param {?proto.SC2APIProtocol.ResponseSaveMap|undefined} value */
proto.SC2APIProtocol.Response.prototype.setSaveMap = function(value) {
  jspb.Message.setOneofWrapperField(this, 18, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearSaveMap = function() {
  this.setSaveMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasSaveMap = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ResponsePing ping = 19;
 * @return {?proto.SC2APIProtocol.ResponsePing}
 */
proto.SC2APIProtocol.Response.prototype.getPing = function() {
  return /** @type{?proto.SC2APIProtocol.ResponsePing} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponsePing, 19));
};


/** @param {?proto.SC2APIProtocol.ResponsePing|undefined} value */
proto.SC2APIProtocol.Response.prototype.setPing = function(value) {
  jspb.Message.setOneofWrapperField(this, 19, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearPing = function() {
  this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasPing = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ResponseDebug debug = 20;
 * @return {?proto.SC2APIProtocol.ResponseDebug}
 */
proto.SC2APIProtocol.Response.prototype.getDebug = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseDebug} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseDebug, 20));
};


/** @param {?proto.SC2APIProtocol.ResponseDebug|undefined} value */
proto.SC2APIProtocol.Response.prototype.setDebug = function(value) {
  jspb.Message.setOneofWrapperField(this, 20, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearDebug = function() {
  this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * repeated string error = 98;
 * @return {!Array.<string>}
 */
proto.SC2APIProtocol.Response.prototype.getErrorList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 98));
};


/** @param {!Array.<string>} value */
proto.SC2APIProtocol.Response.prototype.setErrorList = function(value) {
  jspb.Message.setField(this, 98, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.SC2APIProtocol.Response.prototype.addError = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 98, value, opt_index);
};


proto.SC2APIProtocol.Response.prototype.clearErrorList = function() {
  this.setErrorList([]);
};


/**
 * optional Status status = 99;
 * @return {!proto.SC2APIProtocol.Status}
 */
proto.SC2APIProtocol.Response.prototype.getStatus = function() {
  return /** @type {!proto.SC2APIProtocol.Status} */ (jspb.Message.getFieldWithDefault(this, 99, 1));
};


/** @param {!proto.SC2APIProtocol.Status} value */
proto.SC2APIProtocol.Response.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 99, value);
};


proto.SC2APIProtocol.Response.prototype.clearStatus = function() {
  jspb.Message.setField(this, 99, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 99) != null;
};


