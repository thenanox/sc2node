/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.SC2APIProtocol.ResponseJoinGame');
goog.provide('proto.SC2APIProtocol.ResponseJoinGame.Error');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
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
proto.SC2APIProtocol.ResponseJoinGame = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseJoinGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.SC2APIProtocol.ResponseJoinGame.displayName = 'proto.SC2APIProtocol.ResponseJoinGame';
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
    proto.SC2APIProtocol.ResponseJoinGame.prototype.toObject = function (opt_includeInstance) {
        return proto.SC2APIProtocol.ResponseJoinGame.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.SC2APIProtocol.ResponseJoinGame} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.SC2APIProtocol.ResponseJoinGame.toObject = function (includeInstance, msg) {
        var f, obj = {
            playerId: jspb.Message.getField(msg, 1),
            error: jspb.Message.getField(msg, 2),
            errorDetails: jspb.Message.getField(msg, 3)
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
 * @return {!proto.SC2APIProtocol.ResponseJoinGame}
 */
proto.SC2APIProtocol.ResponseJoinGame.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.SC2APIProtocol.ResponseJoinGame;
    return proto.SC2APIProtocol.ResponseJoinGame.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseJoinGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseJoinGame}
 */
proto.SC2APIProtocol.ResponseJoinGame.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readUint32());
                msg.setPlayerId(value);
                break;
            case 2:
                var value = (reader.readEnum());
                msg.setError(value);
                break;
            case 3:
                var value = (reader.readString());
                msg.setErrorDetails(value);
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
proto.SC2APIProtocol.ResponseJoinGame.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.SC2APIProtocol.ResponseJoinGame.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseJoinGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseJoinGame.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = /** @type {number} */ (jspb.Message.getField(message, 1));
    if (f != null) {
        writer.writeUint32(1, f);
    }
    f = /** @type {!proto.SC2APIProtocol.ResponseJoinGame.Error} */ (jspb.Message.getField(message, 2));
    if (f != null) {
        writer.writeEnum(2, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 3));
    if (f != null) {
        writer.writeString(3, f);
    }
};
/**
 * @enum {number}
 */
proto.SC2APIProtocol.ResponseJoinGame.Error = {
    MISSINGPARTICIPATION: 1,
    INVALIDOBSERVEDPLAYERID: 2,
    MISSINGOPTIONS: 3,
    MISSINGPORTS: 4,
    GAMEFULL: 5,
    LAUNCHERROR: 6,
    FEATUREUNSUPPORTED: 7,
    NOSPACEFORUSER: 8,
    MAPDOESNOTEXIST: 9,
    CANNOTOPENMAP: 10,
    CHECKSUMERROR: 11,
    NETWORKERROR: 12,
    OTHERERROR: 13
};
/**
 * optional uint32 player_id = 1;
 * @return {number}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.getPlayerId = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/** @param {number} value */
proto.SC2APIProtocol.ResponseJoinGame.prototype.setPlayerId = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.SC2APIProtocol.ResponseJoinGame.prototype.clearPlayerId = function () {
    jspb.Message.setField(this, 1, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.hasPlayerId = function () {
    return jspb.Message.getField(this, 1) != null;
};
/**
 * optional Error error = 2;
 * @return {!proto.SC2APIProtocol.ResponseJoinGame.Error}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.getError = function () {
    return /** @type {!proto.SC2APIProtocol.ResponseJoinGame.Error} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};
/** @param {!proto.SC2APIProtocol.ResponseJoinGame.Error} value */
proto.SC2APIProtocol.ResponseJoinGame.prototype.setError = function (value) {
    jspb.Message.setField(this, 2, value);
};
proto.SC2APIProtocol.ResponseJoinGame.prototype.clearError = function () {
    jspb.Message.setField(this, 2, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.hasError = function () {
    return jspb.Message.getField(this, 2) != null;
};
/**
 * optional string error_details = 3;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.getErrorDetails = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};
/** @param {string} value */
proto.SC2APIProtocol.ResponseJoinGame.prototype.setErrorDetails = function (value) {
    jspb.Message.setField(this, 3, value);
};
proto.SC2APIProtocol.ResponseJoinGame.prototype.clearErrorDetails = function () {
    jspb.Message.setField(this, 3, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.hasErrorDetails = function () {
    return jspb.Message.getField(this, 3) != null;
};
//# sourceMappingURL=responsejoingame.js.map