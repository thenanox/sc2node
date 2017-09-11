/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.SC2APIProtocol.ResponseGameInfo');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.SC2APIProtocol.InterfaceOptions');
goog.require('proto.SC2APIProtocol.PlayerInfo');
goog.require('proto.SC2APIProtocol.StartRaw');


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
proto.SC2APIProtocol.ResponseGameInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.ResponseGameInfo.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseGameInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseGameInfo.displayName = 'proto.SC2APIProtocol.ResponseGameInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.ResponseGameInfo.repeatedFields_ = [6,3];



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
proto.SC2APIProtocol.ResponseGameInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseGameInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseGameInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseGameInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapName: jspb.Message.getField(msg, 1),
    modNamesList: jspb.Message.getRepeatedField(msg, 6),
    localMapPath: jspb.Message.getField(msg, 2),
    playerInfoList: jspb.Message.toObjectList(msg.getPlayerInfoList(),
    proto.SC2APIProtocol.PlayerInfo.toObject, includeInstance),
    startRaw: (f = msg.getStartRaw()) && proto.SC2APIProtocol.StartRaw.toObject(includeInstance, f),
    options: (f = msg.getOptions()) && proto.SC2APIProtocol.InterfaceOptions.toObject(includeInstance, f)
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
 * @return {!proto.SC2APIProtocol.ResponseGameInfo}
 */
proto.SC2APIProtocol.ResponseGameInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseGameInfo;
  return proto.SC2APIProtocol.ResponseGameInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseGameInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseGameInfo}
 */
proto.SC2APIProtocol.ResponseGameInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addModNames(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalMapPath(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.PlayerInfo;
      reader.readMessage(value,proto.SC2APIProtocol.PlayerInfo.deserializeBinaryFromReader);
      msg.addPlayerInfo(value);
      break;
    case 4:
      var value = new proto.SC2APIProtocol.StartRaw;
      reader.readMessage(value,proto.SC2APIProtocol.StartRaw.deserializeBinaryFromReader);
      msg.setStartRaw(value);
      break;
    case 5:
      var value = new proto.SC2APIProtocol.InterfaceOptions;
      reader.readMessage(value,proto.SC2APIProtocol.InterfaceOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
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
proto.SC2APIProtocol.ResponseGameInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseGameInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseGameInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseGameInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayerInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.SC2APIProtocol.PlayerInfo.serializeBinaryToWriter
    );
  }
  f = message.getStartRaw();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.SC2APIProtocol.StartRaw.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.SC2APIProtocol.InterfaceOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string map_name = 1;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.getMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseGameInfo.prototype.setMapName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponseGameInfo.prototype.clearMapName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.hasMapName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string mod_names = 6;
 * @return {!Array.<string>}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.getModNamesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array.<string>} value */
proto.SC2APIProtocol.ResponseGameInfo.prototype.setModNamesList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.addModNames = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


proto.SC2APIProtocol.ResponseGameInfo.prototype.clearModNamesList = function() {
  this.setModNamesList([]);
};


/**
 * optional string local_map_path = 2;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.getLocalMapPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseGameInfo.prototype.setLocalMapPath = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ResponseGameInfo.prototype.clearLocalMapPath = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.hasLocalMapPath = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PlayerInfo player_info = 3;
 * @return {!Array.<!proto.SC2APIProtocol.PlayerInfo>}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.getPlayerInfoList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.PlayerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.PlayerInfo, 3));
};


/** @param {!Array.<!proto.SC2APIProtocol.PlayerInfo>} value */
proto.SC2APIProtocol.ResponseGameInfo.prototype.setPlayerInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.SC2APIProtocol.PlayerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.PlayerInfo}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.addPlayerInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.SC2APIProtocol.PlayerInfo, opt_index);
};


proto.SC2APIProtocol.ResponseGameInfo.prototype.clearPlayerInfoList = function() {
  this.setPlayerInfoList([]);
};


/**
 * optional StartRaw start_raw = 4;
 * @return {?proto.SC2APIProtocol.StartRaw}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.getStartRaw = function() {
  return /** @type{?proto.SC2APIProtocol.StartRaw} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.StartRaw, 4));
};


/** @param {?proto.SC2APIProtocol.StartRaw|undefined} value */
proto.SC2APIProtocol.ResponseGameInfo.prototype.setStartRaw = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.SC2APIProtocol.ResponseGameInfo.prototype.clearStartRaw = function() {
  this.setStartRaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.hasStartRaw = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional InterfaceOptions options = 5;
 * @return {?proto.SC2APIProtocol.InterfaceOptions}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.getOptions = function() {
  return /** @type{?proto.SC2APIProtocol.InterfaceOptions} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.InterfaceOptions, 5));
};


/** @param {?proto.SC2APIProtocol.InterfaceOptions|undefined} value */
proto.SC2APIProtocol.ResponseGameInfo.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.SC2APIProtocol.ResponseGameInfo.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 5) != null;
};


