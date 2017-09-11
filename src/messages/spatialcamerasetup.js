/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.SC2APIProtocol.SpatialCameraSetup');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.SC2APIProtocol.Size2DI');


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
proto.SC2APIProtocol.SpatialCameraSetup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.SpatialCameraSetup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.SpatialCameraSetup.displayName = 'proto.SC2APIProtocol.SpatialCameraSetup';
}


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
proto.SC2APIProtocol.SpatialCameraSetup.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.SpatialCameraSetup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.SpatialCameraSetup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.SpatialCameraSetup.toObject = function(includeInstance, msg) {
  var f, obj = {
    width: jspb.Message.getOptionalFloatingPointField(msg, 1),
    resolution: (f = msg.getResolution()) && proto.SC2APIProtocol.Size2DI.toObject(includeInstance, f),
    minimapResolution: (f = msg.getMinimapResolution()) && proto.SC2APIProtocol.Size2DI.toObject(includeInstance, f)
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
 * @return {!proto.SC2APIProtocol.SpatialCameraSetup}
 */
proto.SC2APIProtocol.SpatialCameraSetup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.SpatialCameraSetup;
  return proto.SC2APIProtocol.SpatialCameraSetup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.SpatialCameraSetup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.SpatialCameraSetup}
 */
proto.SC2APIProtocol.SpatialCameraSetup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWidth(value);
      break;
    case 2:
      var value = new proto.SC2APIProtocol.Size2DI;
      reader.readMessage(value,proto.SC2APIProtocol.Size2DI.deserializeBinaryFromReader);
      msg.setResolution(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.Size2DI;
      reader.readMessage(value,proto.SC2APIProtocol.Size2DI.deserializeBinaryFromReader);
      msg.setMinimapResolution(value);
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
proto.SC2APIProtocol.SpatialCameraSetup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.SpatialCameraSetup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.SpatialCameraSetup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.SpatialCameraSetup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getResolution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.SC2APIProtocol.Size2DI.serializeBinaryToWriter
    );
  }
  f = message.getMinimapResolution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.SC2APIProtocol.Size2DI.serializeBinaryToWriter
    );
  }
};


/**
 * optional float width = 1;
 * @return {number}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.getWidth = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.setWidth = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.SpatialCameraSetup.prototype.clearWidth = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Size2DI resolution = 2;
 * @return {?proto.SC2APIProtocol.Size2DI}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.getResolution = function() {
  return /** @type{?proto.SC2APIProtocol.Size2DI} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.Size2DI, 2));
};


/** @param {?proto.SC2APIProtocol.Size2DI|undefined} value */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.setResolution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.SC2APIProtocol.SpatialCameraSetup.prototype.clearResolution = function() {
  this.setResolution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.hasResolution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Size2DI minimap_resolution = 3;
 * @return {?proto.SC2APIProtocol.Size2DI}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.getMinimapResolution = function() {
  return /** @type{?proto.SC2APIProtocol.Size2DI} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.Size2DI, 3));
};


/** @param {?proto.SC2APIProtocol.Size2DI|undefined} value */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.setMinimapResolution = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.SC2APIProtocol.SpatialCameraSetup.prototype.clearMinimapResolution = function() {
  this.setMinimapResolution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.hasMinimapResolution = function() {
  return jspb.Message.getField(this, 3) != null;
};


