import * as $protobuf from "protobufjs";

/** Namespace SC2APIProtocol. */
export namespace SC2APIProtocol {

    /** Properties of an AvailableAbility. */
    interface IAvailableAbility {

        /** AvailableAbility abilityId */
        abilityId?: number;

        /** AvailableAbility requiresPoint */
        requiresPoint?: boolean;
    }

    /** Represents an AvailableAbility. */
    class AvailableAbility {

        /**
         * Constructs a new AvailableAbility.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IAvailableAbility);

        /** AvailableAbility abilityId. */
        public abilityId: number;

        /** AvailableAbility requiresPoint. */
        public requiresPoint: boolean;

        /**
         * Creates a new AvailableAbility instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AvailableAbility instance
         */
        public static create(properties?: SC2APIProtocol.IAvailableAbility): SC2APIProtocol.AvailableAbility;

        /**
         * Encodes the specified AvailableAbility message. Does not implicitly {@link SC2APIProtocol.AvailableAbility.verify|verify} messages.
         * @param message AvailableAbility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IAvailableAbility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AvailableAbility message, length delimited. Does not implicitly {@link SC2APIProtocol.AvailableAbility.verify|verify} messages.
         * @param message AvailableAbility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IAvailableAbility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AvailableAbility message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AvailableAbility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.AvailableAbility;

        /**
         * Decodes an AvailableAbility message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AvailableAbility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.AvailableAbility;

        /**
         * Verifies an AvailableAbility message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AvailableAbility message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AvailableAbility
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.AvailableAbility;

        /**
         * Creates a plain object from an AvailableAbility message. Also converts values to other types if specified.
         * @param message AvailableAbility
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.AvailableAbility, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AvailableAbility to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ImageData. */
    interface IImageData {

        /** ImageData bitsPerPixel */
        bitsPerPixel?: number;

        /** ImageData size */
        size?: SC2APIProtocol.ISize2DI;

        /** ImageData data */
        data?: Uint8Array;
    }

    /** Represents an ImageData. */
    class ImageData {

        /**
         * Constructs a new ImageData.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IImageData);

        /** ImageData bitsPerPixel. */
        public bitsPerPixel: number;

        /** ImageData size. */
        public size?: (SC2APIProtocol.ISize2DI|null);

        /** ImageData data. */
        public data: Uint8Array;

        /**
         * Creates a new ImageData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ImageData instance
         */
        public static create(properties?: SC2APIProtocol.IImageData): SC2APIProtocol.ImageData;

        /**
         * Encodes the specified ImageData message. Does not implicitly {@link SC2APIProtocol.ImageData.verify|verify} messages.
         * @param message ImageData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IImageData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImageData message, length delimited. Does not implicitly {@link SC2APIProtocol.ImageData.verify|verify} messages.
         * @param message ImageData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IImageData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImageData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ImageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ImageData;

        /**
         * Decodes an ImageData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ImageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ImageData;

        /**
         * Verifies an ImageData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ImageData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ImageData
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ImageData;

        /**
         * Creates a plain object from an ImageData message. Also converts values to other types if specified.
         * @param message ImageData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ImageData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ImageData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PointI. */
    interface IPointI {

        /** PointI x */
        x?: number;

        /** PointI y */
        y?: number;
    }

    /** Represents a PointI. */
    class PointI {

        /**
         * Constructs a new PointI.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IPointI);

        /** PointI x. */
        public x: number;

        /** PointI y. */
        public y: number;

        /**
         * Creates a new PointI instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PointI instance
         */
        public static create(properties?: SC2APIProtocol.IPointI): SC2APIProtocol.PointI;

        /**
         * Encodes the specified PointI message. Does not implicitly {@link SC2APIProtocol.PointI.verify|verify} messages.
         * @param message PointI message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IPointI, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PointI message, length delimited. Does not implicitly {@link SC2APIProtocol.PointI.verify|verify} messages.
         * @param message PointI message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IPointI, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PointI message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PointI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.PointI;

        /**
         * Decodes a PointI message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PointI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.PointI;

        /**
         * Verifies a PointI message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PointI message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PointI
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.PointI;

        /**
         * Creates a plain object from a PointI message. Also converts values to other types if specified.
         * @param message PointI
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.PointI, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PointI to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RectangleI. */
    interface IRectangleI {

        /** RectangleI p0 */
        p0?: SC2APIProtocol.IPointI;

        /** RectangleI p1 */
        p1?: SC2APIProtocol.IPointI;
    }

    /** Represents a RectangleI. */
    class RectangleI {

        /**
         * Constructs a new RectangleI.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRectangleI);

        /** RectangleI p0. */
        public p0?: (SC2APIProtocol.IPointI|null);

        /** RectangleI p1. */
        public p1?: (SC2APIProtocol.IPointI|null);

        /**
         * Creates a new RectangleI instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RectangleI instance
         */
        public static create(properties?: SC2APIProtocol.IRectangleI): SC2APIProtocol.RectangleI;

        /**
         * Encodes the specified RectangleI message. Does not implicitly {@link SC2APIProtocol.RectangleI.verify|verify} messages.
         * @param message RectangleI message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRectangleI, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RectangleI message, length delimited. Does not implicitly {@link SC2APIProtocol.RectangleI.verify|verify} messages.
         * @param message RectangleI message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRectangleI, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RectangleI message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RectangleI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RectangleI;

        /**
         * Decodes a RectangleI message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RectangleI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RectangleI;

        /**
         * Verifies a RectangleI message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RectangleI message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RectangleI
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RectangleI;

        /**
         * Creates a plain object from a RectangleI message. Also converts values to other types if specified.
         * @param message RectangleI
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RectangleI, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RectangleI to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Point2D. */
    interface IPoint2D {

        /** Point2D x */
        x?: number;

        /** Point2D y */
        y?: number;
    }

    /** Represents a Point2D. */
    class Point2D {

        /**
         * Constructs a new Point2D.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IPoint2D);

        /** Point2D x. */
        public x: number;

        /** Point2D y. */
        public y: number;

        /**
         * Creates a new Point2D instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point2D instance
         */
        public static create(properties?: SC2APIProtocol.IPoint2D): SC2APIProtocol.Point2D;

        /**
         * Encodes the specified Point2D message. Does not implicitly {@link SC2APIProtocol.Point2D.verify|verify} messages.
         * @param message Point2D message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IPoint2D, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point2D message, length delimited. Does not implicitly {@link SC2APIProtocol.Point2D.verify|verify} messages.
         * @param message Point2D message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IPoint2D, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point2D message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Point2D;

        /**
         * Decodes a Point2D message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Point2D;

        /**
         * Verifies a Point2D message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point2D message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point2D
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Point2D;

        /**
         * Creates a plain object from a Point2D message. Also converts values to other types if specified.
         * @param message Point2D
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Point2D, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point2D to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Point. */
    interface IPoint {

        /** Point x */
        x?: number;

        /** Point y */
        y?: number;

        /** Point z */
        z?: number;
    }

    /** Represents a Point. */
    class Point {

        /**
         * Constructs a new Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IPoint);

        /** Point x. */
        public x: number;

        /** Point y. */
        public y: number;

        /** Point z. */
        public z: number;

        /**
         * Creates a new Point instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point instance
         */
        public static create(properties?: SC2APIProtocol.IPoint): SC2APIProtocol.Point;

        /**
         * Encodes the specified Point message. Does not implicitly {@link SC2APIProtocol.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link SC2APIProtocol.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Point;

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Point;

        /**
         * Verifies a Point message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Point;

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @param message Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Size2DI. */
    interface ISize2DI {

        /** Size2DI x */
        x?: number;

        /** Size2DI y */
        y?: number;
    }

    /** Represents a Size2DI. */
    class Size2DI {

        /**
         * Constructs a new Size2DI.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.ISize2DI);

        /** Size2DI x. */
        public x: number;

        /** Size2DI y. */
        public y: number;

        /**
         * Creates a new Size2DI instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Size2DI instance
         */
        public static create(properties?: SC2APIProtocol.ISize2DI): SC2APIProtocol.Size2DI;

        /**
         * Encodes the specified Size2DI message. Does not implicitly {@link SC2APIProtocol.Size2DI.verify|verify} messages.
         * @param message Size2DI message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.ISize2DI, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Size2DI message, length delimited. Does not implicitly {@link SC2APIProtocol.Size2DI.verify|verify} messages.
         * @param message Size2DI message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.ISize2DI, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Size2DI message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Size2DI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Size2DI;

        /**
         * Decodes a Size2DI message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Size2DI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Size2DI;

        /**
         * Verifies a Size2DI message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Size2DI message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Size2DI
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Size2DI;

        /**
         * Creates a plain object from a Size2DI message. Also converts values to other types if specified.
         * @param message Size2DI
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Size2DI, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Size2DI to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Race enum. */
    enum Race {
        NoRace = 0,
        Terran = 1,
        Zerg = 2,
        Protoss = 3,
        Random = 4
    }

    /** Properties of an AbilityData. */
    interface IAbilityData {

        /** AbilityData abilityId */
        abilityId?: number;

        /** AbilityData linkName */
        linkName?: string;

        /** AbilityData linkIndex */
        linkIndex?: number;

        /** AbilityData buttonName */
        buttonName?: string;

        /** AbilityData friendlyName */
        friendlyName?: string;

        /** AbilityData hotkey */
        hotkey?: string;

        /** AbilityData remapsToAbilityId */
        remapsToAbilityId?: number;

        /** AbilityData available */
        available?: boolean;

        /** AbilityData target */
        target?: SC2APIProtocol.AbilityData.Target;

        /** AbilityData allowMinimap */
        allowMinimap?: boolean;

        /** AbilityData allowAutocast */
        allowAutocast?: boolean;

        /** AbilityData isBuilding */
        isBuilding?: boolean;

        /** AbilityData footprintRadius */
        footprintRadius?: number;

        /** AbilityData isInstantPlacement */
        isInstantPlacement?: boolean;

        /** AbilityData castRange */
        castRange?: number;
    }

    /** Represents an AbilityData. */
    class AbilityData {

        /**
         * Constructs a new AbilityData.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IAbilityData);

        /** AbilityData abilityId. */
        public abilityId: number;

        /** AbilityData linkName. */
        public linkName: string;

        /** AbilityData linkIndex. */
        public linkIndex: number;

        /** AbilityData buttonName. */
        public buttonName: string;

        /** AbilityData friendlyName. */
        public friendlyName: string;

        /** AbilityData hotkey. */
        public hotkey: string;

        /** AbilityData remapsToAbilityId. */
        public remapsToAbilityId: number;

        /** AbilityData available. */
        public available: boolean;

        /** AbilityData target. */
        public target: SC2APIProtocol.AbilityData.Target;

        /** AbilityData allowMinimap. */
        public allowMinimap: boolean;

        /** AbilityData allowAutocast. */
        public allowAutocast: boolean;

        /** AbilityData isBuilding. */
        public isBuilding: boolean;

        /** AbilityData footprintRadius. */
        public footprintRadius: number;

        /** AbilityData isInstantPlacement. */
        public isInstantPlacement: boolean;

        /** AbilityData castRange. */
        public castRange: number;

        /**
         * Creates a new AbilityData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AbilityData instance
         */
        public static create(properties?: SC2APIProtocol.IAbilityData): SC2APIProtocol.AbilityData;

        /**
         * Encodes the specified AbilityData message. Does not implicitly {@link SC2APIProtocol.AbilityData.verify|verify} messages.
         * @param message AbilityData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IAbilityData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AbilityData message, length delimited. Does not implicitly {@link SC2APIProtocol.AbilityData.verify|verify} messages.
         * @param message AbilityData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IAbilityData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AbilityData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AbilityData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.AbilityData;

        /**
         * Decodes an AbilityData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AbilityData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.AbilityData;

        /**
         * Verifies an AbilityData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AbilityData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AbilityData
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.AbilityData;

        /**
         * Creates a plain object from an AbilityData message. Also converts values to other types if specified.
         * @param message AbilityData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.AbilityData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AbilityData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace AbilityData {

        /** Target enum. */
        enum Target {
            None = 1,
            Point = 2,
            Unit = 3,
            PointOrUnit = 4,
            PointOrNone = 5
        }
    }

    /** Attribute enum. */
    enum Attribute {
        Light = 1,
        Armored = 2,
        Biological = 3,
        Mechanical = 4,
        Robotic = 5,
        Psionic = 6,
        Massive = 7,
        Structure = 8,
        Hover = 9,
        Heroic = 10,
        Summoned = 11
    }

    /** Properties of a DamageBonus. */
    interface IDamageBonus {

        /** DamageBonus attribute */
        attribute?: SC2APIProtocol.Attribute;

        /** DamageBonus bonus */
        bonus?: number;
    }

    /** Represents a DamageBonus. */
    class DamageBonus {

        /**
         * Constructs a new DamageBonus.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDamageBonus);

        /** DamageBonus attribute. */
        public attribute: SC2APIProtocol.Attribute;

        /** DamageBonus bonus. */
        public bonus: number;

        /**
         * Creates a new DamageBonus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DamageBonus instance
         */
        public static create(properties?: SC2APIProtocol.IDamageBonus): SC2APIProtocol.DamageBonus;

        /**
         * Encodes the specified DamageBonus message. Does not implicitly {@link SC2APIProtocol.DamageBonus.verify|verify} messages.
         * @param message DamageBonus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDamageBonus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DamageBonus message, length delimited. Does not implicitly {@link SC2APIProtocol.DamageBonus.verify|verify} messages.
         * @param message DamageBonus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDamageBonus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DamageBonus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DamageBonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DamageBonus;

        /**
         * Decodes a DamageBonus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DamageBonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DamageBonus;

        /**
         * Verifies a DamageBonus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DamageBonus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DamageBonus
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DamageBonus;

        /**
         * Creates a plain object from a DamageBonus message. Also converts values to other types if specified.
         * @param message DamageBonus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DamageBonus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DamageBonus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Weapon. */
    interface IWeapon {

        /** Weapon type */
        type?: SC2APIProtocol.Weapon.TargetType;

        /** Weapon damage */
        damage?: number;

        /** Weapon damageBonus */
        damageBonus?: SC2APIProtocol.IDamageBonus[];

        /** Weapon attacks */
        attacks?: number;

        /** Weapon range */
        range?: number;

        /** Weapon speed */
        speed?: number;
    }

    /** Represents a Weapon. */
    class Weapon {

        /**
         * Constructs a new Weapon.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IWeapon);

        /** Weapon type. */
        public type: SC2APIProtocol.Weapon.TargetType;

        /** Weapon damage. */
        public damage: number;

        /** Weapon damageBonus. */
        public damageBonus: SC2APIProtocol.IDamageBonus[];

        /** Weapon attacks. */
        public attacks: number;

        /** Weapon range. */
        public range: number;

        /** Weapon speed. */
        public speed: number;

        /**
         * Creates a new Weapon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Weapon instance
         */
        public static create(properties?: SC2APIProtocol.IWeapon): SC2APIProtocol.Weapon;

        /**
         * Encodes the specified Weapon message. Does not implicitly {@link SC2APIProtocol.Weapon.verify|verify} messages.
         * @param message Weapon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IWeapon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Weapon message, length delimited. Does not implicitly {@link SC2APIProtocol.Weapon.verify|verify} messages.
         * @param message Weapon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IWeapon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Weapon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Weapon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Weapon;

        /**
         * Decodes a Weapon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Weapon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Weapon;

        /**
         * Verifies a Weapon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Weapon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Weapon
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Weapon;

        /**
         * Creates a plain object from a Weapon message. Also converts values to other types if specified.
         * @param message Weapon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Weapon, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Weapon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Weapon {

        /** TargetType enum. */
        enum TargetType {
            Ground = 1,
            Air = 2,
            Any = 3
        }
    }

    /** Properties of an UnitTypeData. */
    interface IUnitTypeData {

        /** UnitTypeData unitId */
        unitId?: number;

        /** UnitTypeData name */
        name?: string;

        /** UnitTypeData available */
        available?: boolean;

        /** UnitTypeData cargoSize */
        cargoSize?: number;

        /** UnitTypeData mineralCost */
        mineralCost?: number;

        /** UnitTypeData vespeneCost */
        vespeneCost?: number;

        /** UnitTypeData foodRequired */
        foodRequired?: number;

        /** UnitTypeData foodProvided */
        foodProvided?: number;

        /** UnitTypeData abilityId */
        abilityId?: number;

        /** UnitTypeData race */
        race?: SC2APIProtocol.Race;

        /** UnitTypeData buildTime */
        buildTime?: number;

        /** UnitTypeData hasVespene */
        hasVespene?: boolean;

        /** UnitTypeData hasMinerals */
        hasMinerals?: boolean;

        /** UnitTypeData techAlias */
        techAlias?: number[];

        /** UnitTypeData unitAlias */
        unitAlias?: number;

        /** UnitTypeData techRequirement */
        techRequirement?: number;

        /** UnitTypeData requireAttached */
        requireAttached?: boolean;

        /** UnitTypeData attributes */
        attributes?: SC2APIProtocol.Attribute[];

        /** UnitTypeData movementSpeed */
        movementSpeed?: number;

        /** UnitTypeData armor */
        armor?: number;

        /** UnitTypeData weapons */
        weapons?: SC2APIProtocol.IWeapon[];
    }

    /** Represents an UnitTypeData. */
    class UnitTypeData {

        /**
         * Constructs a new UnitTypeData.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IUnitTypeData);

        /** UnitTypeData unitId. */
        public unitId: number;

        /** UnitTypeData name. */
        public name: string;

        /** UnitTypeData available. */
        public available: boolean;

        /** UnitTypeData cargoSize. */
        public cargoSize: number;

        /** UnitTypeData mineralCost. */
        public mineralCost: number;

        /** UnitTypeData vespeneCost. */
        public vespeneCost: number;

        /** UnitTypeData foodRequired. */
        public foodRequired: number;

        /** UnitTypeData foodProvided. */
        public foodProvided: number;

        /** UnitTypeData abilityId. */
        public abilityId: number;

        /** UnitTypeData race. */
        public race: SC2APIProtocol.Race;

        /** UnitTypeData buildTime. */
        public buildTime: number;

        /** UnitTypeData hasVespene. */
        public hasVespene: boolean;

        /** UnitTypeData hasMinerals. */
        public hasMinerals: boolean;

        /** UnitTypeData techAlias. */
        public techAlias: number[];

        /** UnitTypeData unitAlias. */
        public unitAlias: number;

        /** UnitTypeData techRequirement. */
        public techRequirement: number;

        /** UnitTypeData requireAttached. */
        public requireAttached: boolean;

        /** UnitTypeData attributes. */
        public attributes: SC2APIProtocol.Attribute[];

        /** UnitTypeData movementSpeed. */
        public movementSpeed: number;

        /** UnitTypeData armor. */
        public armor: number;

        /** UnitTypeData weapons. */
        public weapons: SC2APIProtocol.IWeapon[];

        /**
         * Creates a new UnitTypeData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnitTypeData instance
         */
        public static create(properties?: SC2APIProtocol.IUnitTypeData): SC2APIProtocol.UnitTypeData;

        /**
         * Encodes the specified UnitTypeData message. Does not implicitly {@link SC2APIProtocol.UnitTypeData.verify|verify} messages.
         * @param message UnitTypeData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IUnitTypeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnitTypeData message, length delimited. Does not implicitly {@link SC2APIProtocol.UnitTypeData.verify|verify} messages.
         * @param message UnitTypeData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IUnitTypeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnitTypeData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnitTypeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.UnitTypeData;

        /**
         * Decodes an UnitTypeData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnitTypeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.UnitTypeData;

        /**
         * Verifies an UnitTypeData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnitTypeData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnitTypeData
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.UnitTypeData;

        /**
         * Creates a plain object from an UnitTypeData message. Also converts values to other types if specified.
         * @param message UnitTypeData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.UnitTypeData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnitTypeData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpgradeData. */
    interface IUpgradeData {

        /** UpgradeData upgradeId */
        upgradeId?: number;

        /** UpgradeData name */
        name?: string;

        /** UpgradeData mineralCost */
        mineralCost?: number;

        /** UpgradeData vespeneCost */
        vespeneCost?: number;

        /** UpgradeData researchTime */
        researchTime?: number;

        /** UpgradeData abilityId */
        abilityId?: number;
    }

    /** Represents an UpgradeData. */
    class UpgradeData {

        /**
         * Constructs a new UpgradeData.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IUpgradeData);

        /** UpgradeData upgradeId. */
        public upgradeId: number;

        /** UpgradeData name. */
        public name: string;

        /** UpgradeData mineralCost. */
        public mineralCost: number;

        /** UpgradeData vespeneCost. */
        public vespeneCost: number;

        /** UpgradeData researchTime. */
        public researchTime: number;

        /** UpgradeData abilityId. */
        public abilityId: number;

        /**
         * Creates a new UpgradeData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpgradeData instance
         */
        public static create(properties?: SC2APIProtocol.IUpgradeData): SC2APIProtocol.UpgradeData;

        /**
         * Encodes the specified UpgradeData message. Does not implicitly {@link SC2APIProtocol.UpgradeData.verify|verify} messages.
         * @param message UpgradeData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IUpgradeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpgradeData message, length delimited. Does not implicitly {@link SC2APIProtocol.UpgradeData.verify|verify} messages.
         * @param message UpgradeData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IUpgradeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpgradeData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpgradeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.UpgradeData;

        /**
         * Decodes an UpgradeData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpgradeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.UpgradeData;

        /**
         * Verifies an UpgradeData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpgradeData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpgradeData
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.UpgradeData;

        /**
         * Creates a plain object from an UpgradeData message. Also converts values to other types if specified.
         * @param message UpgradeData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.UpgradeData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpgradeData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuffData. */
    interface IBuffData {

        /** BuffData buffId */
        buffId?: number;

        /** BuffData name */
        name?: string;
    }

    /** Represents a BuffData. */
    class BuffData {

        /**
         * Constructs a new BuffData.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IBuffData);

        /** BuffData buffId. */
        public buffId: number;

        /** BuffData name. */
        public name: string;

        /**
         * Creates a new BuffData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuffData instance
         */
        public static create(properties?: SC2APIProtocol.IBuffData): SC2APIProtocol.BuffData;

        /**
         * Encodes the specified BuffData message. Does not implicitly {@link SC2APIProtocol.BuffData.verify|verify} messages.
         * @param message BuffData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IBuffData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BuffData message, length delimited. Does not implicitly {@link SC2APIProtocol.BuffData.verify|verify} messages.
         * @param message BuffData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IBuffData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuffData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuffData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.BuffData;

        /**
         * Decodes a BuffData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuffData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.BuffData;

        /**
         * Verifies a BuffData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuffData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuffData
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.BuffData;

        /**
         * Creates a plain object from a BuffData message. Also converts values to other types if specified.
         * @param message BuffData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.BuffData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuffData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugCommand. */
    interface IDebugCommand {

        /** DebugCommand draw */
        draw?: SC2APIProtocol.IDebugDraw;

        /** DebugCommand gameState */
        gameState?: SC2APIProtocol.DebugGameState;

        /** DebugCommand createUnit */
        createUnit?: SC2APIProtocol.IDebugCreateUnit;

        /** DebugCommand killUnit */
        killUnit?: SC2APIProtocol.IDebugKillUnit;

        /** DebugCommand testProcess */
        testProcess?: SC2APIProtocol.IDebugTestProcess;

        /** DebugCommand score */
        score?: SC2APIProtocol.IDebugSetScore;

        /** DebugCommand endGame */
        endGame?: SC2APIProtocol.IDebugEndGame;

        /** DebugCommand unitValue */
        unitValue?: SC2APIProtocol.IDebugSetUnitValue;

        /** DebugCommand chat */
        chat?: SC2APIProtocol.IDebugChat;
    }

    /** Represents a DebugCommand. */
    class DebugCommand {

        /**
         * Constructs a new DebugCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugCommand);

        /** DebugCommand draw. */
        public draw?: (SC2APIProtocol.IDebugDraw|null);

        /** DebugCommand gameState. */
        public gameState: SC2APIProtocol.DebugGameState;

        /** DebugCommand createUnit. */
        public createUnit?: (SC2APIProtocol.IDebugCreateUnit|null);

        /** DebugCommand killUnit. */
        public killUnit?: (SC2APIProtocol.IDebugKillUnit|null);

        /** DebugCommand testProcess. */
        public testProcess?: (SC2APIProtocol.IDebugTestProcess|null);

        /** DebugCommand score. */
        public score?: (SC2APIProtocol.IDebugSetScore|null);

        /** DebugCommand endGame. */
        public endGame?: (SC2APIProtocol.IDebugEndGame|null);

        /** DebugCommand unitValue. */
        public unitValue?: (SC2APIProtocol.IDebugSetUnitValue|null);

        /** DebugCommand chat. */
        public chat?: (SC2APIProtocol.IDebugChat|null);

        /** DebugCommand command. */
        public command?: string;

        /**
         * Creates a new DebugCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugCommand instance
         */
        public static create(properties?: SC2APIProtocol.IDebugCommand): SC2APIProtocol.DebugCommand;

        /**
         * Encodes the specified DebugCommand message. Does not implicitly {@link SC2APIProtocol.DebugCommand.verify|verify} messages.
         * @param message DebugCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugCommand message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugCommand.verify|verify} messages.
         * @param message DebugCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugCommand;

        /**
         * Decodes a DebugCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugCommand;

        /**
         * Verifies a DebugCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugCommand
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugCommand;

        /**
         * Creates a plain object from a DebugCommand message. Also converts values to other types if specified.
         * @param message DebugCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugDraw. */
    interface IDebugDraw {

        /** DebugDraw text */
        text?: SC2APIProtocol.IDebugText[];

        /** DebugDraw lines */
        lines?: SC2APIProtocol.IDebugLine[];

        /** DebugDraw boxes */
        boxes?: SC2APIProtocol.IDebugBox[];

        /** DebugDraw spheres */
        spheres?: SC2APIProtocol.IDebugSphere[];
    }

    /** Represents a DebugDraw. */
    class DebugDraw {

        /**
         * Constructs a new DebugDraw.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugDraw);

        /** DebugDraw text. */
        public text: SC2APIProtocol.IDebugText[];

        /** DebugDraw lines. */
        public lines: SC2APIProtocol.IDebugLine[];

        /** DebugDraw boxes. */
        public boxes: SC2APIProtocol.IDebugBox[];

        /** DebugDraw spheres. */
        public spheres: SC2APIProtocol.IDebugSphere[];

        /**
         * Creates a new DebugDraw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugDraw instance
         */
        public static create(properties?: SC2APIProtocol.IDebugDraw): SC2APIProtocol.DebugDraw;

        /**
         * Encodes the specified DebugDraw message. Does not implicitly {@link SC2APIProtocol.DebugDraw.verify|verify} messages.
         * @param message DebugDraw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugDraw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugDraw message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugDraw.verify|verify} messages.
         * @param message DebugDraw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugDraw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugDraw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugDraw;

        /**
         * Decodes a DebugDraw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugDraw;

        /**
         * Verifies a DebugDraw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugDraw message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugDraw
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugDraw;

        /**
         * Creates a plain object from a DebugDraw message. Also converts values to other types if specified.
         * @param message DebugDraw
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugDraw, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugDraw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Line. */
    interface ILine {

        /** Line p0 */
        p0?: SC2APIProtocol.IPoint;

        /** Line p1 */
        p1?: SC2APIProtocol.IPoint;
    }

    /** Represents a Line. */
    class Line {

        /**
         * Constructs a new Line.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.ILine);

        /** Line p0. */
        public p0?: (SC2APIProtocol.IPoint|null);

        /** Line p1. */
        public p1?: (SC2APIProtocol.IPoint|null);

        /**
         * Creates a new Line instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Line instance
         */
        public static create(properties?: SC2APIProtocol.ILine): SC2APIProtocol.Line;

        /**
         * Encodes the specified Line message. Does not implicitly {@link SC2APIProtocol.Line.verify|verify} messages.
         * @param message Line message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.ILine, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Line message, length delimited. Does not implicitly {@link SC2APIProtocol.Line.verify|verify} messages.
         * @param message Line message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.ILine, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Line message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Line
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Line;

        /**
         * Decodes a Line message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Line
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Line;

        /**
         * Verifies a Line message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Line message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Line
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Line;

        /**
         * Creates a plain object from a Line message. Also converts values to other types if specified.
         * @param message Line
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Line, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Line to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Color. */
    interface IColor {

        /** Color r */
        r?: number;

        /** Color g */
        g?: number;

        /** Color b */
        b?: number;
    }

    /** Represents a Color. */
    class Color {

        /**
         * Constructs a new Color.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IColor);

        /** Color r. */
        public r: number;

        /** Color g. */
        public g: number;

        /** Color b. */
        public b: number;

        /**
         * Creates a new Color instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Color instance
         */
        public static create(properties?: SC2APIProtocol.IColor): SC2APIProtocol.Color;

        /**
         * Encodes the specified Color message. Does not implicitly {@link SC2APIProtocol.Color.verify|verify} messages.
         * @param message Color message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Color message, length delimited. Does not implicitly {@link SC2APIProtocol.Color.verify|verify} messages.
         * @param message Color message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Color message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Color
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Color;

        /**
         * Decodes a Color message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Color
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Color;

        /**
         * Verifies a Color message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Color message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Color
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Color;

        /**
         * Creates a plain object from a Color message. Also converts values to other types if specified.
         * @param message Color
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Color, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Color to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugText. */
    interface IDebugText {

        /** DebugText color */
        color?: SC2APIProtocol.IColor;

        /** DebugText text */
        text?: string;

        /** DebugText virtualPos */
        virtualPos?: SC2APIProtocol.IPoint;

        /** DebugText worldPos */
        worldPos?: SC2APIProtocol.IPoint;
    }

    /** Represents a DebugText. */
    class DebugText {

        /**
         * Constructs a new DebugText.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugText);

        /** DebugText color. */
        public color?: (SC2APIProtocol.IColor|null);

        /** DebugText text. */
        public text: string;

        /** DebugText virtualPos. */
        public virtualPos?: (SC2APIProtocol.IPoint|null);

        /** DebugText worldPos. */
        public worldPos?: (SC2APIProtocol.IPoint|null);

        /**
         * Creates a new DebugText instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugText instance
         */
        public static create(properties?: SC2APIProtocol.IDebugText): SC2APIProtocol.DebugText;

        /**
         * Encodes the specified DebugText message. Does not implicitly {@link SC2APIProtocol.DebugText.verify|verify} messages.
         * @param message DebugText message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugText message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugText.verify|verify} messages.
         * @param message DebugText message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugText message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugText;

        /**
         * Decodes a DebugText message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugText;

        /**
         * Verifies a DebugText message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugText message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugText
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugText;

        /**
         * Creates a plain object from a DebugText message. Also converts values to other types if specified.
         * @param message DebugText
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugText, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugText to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugLine. */
    interface IDebugLine {

        /** DebugLine color */
        color?: SC2APIProtocol.IColor;

        /** DebugLine line */
        line?: SC2APIProtocol.ILine;
    }

    /** Represents a DebugLine. */
    class DebugLine {

        /**
         * Constructs a new DebugLine.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugLine);

        /** DebugLine color. */
        public color?: (SC2APIProtocol.IColor|null);

        /** DebugLine line. */
        public line?: (SC2APIProtocol.ILine|null);

        /**
         * Creates a new DebugLine instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugLine instance
         */
        public static create(properties?: SC2APIProtocol.IDebugLine): SC2APIProtocol.DebugLine;

        /**
         * Encodes the specified DebugLine message. Does not implicitly {@link SC2APIProtocol.DebugLine.verify|verify} messages.
         * @param message DebugLine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugLine, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugLine message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugLine.verify|verify} messages.
         * @param message DebugLine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugLine, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugLine message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugLine;

        /**
         * Decodes a DebugLine message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugLine;

        /**
         * Verifies a DebugLine message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugLine message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugLine
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugLine;

        /**
         * Creates a plain object from a DebugLine message. Also converts values to other types if specified.
         * @param message DebugLine
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugLine to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugBox. */
    interface IDebugBox {

        /** DebugBox color */
        color?: SC2APIProtocol.IColor;

        /** DebugBox min */
        min?: SC2APIProtocol.IPoint;

        /** DebugBox max */
        max?: SC2APIProtocol.IPoint;
    }

    /** Represents a DebugBox. */
    class DebugBox {

        /**
         * Constructs a new DebugBox.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugBox);

        /** DebugBox color. */
        public color?: (SC2APIProtocol.IColor|null);

        /** DebugBox min. */
        public min?: (SC2APIProtocol.IPoint|null);

        /** DebugBox max. */
        public max?: (SC2APIProtocol.IPoint|null);

        /**
         * Creates a new DebugBox instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugBox instance
         */
        public static create(properties?: SC2APIProtocol.IDebugBox): SC2APIProtocol.DebugBox;

        /**
         * Encodes the specified DebugBox message. Does not implicitly {@link SC2APIProtocol.DebugBox.verify|verify} messages.
         * @param message DebugBox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugBox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugBox message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugBox.verify|verify} messages.
         * @param message DebugBox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugBox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugBox message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugBox;

        /**
         * Decodes a DebugBox message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugBox;

        /**
         * Verifies a DebugBox message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugBox message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugBox
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugBox;

        /**
         * Creates a plain object from a DebugBox message. Also converts values to other types if specified.
         * @param message DebugBox
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugBox, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugBox to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugSphere. */
    interface IDebugSphere {

        /** DebugSphere color */
        color?: SC2APIProtocol.IColor;

        /** DebugSphere p */
        p?: SC2APIProtocol.IPoint;

        /** DebugSphere r */
        r?: number;
    }

    /** Represents a DebugSphere. */
    class DebugSphere {

        /**
         * Constructs a new DebugSphere.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugSphere);

        /** DebugSphere color. */
        public color?: (SC2APIProtocol.IColor|null);

        /** DebugSphere p. */
        public p?: (SC2APIProtocol.IPoint|null);

        /** DebugSphere r. */
        public r: number;

        /**
         * Creates a new DebugSphere instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugSphere instance
         */
        public static create(properties?: SC2APIProtocol.IDebugSphere): SC2APIProtocol.DebugSphere;

        /**
         * Encodes the specified DebugSphere message. Does not implicitly {@link SC2APIProtocol.DebugSphere.verify|verify} messages.
         * @param message DebugSphere message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugSphere, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugSphere message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugSphere.verify|verify} messages.
         * @param message DebugSphere message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugSphere, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugSphere message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugSphere
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugSphere;

        /**
         * Decodes a DebugSphere message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugSphere
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugSphere;

        /**
         * Verifies a DebugSphere message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugSphere message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugSphere
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugSphere;

        /**
         * Creates a plain object from a DebugSphere message. Also converts values to other types if specified.
         * @param message DebugSphere
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugSphere, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugSphere to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** DebugGameState enum. */
    enum DebugGameState {
        show_map = 1,
        control_enemy = 2,
        food = 3,
        free = 4,
        all_resources = 5,
        god = 6,
        minerals = 7,
        gas = 8,
        cooldown = 9,
        tech_tree = 10,
        upgrade = 11,
        fast_build = 12
    }

    /** Properties of a DebugCreateUnit. */
    interface IDebugCreateUnit {

        /** DebugCreateUnit unitType */
        unitType?: number;

        /** DebugCreateUnit owner */
        owner?: number;

        /** DebugCreateUnit pos */
        pos?: SC2APIProtocol.IPoint2D;

        /** DebugCreateUnit quantity */
        quantity?: number;
    }

    /** Represents a DebugCreateUnit. */
    class DebugCreateUnit {

        /**
         * Constructs a new DebugCreateUnit.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugCreateUnit);

        /** DebugCreateUnit unitType. */
        public unitType: number;

        /** DebugCreateUnit owner. */
        public owner: number;

        /** DebugCreateUnit pos. */
        public pos?: (SC2APIProtocol.IPoint2D|null);

        /** DebugCreateUnit quantity. */
        public quantity: number;

        /**
         * Creates a new DebugCreateUnit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugCreateUnit instance
         */
        public static create(properties?: SC2APIProtocol.IDebugCreateUnit): SC2APIProtocol.DebugCreateUnit;

        /**
         * Encodes the specified DebugCreateUnit message. Does not implicitly {@link SC2APIProtocol.DebugCreateUnit.verify|verify} messages.
         * @param message DebugCreateUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugCreateUnit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugCreateUnit message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugCreateUnit.verify|verify} messages.
         * @param message DebugCreateUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugCreateUnit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugCreateUnit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugCreateUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugCreateUnit;

        /**
         * Decodes a DebugCreateUnit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugCreateUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugCreateUnit;

        /**
         * Verifies a DebugCreateUnit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugCreateUnit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugCreateUnit
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugCreateUnit;

        /**
         * Creates a plain object from a DebugCreateUnit message. Also converts values to other types if specified.
         * @param message DebugCreateUnit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugCreateUnit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugCreateUnit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugKillUnit. */
    interface IDebugKillUnit {

        /** DebugKillUnit tag */
        tag?: (number|Long)[];
    }

    /** Represents a DebugKillUnit. */
    class DebugKillUnit {

        /**
         * Constructs a new DebugKillUnit.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugKillUnit);

        /** DebugKillUnit tag. */
        public tag: (number|Long)[];

        /**
         * Creates a new DebugKillUnit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugKillUnit instance
         */
        public static create(properties?: SC2APIProtocol.IDebugKillUnit): SC2APIProtocol.DebugKillUnit;

        /**
         * Encodes the specified DebugKillUnit message. Does not implicitly {@link SC2APIProtocol.DebugKillUnit.verify|verify} messages.
         * @param message DebugKillUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugKillUnit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugKillUnit message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugKillUnit.verify|verify} messages.
         * @param message DebugKillUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugKillUnit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugKillUnit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugKillUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugKillUnit;

        /**
         * Decodes a DebugKillUnit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugKillUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugKillUnit;

        /**
         * Verifies a DebugKillUnit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugKillUnit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugKillUnit
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugKillUnit;

        /**
         * Creates a plain object from a DebugKillUnit message. Also converts values to other types if specified.
         * @param message DebugKillUnit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugKillUnit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugKillUnit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugTestProcess. */
    interface IDebugTestProcess {

        /** DebugTestProcess test */
        test?: SC2APIProtocol.DebugTestProcess.Test;

        /** DebugTestProcess delayMs */
        delayMs?: number;
    }

    /** Represents a DebugTestProcess. */
    class DebugTestProcess {

        /**
         * Constructs a new DebugTestProcess.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugTestProcess);

        /** DebugTestProcess test. */
        public test: SC2APIProtocol.DebugTestProcess.Test;

        /** DebugTestProcess delayMs. */
        public delayMs: number;

        /**
         * Creates a new DebugTestProcess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugTestProcess instance
         */
        public static create(properties?: SC2APIProtocol.IDebugTestProcess): SC2APIProtocol.DebugTestProcess;

        /**
         * Encodes the specified DebugTestProcess message. Does not implicitly {@link SC2APIProtocol.DebugTestProcess.verify|verify} messages.
         * @param message DebugTestProcess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugTestProcess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugTestProcess message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugTestProcess.verify|verify} messages.
         * @param message DebugTestProcess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugTestProcess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugTestProcess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugTestProcess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugTestProcess;

        /**
         * Decodes a DebugTestProcess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugTestProcess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugTestProcess;

        /**
         * Verifies a DebugTestProcess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugTestProcess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugTestProcess
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugTestProcess;

        /**
         * Creates a plain object from a DebugTestProcess message. Also converts values to other types if specified.
         * @param message DebugTestProcess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugTestProcess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugTestProcess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DebugTestProcess {

        /** Test enum. */
        enum Test {
            hang = 1,
            crash = 2,
            exit = 3
        }
    }

    /** Properties of a DebugSetScore. */
    interface IDebugSetScore {

        /** DebugSetScore score */
        score?: number;
    }

    /** Represents a DebugSetScore. */
    class DebugSetScore {

        /**
         * Constructs a new DebugSetScore.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugSetScore);

        /** DebugSetScore score. */
        public score: number;

        /**
         * Creates a new DebugSetScore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugSetScore instance
         */
        public static create(properties?: SC2APIProtocol.IDebugSetScore): SC2APIProtocol.DebugSetScore;

        /**
         * Encodes the specified DebugSetScore message. Does not implicitly {@link SC2APIProtocol.DebugSetScore.verify|verify} messages.
         * @param message DebugSetScore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugSetScore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugSetScore message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugSetScore.verify|verify} messages.
         * @param message DebugSetScore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugSetScore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugSetScore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugSetScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugSetScore;

        /**
         * Decodes a DebugSetScore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugSetScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugSetScore;

        /**
         * Verifies a DebugSetScore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugSetScore message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugSetScore
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugSetScore;

        /**
         * Creates a plain object from a DebugSetScore message. Also converts values to other types if specified.
         * @param message DebugSetScore
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugSetScore, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugSetScore to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugEndGame. */
    interface IDebugEndGame {

        /** DebugEndGame endResult */
        endResult?: SC2APIProtocol.DebugEndGame.EndResult;
    }

    /** Represents a DebugEndGame. */
    class DebugEndGame {

        /**
         * Constructs a new DebugEndGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugEndGame);

        /** DebugEndGame endResult. */
        public endResult: SC2APIProtocol.DebugEndGame.EndResult;

        /**
         * Creates a new DebugEndGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugEndGame instance
         */
        public static create(properties?: SC2APIProtocol.IDebugEndGame): SC2APIProtocol.DebugEndGame;

        /**
         * Encodes the specified DebugEndGame message. Does not implicitly {@link SC2APIProtocol.DebugEndGame.verify|verify} messages.
         * @param message DebugEndGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugEndGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugEndGame message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugEndGame.verify|verify} messages.
         * @param message DebugEndGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugEndGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugEndGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugEndGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugEndGame;

        /**
         * Decodes a DebugEndGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugEndGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugEndGame;

        /**
         * Verifies a DebugEndGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugEndGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugEndGame
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugEndGame;

        /**
         * Creates a plain object from a DebugEndGame message. Also converts values to other types if specified.
         * @param message DebugEndGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugEndGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugEndGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DebugEndGame {

        /** EndResult enum. */
        enum EndResult {
            Surrender = 1,
            DeclareVictory = 2
        }
    }

    /** Properties of a DebugSetUnitValue. */
    interface IDebugSetUnitValue {

        /** DebugSetUnitValue unitValue */
        unitValue?: SC2APIProtocol.DebugSetUnitValue.UnitValue;

        /** DebugSetUnitValue value */
        value?: number;

        /** DebugSetUnitValue unitTag */
        unitTag?: (number|Long);
    }

    /** Represents a DebugSetUnitValue. */
    class DebugSetUnitValue {

        /**
         * Constructs a new DebugSetUnitValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugSetUnitValue);

        /** DebugSetUnitValue unitValue. */
        public unitValue: SC2APIProtocol.DebugSetUnitValue.UnitValue;

        /** DebugSetUnitValue value. */
        public value: number;

        /** DebugSetUnitValue unitTag. */
        public unitTag: (number|Long);

        /**
         * Creates a new DebugSetUnitValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugSetUnitValue instance
         */
        public static create(properties?: SC2APIProtocol.IDebugSetUnitValue): SC2APIProtocol.DebugSetUnitValue;

        /**
         * Encodes the specified DebugSetUnitValue message. Does not implicitly {@link SC2APIProtocol.DebugSetUnitValue.verify|verify} messages.
         * @param message DebugSetUnitValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugSetUnitValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugSetUnitValue message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugSetUnitValue.verify|verify} messages.
         * @param message DebugSetUnitValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugSetUnitValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugSetUnitValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugSetUnitValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugSetUnitValue;

        /**
         * Decodes a DebugSetUnitValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugSetUnitValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugSetUnitValue;

        /**
         * Verifies a DebugSetUnitValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugSetUnitValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugSetUnitValue
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugSetUnitValue;

        /**
         * Creates a plain object from a DebugSetUnitValue message. Also converts values to other types if specified.
         * @param message DebugSetUnitValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugSetUnitValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugSetUnitValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DebugSetUnitValue {

        /** UnitValue enum. */
        enum UnitValue {
            Energy = 1,
            Life = 2,
            Shields = 3
        }
    }

    /** Properties of a DebugChat. */
    interface IDebugChat {

        /** DebugChat message */
        message?: string;
    }

    /** Represents a DebugChat. */
    class DebugChat {

        /**
         * Constructs a new DebugChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IDebugChat);

        /** DebugChat message. */
        public message: string;

        /**
         * Creates a new DebugChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugChat instance
         */
        public static create(properties?: SC2APIProtocol.IDebugChat): SC2APIProtocol.DebugChat;

        /**
         * Encodes the specified DebugChat message. Does not implicitly {@link SC2APIProtocol.DebugChat.verify|verify} messages.
         * @param message DebugChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IDebugChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugChat message, length delimited. Does not implicitly {@link SC2APIProtocol.DebugChat.verify|verify} messages.
         * @param message DebugChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IDebugChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.DebugChat;

        /**
         * Decodes a DebugChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.DebugChat;

        /**
         * Verifies a DebugChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugChat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugChat
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.DebugChat;

        /**
         * Creates a plain object from a DebugChat message. Also converts values to other types if specified.
         * @param message DebugChat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.DebugChat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugChat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ActionResult enum. */
    enum ActionResult {
        Success = 1,
        NotSupported = 2,
        Error = 3,
        CantQueueThatOrder = 4,
        Retry = 5,
        Cooldown = 6,
        QueueIsFull = 7,
        RallyQueueIsFull = 8,
        NotEnoughMinerals = 9,
        NotEnoughVespene = 10,
        NotEnoughTerrazine = 11,
        NotEnoughCustom = 12,
        NotEnoughFood = 13,
        FoodUsageImpossible = 14,
        NotEnoughLife = 15,
        NotEnoughShields = 16,
        NotEnoughEnergy = 17,
        LifeSuppressed = 18,
        ShieldsSuppressed = 19,
        EnergySuppressed = 20,
        NotEnoughCharges = 21,
        CantAddMoreCharges = 22,
        TooMuchMinerals = 23,
        TooMuchVespene = 24,
        TooMuchTerrazine = 25,
        TooMuchCustom = 26,
        TooMuchFood = 27,
        TooMuchLife = 28,
        TooMuchShields = 29,
        TooMuchEnergy = 30,
        MustTargetUnitWithLife = 31,
        MustTargetUnitWithShields = 32,
        MustTargetUnitWithEnergy = 33,
        CantTrade = 34,
        CantSpend = 35,
        CantTargetThatUnit = 36,
        CouldntAllocateUnit = 37,
        UnitCantMove = 38,
        TransportIsHoldingPosition = 39,
        BuildTechRequirementsNotMet = 40,
        CantFindPlacementLocation = 41,
        CantBuildOnThat = 42,
        CantBuildTooCloseToDropOff = 43,
        CantBuildLocationInvalid = 44,
        CantSeeBuildLocation = 45,
        CantBuildTooCloseToCreepSource = 46,
        CantBuildTooCloseToResources = 47,
        CantBuildTooFarFromWater = 48,
        CantBuildTooFarFromCreepSource = 49,
        CantBuildTooFarFromBuildPowerSource = 50,
        CantBuildOnDenseTerrain = 51,
        CantTrainTooFarFromTrainPowerSource = 52,
        CantLandLocationInvalid = 53,
        CantSeeLandLocation = 54,
        CantLandTooCloseToCreepSource = 55,
        CantLandTooCloseToResources = 56,
        CantLandTooFarFromWater = 57,
        CantLandTooFarFromCreepSource = 58,
        CantLandTooFarFromBuildPowerSource = 59,
        CantLandTooFarFromTrainPowerSource = 60,
        CantLandOnDenseTerrain = 61,
        AddOnTooFarFromBuilding = 62,
        MustBuildRefineryFirst = 63,
        BuildingIsUnderConstruction = 64,
        CantFindDropOff = 65,
        CantLoadOtherPlayersUnits = 66,
        NotEnoughRoomToLoadUnit = 67,
        CantUnloadUnitsThere = 68,
        CantWarpInUnitsThere = 69,
        CantLoadImmobileUnits = 70,
        CantRechargeImmobileUnits = 71,
        CantRechargeUnderConstructionUnits = 72,
        CantLoadThatUnit = 73,
        NoCargoToUnload = 74,
        LoadAllNoTargetsFound = 75,
        NotWhileOccupied = 76,
        CantAttackWithoutAmmo = 77,
        CantHoldAnyMoreAmmo = 78,
        TechRequirementsNotMet = 79,
        MustLockdownUnitFirst = 80,
        MustTargetUnit = 81,
        MustTargetInventory = 82,
        MustTargetVisibleUnit = 83,
        MustTargetVisibleLocation = 84,
        MustTargetWalkableLocation = 85,
        MustTargetPawnableUnit = 86,
        YouCantControlThatUnit = 87,
        YouCantIssueCommandsToThatUnit = 88,
        MustTargetResources = 89,
        RequiresHealTarget = 90,
        RequiresRepairTarget = 91,
        NoItemsToDrop = 92,
        CantHoldAnyMoreItems = 93,
        CantHoldThat = 94,
        TargetHasNoInventory = 95,
        CantDropThisItem = 96,
        CantMoveThisItem = 97,
        CantPawnThisUnit = 98,
        MustTargetCaster = 99,
        CantTargetCaster = 100,
        MustTargetOuter = 101,
        CantTargetOuter = 102,
        MustTargetYourOwnUnits = 103,
        CantTargetYourOwnUnits = 104,
        MustTargetFriendlyUnits = 105,
        CantTargetFriendlyUnits = 106,
        MustTargetNeutralUnits = 107,
        CantTargetNeutralUnits = 108,
        MustTargetEnemyUnits = 109,
        CantTargetEnemyUnits = 110,
        MustTargetAirUnits = 111,
        CantTargetAirUnits = 112,
        MustTargetGroundUnits = 113,
        CantTargetGroundUnits = 114,
        MustTargetStructures = 115,
        CantTargetStructures = 116,
        MustTargetLightUnits = 117,
        CantTargetLightUnits = 118,
        MustTargetArmoredUnits = 119,
        CantTargetArmoredUnits = 120,
        MustTargetBiologicalUnits = 121,
        CantTargetBiologicalUnits = 122,
        MustTargetHeroicUnits = 123,
        CantTargetHeroicUnits = 124,
        MustTargetRoboticUnits = 125,
        CantTargetRoboticUnits = 126,
        MustTargetMechanicalUnits = 127,
        CantTargetMechanicalUnits = 128,
        MustTargetPsionicUnits = 129,
        CantTargetPsionicUnits = 130,
        MustTargetMassiveUnits = 131,
        CantTargetMassiveUnits = 132,
        MustTargetMissile = 133,
        CantTargetMissile = 134,
        MustTargetWorkerUnits = 135,
        CantTargetWorkerUnits = 136,
        MustTargetEnergyCapableUnits = 137,
        CantTargetEnergyCapableUnits = 138,
        MustTargetShieldCapableUnits = 139,
        CantTargetShieldCapableUnits = 140,
        MustTargetFlyers = 141,
        CantTargetFlyers = 142,
        MustTargetBuriedUnits = 143,
        CantTargetBuriedUnits = 144,
        MustTargetCloakedUnits = 145,
        CantTargetCloakedUnits = 146,
        MustTargetUnitsInAStasisField = 147,
        CantTargetUnitsInAStasisField = 148,
        MustTargetUnderConstructionUnits = 149,
        CantTargetUnderConstructionUnits = 150,
        MustTargetDeadUnits = 151,
        CantTargetDeadUnits = 152,
        MustTargetRevivableUnits = 153,
        CantTargetRevivableUnits = 154,
        MustTargetHiddenUnits = 155,
        CantTargetHiddenUnits = 156,
        CantRechargeOtherPlayersUnits = 157,
        MustTargetHallucinations = 158,
        CantTargetHallucinations = 159,
        MustTargetInvulnerableUnits = 160,
        CantTargetInvulnerableUnits = 161,
        MustTargetDetectedUnits = 162,
        CantTargetDetectedUnits = 163,
        CantTargetUnitWithEnergy = 164,
        CantTargetUnitWithShields = 165,
        MustTargetUncommandableUnits = 166,
        CantTargetUncommandableUnits = 167,
        MustTargetPreventDefeatUnits = 168,
        CantTargetPreventDefeatUnits = 169,
        MustTargetPreventRevealUnits = 170,
        CantTargetPreventRevealUnits = 171,
        MustTargetPassiveUnits = 172,
        CantTargetPassiveUnits = 173,
        MustTargetStunnedUnits = 174,
        CantTargetStunnedUnits = 175,
        MustTargetSummonedUnits = 176,
        CantTargetSummonedUnits = 177,
        MustTargetUser1 = 178,
        CantTargetUser1 = 179,
        MustTargetUnstoppableUnits = 180,
        CantTargetUnstoppableUnits = 181,
        MustTargetResistantUnits = 182,
        CantTargetResistantUnits = 183,
        MustTargetDazedUnits = 184,
        CantTargetDazedUnits = 185,
        CantLockdown = 186,
        CantMindControl = 187,
        MustTargetDestructibles = 188,
        CantTargetDestructibles = 189,
        MustTargetItems = 190,
        CantTargetItems = 191,
        NoCalldownAvailable = 192,
        WaypointListFull = 193,
        MustTargetRace = 194,
        CantTargetRace = 195,
        MustTargetSimilarUnits = 196,
        CantTargetSimilarUnits = 197,
        CantFindEnoughTargets = 198,
        AlreadySpawningLarva = 199,
        CantTargetExhaustedResources = 200,
        CantUseMinimap = 201,
        CantUseInfoPanel = 202,
        OrderQueueIsFull = 203,
        CantHarvestThatResource = 204,
        HarvestersNotRequired = 205,
        AlreadyTargeted = 206,
        CantAttackWeaponsDisabled = 207,
        CouldntReachTarget = 208,
        TargetIsOutOfRange = 209,
        TargetIsTooClose = 210,
        TargetIsOutOfArc = 211,
        CantFindTeleportLocation = 212,
        InvalidItemClass = 213,
        CantFindCancelOrder = 214
    }

    /** Properties of a RequestQuery. */
    interface IRequestQuery {

        /** RequestQuery pathing */
        pathing?: SC2APIProtocol.IRequestQueryPathing[];

        /** RequestQuery abilities */
        abilities?: SC2APIProtocol.IRequestQueryAvailableAbilities[];

        /** RequestQuery placements */
        placements?: SC2APIProtocol.IRequestQueryBuildingPlacement[];

        /** RequestQuery ignoreResourceRequirements */
        ignoreResourceRequirements?: boolean;
    }

    /** Represents a RequestQuery. */
    class RequestQuery {

        /**
         * Constructs a new RequestQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestQuery);

        /** RequestQuery pathing. */
        public pathing: SC2APIProtocol.IRequestQueryPathing[];

        /** RequestQuery abilities. */
        public abilities: SC2APIProtocol.IRequestQueryAvailableAbilities[];

        /** RequestQuery placements. */
        public placements: SC2APIProtocol.IRequestQueryBuildingPlacement[];

        /** RequestQuery ignoreResourceRequirements. */
        public ignoreResourceRequirements: boolean;

        /**
         * Creates a new RequestQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestQuery instance
         */
        public static create(properties?: SC2APIProtocol.IRequestQuery): SC2APIProtocol.RequestQuery;

        /**
         * Encodes the specified RequestQuery message. Does not implicitly {@link SC2APIProtocol.RequestQuery.verify|verify} messages.
         * @param message RequestQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestQuery message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestQuery.verify|verify} messages.
         * @param message RequestQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestQuery;

        /**
         * Decodes a RequestQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestQuery;

        /**
         * Verifies a RequestQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestQuery
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestQuery;

        /**
         * Creates a plain object from a RequestQuery message. Also converts values to other types if specified.
         * @param message RequestQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseQuery. */
    interface IResponseQuery {

        /** ResponseQuery pathing */
        pathing?: SC2APIProtocol.IResponseQueryPathing[];

        /** ResponseQuery abilities */
        abilities?: SC2APIProtocol.IResponseQueryAvailableAbilities[];

        /** ResponseQuery placements */
        placements?: SC2APIProtocol.IResponseQueryBuildingPlacement[];
    }

    /** Represents a ResponseQuery. */
    class ResponseQuery {

        /**
         * Constructs a new ResponseQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseQuery);

        /** ResponseQuery pathing. */
        public pathing: SC2APIProtocol.IResponseQueryPathing[];

        /** ResponseQuery abilities. */
        public abilities: SC2APIProtocol.IResponseQueryAvailableAbilities[];

        /** ResponseQuery placements. */
        public placements: SC2APIProtocol.IResponseQueryBuildingPlacement[];

        /**
         * Creates a new ResponseQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseQuery instance
         */
        public static create(properties?: SC2APIProtocol.IResponseQuery): SC2APIProtocol.ResponseQuery;

        /**
         * Encodes the specified ResponseQuery message. Does not implicitly {@link SC2APIProtocol.ResponseQuery.verify|verify} messages.
         * @param message ResponseQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseQuery message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseQuery.verify|verify} messages.
         * @param message ResponseQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseQuery;

        /**
         * Decodes a ResponseQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseQuery;

        /**
         * Verifies a ResponseQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseQuery
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseQuery;

        /**
         * Creates a plain object from a ResponseQuery message. Also converts values to other types if specified.
         * @param message ResponseQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestQueryPathing. */
    interface IRequestQueryPathing {

        /** RequestQueryPathing startPos */
        startPos?: SC2APIProtocol.IPoint2D;

        /** RequestQueryPathing unitTag */
        unitTag?: (number|Long);

        /** RequestQueryPathing endPos */
        endPos?: SC2APIProtocol.IPoint2D;
    }

    /** Represents a RequestQueryPathing. */
    class RequestQueryPathing {

        /**
         * Constructs a new RequestQueryPathing.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestQueryPathing);

        /** RequestQueryPathing startPos. */
        public startPos?: (SC2APIProtocol.IPoint2D|null);

        /** RequestQueryPathing unitTag. */
        public unitTag: (number|Long);

        /** RequestQueryPathing endPos. */
        public endPos?: (SC2APIProtocol.IPoint2D|null);

        /** RequestQueryPathing start. */
        public start?: string;

        /**
         * Creates a new RequestQueryPathing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestQueryPathing instance
         */
        public static create(properties?: SC2APIProtocol.IRequestQueryPathing): SC2APIProtocol.RequestQueryPathing;

        /**
         * Encodes the specified RequestQueryPathing message. Does not implicitly {@link SC2APIProtocol.RequestQueryPathing.verify|verify} messages.
         * @param message RequestQueryPathing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestQueryPathing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestQueryPathing message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestQueryPathing.verify|verify} messages.
         * @param message RequestQueryPathing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestQueryPathing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestQueryPathing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestQueryPathing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestQueryPathing;

        /**
         * Decodes a RequestQueryPathing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestQueryPathing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestQueryPathing;

        /**
         * Verifies a RequestQueryPathing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestQueryPathing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestQueryPathing
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestQueryPathing;

        /**
         * Creates a plain object from a RequestQueryPathing message. Also converts values to other types if specified.
         * @param message RequestQueryPathing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestQueryPathing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestQueryPathing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseQueryPathing. */
    interface IResponseQueryPathing {

        /** ResponseQueryPathing distance */
        distance?: number;
    }

    /** Represents a ResponseQueryPathing. */
    class ResponseQueryPathing {

        /**
         * Constructs a new ResponseQueryPathing.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseQueryPathing);

        /** ResponseQueryPathing distance. */
        public distance: number;

        /**
         * Creates a new ResponseQueryPathing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseQueryPathing instance
         */
        public static create(properties?: SC2APIProtocol.IResponseQueryPathing): SC2APIProtocol.ResponseQueryPathing;

        /**
         * Encodes the specified ResponseQueryPathing message. Does not implicitly {@link SC2APIProtocol.ResponseQueryPathing.verify|verify} messages.
         * @param message ResponseQueryPathing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseQueryPathing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseQueryPathing message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseQueryPathing.verify|verify} messages.
         * @param message ResponseQueryPathing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseQueryPathing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseQueryPathing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseQueryPathing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseQueryPathing;

        /**
         * Decodes a ResponseQueryPathing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseQueryPathing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseQueryPathing;

        /**
         * Verifies a ResponseQueryPathing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseQueryPathing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseQueryPathing
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseQueryPathing;

        /**
         * Creates a plain object from a ResponseQueryPathing message. Also converts values to other types if specified.
         * @param message ResponseQueryPathing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseQueryPathing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseQueryPathing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestQueryAvailableAbilities. */
    interface IRequestQueryAvailableAbilities {

        /** RequestQueryAvailableAbilities unitTag */
        unitTag?: (number|Long);
    }

    /** Represents a RequestQueryAvailableAbilities. */
    class RequestQueryAvailableAbilities {

        /**
         * Constructs a new RequestQueryAvailableAbilities.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestQueryAvailableAbilities);

        /** RequestQueryAvailableAbilities unitTag. */
        public unitTag: (number|Long);

        /**
         * Creates a new RequestQueryAvailableAbilities instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestQueryAvailableAbilities instance
         */
        public static create(properties?: SC2APIProtocol.IRequestQueryAvailableAbilities): SC2APIProtocol.RequestQueryAvailableAbilities;

        /**
         * Encodes the specified RequestQueryAvailableAbilities message. Does not implicitly {@link SC2APIProtocol.RequestQueryAvailableAbilities.verify|verify} messages.
         * @param message RequestQueryAvailableAbilities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestQueryAvailableAbilities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestQueryAvailableAbilities message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestQueryAvailableAbilities.verify|verify} messages.
         * @param message RequestQueryAvailableAbilities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestQueryAvailableAbilities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestQueryAvailableAbilities message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestQueryAvailableAbilities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestQueryAvailableAbilities;

        /**
         * Decodes a RequestQueryAvailableAbilities message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestQueryAvailableAbilities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestQueryAvailableAbilities;

        /**
         * Verifies a RequestQueryAvailableAbilities message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestQueryAvailableAbilities message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestQueryAvailableAbilities
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestQueryAvailableAbilities;

        /**
         * Creates a plain object from a RequestQueryAvailableAbilities message. Also converts values to other types if specified.
         * @param message RequestQueryAvailableAbilities
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestQueryAvailableAbilities, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestQueryAvailableAbilities to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseQueryAvailableAbilities. */
    interface IResponseQueryAvailableAbilities {

        /** ResponseQueryAvailableAbilities abilities */
        abilities?: SC2APIProtocol.IAvailableAbility[];

        /** ResponseQueryAvailableAbilities unitTag */
        unitTag?: (number|Long);

        /** ResponseQueryAvailableAbilities unitTypeId */
        unitTypeId?: number;
    }

    /** Represents a ResponseQueryAvailableAbilities. */
    class ResponseQueryAvailableAbilities {

        /**
         * Constructs a new ResponseQueryAvailableAbilities.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseQueryAvailableAbilities);

        /** ResponseQueryAvailableAbilities abilities. */
        public abilities: SC2APIProtocol.IAvailableAbility[];

        /** ResponseQueryAvailableAbilities unitTag. */
        public unitTag: (number|Long);

        /** ResponseQueryAvailableAbilities unitTypeId. */
        public unitTypeId: number;

        /**
         * Creates a new ResponseQueryAvailableAbilities instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseQueryAvailableAbilities instance
         */
        public static create(properties?: SC2APIProtocol.IResponseQueryAvailableAbilities): SC2APIProtocol.ResponseQueryAvailableAbilities;

        /**
         * Encodes the specified ResponseQueryAvailableAbilities message. Does not implicitly {@link SC2APIProtocol.ResponseQueryAvailableAbilities.verify|verify} messages.
         * @param message ResponseQueryAvailableAbilities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseQueryAvailableAbilities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseQueryAvailableAbilities message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseQueryAvailableAbilities.verify|verify} messages.
         * @param message ResponseQueryAvailableAbilities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseQueryAvailableAbilities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseQueryAvailableAbilities message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseQueryAvailableAbilities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseQueryAvailableAbilities;

        /**
         * Decodes a ResponseQueryAvailableAbilities message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseQueryAvailableAbilities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseQueryAvailableAbilities;

        /**
         * Verifies a ResponseQueryAvailableAbilities message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseQueryAvailableAbilities message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseQueryAvailableAbilities
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseQueryAvailableAbilities;

        /**
         * Creates a plain object from a ResponseQueryAvailableAbilities message. Also converts values to other types if specified.
         * @param message ResponseQueryAvailableAbilities
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseQueryAvailableAbilities, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseQueryAvailableAbilities to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestQueryBuildingPlacement. */
    interface IRequestQueryBuildingPlacement {

        /** RequestQueryBuildingPlacement abilityId */
        abilityId?: number;

        /** RequestQueryBuildingPlacement targetPos */
        targetPos?: SC2APIProtocol.IPoint2D;

        /** RequestQueryBuildingPlacement placingUnitTag */
        placingUnitTag?: (number|Long);
    }

    /** Represents a RequestQueryBuildingPlacement. */
    class RequestQueryBuildingPlacement {

        /**
         * Constructs a new RequestQueryBuildingPlacement.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestQueryBuildingPlacement);

        /** RequestQueryBuildingPlacement abilityId. */
        public abilityId: number;

        /** RequestQueryBuildingPlacement targetPos. */
        public targetPos?: (SC2APIProtocol.IPoint2D|null);

        /** RequestQueryBuildingPlacement placingUnitTag. */
        public placingUnitTag: (number|Long);

        /**
         * Creates a new RequestQueryBuildingPlacement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestQueryBuildingPlacement instance
         */
        public static create(properties?: SC2APIProtocol.IRequestQueryBuildingPlacement): SC2APIProtocol.RequestQueryBuildingPlacement;

        /**
         * Encodes the specified RequestQueryBuildingPlacement message. Does not implicitly {@link SC2APIProtocol.RequestQueryBuildingPlacement.verify|verify} messages.
         * @param message RequestQueryBuildingPlacement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestQueryBuildingPlacement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestQueryBuildingPlacement message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestQueryBuildingPlacement.verify|verify} messages.
         * @param message RequestQueryBuildingPlacement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestQueryBuildingPlacement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestQueryBuildingPlacement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestQueryBuildingPlacement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestQueryBuildingPlacement;

        /**
         * Decodes a RequestQueryBuildingPlacement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestQueryBuildingPlacement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestQueryBuildingPlacement;

        /**
         * Verifies a RequestQueryBuildingPlacement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestQueryBuildingPlacement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestQueryBuildingPlacement
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestQueryBuildingPlacement;

        /**
         * Creates a plain object from a RequestQueryBuildingPlacement message. Also converts values to other types if specified.
         * @param message RequestQueryBuildingPlacement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestQueryBuildingPlacement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestQueryBuildingPlacement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseQueryBuildingPlacement. */
    interface IResponseQueryBuildingPlacement {

        /** ResponseQueryBuildingPlacement result */
        result?: SC2APIProtocol.ActionResult;
    }

    /** Represents a ResponseQueryBuildingPlacement. */
    class ResponseQueryBuildingPlacement {

        /**
         * Constructs a new ResponseQueryBuildingPlacement.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseQueryBuildingPlacement);

        /** ResponseQueryBuildingPlacement result. */
        public result: SC2APIProtocol.ActionResult;

        /**
         * Creates a new ResponseQueryBuildingPlacement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseQueryBuildingPlacement instance
         */
        public static create(properties?: SC2APIProtocol.IResponseQueryBuildingPlacement): SC2APIProtocol.ResponseQueryBuildingPlacement;

        /**
         * Encodes the specified ResponseQueryBuildingPlacement message. Does not implicitly {@link SC2APIProtocol.ResponseQueryBuildingPlacement.verify|verify} messages.
         * @param message ResponseQueryBuildingPlacement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseQueryBuildingPlacement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseQueryBuildingPlacement message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseQueryBuildingPlacement.verify|verify} messages.
         * @param message ResponseQueryBuildingPlacement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseQueryBuildingPlacement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseQueryBuildingPlacement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseQueryBuildingPlacement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseQueryBuildingPlacement;

        /**
         * Decodes a ResponseQueryBuildingPlacement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseQueryBuildingPlacement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseQueryBuildingPlacement;

        /**
         * Verifies a ResponseQueryBuildingPlacement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseQueryBuildingPlacement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseQueryBuildingPlacement
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseQueryBuildingPlacement;

        /**
         * Creates a plain object from a ResponseQueryBuildingPlacement message. Also converts values to other types if specified.
         * @param message ResponseQueryBuildingPlacement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseQueryBuildingPlacement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseQueryBuildingPlacement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartRaw. */
    interface IStartRaw {

        /** StartRaw mapSize */
        mapSize?: SC2APIProtocol.ISize2DI;

        /** StartRaw pathingGrid */
        pathingGrid?: SC2APIProtocol.IImageData;

        /** StartRaw terrainHeight */
        terrainHeight?: SC2APIProtocol.IImageData;

        /** StartRaw placementGrid */
        placementGrid?: SC2APIProtocol.IImageData;

        /** StartRaw playableArea */
        playableArea?: SC2APIProtocol.IRectangleI;

        /** StartRaw startLocations */
        startLocations?: SC2APIProtocol.IPoint2D[];
    }

    /** Represents a StartRaw. */
    class StartRaw {

        /**
         * Constructs a new StartRaw.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IStartRaw);

        /** StartRaw mapSize. */
        public mapSize?: (SC2APIProtocol.ISize2DI|null);

        /** StartRaw pathingGrid. */
        public pathingGrid?: (SC2APIProtocol.IImageData|null);

        /** StartRaw terrainHeight. */
        public terrainHeight?: (SC2APIProtocol.IImageData|null);

        /** StartRaw placementGrid. */
        public placementGrid?: (SC2APIProtocol.IImageData|null);

        /** StartRaw playableArea. */
        public playableArea?: (SC2APIProtocol.IRectangleI|null);

        /** StartRaw startLocations. */
        public startLocations: SC2APIProtocol.IPoint2D[];

        /**
         * Creates a new StartRaw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartRaw instance
         */
        public static create(properties?: SC2APIProtocol.IStartRaw): SC2APIProtocol.StartRaw;

        /**
         * Encodes the specified StartRaw message. Does not implicitly {@link SC2APIProtocol.StartRaw.verify|verify} messages.
         * @param message StartRaw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IStartRaw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartRaw message, length delimited. Does not implicitly {@link SC2APIProtocol.StartRaw.verify|verify} messages.
         * @param message StartRaw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IStartRaw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartRaw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartRaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.StartRaw;

        /**
         * Decodes a StartRaw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartRaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.StartRaw;

        /**
         * Verifies a StartRaw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartRaw message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartRaw
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.StartRaw;

        /**
         * Creates a plain object from a StartRaw message. Also converts values to other types if specified.
         * @param message StartRaw
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.StartRaw, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartRaw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ObservationRaw. */
    interface IObservationRaw {

        /** ObservationRaw player */
        player?: SC2APIProtocol.IPlayerRaw;

        /** ObservationRaw units */
        units?: SC2APIProtocol.IUnit[];

        /** ObservationRaw mapState */
        mapState?: SC2APIProtocol.IMapState;

        /** ObservationRaw event */
        event?: SC2APIProtocol.IEvent;
    }

    /** Represents an ObservationRaw. */
    class ObservationRaw {

        /**
         * Constructs a new ObservationRaw.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IObservationRaw);

        /** ObservationRaw player. */
        public player?: (SC2APIProtocol.IPlayerRaw|null);

        /** ObservationRaw units. */
        public units: SC2APIProtocol.IUnit[];

        /** ObservationRaw mapState. */
        public mapState?: (SC2APIProtocol.IMapState|null);

        /** ObservationRaw event. */
        public event?: (SC2APIProtocol.IEvent|null);

        /**
         * Creates a new ObservationRaw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObservationRaw instance
         */
        public static create(properties?: SC2APIProtocol.IObservationRaw): SC2APIProtocol.ObservationRaw;

        /**
         * Encodes the specified ObservationRaw message. Does not implicitly {@link SC2APIProtocol.ObservationRaw.verify|verify} messages.
         * @param message ObservationRaw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IObservationRaw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObservationRaw message, length delimited. Does not implicitly {@link SC2APIProtocol.ObservationRaw.verify|verify} messages.
         * @param message ObservationRaw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IObservationRaw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObservationRaw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObservationRaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ObservationRaw;

        /**
         * Decodes an ObservationRaw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObservationRaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ObservationRaw;

        /**
         * Verifies an ObservationRaw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObservationRaw message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObservationRaw
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ObservationRaw;

        /**
         * Creates a plain object from an ObservationRaw message. Also converts values to other types if specified.
         * @param message ObservationRaw
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ObservationRaw, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObservationRaw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PowerSource. */
    interface IPowerSource {

        /** PowerSource pos */
        pos?: SC2APIProtocol.IPoint;

        /** PowerSource radius */
        radius?: number;

        /** PowerSource tag */
        tag?: (number|Long);
    }

    /** Represents a PowerSource. */
    class PowerSource {

        /**
         * Constructs a new PowerSource.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IPowerSource);

        /** PowerSource pos. */
        public pos?: (SC2APIProtocol.IPoint|null);

        /** PowerSource radius. */
        public radius: number;

        /** PowerSource tag. */
        public tag: (number|Long);

        /**
         * Creates a new PowerSource instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PowerSource instance
         */
        public static create(properties?: SC2APIProtocol.IPowerSource): SC2APIProtocol.PowerSource;

        /**
         * Encodes the specified PowerSource message. Does not implicitly {@link SC2APIProtocol.PowerSource.verify|verify} messages.
         * @param message PowerSource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IPowerSource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PowerSource message, length delimited. Does not implicitly {@link SC2APIProtocol.PowerSource.verify|verify} messages.
         * @param message PowerSource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IPowerSource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PowerSource message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PowerSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.PowerSource;

        /**
         * Decodes a PowerSource message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PowerSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.PowerSource;

        /**
         * Verifies a PowerSource message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PowerSource message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PowerSource
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.PowerSource;

        /**
         * Creates a plain object from a PowerSource message. Also converts values to other types if specified.
         * @param message PowerSource
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.PowerSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PowerSource to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerRaw. */
    interface IPlayerRaw {

        /** PlayerRaw powerSources */
        powerSources?: SC2APIProtocol.IPowerSource[];

        /** PlayerRaw camera */
        camera?: SC2APIProtocol.IPoint;

        /** PlayerRaw upgradeIds */
        upgradeIds?: number[];
    }

    /** Represents a PlayerRaw. */
    class PlayerRaw {

        /**
         * Constructs a new PlayerRaw.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IPlayerRaw);

        /** PlayerRaw powerSources. */
        public powerSources: SC2APIProtocol.IPowerSource[];

        /** PlayerRaw camera. */
        public camera?: (SC2APIProtocol.IPoint|null);

        /** PlayerRaw upgradeIds. */
        public upgradeIds: number[];

        /**
         * Creates a new PlayerRaw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerRaw instance
         */
        public static create(properties?: SC2APIProtocol.IPlayerRaw): SC2APIProtocol.PlayerRaw;

        /**
         * Encodes the specified PlayerRaw message. Does not implicitly {@link SC2APIProtocol.PlayerRaw.verify|verify} messages.
         * @param message PlayerRaw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IPlayerRaw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerRaw message, length delimited. Does not implicitly {@link SC2APIProtocol.PlayerRaw.verify|verify} messages.
         * @param message PlayerRaw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IPlayerRaw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerRaw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerRaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.PlayerRaw;

        /**
         * Decodes a PlayerRaw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerRaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.PlayerRaw;

        /**
         * Verifies a PlayerRaw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerRaw message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerRaw
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.PlayerRaw;

        /**
         * Creates a plain object from a PlayerRaw message. Also converts values to other types if specified.
         * @param message PlayerRaw
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.PlayerRaw, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerRaw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnitOrder. */
    interface IUnitOrder {

        /** UnitOrder abilityId */
        abilityId?: number;

        /** UnitOrder targetWorldSpacePos */
        targetWorldSpacePos?: SC2APIProtocol.IPoint;

        /** UnitOrder targetUnitTag */
        targetUnitTag?: (number|Long);

        /** UnitOrder progress */
        progress?: number;
    }

    /** Represents an UnitOrder. */
    class UnitOrder {

        /**
         * Constructs a new UnitOrder.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IUnitOrder);

        /** UnitOrder abilityId. */
        public abilityId: number;

        /** UnitOrder targetWorldSpacePos. */
        public targetWorldSpacePos?: (SC2APIProtocol.IPoint|null);

        /** UnitOrder targetUnitTag. */
        public targetUnitTag: (number|Long);

        /** UnitOrder progress. */
        public progress: number;

        /** UnitOrder target. */
        public target?: string;

        /**
         * Creates a new UnitOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnitOrder instance
         */
        public static create(properties?: SC2APIProtocol.IUnitOrder): SC2APIProtocol.UnitOrder;

        /**
         * Encodes the specified UnitOrder message. Does not implicitly {@link SC2APIProtocol.UnitOrder.verify|verify} messages.
         * @param message UnitOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IUnitOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnitOrder message, length delimited. Does not implicitly {@link SC2APIProtocol.UnitOrder.verify|verify} messages.
         * @param message UnitOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IUnitOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnitOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnitOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.UnitOrder;

        /**
         * Decodes an UnitOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnitOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.UnitOrder;

        /**
         * Verifies an UnitOrder message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnitOrder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnitOrder
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.UnitOrder;

        /**
         * Creates a plain object from an UnitOrder message. Also converts values to other types if specified.
         * @param message UnitOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.UnitOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnitOrder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** DisplayType enum. */
    enum DisplayType {
        Visible = 1,
        Snapshot = 2,
        Hidden = 3
    }

    /** Alliance enum. */
    enum Alliance {
        Self = 1,
        Ally = 2,
        Neutral = 3,
        Enemy = 4
    }

    /** CloakState enum. */
    enum CloakState {
        Cloaked = 1,
        CloakedDetected = 2,
        NotCloaked = 3
    }

    /** Properties of a PassengerUnit. */
    interface IPassengerUnit {

        /** PassengerUnit tag */
        tag?: (number|Long);

        /** PassengerUnit health */
        health?: number;

        /** PassengerUnit healthMax */
        healthMax?: number;

        /** PassengerUnit shield */
        shield?: number;

        /** PassengerUnit energy */
        energy?: number;

        /** PassengerUnit unitType */
        unitType?: number;
    }

    /** Represents a PassengerUnit. */
    class PassengerUnit {

        /**
         * Constructs a new PassengerUnit.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IPassengerUnit);

        /** PassengerUnit tag. */
        public tag: (number|Long);

        /** PassengerUnit health. */
        public health: number;

        /** PassengerUnit healthMax. */
        public healthMax: number;

        /** PassengerUnit shield. */
        public shield: number;

        /** PassengerUnit energy. */
        public energy: number;

        /** PassengerUnit unitType. */
        public unitType: number;

        /**
         * Creates a new PassengerUnit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PassengerUnit instance
         */
        public static create(properties?: SC2APIProtocol.IPassengerUnit): SC2APIProtocol.PassengerUnit;

        /**
         * Encodes the specified PassengerUnit message. Does not implicitly {@link SC2APIProtocol.PassengerUnit.verify|verify} messages.
         * @param message PassengerUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IPassengerUnit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PassengerUnit message, length delimited. Does not implicitly {@link SC2APIProtocol.PassengerUnit.verify|verify} messages.
         * @param message PassengerUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IPassengerUnit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PassengerUnit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PassengerUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.PassengerUnit;

        /**
         * Decodes a PassengerUnit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PassengerUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.PassengerUnit;

        /**
         * Verifies a PassengerUnit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PassengerUnit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PassengerUnit
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.PassengerUnit;

        /**
         * Creates a plain object from a PassengerUnit message. Also converts values to other types if specified.
         * @param message PassengerUnit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.PassengerUnit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PassengerUnit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Unit. */
    interface IUnit {

        /** Unit displayType */
        displayType?: SC2APIProtocol.DisplayType;

        /** Unit alliance */
        alliance?: SC2APIProtocol.Alliance;

        /** Unit tag */
        tag?: (number|Long);

        /** Unit unitType */
        unitType?: number;

        /** Unit owner */
        owner?: number;

        /** Unit pos */
        pos?: SC2APIProtocol.IPoint;

        /** Unit facing */
        facing?: number;

        /** Unit radius */
        radius?: number;

        /** Unit buildProgress */
        buildProgress?: number;

        /** Unit cloak */
        cloak?: SC2APIProtocol.CloakState;

        /** Unit detectRange */
        detectRange?: number;

        /** Unit radarRange */
        radarRange?: number;

        /** Unit isSelected */
        isSelected?: boolean;

        /** Unit isOnScreen */
        isOnScreen?: boolean;

        /** Unit isBlip */
        isBlip?: boolean;

        /** Unit isPowered */
        isPowered?: boolean;

        /** Unit health */
        health?: number;

        /** Unit healthMax */
        healthMax?: number;

        /** Unit shield */
        shield?: number;

        /** Unit energy */
        energy?: number;

        /** Unit mineralContents */
        mineralContents?: number;

        /** Unit vespeneContents */
        vespeneContents?: number;

        /** Unit isFlying */
        isFlying?: boolean;

        /** Unit isBurrowed */
        isBurrowed?: boolean;

        /** Unit orders */
        orders?: SC2APIProtocol.IUnitOrder[];

        /** Unit addOnTag */
        addOnTag?: (number|Long);

        /** Unit passengers */
        passengers?: SC2APIProtocol.IPassengerUnit[];

        /** Unit cargoSpaceTaken */
        cargoSpaceTaken?: number;

        /** Unit cargoSpaceMax */
        cargoSpaceMax?: number;

        /** Unit buffIds */
        buffIds?: number[];

        /** Unit assignedHarvesters */
        assignedHarvesters?: number;

        /** Unit idealHarvesters */
        idealHarvesters?: number;

        /** Unit weaponCooldown */
        weaponCooldown?: number;

        /** Unit engagedTargetTag */
        engagedTargetTag?: (number|Long);
    }

    /** Represents an Unit. */
    class Unit {

        /**
         * Constructs a new Unit.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IUnit);

        /** Unit displayType. */
        public displayType: SC2APIProtocol.DisplayType;

        /** Unit alliance. */
        public alliance: SC2APIProtocol.Alliance;

        /** Unit tag. */
        public tag: (number|Long);

        /** Unit unitType. */
        public unitType: number;

        /** Unit owner. */
        public owner: number;

        /** Unit pos. */
        public pos?: (SC2APIProtocol.IPoint|null);

        /** Unit facing. */
        public facing: number;

        /** Unit radius. */
        public radius: number;

        /** Unit buildProgress. */
        public buildProgress: number;

        /** Unit cloak. */
        public cloak: SC2APIProtocol.CloakState;

        /** Unit detectRange. */
        public detectRange: number;

        /** Unit radarRange. */
        public radarRange: number;

        /** Unit isSelected. */
        public isSelected: boolean;

        /** Unit isOnScreen. */
        public isOnScreen: boolean;

        /** Unit isBlip. */
        public isBlip: boolean;

        /** Unit isPowered. */
        public isPowered: boolean;

        /** Unit health. */
        public health: number;

        /** Unit healthMax. */
        public healthMax: number;

        /** Unit shield. */
        public shield: number;

        /** Unit energy. */
        public energy: number;

        /** Unit mineralContents. */
        public mineralContents: number;

        /** Unit vespeneContents. */
        public vespeneContents: number;

        /** Unit isFlying. */
        public isFlying: boolean;

        /** Unit isBurrowed. */
        public isBurrowed: boolean;

        /** Unit orders. */
        public orders: SC2APIProtocol.IUnitOrder[];

        /** Unit addOnTag. */
        public addOnTag: (number|Long);

        /** Unit passengers. */
        public passengers: SC2APIProtocol.IPassengerUnit[];

        /** Unit cargoSpaceTaken. */
        public cargoSpaceTaken: number;

        /** Unit cargoSpaceMax. */
        public cargoSpaceMax: number;

        /** Unit buffIds. */
        public buffIds: number[];

        /** Unit assignedHarvesters. */
        public assignedHarvesters: number;

        /** Unit idealHarvesters. */
        public idealHarvesters: number;

        /** Unit weaponCooldown. */
        public weaponCooldown: number;

        /** Unit engagedTargetTag. */
        public engagedTargetTag: (number|Long);

        /**
         * Creates a new Unit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Unit instance
         */
        public static create(properties?: SC2APIProtocol.IUnit): SC2APIProtocol.Unit;

        /**
         * Encodes the specified Unit message. Does not implicitly {@link SC2APIProtocol.Unit.verify|verify} messages.
         * @param message Unit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IUnit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Unit message, length delimited. Does not implicitly {@link SC2APIProtocol.Unit.verify|verify} messages.
         * @param message Unit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IUnit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Unit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Unit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Unit;

        /**
         * Decodes an Unit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Unit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Unit;

        /**
         * Verifies an Unit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Unit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Unit
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Unit;

        /**
         * Creates a plain object from an Unit message. Also converts values to other types if specified.
         * @param message Unit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Unit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Unit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MapState. */
    interface IMapState {

        /** MapState visibility */
        visibility?: SC2APIProtocol.IImageData;

        /** MapState creep */
        creep?: SC2APIProtocol.IImageData;
    }

    /** Represents a MapState. */
    class MapState {

        /**
         * Constructs a new MapState.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IMapState);

        /** MapState visibility. */
        public visibility?: (SC2APIProtocol.IImageData|null);

        /** MapState creep. */
        public creep?: (SC2APIProtocol.IImageData|null);

        /**
         * Creates a new MapState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MapState instance
         */
        public static create(properties?: SC2APIProtocol.IMapState): SC2APIProtocol.MapState;

        /**
         * Encodes the specified MapState message. Does not implicitly {@link SC2APIProtocol.MapState.verify|verify} messages.
         * @param message MapState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IMapState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MapState message, length delimited. Does not implicitly {@link SC2APIProtocol.MapState.verify|verify} messages.
         * @param message MapState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IMapState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MapState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MapState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.MapState;

        /**
         * Decodes a MapState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MapState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.MapState;

        /**
         * Verifies a MapState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MapState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MapState
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.MapState;

        /**
         * Creates a plain object from a MapState message. Also converts values to other types if specified.
         * @param message MapState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.MapState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MapState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionRaw. */
    interface IActionRaw {

        /** ActionRaw unitCommand */
        unitCommand?: SC2APIProtocol.IActionRawUnitCommand;

        /** ActionRaw cameraMove */
        cameraMove?: SC2APIProtocol.IActionRawCameraMove;

        /** ActionRaw toggleAutocast */
        toggleAutocast?: SC2APIProtocol.IActionRawToggleAutocast;
    }

    /** Represents an ActionRaw. */
    class ActionRaw {

        /**
         * Constructs a new ActionRaw.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionRaw);

        /** ActionRaw unitCommand. */
        public unitCommand?: (SC2APIProtocol.IActionRawUnitCommand|null);

        /** ActionRaw cameraMove. */
        public cameraMove?: (SC2APIProtocol.IActionRawCameraMove|null);

        /** ActionRaw toggleAutocast. */
        public toggleAutocast?: (SC2APIProtocol.IActionRawToggleAutocast|null);

        /** ActionRaw action. */
        public action?: string;

        /**
         * Creates a new ActionRaw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionRaw instance
         */
        public static create(properties?: SC2APIProtocol.IActionRaw): SC2APIProtocol.ActionRaw;

        /**
         * Encodes the specified ActionRaw message. Does not implicitly {@link SC2APIProtocol.ActionRaw.verify|verify} messages.
         * @param message ActionRaw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionRaw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionRaw message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionRaw.verify|verify} messages.
         * @param message ActionRaw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionRaw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionRaw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionRaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionRaw;

        /**
         * Decodes an ActionRaw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionRaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionRaw;

        /**
         * Verifies an ActionRaw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionRaw message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionRaw
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionRaw;

        /**
         * Creates a plain object from an ActionRaw message. Also converts values to other types if specified.
         * @param message ActionRaw
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionRaw, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionRaw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionRawUnitCommand. */
    interface IActionRawUnitCommand {

        /** ActionRawUnitCommand abilityId */
        abilityId?: number;

        /** ActionRawUnitCommand targetWorldSpacePos */
        targetWorldSpacePos?: SC2APIProtocol.IPoint2D;

        /** ActionRawUnitCommand targetUnitTag */
        targetUnitTag?: (number|Long);

        /** ActionRawUnitCommand unitTags */
        unitTags?: (number|Long)[];

        /** ActionRawUnitCommand queueCommand */
        queueCommand?: boolean;
    }

    /** Represents an ActionRawUnitCommand. */
    class ActionRawUnitCommand {

        /**
         * Constructs a new ActionRawUnitCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionRawUnitCommand);

        /** ActionRawUnitCommand abilityId. */
        public abilityId: number;

        /** ActionRawUnitCommand targetWorldSpacePos. */
        public targetWorldSpacePos?: (SC2APIProtocol.IPoint2D|null);

        /** ActionRawUnitCommand targetUnitTag. */
        public targetUnitTag: (number|Long);

        /** ActionRawUnitCommand unitTags. */
        public unitTags: (number|Long)[];

        /** ActionRawUnitCommand queueCommand. */
        public queueCommand: boolean;

        /** ActionRawUnitCommand target. */
        public target?: string;

        /**
         * Creates a new ActionRawUnitCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionRawUnitCommand instance
         */
        public static create(properties?: SC2APIProtocol.IActionRawUnitCommand): SC2APIProtocol.ActionRawUnitCommand;

        /**
         * Encodes the specified ActionRawUnitCommand message. Does not implicitly {@link SC2APIProtocol.ActionRawUnitCommand.verify|verify} messages.
         * @param message ActionRawUnitCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionRawUnitCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionRawUnitCommand message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionRawUnitCommand.verify|verify} messages.
         * @param message ActionRawUnitCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionRawUnitCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionRawUnitCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionRawUnitCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionRawUnitCommand;

        /**
         * Decodes an ActionRawUnitCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionRawUnitCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionRawUnitCommand;

        /**
         * Verifies an ActionRawUnitCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionRawUnitCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionRawUnitCommand
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionRawUnitCommand;

        /**
         * Creates a plain object from an ActionRawUnitCommand message. Also converts values to other types if specified.
         * @param message ActionRawUnitCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionRawUnitCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionRawUnitCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionRawCameraMove. */
    interface IActionRawCameraMove {

        /** ActionRawCameraMove centerWorldSpace */
        centerWorldSpace?: SC2APIProtocol.IPoint;
    }

    /** Represents an ActionRawCameraMove. */
    class ActionRawCameraMove {

        /**
         * Constructs a new ActionRawCameraMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionRawCameraMove);

        /** ActionRawCameraMove centerWorldSpace. */
        public centerWorldSpace?: (SC2APIProtocol.IPoint|null);

        /**
         * Creates a new ActionRawCameraMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionRawCameraMove instance
         */
        public static create(properties?: SC2APIProtocol.IActionRawCameraMove): SC2APIProtocol.ActionRawCameraMove;

        /**
         * Encodes the specified ActionRawCameraMove message. Does not implicitly {@link SC2APIProtocol.ActionRawCameraMove.verify|verify} messages.
         * @param message ActionRawCameraMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionRawCameraMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionRawCameraMove message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionRawCameraMove.verify|verify} messages.
         * @param message ActionRawCameraMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionRawCameraMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionRawCameraMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionRawCameraMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionRawCameraMove;

        /**
         * Decodes an ActionRawCameraMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionRawCameraMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionRawCameraMove;

        /**
         * Verifies an ActionRawCameraMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionRawCameraMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionRawCameraMove
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionRawCameraMove;

        /**
         * Creates a plain object from an ActionRawCameraMove message. Also converts values to other types if specified.
         * @param message ActionRawCameraMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionRawCameraMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionRawCameraMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionRawToggleAutocast. */
    interface IActionRawToggleAutocast {

        /** ActionRawToggleAutocast abilityId */
        abilityId?: number;

        /** ActionRawToggleAutocast unitTags */
        unitTags?: (number|Long)[];
    }

    /** Represents an ActionRawToggleAutocast. */
    class ActionRawToggleAutocast {

        /**
         * Constructs a new ActionRawToggleAutocast.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionRawToggleAutocast);

        /** ActionRawToggleAutocast abilityId. */
        public abilityId: number;

        /** ActionRawToggleAutocast unitTags. */
        public unitTags: (number|Long)[];

        /**
         * Creates a new ActionRawToggleAutocast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionRawToggleAutocast instance
         */
        public static create(properties?: SC2APIProtocol.IActionRawToggleAutocast): SC2APIProtocol.ActionRawToggleAutocast;

        /**
         * Encodes the specified ActionRawToggleAutocast message. Does not implicitly {@link SC2APIProtocol.ActionRawToggleAutocast.verify|verify} messages.
         * @param message ActionRawToggleAutocast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionRawToggleAutocast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionRawToggleAutocast message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionRawToggleAutocast.verify|verify} messages.
         * @param message ActionRawToggleAutocast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionRawToggleAutocast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionRawToggleAutocast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionRawToggleAutocast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionRawToggleAutocast;

        /**
         * Decodes an ActionRawToggleAutocast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionRawToggleAutocast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionRawToggleAutocast;

        /**
         * Verifies an ActionRawToggleAutocast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionRawToggleAutocast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionRawToggleAutocast
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionRawToggleAutocast;

        /**
         * Creates a plain object from an ActionRawToggleAutocast message. Also converts values to other types if specified.
         * @param message ActionRawToggleAutocast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionRawToggleAutocast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionRawToggleAutocast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Event. */
    interface IEvent {

        /** Event deadUnits */
        deadUnits?: (number|Long)[];
    }

    /** Represents an Event. */
    class Event {

        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IEvent);

        /** Event deadUnits. */
        public deadUnits: (number|Long)[];

        /**
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        public static create(properties?: SC2APIProtocol.IEvent): SC2APIProtocol.Event;

        /**
         * Encodes the specified Event message. Does not implicitly {@link SC2APIProtocol.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link SC2APIProtocol.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Event;

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Event;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request createGame */
        createGame?: SC2APIProtocol.IRequestCreateGame;

        /** Request joinGame */
        joinGame?: SC2APIProtocol.IRequestJoinGame;

        /** Request restartGame */
        restartGame?: SC2APIProtocol.IRequestRestartGame;

        /** Request startReplay */
        startReplay?: SC2APIProtocol.IRequestStartReplay;

        /** Request leaveGame */
        leaveGame?: SC2APIProtocol.IRequestLeaveGame;

        /** Request quickSave */
        quickSave?: SC2APIProtocol.IRequestQuickSave;

        /** Request quickLoad */
        quickLoad?: SC2APIProtocol.IRequestQuickLoad;

        /** Request quit */
        quit?: SC2APIProtocol.IRequestQuit;

        /** Request gameInfo */
        gameInfo?: SC2APIProtocol.IRequestGameInfo;

        /** Request observation */
        observation?: SC2APIProtocol.IRequestObservation;

        /** Request action */
        action?: SC2APIProtocol.IRequestAction;

        /** Request step */
        step?: SC2APIProtocol.IRequestStep;

        /** Request data */
        data?: SC2APIProtocol.IRequestData;

        /** Request query */
        query?: SC2APIProtocol.IRequestQuery;

        /** Request saveReplay */
        saveReplay?: SC2APIProtocol.IRequestSaveReplay;

        /** Request replayInfo */
        replayInfo?: SC2APIProtocol.IRequestReplayInfo;

        /** Request availableMaps */
        availableMaps?: SC2APIProtocol.IRequestAvailableMaps;

        /** Request saveMap */
        saveMap?: SC2APIProtocol.IRequestSaveMap;

        /** Request ping */
        ping?: SC2APIProtocol.IRequestPing;

        /** Request debug */
        debug?: SC2APIProtocol.IRequestDebug;
    }

    /** Represents a Request. */
    class Request {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequest);

        /** Request createGame. */
        public createGame?: (SC2APIProtocol.IRequestCreateGame|null);

        /** Request joinGame. */
        public joinGame?: (SC2APIProtocol.IRequestJoinGame|null);

        /** Request restartGame. */
        public restartGame?: (SC2APIProtocol.IRequestRestartGame|null);

        /** Request startReplay. */
        public startReplay?: (SC2APIProtocol.IRequestStartReplay|null);

        /** Request leaveGame. */
        public leaveGame?: (SC2APIProtocol.IRequestLeaveGame|null);

        /** Request quickSave. */
        public quickSave?: (SC2APIProtocol.IRequestQuickSave|null);

        /** Request quickLoad. */
        public quickLoad?: (SC2APIProtocol.IRequestQuickLoad|null);

        /** Request quit. */
        public quit?: (SC2APIProtocol.IRequestQuit|null);

        /** Request gameInfo. */
        public gameInfo?: (SC2APIProtocol.IRequestGameInfo|null);

        /** Request observation. */
        public observation?: (SC2APIProtocol.IRequestObservation|null);

        /** Request action. */
        public action?: (SC2APIProtocol.IRequestAction|null);

        /** Request step. */
        public step?: (SC2APIProtocol.IRequestStep|null);

        /** Request data. */
        public data?: (SC2APIProtocol.IRequestData|null);

        /** Request query. */
        public query?: (SC2APIProtocol.IRequestQuery|null);

        /** Request saveReplay. */
        public saveReplay?: (SC2APIProtocol.IRequestSaveReplay|null);

        /** Request replayInfo. */
        public replayInfo?: (SC2APIProtocol.IRequestReplayInfo|null);

        /** Request availableMaps. */
        public availableMaps?: (SC2APIProtocol.IRequestAvailableMaps|null);

        /** Request saveMap. */
        public saveMap?: (SC2APIProtocol.IRequestSaveMap|null);

        /** Request ping. */
        public ping?: (SC2APIProtocol.IRequestPing|null);

        /** Request debug. */
        public debug?: (SC2APIProtocol.IRequestDebug|null);

        /** Request request. */
        public request?: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: SC2APIProtocol.IRequest): SC2APIProtocol.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link SC2APIProtocol.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link SC2APIProtocol.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response createGame */
        createGame?: SC2APIProtocol.IResponseCreateGame;

        /** Response joinGame */
        joinGame?: SC2APIProtocol.IResponseJoinGame;

        /** Response restartGame */
        restartGame?: SC2APIProtocol.IResponseRestartGame;

        /** Response startReplay */
        startReplay?: SC2APIProtocol.IResponseStartReplay;

        /** Response leaveGame */
        leaveGame?: SC2APIProtocol.IResponseLeaveGame;

        /** Response quickSave */
        quickSave?: SC2APIProtocol.IResponseQuickSave;

        /** Response quickLoad */
        quickLoad?: SC2APIProtocol.IResponseQuickLoad;

        /** Response quit */
        quit?: SC2APIProtocol.IResponseQuit;

        /** Response gameInfo */
        gameInfo?: SC2APIProtocol.IResponseGameInfo;

        /** Response observation */
        observation?: SC2APIProtocol.IResponseObservation;

        /** Response action */
        action?: SC2APIProtocol.IResponseAction;

        /** Response step */
        step?: SC2APIProtocol.IResponseStep;

        /** Response data */
        data?: SC2APIProtocol.IResponseData;

        /** Response query */
        query?: SC2APIProtocol.IResponseQuery;

        /** Response saveReplay */
        saveReplay?: SC2APIProtocol.IResponseSaveReplay;

        /** Response replayInfo */
        replayInfo?: SC2APIProtocol.IResponseReplayInfo;

        /** Response availableMaps */
        availableMaps?: SC2APIProtocol.IResponseAvailableMaps;

        /** Response saveMap */
        saveMap?: SC2APIProtocol.IResponseSaveMap;

        /** Response ping */
        ping?: SC2APIProtocol.IResponsePing;

        /** Response debug */
        debug?: SC2APIProtocol.IResponseDebug;

        /** Response error */
        error?: string[];

        /** Response status */
        status?: SC2APIProtocol.Status;
    }

    /** Represents a Response. */
    class Response {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponse);

        /** Response createGame. */
        public createGame?: (SC2APIProtocol.IResponseCreateGame|null);

        /** Response joinGame. */
        public joinGame?: (SC2APIProtocol.IResponseJoinGame|null);

        /** Response restartGame. */
        public restartGame?: (SC2APIProtocol.IResponseRestartGame|null);

        /** Response startReplay. */
        public startReplay?: (SC2APIProtocol.IResponseStartReplay|null);

        /** Response leaveGame. */
        public leaveGame?: (SC2APIProtocol.IResponseLeaveGame|null);

        /** Response quickSave. */
        public quickSave?: (SC2APIProtocol.IResponseQuickSave|null);

        /** Response quickLoad. */
        public quickLoad?: (SC2APIProtocol.IResponseQuickLoad|null);

        /** Response quit. */
        public quit?: (SC2APIProtocol.IResponseQuit|null);

        /** Response gameInfo. */
        public gameInfo?: (SC2APIProtocol.IResponseGameInfo|null);

        /** Response observation. */
        public observation?: (SC2APIProtocol.IResponseObservation|null);

        /** Response action. */
        public action?: (SC2APIProtocol.IResponseAction|null);

        /** Response step. */
        public step?: (SC2APIProtocol.IResponseStep|null);

        /** Response data. */
        public data?: (SC2APIProtocol.IResponseData|null);

        /** Response query. */
        public query?: (SC2APIProtocol.IResponseQuery|null);

        /** Response saveReplay. */
        public saveReplay?: (SC2APIProtocol.IResponseSaveReplay|null);

        /** Response replayInfo. */
        public replayInfo?: (SC2APIProtocol.IResponseReplayInfo|null);

        /** Response availableMaps. */
        public availableMaps?: (SC2APIProtocol.IResponseAvailableMaps|null);

        /** Response saveMap. */
        public saveMap?: (SC2APIProtocol.IResponseSaveMap|null);

        /** Response ping. */
        public ping?: (SC2APIProtocol.IResponsePing|null);

        /** Response debug. */
        public debug?: (SC2APIProtocol.IResponseDebug|null);

        /** Response error. */
        public error: string[];

        /** Response status. */
        public status: SC2APIProtocol.Status;

        /** Response response. */
        public response?: string;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: SC2APIProtocol.IResponse): SC2APIProtocol.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link SC2APIProtocol.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link SC2APIProtocol.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Status enum. */
    enum Status {
        launched = 1,
        init_game = 2,
        in_game = 3,
        in_replay = 4,
        ended = 5,
        quit = 6,
        unknown = 99
    }

    /** Properties of a RequestCreateGame. */
    interface IRequestCreateGame {

        /** RequestCreateGame localMap */
        localMap?: SC2APIProtocol.ILocalMap;

        /** RequestCreateGame battlenetMapName */
        battlenetMapName?: string;

        /** RequestCreateGame playerSetup */
        playerSetup?: SC2APIProtocol.IPlayerSetup[];

        /** RequestCreateGame disableFog */
        disableFog?: boolean;

        /** RequestCreateGame randomSeed */
        randomSeed?: number;

        /** RequestCreateGame realtime */
        realtime?: boolean;
    }

    /** Represents a RequestCreateGame. */
    class RequestCreateGame {

        /**
         * Constructs a new RequestCreateGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestCreateGame);

        /** RequestCreateGame localMap. */
        public localMap?: (SC2APIProtocol.ILocalMap|null);

        /** RequestCreateGame battlenetMapName. */
        public battlenetMapName: string;

        /** RequestCreateGame playerSetup. */
        public playerSetup: SC2APIProtocol.IPlayerSetup[];

        /** RequestCreateGame disableFog. */
        public disableFog: boolean;

        /** RequestCreateGame randomSeed. */
        public randomSeed: number;

        /** RequestCreateGame realtime. */
        public realtime: boolean;

        /** RequestCreateGame Map. */
        public Map?: string;

        /**
         * Creates a new RequestCreateGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCreateGame instance
         */
        public static create(properties?: SC2APIProtocol.IRequestCreateGame): SC2APIProtocol.RequestCreateGame;

        /**
         * Encodes the specified RequestCreateGame message. Does not implicitly {@link SC2APIProtocol.RequestCreateGame.verify|verify} messages.
         * @param message RequestCreateGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestCreateGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCreateGame message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestCreateGame.verify|verify} messages.
         * @param message RequestCreateGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestCreateGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCreateGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCreateGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestCreateGame;

        /**
         * Decodes a RequestCreateGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCreateGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestCreateGame;

        /**
         * Verifies a RequestCreateGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCreateGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCreateGame
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestCreateGame;

        /**
         * Creates a plain object from a RequestCreateGame message. Also converts values to other types if specified.
         * @param message RequestCreateGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestCreateGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCreateGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LocalMap. */
    interface ILocalMap {

        /** LocalMap mapPath */
        mapPath?: string;

        /** LocalMap mapData */
        mapData?: Uint8Array;
    }

    /** Represents a LocalMap. */
    class LocalMap {

        /**
         * Constructs a new LocalMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.ILocalMap);

        /** LocalMap mapPath. */
        public mapPath: string;

        /** LocalMap mapData. */
        public mapData: Uint8Array;

        /**
         * Creates a new LocalMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LocalMap instance
         */
        public static create(properties?: SC2APIProtocol.ILocalMap): SC2APIProtocol.LocalMap;

        /**
         * Encodes the specified LocalMap message. Does not implicitly {@link SC2APIProtocol.LocalMap.verify|verify} messages.
         * @param message LocalMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.ILocalMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LocalMap message, length delimited. Does not implicitly {@link SC2APIProtocol.LocalMap.verify|verify} messages.
         * @param message LocalMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.ILocalMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LocalMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LocalMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.LocalMap;

        /**
         * Decodes a LocalMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LocalMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.LocalMap;

        /**
         * Verifies a LocalMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LocalMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LocalMap
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.LocalMap;

        /**
         * Creates a plain object from a LocalMap message. Also converts values to other types if specified.
         * @param message LocalMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.LocalMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LocalMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCreateGame. */
    interface IResponseCreateGame {

        /** ResponseCreateGame error */
        error?: SC2APIProtocol.ResponseCreateGame.Error;

        /** ResponseCreateGame errorDetails */
        errorDetails?: string;
    }

    /** Represents a ResponseCreateGame. */
    class ResponseCreateGame {

        /**
         * Constructs a new ResponseCreateGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseCreateGame);

        /** ResponseCreateGame error. */
        public error: SC2APIProtocol.ResponseCreateGame.Error;

        /** ResponseCreateGame errorDetails. */
        public errorDetails: string;

        /**
         * Creates a new ResponseCreateGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCreateGame instance
         */
        public static create(properties?: SC2APIProtocol.IResponseCreateGame): SC2APIProtocol.ResponseCreateGame;

        /**
         * Encodes the specified ResponseCreateGame message. Does not implicitly {@link SC2APIProtocol.ResponseCreateGame.verify|verify} messages.
         * @param message ResponseCreateGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseCreateGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCreateGame message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseCreateGame.verify|verify} messages.
         * @param message ResponseCreateGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseCreateGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCreateGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCreateGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseCreateGame;

        /**
         * Decodes a ResponseCreateGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCreateGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseCreateGame;

        /**
         * Verifies a ResponseCreateGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCreateGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCreateGame
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseCreateGame;

        /**
         * Creates a plain object from a ResponseCreateGame message. Also converts values to other types if specified.
         * @param message ResponseCreateGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseCreateGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCreateGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ResponseCreateGame {

        /** Error enum. */
        enum Error {
            MissingMap = 1,
            InvalidMapPath = 2,
            InvalidMapData = 3,
            InvalidMapName = 4,
            InvalidMapHandle = 5,
            MissingPlayerSetup = 6,
            InvalidPlayerSetup = 7,
            MultiplayerUnsupported = 8
        }
    }

    /** Properties of a RequestJoinGame. */
    interface IRequestJoinGame {

        /** RequestJoinGame race */
        race?: SC2APIProtocol.Race;

        /** RequestJoinGame observedPlayerId */
        observedPlayerId?: number;

        /** RequestJoinGame options */
        options?: SC2APIProtocol.IInterfaceOptions;

        /** RequestJoinGame serverPorts */
        serverPorts?: SC2APIProtocol.IPortSet;

        /** RequestJoinGame clientPorts */
        clientPorts?: SC2APIProtocol.IPortSet[];

        /** RequestJoinGame sharedPort */
        sharedPort?: number;
    }

    /** Represents a RequestJoinGame. */
    class RequestJoinGame {

        /**
         * Constructs a new RequestJoinGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestJoinGame);

        /** RequestJoinGame race. */
        public race: SC2APIProtocol.Race;

        /** RequestJoinGame observedPlayerId. */
        public observedPlayerId: number;

        /** RequestJoinGame options. */
        public options?: (SC2APIProtocol.IInterfaceOptions|null);

        /** RequestJoinGame serverPorts. */
        public serverPorts?: (SC2APIProtocol.IPortSet|null);

        /** RequestJoinGame clientPorts. */
        public clientPorts: SC2APIProtocol.IPortSet[];

        /** RequestJoinGame sharedPort. */
        public sharedPort: number;

        /** RequestJoinGame participation. */
        public participation?: string;

        /**
         * Creates a new RequestJoinGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestJoinGame instance
         */
        public static create(properties?: SC2APIProtocol.IRequestJoinGame): SC2APIProtocol.RequestJoinGame;

        /**
         * Encodes the specified RequestJoinGame message. Does not implicitly {@link SC2APIProtocol.RequestJoinGame.verify|verify} messages.
         * @param message RequestJoinGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestJoinGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestJoinGame message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestJoinGame.verify|verify} messages.
         * @param message RequestJoinGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestJoinGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestJoinGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestJoinGame;

        /**
         * Decodes a RequestJoinGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestJoinGame;

        /**
         * Verifies a RequestJoinGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestJoinGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestJoinGame
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestJoinGame;

        /**
         * Creates a plain object from a RequestJoinGame message. Also converts values to other types if specified.
         * @param message RequestJoinGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestJoinGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestJoinGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PortSet. */
    interface IPortSet {

        /** PortSet gamePort */
        gamePort?: number;

        /** PortSet basePort */
        basePort?: number;
    }

    /** Represents a PortSet. */
    class PortSet {

        /**
         * Constructs a new PortSet.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IPortSet);

        /** PortSet gamePort. */
        public gamePort: number;

        /** PortSet basePort. */
        public basePort: number;

        /**
         * Creates a new PortSet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PortSet instance
         */
        public static create(properties?: SC2APIProtocol.IPortSet): SC2APIProtocol.PortSet;

        /**
         * Encodes the specified PortSet message. Does not implicitly {@link SC2APIProtocol.PortSet.verify|verify} messages.
         * @param message PortSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IPortSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PortSet message, length delimited. Does not implicitly {@link SC2APIProtocol.PortSet.verify|verify} messages.
         * @param message PortSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IPortSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PortSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PortSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.PortSet;

        /**
         * Decodes a PortSet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PortSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.PortSet;

        /**
         * Verifies a PortSet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PortSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PortSet
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.PortSet;

        /**
         * Creates a plain object from a PortSet message. Also converts values to other types if specified.
         * @param message PortSet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.PortSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PortSet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseJoinGame. */
    interface IResponseJoinGame {

        /** ResponseJoinGame playerId */
        playerId?: number;

        /** ResponseJoinGame error */
        error?: SC2APIProtocol.ResponseJoinGame.Error;

        /** ResponseJoinGame errorDetails */
        errorDetails?: string;
    }

    /** Represents a ResponseJoinGame. */
    class ResponseJoinGame {

        /**
         * Constructs a new ResponseJoinGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseJoinGame);

        /** ResponseJoinGame playerId. */
        public playerId: number;

        /** ResponseJoinGame error. */
        public error: SC2APIProtocol.ResponseJoinGame.Error;

        /** ResponseJoinGame errorDetails. */
        public errorDetails: string;

        /**
         * Creates a new ResponseJoinGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseJoinGame instance
         */
        public static create(properties?: SC2APIProtocol.IResponseJoinGame): SC2APIProtocol.ResponseJoinGame;

        /**
         * Encodes the specified ResponseJoinGame message. Does not implicitly {@link SC2APIProtocol.ResponseJoinGame.verify|verify} messages.
         * @param message ResponseJoinGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseJoinGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseJoinGame message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseJoinGame.verify|verify} messages.
         * @param message ResponseJoinGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseJoinGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseJoinGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseJoinGame;

        /**
         * Decodes a ResponseJoinGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseJoinGame;

        /**
         * Verifies a ResponseJoinGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseJoinGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseJoinGame
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseJoinGame;

        /**
         * Creates a plain object from a ResponseJoinGame message. Also converts values to other types if specified.
         * @param message ResponseJoinGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseJoinGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseJoinGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ResponseJoinGame {

        /** Error enum. */
        enum Error {
            MissingParticipation = 1,
            InvalidObservedPlayerId = 2,
            MissingOptions = 3,
            MissingPorts = 4,
            GameFull = 5,
            LaunchError = 6,
            FeatureUnsupported = 7,
            NoSpaceForUser = 8,
            MapDoesNotExist = 9,
            CannotOpenMap = 10,
            ChecksumError = 11,
            NetworkError = 12,
            OtherError = 13
        }
    }

    /** Properties of a RequestRestartGame. */
    interface IRequestRestartGame {
    }

    /** Represents a RequestRestartGame. */
    class RequestRestartGame {

        /**
         * Constructs a new RequestRestartGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestRestartGame);

        /**
         * Creates a new RequestRestartGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestRestartGame instance
         */
        public static create(properties?: SC2APIProtocol.IRequestRestartGame): SC2APIProtocol.RequestRestartGame;

        /**
         * Encodes the specified RequestRestartGame message. Does not implicitly {@link SC2APIProtocol.RequestRestartGame.verify|verify} messages.
         * @param message RequestRestartGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestRestartGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestRestartGame message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestRestartGame.verify|verify} messages.
         * @param message RequestRestartGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestRestartGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestRestartGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestRestartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestRestartGame;

        /**
         * Decodes a RequestRestartGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestRestartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestRestartGame;

        /**
         * Verifies a RequestRestartGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestRestartGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestRestartGame
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestRestartGame;

        /**
         * Creates a plain object from a RequestRestartGame message. Also converts values to other types if specified.
         * @param message RequestRestartGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestRestartGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestRestartGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseRestartGame. */
    interface IResponseRestartGame {

        /** ResponseRestartGame error */
        error?: SC2APIProtocol.ResponseRestartGame.Error;

        /** ResponseRestartGame errorDetails */
        errorDetails?: string;
    }

    /** Represents a ResponseRestartGame. */
    class ResponseRestartGame {

        /**
         * Constructs a new ResponseRestartGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseRestartGame);

        /** ResponseRestartGame error. */
        public error: SC2APIProtocol.ResponseRestartGame.Error;

        /** ResponseRestartGame errorDetails. */
        public errorDetails: string;

        /**
         * Creates a new ResponseRestartGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseRestartGame instance
         */
        public static create(properties?: SC2APIProtocol.IResponseRestartGame): SC2APIProtocol.ResponseRestartGame;

        /**
         * Encodes the specified ResponseRestartGame message. Does not implicitly {@link SC2APIProtocol.ResponseRestartGame.verify|verify} messages.
         * @param message ResponseRestartGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseRestartGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseRestartGame message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseRestartGame.verify|verify} messages.
         * @param message ResponseRestartGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseRestartGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseRestartGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseRestartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseRestartGame;

        /**
         * Decodes a ResponseRestartGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseRestartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseRestartGame;

        /**
         * Verifies a ResponseRestartGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseRestartGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseRestartGame
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseRestartGame;

        /**
         * Creates a plain object from a ResponseRestartGame message. Also converts values to other types if specified.
         * @param message ResponseRestartGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseRestartGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseRestartGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ResponseRestartGame {

        /** Error enum. */
        enum Error {
            LaunchError = 1
        }
    }

    /** Properties of a RequestStartReplay. */
    interface IRequestStartReplay {

        /** RequestStartReplay replayPath */
        replayPath?: string;

        /** RequestStartReplay replayData */
        replayData?: Uint8Array;

        /** RequestStartReplay mapData */
        mapData?: Uint8Array;

        /** RequestStartReplay observedPlayerId */
        observedPlayerId?: number;

        /** RequestStartReplay options */
        options?: SC2APIProtocol.IInterfaceOptions;

        /** RequestStartReplay disableFog */
        disableFog?: boolean;
    }

    /** Represents a RequestStartReplay. */
    class RequestStartReplay {

        /**
         * Constructs a new RequestStartReplay.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestStartReplay);

        /** RequestStartReplay replayPath. */
        public replayPath: string;

        /** RequestStartReplay replayData. */
        public replayData: Uint8Array;

        /** RequestStartReplay mapData. */
        public mapData: Uint8Array;

        /** RequestStartReplay observedPlayerId. */
        public observedPlayerId: number;

        /** RequestStartReplay options. */
        public options?: (SC2APIProtocol.IInterfaceOptions|null);

        /** RequestStartReplay disableFog. */
        public disableFog: boolean;

        /** RequestStartReplay replay. */
        public replay?: string;

        /**
         * Creates a new RequestStartReplay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestStartReplay instance
         */
        public static create(properties?: SC2APIProtocol.IRequestStartReplay): SC2APIProtocol.RequestStartReplay;

        /**
         * Encodes the specified RequestStartReplay message. Does not implicitly {@link SC2APIProtocol.RequestStartReplay.verify|verify} messages.
         * @param message RequestStartReplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestStartReplay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestStartReplay message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestStartReplay.verify|verify} messages.
         * @param message RequestStartReplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestStartReplay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestStartReplay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestStartReplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestStartReplay;

        /**
         * Decodes a RequestStartReplay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestStartReplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestStartReplay;

        /**
         * Verifies a RequestStartReplay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestStartReplay message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestStartReplay
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestStartReplay;

        /**
         * Creates a plain object from a RequestStartReplay message. Also converts values to other types if specified.
         * @param message RequestStartReplay
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestStartReplay, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestStartReplay to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseStartReplay. */
    interface IResponseStartReplay {

        /** ResponseStartReplay error */
        error?: SC2APIProtocol.ResponseStartReplay.Error;

        /** ResponseStartReplay errorDetails */
        errorDetails?: string;
    }

    /** Represents a ResponseStartReplay. */
    class ResponseStartReplay {

        /**
         * Constructs a new ResponseStartReplay.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseStartReplay);

        /** ResponseStartReplay error. */
        public error: SC2APIProtocol.ResponseStartReplay.Error;

        /** ResponseStartReplay errorDetails. */
        public errorDetails: string;

        /**
         * Creates a new ResponseStartReplay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseStartReplay instance
         */
        public static create(properties?: SC2APIProtocol.IResponseStartReplay): SC2APIProtocol.ResponseStartReplay;

        /**
         * Encodes the specified ResponseStartReplay message. Does not implicitly {@link SC2APIProtocol.ResponseStartReplay.verify|verify} messages.
         * @param message ResponseStartReplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseStartReplay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseStartReplay message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseStartReplay.verify|verify} messages.
         * @param message ResponseStartReplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseStartReplay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseStartReplay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseStartReplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseStartReplay;

        /**
         * Decodes a ResponseStartReplay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseStartReplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseStartReplay;

        /**
         * Verifies a ResponseStartReplay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseStartReplay message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseStartReplay
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseStartReplay;

        /**
         * Creates a plain object from a ResponseStartReplay message. Also converts values to other types if specified.
         * @param message ResponseStartReplay
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseStartReplay, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseStartReplay to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ResponseStartReplay {

        /** Error enum. */
        enum Error {
            MissingReplay = 1,
            InvalidReplayPath = 2,
            InvalidReplayData = 3,
            InvalidMapData = 4,
            InvalidObservedPlayerId = 5,
            MissingOptions = 6,
            LaunchError = 7
        }
    }

    /** Properties of a RequestLeaveGame. */
    interface IRequestLeaveGame {
    }

    /** Represents a RequestLeaveGame. */
    class RequestLeaveGame {

        /**
         * Constructs a new RequestLeaveGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestLeaveGame);

        /**
         * Creates a new RequestLeaveGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestLeaveGame instance
         */
        public static create(properties?: SC2APIProtocol.IRequestLeaveGame): SC2APIProtocol.RequestLeaveGame;

        /**
         * Encodes the specified RequestLeaveGame message. Does not implicitly {@link SC2APIProtocol.RequestLeaveGame.verify|verify} messages.
         * @param message RequestLeaveGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestLeaveGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestLeaveGame message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestLeaveGame.verify|verify} messages.
         * @param message RequestLeaveGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestLeaveGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestLeaveGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestLeaveGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestLeaveGame;

        /**
         * Decodes a RequestLeaveGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestLeaveGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestLeaveGame;

        /**
         * Verifies a RequestLeaveGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestLeaveGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestLeaveGame
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestLeaveGame;

        /**
         * Creates a plain object from a RequestLeaveGame message. Also converts values to other types if specified.
         * @param message RequestLeaveGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestLeaveGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestLeaveGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseLeaveGame. */
    interface IResponseLeaveGame {
    }

    /** Represents a ResponseLeaveGame. */
    class ResponseLeaveGame {

        /**
         * Constructs a new ResponseLeaveGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseLeaveGame);

        /**
         * Creates a new ResponseLeaveGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseLeaveGame instance
         */
        public static create(properties?: SC2APIProtocol.IResponseLeaveGame): SC2APIProtocol.ResponseLeaveGame;

        /**
         * Encodes the specified ResponseLeaveGame message. Does not implicitly {@link SC2APIProtocol.ResponseLeaveGame.verify|verify} messages.
         * @param message ResponseLeaveGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseLeaveGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseLeaveGame message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseLeaveGame.verify|verify} messages.
         * @param message ResponseLeaveGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseLeaveGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseLeaveGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseLeaveGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseLeaveGame;

        /**
         * Decodes a ResponseLeaveGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseLeaveGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseLeaveGame;

        /**
         * Verifies a ResponseLeaveGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseLeaveGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseLeaveGame
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseLeaveGame;

        /**
         * Creates a plain object from a ResponseLeaveGame message. Also converts values to other types if specified.
         * @param message ResponseLeaveGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseLeaveGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseLeaveGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestQuickSave. */
    interface IRequestQuickSave {
    }

    /** Represents a RequestQuickSave. */
    class RequestQuickSave {

        /**
         * Constructs a new RequestQuickSave.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestQuickSave);

        /**
         * Creates a new RequestQuickSave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestQuickSave instance
         */
        public static create(properties?: SC2APIProtocol.IRequestQuickSave): SC2APIProtocol.RequestQuickSave;

        /**
         * Encodes the specified RequestQuickSave message. Does not implicitly {@link SC2APIProtocol.RequestQuickSave.verify|verify} messages.
         * @param message RequestQuickSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestQuickSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestQuickSave message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestQuickSave.verify|verify} messages.
         * @param message RequestQuickSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestQuickSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestQuickSave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestQuickSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestQuickSave;

        /**
         * Decodes a RequestQuickSave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestQuickSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestQuickSave;

        /**
         * Verifies a RequestQuickSave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestQuickSave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestQuickSave
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestQuickSave;

        /**
         * Creates a plain object from a RequestQuickSave message. Also converts values to other types if specified.
         * @param message RequestQuickSave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestQuickSave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestQuickSave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseQuickSave. */
    interface IResponseQuickSave {
    }

    /** Represents a ResponseQuickSave. */
    class ResponseQuickSave {

        /**
         * Constructs a new ResponseQuickSave.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseQuickSave);

        /**
         * Creates a new ResponseQuickSave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseQuickSave instance
         */
        public static create(properties?: SC2APIProtocol.IResponseQuickSave): SC2APIProtocol.ResponseQuickSave;

        /**
         * Encodes the specified ResponseQuickSave message. Does not implicitly {@link SC2APIProtocol.ResponseQuickSave.verify|verify} messages.
         * @param message ResponseQuickSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseQuickSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseQuickSave message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseQuickSave.verify|verify} messages.
         * @param message ResponseQuickSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseQuickSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseQuickSave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseQuickSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseQuickSave;

        /**
         * Decodes a ResponseQuickSave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseQuickSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseQuickSave;

        /**
         * Verifies a ResponseQuickSave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseQuickSave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseQuickSave
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseQuickSave;

        /**
         * Creates a plain object from a ResponseQuickSave message. Also converts values to other types if specified.
         * @param message ResponseQuickSave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseQuickSave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseQuickSave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestQuickLoad. */
    interface IRequestQuickLoad {
    }

    /** Represents a RequestQuickLoad. */
    class RequestQuickLoad {

        /**
         * Constructs a new RequestQuickLoad.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestQuickLoad);

        /**
         * Creates a new RequestQuickLoad instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestQuickLoad instance
         */
        public static create(properties?: SC2APIProtocol.IRequestQuickLoad): SC2APIProtocol.RequestQuickLoad;

        /**
         * Encodes the specified RequestQuickLoad message. Does not implicitly {@link SC2APIProtocol.RequestQuickLoad.verify|verify} messages.
         * @param message RequestQuickLoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestQuickLoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestQuickLoad message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestQuickLoad.verify|verify} messages.
         * @param message RequestQuickLoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestQuickLoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestQuickLoad message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestQuickLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestQuickLoad;

        /**
         * Decodes a RequestQuickLoad message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestQuickLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestQuickLoad;

        /**
         * Verifies a RequestQuickLoad message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestQuickLoad message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestQuickLoad
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestQuickLoad;

        /**
         * Creates a plain object from a RequestQuickLoad message. Also converts values to other types if specified.
         * @param message RequestQuickLoad
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestQuickLoad, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestQuickLoad to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseQuickLoad. */
    interface IResponseQuickLoad {
    }

    /** Represents a ResponseQuickLoad. */
    class ResponseQuickLoad {

        /**
         * Constructs a new ResponseQuickLoad.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseQuickLoad);

        /**
         * Creates a new ResponseQuickLoad instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseQuickLoad instance
         */
        public static create(properties?: SC2APIProtocol.IResponseQuickLoad): SC2APIProtocol.ResponseQuickLoad;

        /**
         * Encodes the specified ResponseQuickLoad message. Does not implicitly {@link SC2APIProtocol.ResponseQuickLoad.verify|verify} messages.
         * @param message ResponseQuickLoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseQuickLoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseQuickLoad message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseQuickLoad.verify|verify} messages.
         * @param message ResponseQuickLoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseQuickLoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseQuickLoad message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseQuickLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseQuickLoad;

        /**
         * Decodes a ResponseQuickLoad message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseQuickLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseQuickLoad;

        /**
         * Verifies a ResponseQuickLoad message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseQuickLoad message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseQuickLoad
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseQuickLoad;

        /**
         * Creates a plain object from a ResponseQuickLoad message. Also converts values to other types if specified.
         * @param message ResponseQuickLoad
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseQuickLoad, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseQuickLoad to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestQuit. */
    interface IRequestQuit {
    }

    /** Represents a RequestQuit. */
    class RequestQuit {

        /**
         * Constructs a new RequestQuit.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestQuit);

        /**
         * Creates a new RequestQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestQuit instance
         */
        public static create(properties?: SC2APIProtocol.IRequestQuit): SC2APIProtocol.RequestQuit;

        /**
         * Encodes the specified RequestQuit message. Does not implicitly {@link SC2APIProtocol.RequestQuit.verify|verify} messages.
         * @param message RequestQuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestQuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestQuit message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestQuit.verify|verify} messages.
         * @param message RequestQuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestQuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestQuit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestQuit;

        /**
         * Decodes a RequestQuit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestQuit;

        /**
         * Verifies a RequestQuit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestQuit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestQuit
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestQuit;

        /**
         * Creates a plain object from a RequestQuit message. Also converts values to other types if specified.
         * @param message RequestQuit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestQuit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestQuit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseQuit. */
    interface IResponseQuit {
    }

    /** Represents a ResponseQuit. */
    class ResponseQuit {

        /**
         * Constructs a new ResponseQuit.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseQuit);

        /**
         * Creates a new ResponseQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseQuit instance
         */
        public static create(properties?: SC2APIProtocol.IResponseQuit): SC2APIProtocol.ResponseQuit;

        /**
         * Encodes the specified ResponseQuit message. Does not implicitly {@link SC2APIProtocol.ResponseQuit.verify|verify} messages.
         * @param message ResponseQuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseQuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseQuit message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseQuit.verify|verify} messages.
         * @param message ResponseQuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseQuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseQuit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseQuit;

        /**
         * Decodes a ResponseQuit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseQuit;

        /**
         * Verifies a ResponseQuit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseQuit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseQuit
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseQuit;

        /**
         * Creates a plain object from a ResponseQuit message. Also converts values to other types if specified.
         * @param message ResponseQuit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseQuit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseQuit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGameInfo. */
    interface IRequestGameInfo {
    }

    /** Represents a RequestGameInfo. */
    class RequestGameInfo {

        /**
         * Constructs a new RequestGameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestGameInfo);

        /**
         * Creates a new RequestGameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGameInfo instance
         */
        public static create(properties?: SC2APIProtocol.IRequestGameInfo): SC2APIProtocol.RequestGameInfo;

        /**
         * Encodes the specified RequestGameInfo message. Does not implicitly {@link SC2APIProtocol.RequestGameInfo.verify|verify} messages.
         * @param message RequestGameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGameInfo message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestGameInfo.verify|verify} messages.
         * @param message RequestGameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestGameInfo;

        /**
         * Decodes a RequestGameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestGameInfo;

        /**
         * Verifies a RequestGameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGameInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGameInfo
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestGameInfo;

        /**
         * Creates a plain object from a RequestGameInfo message. Also converts values to other types if specified.
         * @param message RequestGameInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestGameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGameInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseGameInfo. */
    interface IResponseGameInfo {

        /** ResponseGameInfo mapName */
        mapName?: string;

        /** ResponseGameInfo modNames */
        modNames?: string[];

        /** ResponseGameInfo localMapPath */
        localMapPath?: string;

        /** ResponseGameInfo playerInfo */
        playerInfo?: SC2APIProtocol.IPlayerInfo[];

        /** ResponseGameInfo startRaw */
        startRaw?: SC2APIProtocol.IStartRaw;

        /** ResponseGameInfo options */
        options?: SC2APIProtocol.IInterfaceOptions;
    }

    /** Represents a ResponseGameInfo. */
    class ResponseGameInfo {

        /**
         * Constructs a new ResponseGameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseGameInfo);

        /** ResponseGameInfo mapName. */
        public mapName: string;

        /** ResponseGameInfo modNames. */
        public modNames: string[];

        /** ResponseGameInfo localMapPath. */
        public localMapPath: string;

        /** ResponseGameInfo playerInfo. */
        public playerInfo: SC2APIProtocol.IPlayerInfo[];

        /** ResponseGameInfo startRaw. */
        public startRaw?: (SC2APIProtocol.IStartRaw|null);

        /** ResponseGameInfo options. */
        public options?: (SC2APIProtocol.IInterfaceOptions|null);

        /**
         * Creates a new ResponseGameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseGameInfo instance
         */
        public static create(properties?: SC2APIProtocol.IResponseGameInfo): SC2APIProtocol.ResponseGameInfo;

        /**
         * Encodes the specified ResponseGameInfo message. Does not implicitly {@link SC2APIProtocol.ResponseGameInfo.verify|verify} messages.
         * @param message ResponseGameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseGameInfo message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseGameInfo.verify|verify} messages.
         * @param message ResponseGameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseGameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseGameInfo;

        /**
         * Decodes a ResponseGameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseGameInfo;

        /**
         * Verifies a ResponseGameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseGameInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseGameInfo
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseGameInfo;

        /**
         * Creates a plain object from a ResponseGameInfo message. Also converts values to other types if specified.
         * @param message ResponseGameInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseGameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseGameInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestObservation. */
    interface IRequestObservation {

        /** RequestObservation disableFog */
        disableFog?: boolean;
    }

    /** Represents a RequestObservation. */
    class RequestObservation {

        /**
         * Constructs a new RequestObservation.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestObservation);

        /** RequestObservation disableFog. */
        public disableFog: boolean;

        /**
         * Creates a new RequestObservation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestObservation instance
         */
        public static create(properties?: SC2APIProtocol.IRequestObservation): SC2APIProtocol.RequestObservation;

        /**
         * Encodes the specified RequestObservation message. Does not implicitly {@link SC2APIProtocol.RequestObservation.verify|verify} messages.
         * @param message RequestObservation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestObservation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestObservation message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestObservation.verify|verify} messages.
         * @param message RequestObservation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestObservation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestObservation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestObservation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestObservation;

        /**
         * Decodes a RequestObservation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestObservation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestObservation;

        /**
         * Verifies a RequestObservation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestObservation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestObservation
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestObservation;

        /**
         * Creates a plain object from a RequestObservation message. Also converts values to other types if specified.
         * @param message RequestObservation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestObservation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestObservation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseObservation. */
    interface IResponseObservation {

        /** ResponseObservation actions */
        actions?: SC2APIProtocol.IAction[];

        /** ResponseObservation actionErrors */
        actionErrors?: SC2APIProtocol.IActionError[];

        /** ResponseObservation observation */
        observation?: SC2APIProtocol.IObservation;

        /** ResponseObservation playerResult */
        playerResult?: SC2APIProtocol.IPlayerResult[];

        /** ResponseObservation chat */
        chat?: SC2APIProtocol.IChatReceived[];
    }

    /** Represents a ResponseObservation. */
    class ResponseObservation {

        /**
         * Constructs a new ResponseObservation.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseObservation);

        /** ResponseObservation actions. */
        public actions: SC2APIProtocol.IAction[];

        /** ResponseObservation actionErrors. */
        public actionErrors: SC2APIProtocol.IActionError[];

        /** ResponseObservation observation. */
        public observation?: (SC2APIProtocol.IObservation|null);

        /** ResponseObservation playerResult. */
        public playerResult: SC2APIProtocol.IPlayerResult[];

        /** ResponseObservation chat. */
        public chat: SC2APIProtocol.IChatReceived[];

        /**
         * Creates a new ResponseObservation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseObservation instance
         */
        public static create(properties?: SC2APIProtocol.IResponseObservation): SC2APIProtocol.ResponseObservation;

        /**
         * Encodes the specified ResponseObservation message. Does not implicitly {@link SC2APIProtocol.ResponseObservation.verify|verify} messages.
         * @param message ResponseObservation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseObservation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseObservation message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseObservation.verify|verify} messages.
         * @param message ResponseObservation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseObservation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseObservation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseObservation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseObservation;

        /**
         * Decodes a ResponseObservation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseObservation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseObservation;

        /**
         * Verifies a ResponseObservation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseObservation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseObservation
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseObservation;

        /**
         * Creates a plain object from a ResponseObservation message. Also converts values to other types if specified.
         * @param message ResponseObservation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseObservation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseObservation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatReceived. */
    interface IChatReceived {

        /** ChatReceived playerId */
        playerId?: number;

        /** ChatReceived message */
        message?: string;
    }

    /** Represents a ChatReceived. */
    class ChatReceived {

        /**
         * Constructs a new ChatReceived.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IChatReceived);

        /** ChatReceived playerId. */
        public playerId: number;

        /** ChatReceived message. */
        public message: string;

        /**
         * Creates a new ChatReceived instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatReceived instance
         */
        public static create(properties?: SC2APIProtocol.IChatReceived): SC2APIProtocol.ChatReceived;

        /**
         * Encodes the specified ChatReceived message. Does not implicitly {@link SC2APIProtocol.ChatReceived.verify|verify} messages.
         * @param message ChatReceived message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IChatReceived, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatReceived message, length delimited. Does not implicitly {@link SC2APIProtocol.ChatReceived.verify|verify} messages.
         * @param message ChatReceived message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IChatReceived, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatReceived message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatReceived
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ChatReceived;

        /**
         * Decodes a ChatReceived message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatReceived
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ChatReceived;

        /**
         * Verifies a ChatReceived message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatReceived message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatReceived
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ChatReceived;

        /**
         * Creates a plain object from a ChatReceived message. Also converts values to other types if specified.
         * @param message ChatReceived
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ChatReceived, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatReceived to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestAction. */
    interface IRequestAction {

        /** RequestAction actions */
        actions?: SC2APIProtocol.IAction[];
    }

    /** Represents a RequestAction. */
    class RequestAction {

        /**
         * Constructs a new RequestAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestAction);

        /** RequestAction actions. */
        public actions: SC2APIProtocol.IAction[];

        /**
         * Creates a new RequestAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestAction instance
         */
        public static create(properties?: SC2APIProtocol.IRequestAction): SC2APIProtocol.RequestAction;

        /**
         * Encodes the specified RequestAction message. Does not implicitly {@link SC2APIProtocol.RequestAction.verify|verify} messages.
         * @param message RequestAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestAction message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestAction.verify|verify} messages.
         * @param message RequestAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestAction;

        /**
         * Decodes a RequestAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestAction;

        /**
         * Verifies a RequestAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestAction
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestAction;

        /**
         * Creates a plain object from a RequestAction message. Also converts values to other types if specified.
         * @param message RequestAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseAction. */
    interface IResponseAction {

        /** ResponseAction result */
        result?: SC2APIProtocol.ActionResult[];
    }

    /** Represents a ResponseAction. */
    class ResponseAction {

        /**
         * Constructs a new ResponseAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseAction);

        /** ResponseAction result. */
        public result: SC2APIProtocol.ActionResult[];

        /**
         * Creates a new ResponseAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseAction instance
         */
        public static create(properties?: SC2APIProtocol.IResponseAction): SC2APIProtocol.ResponseAction;

        /**
         * Encodes the specified ResponseAction message. Does not implicitly {@link SC2APIProtocol.ResponseAction.verify|verify} messages.
         * @param message ResponseAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseAction message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseAction.verify|verify} messages.
         * @param message ResponseAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseAction;

        /**
         * Decodes a ResponseAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseAction;

        /**
         * Verifies a ResponseAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseAction
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseAction;

        /**
         * Creates a plain object from a ResponseAction message. Also converts values to other types if specified.
         * @param message ResponseAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestStep. */
    interface IRequestStep {

        /** RequestStep count */
        count?: number;
    }

    /** Represents a RequestStep. */
    class RequestStep {

        /**
         * Constructs a new RequestStep.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestStep);

        /** RequestStep count. */
        public count: number;

        /**
         * Creates a new RequestStep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestStep instance
         */
        public static create(properties?: SC2APIProtocol.IRequestStep): SC2APIProtocol.RequestStep;

        /**
         * Encodes the specified RequestStep message. Does not implicitly {@link SC2APIProtocol.RequestStep.verify|verify} messages.
         * @param message RequestStep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestStep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestStep message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestStep.verify|verify} messages.
         * @param message RequestStep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestStep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestStep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestStep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestStep;

        /**
         * Decodes a RequestStep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestStep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestStep;

        /**
         * Verifies a RequestStep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestStep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestStep
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestStep;

        /**
         * Creates a plain object from a RequestStep message. Also converts values to other types if specified.
         * @param message RequestStep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestStep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseStep. */
    interface IResponseStep {
    }

    /** Represents a ResponseStep. */
    class ResponseStep {

        /**
         * Constructs a new ResponseStep.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseStep);

        /**
         * Creates a new ResponseStep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseStep instance
         */
        public static create(properties?: SC2APIProtocol.IResponseStep): SC2APIProtocol.ResponseStep;

        /**
         * Encodes the specified ResponseStep message. Does not implicitly {@link SC2APIProtocol.ResponseStep.verify|verify} messages.
         * @param message ResponseStep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseStep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseStep message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseStep.verify|verify} messages.
         * @param message ResponseStep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseStep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseStep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseStep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseStep;

        /**
         * Decodes a ResponseStep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseStep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseStep;

        /**
         * Verifies a ResponseStep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseStep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseStep
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseStep;

        /**
         * Creates a plain object from a ResponseStep message. Also converts values to other types if specified.
         * @param message ResponseStep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseStep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestData. */
    interface IRequestData {

        /** RequestData abilityId */
        abilityId?: boolean;

        /** RequestData unitTypeId */
        unitTypeId?: boolean;

        /** RequestData upgradeId */
        upgradeId?: boolean;

        /** RequestData buffId */
        buffId?: boolean;
    }

    /** Represents a RequestData. */
    class RequestData {

        /**
         * Constructs a new RequestData.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestData);

        /** RequestData abilityId. */
        public abilityId: boolean;

        /** RequestData unitTypeId. */
        public unitTypeId: boolean;

        /** RequestData upgradeId. */
        public upgradeId: boolean;

        /** RequestData buffId. */
        public buffId: boolean;

        /**
         * Creates a new RequestData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestData instance
         */
        public static create(properties?: SC2APIProtocol.IRequestData): SC2APIProtocol.RequestData;

        /**
         * Encodes the specified RequestData message. Does not implicitly {@link SC2APIProtocol.RequestData.verify|verify} messages.
         * @param message RequestData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestData message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestData.verify|verify} messages.
         * @param message RequestData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestData;

        /**
         * Decodes a RequestData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestData;

        /**
         * Verifies a RequestData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestData
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestData;

        /**
         * Creates a plain object from a RequestData message. Also converts values to other types if specified.
         * @param message RequestData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseData. */
    interface IResponseData {

        /** ResponseData abilities */
        abilities?: SC2APIProtocol.IAbilityData[];

        /** ResponseData units */
        units?: SC2APIProtocol.IUnitTypeData[];

        /** ResponseData upgrades */
        upgrades?: SC2APIProtocol.IUpgradeData[];

        /** ResponseData buffs */
        buffs?: SC2APIProtocol.IBuffData[];
    }

    /** Represents a ResponseData. */
    class ResponseData {

        /**
         * Constructs a new ResponseData.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseData);

        /** ResponseData abilities. */
        public abilities: SC2APIProtocol.IAbilityData[];

        /** ResponseData units. */
        public units: SC2APIProtocol.IUnitTypeData[];

        /** ResponseData upgrades. */
        public upgrades: SC2APIProtocol.IUpgradeData[];

        /** ResponseData buffs. */
        public buffs: SC2APIProtocol.IBuffData[];

        /**
         * Creates a new ResponseData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseData instance
         */
        public static create(properties?: SC2APIProtocol.IResponseData): SC2APIProtocol.ResponseData;

        /**
         * Encodes the specified ResponseData message. Does not implicitly {@link SC2APIProtocol.ResponseData.verify|verify} messages.
         * @param message ResponseData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseData message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseData.verify|verify} messages.
         * @param message ResponseData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseData;

        /**
         * Decodes a ResponseData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseData;

        /**
         * Verifies a ResponseData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseData
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseData;

        /**
         * Creates a plain object from a ResponseData message. Also converts values to other types if specified.
         * @param message ResponseData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSaveReplay. */
    interface IRequestSaveReplay {
    }

    /** Represents a RequestSaveReplay. */
    class RequestSaveReplay {

        /**
         * Constructs a new RequestSaveReplay.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestSaveReplay);

        /**
         * Creates a new RequestSaveReplay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSaveReplay instance
         */
        public static create(properties?: SC2APIProtocol.IRequestSaveReplay): SC2APIProtocol.RequestSaveReplay;

        /**
         * Encodes the specified RequestSaveReplay message. Does not implicitly {@link SC2APIProtocol.RequestSaveReplay.verify|verify} messages.
         * @param message RequestSaveReplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestSaveReplay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSaveReplay message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestSaveReplay.verify|verify} messages.
         * @param message RequestSaveReplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestSaveReplay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSaveReplay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSaveReplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestSaveReplay;

        /**
         * Decodes a RequestSaveReplay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSaveReplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestSaveReplay;

        /**
         * Verifies a RequestSaveReplay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSaveReplay message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSaveReplay
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestSaveReplay;

        /**
         * Creates a plain object from a RequestSaveReplay message. Also converts values to other types if specified.
         * @param message RequestSaveReplay
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestSaveReplay, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSaveReplay to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseSaveReplay. */
    interface IResponseSaveReplay {

        /** ResponseSaveReplay data */
        data?: Uint8Array;
    }

    /** Represents a ResponseSaveReplay. */
    class ResponseSaveReplay {

        /**
         * Constructs a new ResponseSaveReplay.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseSaveReplay);

        /** ResponseSaveReplay data. */
        public data: Uint8Array;

        /**
         * Creates a new ResponseSaveReplay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseSaveReplay instance
         */
        public static create(properties?: SC2APIProtocol.IResponseSaveReplay): SC2APIProtocol.ResponseSaveReplay;

        /**
         * Encodes the specified ResponseSaveReplay message. Does not implicitly {@link SC2APIProtocol.ResponseSaveReplay.verify|verify} messages.
         * @param message ResponseSaveReplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseSaveReplay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseSaveReplay message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseSaveReplay.verify|verify} messages.
         * @param message ResponseSaveReplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseSaveReplay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseSaveReplay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseSaveReplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseSaveReplay;

        /**
         * Decodes a ResponseSaveReplay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseSaveReplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseSaveReplay;

        /**
         * Verifies a ResponseSaveReplay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseSaveReplay message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseSaveReplay
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseSaveReplay;

        /**
         * Creates a plain object from a ResponseSaveReplay message. Also converts values to other types if specified.
         * @param message ResponseSaveReplay
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseSaveReplay, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseSaveReplay to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestReplayInfo. */
    interface IRequestReplayInfo {

        /** RequestReplayInfo replayPath */
        replayPath?: string;

        /** RequestReplayInfo replayData */
        replayData?: Uint8Array;

        /** RequestReplayInfo downloadData */
        downloadData?: boolean;
    }

    /** Represents a RequestReplayInfo. */
    class RequestReplayInfo {

        /**
         * Constructs a new RequestReplayInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestReplayInfo);

        /** RequestReplayInfo replayPath. */
        public replayPath: string;

        /** RequestReplayInfo replayData. */
        public replayData: Uint8Array;

        /** RequestReplayInfo downloadData. */
        public downloadData: boolean;

        /** RequestReplayInfo replay. */
        public replay?: string;

        /**
         * Creates a new RequestReplayInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestReplayInfo instance
         */
        public static create(properties?: SC2APIProtocol.IRequestReplayInfo): SC2APIProtocol.RequestReplayInfo;

        /**
         * Encodes the specified RequestReplayInfo message. Does not implicitly {@link SC2APIProtocol.RequestReplayInfo.verify|verify} messages.
         * @param message RequestReplayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestReplayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestReplayInfo message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestReplayInfo.verify|verify} messages.
         * @param message RequestReplayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestReplayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestReplayInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestReplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestReplayInfo;

        /**
         * Decodes a RequestReplayInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestReplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestReplayInfo;

        /**
         * Verifies a RequestReplayInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestReplayInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestReplayInfo
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestReplayInfo;

        /**
         * Creates a plain object from a RequestReplayInfo message. Also converts values to other types if specified.
         * @param message RequestReplayInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestReplayInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestReplayInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerInfoExtra. */
    interface IPlayerInfoExtra {

        /** PlayerInfoExtra playerInfo */
        playerInfo?: SC2APIProtocol.IPlayerInfo;

        /** PlayerInfoExtra playerResult */
        playerResult?: SC2APIProtocol.IPlayerResult;

        /** PlayerInfoExtra playerMmr */
        playerMmr?: number;

        /** PlayerInfoExtra playerApm */
        playerApm?: number;
    }

    /** Represents a PlayerInfoExtra. */
    class PlayerInfoExtra {

        /**
         * Constructs a new PlayerInfoExtra.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IPlayerInfoExtra);

        /** PlayerInfoExtra playerInfo. */
        public playerInfo?: (SC2APIProtocol.IPlayerInfo|null);

        /** PlayerInfoExtra playerResult. */
        public playerResult?: (SC2APIProtocol.IPlayerResult|null);

        /** PlayerInfoExtra playerMmr. */
        public playerMmr: number;

        /** PlayerInfoExtra playerApm. */
        public playerApm: number;

        /**
         * Creates a new PlayerInfoExtra instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfoExtra instance
         */
        public static create(properties?: SC2APIProtocol.IPlayerInfoExtra): SC2APIProtocol.PlayerInfoExtra;

        /**
         * Encodes the specified PlayerInfoExtra message. Does not implicitly {@link SC2APIProtocol.PlayerInfoExtra.verify|verify} messages.
         * @param message PlayerInfoExtra message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IPlayerInfoExtra, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfoExtra message, length delimited. Does not implicitly {@link SC2APIProtocol.PlayerInfoExtra.verify|verify} messages.
         * @param message PlayerInfoExtra message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IPlayerInfoExtra, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfoExtra message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfoExtra
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.PlayerInfoExtra;

        /**
         * Decodes a PlayerInfoExtra message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfoExtra
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.PlayerInfoExtra;

        /**
         * Verifies a PlayerInfoExtra message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfoExtra message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfoExtra
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.PlayerInfoExtra;

        /**
         * Creates a plain object from a PlayerInfoExtra message. Also converts values to other types if specified.
         * @param message PlayerInfoExtra
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.PlayerInfoExtra, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfoExtra to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseReplayInfo. */
    interface IResponseReplayInfo {

        /** ResponseReplayInfo mapName */
        mapName?: string;

        /** ResponseReplayInfo localMapPath */
        localMapPath?: string;

        /** ResponseReplayInfo playerInfo */
        playerInfo?: SC2APIProtocol.IPlayerInfoExtra[];

        /** ResponseReplayInfo gameDurationLoops */
        gameDurationLoops?: number;

        /** ResponseReplayInfo gameDurationSeconds */
        gameDurationSeconds?: number;

        /** ResponseReplayInfo gameVersion */
        gameVersion?: string;

        /** ResponseReplayInfo dataVersion */
        dataVersion?: string;

        /** ResponseReplayInfo dataBuild */
        dataBuild?: number;

        /** ResponseReplayInfo baseBuild */
        baseBuild?: number;

        /** ResponseReplayInfo error */
        error?: SC2APIProtocol.ResponseReplayInfo.Error;

        /** ResponseReplayInfo errorDetails */
        errorDetails?: string;
    }

    /** Represents a ResponseReplayInfo. */
    class ResponseReplayInfo {

        /**
         * Constructs a new ResponseReplayInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseReplayInfo);

        /** ResponseReplayInfo mapName. */
        public mapName: string;

        /** ResponseReplayInfo localMapPath. */
        public localMapPath: string;

        /** ResponseReplayInfo playerInfo. */
        public playerInfo: SC2APIProtocol.IPlayerInfoExtra[];

        /** ResponseReplayInfo gameDurationLoops. */
        public gameDurationLoops: number;

        /** ResponseReplayInfo gameDurationSeconds. */
        public gameDurationSeconds: number;

        /** ResponseReplayInfo gameVersion. */
        public gameVersion: string;

        /** ResponseReplayInfo dataVersion. */
        public dataVersion: string;

        /** ResponseReplayInfo dataBuild. */
        public dataBuild: number;

        /** ResponseReplayInfo baseBuild. */
        public baseBuild: number;

        /** ResponseReplayInfo error. */
        public error: SC2APIProtocol.ResponseReplayInfo.Error;

        /** ResponseReplayInfo errorDetails. */
        public errorDetails: string;

        /**
         * Creates a new ResponseReplayInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseReplayInfo instance
         */
        public static create(properties?: SC2APIProtocol.IResponseReplayInfo): SC2APIProtocol.ResponseReplayInfo;

        /**
         * Encodes the specified ResponseReplayInfo message. Does not implicitly {@link SC2APIProtocol.ResponseReplayInfo.verify|verify} messages.
         * @param message ResponseReplayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseReplayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseReplayInfo message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseReplayInfo.verify|verify} messages.
         * @param message ResponseReplayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseReplayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseReplayInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseReplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseReplayInfo;

        /**
         * Decodes a ResponseReplayInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseReplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseReplayInfo;

        /**
         * Verifies a ResponseReplayInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseReplayInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseReplayInfo
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseReplayInfo;

        /**
         * Creates a plain object from a ResponseReplayInfo message. Also converts values to other types if specified.
         * @param message ResponseReplayInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseReplayInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseReplayInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ResponseReplayInfo {

        /** Error enum. */
        enum Error {
            MissingReplay = 1,
            InvalidReplayPath = 2,
            InvalidReplayData = 3,
            ParsingError = 4,
            DownloadError = 5
        }
    }

    /** Properties of a RequestAvailableMaps. */
    interface IRequestAvailableMaps {
    }

    /** Represents a RequestAvailableMaps. */
    class RequestAvailableMaps {

        /**
         * Constructs a new RequestAvailableMaps.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestAvailableMaps);

        /**
         * Creates a new RequestAvailableMaps instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestAvailableMaps instance
         */
        public static create(properties?: SC2APIProtocol.IRequestAvailableMaps): SC2APIProtocol.RequestAvailableMaps;

        /**
         * Encodes the specified RequestAvailableMaps message. Does not implicitly {@link SC2APIProtocol.RequestAvailableMaps.verify|verify} messages.
         * @param message RequestAvailableMaps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestAvailableMaps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestAvailableMaps message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestAvailableMaps.verify|verify} messages.
         * @param message RequestAvailableMaps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestAvailableMaps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestAvailableMaps message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestAvailableMaps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestAvailableMaps;

        /**
         * Decodes a RequestAvailableMaps message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestAvailableMaps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestAvailableMaps;

        /**
         * Verifies a RequestAvailableMaps message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestAvailableMaps message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestAvailableMaps
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestAvailableMaps;

        /**
         * Creates a plain object from a RequestAvailableMaps message. Also converts values to other types if specified.
         * @param message RequestAvailableMaps
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestAvailableMaps, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestAvailableMaps to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseAvailableMaps. */
    interface IResponseAvailableMaps {

        /** ResponseAvailableMaps localMapPaths */
        localMapPaths?: string[];

        /** ResponseAvailableMaps battlenetMapNames */
        battlenetMapNames?: string[];
    }

    /** Represents a ResponseAvailableMaps. */
    class ResponseAvailableMaps {

        /**
         * Constructs a new ResponseAvailableMaps.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseAvailableMaps);

        /** ResponseAvailableMaps localMapPaths. */
        public localMapPaths: string[];

        /** ResponseAvailableMaps battlenetMapNames. */
        public battlenetMapNames: string[];

        /**
         * Creates a new ResponseAvailableMaps instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseAvailableMaps instance
         */
        public static create(properties?: SC2APIProtocol.IResponseAvailableMaps): SC2APIProtocol.ResponseAvailableMaps;

        /**
         * Encodes the specified ResponseAvailableMaps message. Does not implicitly {@link SC2APIProtocol.ResponseAvailableMaps.verify|verify} messages.
         * @param message ResponseAvailableMaps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseAvailableMaps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseAvailableMaps message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseAvailableMaps.verify|verify} messages.
         * @param message ResponseAvailableMaps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseAvailableMaps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseAvailableMaps message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseAvailableMaps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseAvailableMaps;

        /**
         * Decodes a ResponseAvailableMaps message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseAvailableMaps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseAvailableMaps;

        /**
         * Verifies a ResponseAvailableMaps message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseAvailableMaps message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseAvailableMaps
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseAvailableMaps;

        /**
         * Creates a plain object from a ResponseAvailableMaps message. Also converts values to other types if specified.
         * @param message ResponseAvailableMaps
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseAvailableMaps, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseAvailableMaps to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSaveMap. */
    interface IRequestSaveMap {

        /** RequestSaveMap mapPath */
        mapPath?: string;

        /** RequestSaveMap mapData */
        mapData?: Uint8Array;
    }

    /** Represents a RequestSaveMap. */
    class RequestSaveMap {

        /**
         * Constructs a new RequestSaveMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestSaveMap);

        /** RequestSaveMap mapPath. */
        public mapPath: string;

        /** RequestSaveMap mapData. */
        public mapData: Uint8Array;

        /**
         * Creates a new RequestSaveMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSaveMap instance
         */
        public static create(properties?: SC2APIProtocol.IRequestSaveMap): SC2APIProtocol.RequestSaveMap;

        /**
         * Encodes the specified RequestSaveMap message. Does not implicitly {@link SC2APIProtocol.RequestSaveMap.verify|verify} messages.
         * @param message RequestSaveMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestSaveMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSaveMap message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestSaveMap.verify|verify} messages.
         * @param message RequestSaveMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestSaveMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSaveMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSaveMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestSaveMap;

        /**
         * Decodes a RequestSaveMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSaveMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestSaveMap;

        /**
         * Verifies a RequestSaveMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSaveMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSaveMap
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestSaveMap;

        /**
         * Creates a plain object from a RequestSaveMap message. Also converts values to other types if specified.
         * @param message RequestSaveMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestSaveMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSaveMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseSaveMap. */
    interface IResponseSaveMap {

        /** ResponseSaveMap error */
        error?: SC2APIProtocol.ResponseSaveMap.Error;
    }

    /** Represents a ResponseSaveMap. */
    class ResponseSaveMap {

        /**
         * Constructs a new ResponseSaveMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseSaveMap);

        /** ResponseSaveMap error. */
        public error: SC2APIProtocol.ResponseSaveMap.Error;

        /**
         * Creates a new ResponseSaveMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseSaveMap instance
         */
        public static create(properties?: SC2APIProtocol.IResponseSaveMap): SC2APIProtocol.ResponseSaveMap;

        /**
         * Encodes the specified ResponseSaveMap message. Does not implicitly {@link SC2APIProtocol.ResponseSaveMap.verify|verify} messages.
         * @param message ResponseSaveMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseSaveMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseSaveMap message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseSaveMap.verify|verify} messages.
         * @param message ResponseSaveMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseSaveMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseSaveMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseSaveMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseSaveMap;

        /**
         * Decodes a ResponseSaveMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseSaveMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseSaveMap;

        /**
         * Verifies a ResponseSaveMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseSaveMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseSaveMap
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseSaveMap;

        /**
         * Creates a plain object from a ResponseSaveMap message. Also converts values to other types if specified.
         * @param message ResponseSaveMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseSaveMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseSaveMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ResponseSaveMap {

        /** Error enum. */
        enum Error {
            InvalidMapData = 1
        }
    }

    /** Properties of a RequestPing. */
    interface IRequestPing {
    }

    /** Represents a RequestPing. */
    class RequestPing {

        /**
         * Constructs a new RequestPing.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestPing);

        /**
         * Creates a new RequestPing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPing instance
         */
        public static create(properties?: SC2APIProtocol.IRequestPing): SC2APIProtocol.RequestPing;

        /**
         * Encodes the specified RequestPing message. Does not implicitly {@link SC2APIProtocol.RequestPing.verify|verify} messages.
         * @param message RequestPing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPing message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestPing.verify|verify} messages.
         * @param message RequestPing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestPing;

        /**
         * Decodes a RequestPing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestPing;

        /**
         * Verifies a RequestPing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPing
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestPing;

        /**
         * Creates a plain object from a RequestPing message. Also converts values to other types if specified.
         * @param message RequestPing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponsePing. */
    interface IResponsePing {

        /** ResponsePing gameVersion */
        gameVersion?: string;

        /** ResponsePing dataVersion */
        dataVersion?: string;

        /** ResponsePing dataBuild */
        dataBuild?: number;

        /** ResponsePing baseBuild */
        baseBuild?: number;
    }

    /** Represents a ResponsePing. */
    class ResponsePing {

        /**
         * Constructs a new ResponsePing.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponsePing);

        /** ResponsePing gameVersion. */
        public gameVersion: string;

        /** ResponsePing dataVersion. */
        public dataVersion: string;

        /** ResponsePing dataBuild. */
        public dataBuild: number;

        /** ResponsePing baseBuild. */
        public baseBuild: number;

        /**
         * Creates a new ResponsePing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponsePing instance
         */
        public static create(properties?: SC2APIProtocol.IResponsePing): SC2APIProtocol.ResponsePing;

        /**
         * Encodes the specified ResponsePing message. Does not implicitly {@link SC2APIProtocol.ResponsePing.verify|verify} messages.
         * @param message ResponsePing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponsePing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponsePing message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponsePing.verify|verify} messages.
         * @param message ResponsePing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponsePing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponsePing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponsePing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponsePing;

        /**
         * Decodes a ResponsePing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponsePing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponsePing;

        /**
         * Verifies a ResponsePing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponsePing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponsePing
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponsePing;

        /**
         * Creates a plain object from a ResponsePing message. Also converts values to other types if specified.
         * @param message ResponsePing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponsePing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponsePing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDebug. */
    interface IRequestDebug {

        /** RequestDebug debug */
        debug?: SC2APIProtocol.IDebugCommand[];
    }

    /** Represents a RequestDebug. */
    class RequestDebug {

        /**
         * Constructs a new RequestDebug.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IRequestDebug);

        /** RequestDebug debug. */
        public debug: SC2APIProtocol.IDebugCommand[];

        /**
         * Creates a new RequestDebug instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDebug instance
         */
        public static create(properties?: SC2APIProtocol.IRequestDebug): SC2APIProtocol.RequestDebug;

        /**
         * Encodes the specified RequestDebug message. Does not implicitly {@link SC2APIProtocol.RequestDebug.verify|verify} messages.
         * @param message RequestDebug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IRequestDebug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDebug message, length delimited. Does not implicitly {@link SC2APIProtocol.RequestDebug.verify|verify} messages.
         * @param message RequestDebug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IRequestDebug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDebug message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDebug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.RequestDebug;

        /**
         * Decodes a RequestDebug message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDebug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.RequestDebug;

        /**
         * Verifies a RequestDebug message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDebug message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDebug
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.RequestDebug;

        /**
         * Creates a plain object from a RequestDebug message. Also converts values to other types if specified.
         * @param message RequestDebug
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.RequestDebug, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDebug to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseDebug. */
    interface IResponseDebug {
    }

    /** Represents a ResponseDebug. */
    class ResponseDebug {

        /**
         * Constructs a new ResponseDebug.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IResponseDebug);

        /**
         * Creates a new ResponseDebug instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseDebug instance
         */
        public static create(properties?: SC2APIProtocol.IResponseDebug): SC2APIProtocol.ResponseDebug;

        /**
         * Encodes the specified ResponseDebug message. Does not implicitly {@link SC2APIProtocol.ResponseDebug.verify|verify} messages.
         * @param message ResponseDebug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IResponseDebug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseDebug message, length delimited. Does not implicitly {@link SC2APIProtocol.ResponseDebug.verify|verify} messages.
         * @param message ResponseDebug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IResponseDebug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseDebug message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseDebug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ResponseDebug;

        /**
         * Decodes a ResponseDebug message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseDebug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ResponseDebug;

        /**
         * Verifies a ResponseDebug message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseDebug message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseDebug
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ResponseDebug;

        /**
         * Creates a plain object from a ResponseDebug message. Also converts values to other types if specified.
         * @param message ResponseDebug
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ResponseDebug, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseDebug to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Difficulty enum. */
    enum Difficulty {
        VeryEasy = 1,
        Easy = 2,
        Medium = 3,
        MediumHard = 4,
        Hard = 5,
        Harder = 6,
        VeryHard = 7,
        CheatVision = 8,
        CheatMoney = 9,
        CheatInsane = 10
    }

    /** PlayerType enum. */
    enum PlayerType {
        Participant = 1,
        Computer = 2,
        Observer = 3
    }

    /** Properties of a PlayerSetup. */
    interface IPlayerSetup {

        /** PlayerSetup type */
        type?: SC2APIProtocol.PlayerType;

        /** PlayerSetup race */
        race?: SC2APIProtocol.Race;

        /** PlayerSetup difficulty */
        difficulty?: SC2APIProtocol.Difficulty;
    }

    /** Represents a PlayerSetup. */
    class PlayerSetup {

        /**
         * Constructs a new PlayerSetup.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IPlayerSetup);

        /** PlayerSetup type. */
        public type: SC2APIProtocol.PlayerType;

        /** PlayerSetup race. */
        public race: SC2APIProtocol.Race;

        /** PlayerSetup difficulty. */
        public difficulty: SC2APIProtocol.Difficulty;

        /**
         * Creates a new PlayerSetup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerSetup instance
         */
        public static create(properties?: SC2APIProtocol.IPlayerSetup): SC2APIProtocol.PlayerSetup;

        /**
         * Encodes the specified PlayerSetup message. Does not implicitly {@link SC2APIProtocol.PlayerSetup.verify|verify} messages.
         * @param message PlayerSetup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IPlayerSetup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerSetup message, length delimited. Does not implicitly {@link SC2APIProtocol.PlayerSetup.verify|verify} messages.
         * @param message PlayerSetup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IPlayerSetup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerSetup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerSetup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.PlayerSetup;

        /**
         * Decodes a PlayerSetup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerSetup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.PlayerSetup;

        /**
         * Verifies a PlayerSetup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerSetup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerSetup
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.PlayerSetup;

        /**
         * Creates a plain object from a PlayerSetup message. Also converts values to other types if specified.
         * @param message PlayerSetup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.PlayerSetup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerSetup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpatialCameraSetup. */
    interface ISpatialCameraSetup {

        /** SpatialCameraSetup width */
        width?: number;

        /** SpatialCameraSetup resolution */
        resolution?: SC2APIProtocol.ISize2DI;

        /** SpatialCameraSetup minimapResolution */
        minimapResolution?: SC2APIProtocol.ISize2DI;
    }

    /** Represents a SpatialCameraSetup. */
    class SpatialCameraSetup {

        /**
         * Constructs a new SpatialCameraSetup.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.ISpatialCameraSetup);

        /** SpatialCameraSetup width. */
        public width: number;

        /** SpatialCameraSetup resolution. */
        public resolution?: (SC2APIProtocol.ISize2DI|null);

        /** SpatialCameraSetup minimapResolution. */
        public minimapResolution?: (SC2APIProtocol.ISize2DI|null);

        /**
         * Creates a new SpatialCameraSetup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpatialCameraSetup instance
         */
        public static create(properties?: SC2APIProtocol.ISpatialCameraSetup): SC2APIProtocol.SpatialCameraSetup;

        /**
         * Encodes the specified SpatialCameraSetup message. Does not implicitly {@link SC2APIProtocol.SpatialCameraSetup.verify|verify} messages.
         * @param message SpatialCameraSetup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.ISpatialCameraSetup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpatialCameraSetup message, length delimited. Does not implicitly {@link SC2APIProtocol.SpatialCameraSetup.verify|verify} messages.
         * @param message SpatialCameraSetup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.ISpatialCameraSetup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpatialCameraSetup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpatialCameraSetup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.SpatialCameraSetup;

        /**
         * Decodes a SpatialCameraSetup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpatialCameraSetup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.SpatialCameraSetup;

        /**
         * Verifies a SpatialCameraSetup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpatialCameraSetup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpatialCameraSetup
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.SpatialCameraSetup;

        /**
         * Creates a plain object from a SpatialCameraSetup message. Also converts values to other types if specified.
         * @param message SpatialCameraSetup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.SpatialCameraSetup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpatialCameraSetup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InterfaceOptions. */
    interface IInterfaceOptions {

        /** InterfaceOptions raw */
        raw?: boolean;

        /** InterfaceOptions score */
        score?: boolean;

        /** InterfaceOptions featureLayer */
        featureLayer?: SC2APIProtocol.ISpatialCameraSetup;

        /** InterfaceOptions render */
        render?: SC2APIProtocol.ISpatialCameraSetup;
    }

    /** Represents an InterfaceOptions. */
    class InterfaceOptions {

        /**
         * Constructs a new InterfaceOptions.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IInterfaceOptions);

        /** InterfaceOptions raw. */
        public raw: boolean;

        /** InterfaceOptions score. */
        public score: boolean;

        /** InterfaceOptions featureLayer. */
        public featureLayer?: (SC2APIProtocol.ISpatialCameraSetup|null);

        /** InterfaceOptions render. */
        public render?: (SC2APIProtocol.ISpatialCameraSetup|null);

        /**
         * Creates a new InterfaceOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InterfaceOptions instance
         */
        public static create(properties?: SC2APIProtocol.IInterfaceOptions): SC2APIProtocol.InterfaceOptions;

        /**
         * Encodes the specified InterfaceOptions message. Does not implicitly {@link SC2APIProtocol.InterfaceOptions.verify|verify} messages.
         * @param message InterfaceOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IInterfaceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InterfaceOptions message, length delimited. Does not implicitly {@link SC2APIProtocol.InterfaceOptions.verify|verify} messages.
         * @param message InterfaceOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IInterfaceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InterfaceOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InterfaceOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.InterfaceOptions;

        /**
         * Decodes an InterfaceOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InterfaceOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.InterfaceOptions;

        /**
         * Verifies an InterfaceOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InterfaceOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InterfaceOptions
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.InterfaceOptions;

        /**
         * Creates a plain object from an InterfaceOptions message. Also converts values to other types if specified.
         * @param message InterfaceOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.InterfaceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InterfaceOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo playerId */
        playerId?: number;

        /** PlayerInfo type */
        type?: SC2APIProtocol.PlayerType;

        /** PlayerInfo raceRequested */
        raceRequested?: SC2APIProtocol.Race;

        /** PlayerInfo raceActual */
        raceActual?: SC2APIProtocol.Race;

        /** PlayerInfo difficulty */
        difficulty?: SC2APIProtocol.Difficulty;
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IPlayerInfo);

        /** PlayerInfo playerId. */
        public playerId: number;

        /** PlayerInfo type. */
        public type: SC2APIProtocol.PlayerType;

        /** PlayerInfo raceRequested. */
        public raceRequested: SC2APIProtocol.Race;

        /** PlayerInfo raceActual. */
        public raceActual: SC2APIProtocol.Race;

        /** PlayerInfo difficulty. */
        public difficulty: SC2APIProtocol.Difficulty;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: SC2APIProtocol.IPlayerInfo): SC2APIProtocol.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link SC2APIProtocol.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link SC2APIProtocol.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerCommon. */
    interface IPlayerCommon {

        /** PlayerCommon playerId */
        playerId?: number;

        /** PlayerCommon minerals */
        minerals?: number;

        /** PlayerCommon vespene */
        vespene?: number;

        /** PlayerCommon foodCap */
        foodCap?: number;

        /** PlayerCommon foodUsed */
        foodUsed?: number;

        /** PlayerCommon foodArmy */
        foodArmy?: number;

        /** PlayerCommon foodWorkers */
        foodWorkers?: number;

        /** PlayerCommon idleWorkerCount */
        idleWorkerCount?: number;

        /** PlayerCommon armyCount */
        armyCount?: number;

        /** PlayerCommon warpGateCount */
        warpGateCount?: number;

        /** PlayerCommon larvaCount */
        larvaCount?: number;
    }

    /** Represents a PlayerCommon. */
    class PlayerCommon {

        /**
         * Constructs a new PlayerCommon.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IPlayerCommon);

        /** PlayerCommon playerId. */
        public playerId: number;

        /** PlayerCommon minerals. */
        public minerals: number;

        /** PlayerCommon vespene. */
        public vespene: number;

        /** PlayerCommon foodCap. */
        public foodCap: number;

        /** PlayerCommon foodUsed. */
        public foodUsed: number;

        /** PlayerCommon foodArmy. */
        public foodArmy: number;

        /** PlayerCommon foodWorkers. */
        public foodWorkers: number;

        /** PlayerCommon idleWorkerCount. */
        public idleWorkerCount: number;

        /** PlayerCommon armyCount. */
        public armyCount: number;

        /** PlayerCommon warpGateCount. */
        public warpGateCount: number;

        /** PlayerCommon larvaCount. */
        public larvaCount: number;

        /**
         * Creates a new PlayerCommon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerCommon instance
         */
        public static create(properties?: SC2APIProtocol.IPlayerCommon): SC2APIProtocol.PlayerCommon;

        /**
         * Encodes the specified PlayerCommon message. Does not implicitly {@link SC2APIProtocol.PlayerCommon.verify|verify} messages.
         * @param message PlayerCommon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IPlayerCommon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerCommon message, length delimited. Does not implicitly {@link SC2APIProtocol.PlayerCommon.verify|verify} messages.
         * @param message PlayerCommon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IPlayerCommon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerCommon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerCommon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.PlayerCommon;

        /**
         * Decodes a PlayerCommon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerCommon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.PlayerCommon;

        /**
         * Verifies a PlayerCommon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerCommon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerCommon
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.PlayerCommon;

        /**
         * Creates a plain object from a PlayerCommon message. Also converts values to other types if specified.
         * @param message PlayerCommon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.PlayerCommon, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerCommon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Observation. */
    interface IObservation {

        /** Observation gameLoop */
        gameLoop?: number;

        /** Observation playerCommon */
        playerCommon?: SC2APIProtocol.IPlayerCommon;

        /** Observation alerts */
        alerts?: SC2APIProtocol.Alert[];

        /** Observation abilities */
        abilities?: SC2APIProtocol.IAvailableAbility[];

        /** Observation score */
        score?: SC2APIProtocol.IScore;

        /** Observation rawData */
        rawData?: SC2APIProtocol.IObservationRaw;

        /** Observation featureLayerData */
        featureLayerData?: SC2APIProtocol.IObservationFeatureLayer;

        /** Observation renderData */
        renderData?: SC2APIProtocol.IObservationRender;

        /** Observation uiData */
        uiData?: SC2APIProtocol.IObservationUI;
    }

    /** Represents an Observation. */
    class Observation {

        /**
         * Constructs a new Observation.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IObservation);

        /** Observation gameLoop. */
        public gameLoop: number;

        /** Observation playerCommon. */
        public playerCommon?: (SC2APIProtocol.IPlayerCommon|null);

        /** Observation alerts. */
        public alerts: SC2APIProtocol.Alert[];

        /** Observation abilities. */
        public abilities: SC2APIProtocol.IAvailableAbility[];

        /** Observation score. */
        public score?: (SC2APIProtocol.IScore|null);

        /** Observation rawData. */
        public rawData?: (SC2APIProtocol.IObservationRaw|null);

        /** Observation featureLayerData. */
        public featureLayerData?: (SC2APIProtocol.IObservationFeatureLayer|null);

        /** Observation renderData. */
        public renderData?: (SC2APIProtocol.IObservationRender|null);

        /** Observation uiData. */
        public uiData?: (SC2APIProtocol.IObservationUI|null);

        /**
         * Creates a new Observation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Observation instance
         */
        public static create(properties?: SC2APIProtocol.IObservation): SC2APIProtocol.Observation;

        /**
         * Encodes the specified Observation message. Does not implicitly {@link SC2APIProtocol.Observation.verify|verify} messages.
         * @param message Observation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IObservation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Observation message, length delimited. Does not implicitly {@link SC2APIProtocol.Observation.verify|verify} messages.
         * @param message Observation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IObservation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Observation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Observation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Observation;

        /**
         * Decodes an Observation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Observation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Observation;

        /**
         * Verifies an Observation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Observation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Observation
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Observation;

        /**
         * Creates a plain object from an Observation message. Also converts values to other types if specified.
         * @param message Observation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Observation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Observation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Action. */
    interface IAction {

        /** Action actionRaw */
        actionRaw?: SC2APIProtocol.IActionRaw;

        /** Action actionFeatureLayer */
        actionFeatureLayer?: SC2APIProtocol.IActionSpatial;

        /** Action actionRender */
        actionRender?: SC2APIProtocol.IActionSpatial;

        /** Action actionUi */
        actionUi?: SC2APIProtocol.IActionUI;

        /** Action chat */
        chat?: SC2APIProtocol.IActionChat[];
    }

    /** Represents an Action. */
    class Action {

        /**
         * Constructs a new Action.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IAction);

        /** Action actionRaw. */
        public actionRaw?: (SC2APIProtocol.IActionRaw|null);

        /** Action actionFeatureLayer. */
        public actionFeatureLayer?: (SC2APIProtocol.IActionSpatial|null);

        /** Action actionRender. */
        public actionRender?: (SC2APIProtocol.IActionSpatial|null);

        /** Action actionUi. */
        public actionUi?: (SC2APIProtocol.IActionUI|null);

        /** Action chat. */
        public chat: SC2APIProtocol.IActionChat[];

        /**
         * Creates a new Action instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Action instance
         */
        public static create(properties?: SC2APIProtocol.IAction): SC2APIProtocol.Action;

        /**
         * Encodes the specified Action message. Does not implicitly {@link SC2APIProtocol.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link SC2APIProtocol.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Action;

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Action;

        /**
         * Verifies an Action message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Action message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Action
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Action;

        /**
         * Creates a plain object from an Action message. Also converts values to other types if specified.
         * @param message Action
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Action to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionChat. */
    interface IActionChat {

        /** ActionChat channel */
        channel?: SC2APIProtocol.ActionChat.Channel;

        /** ActionChat message */
        message?: string;
    }

    /** Represents an ActionChat. */
    class ActionChat {

        /**
         * Constructs a new ActionChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionChat);

        /** ActionChat channel. */
        public channel: SC2APIProtocol.ActionChat.Channel;

        /** ActionChat message. */
        public message: string;

        /**
         * Creates a new ActionChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionChat instance
         */
        public static create(properties?: SC2APIProtocol.IActionChat): SC2APIProtocol.ActionChat;

        /**
         * Encodes the specified ActionChat message. Does not implicitly {@link SC2APIProtocol.ActionChat.verify|verify} messages.
         * @param message ActionChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionChat message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionChat.verify|verify} messages.
         * @param message ActionChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionChat;

        /**
         * Decodes an ActionChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionChat;

        /**
         * Verifies an ActionChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionChat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionChat
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionChat;

        /**
         * Creates a plain object from an ActionChat message. Also converts values to other types if specified.
         * @param message ActionChat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionChat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionChat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ActionChat {

        /** Channel enum. */
        enum Channel {
            Broadcast = 1,
            Team = 2
        }
    }

    /** Properties of an ActionError. */
    interface IActionError {

        /** ActionError unitTag */
        unitTag?: (number|Long);

        /** ActionError abilityId */
        abilityId?: (number|Long);

        /** ActionError result */
        result?: SC2APIProtocol.ActionResult;
    }

    /** Represents an ActionError. */
    class ActionError {

        /**
         * Constructs a new ActionError.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionError);

        /** ActionError unitTag. */
        public unitTag: (number|Long);

        /** ActionError abilityId. */
        public abilityId: (number|Long);

        /** ActionError result. */
        public result: SC2APIProtocol.ActionResult;

        /**
         * Creates a new ActionError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionError instance
         */
        public static create(properties?: SC2APIProtocol.IActionError): SC2APIProtocol.ActionError;

        /**
         * Encodes the specified ActionError message. Does not implicitly {@link SC2APIProtocol.ActionError.verify|verify} messages.
         * @param message ActionError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionError message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionError.verify|verify} messages.
         * @param message ActionError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionError;

        /**
         * Decodes an ActionError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionError;

        /**
         * Verifies an ActionError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionError
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionError;

        /**
         * Creates a plain object from an ActionError message. Also converts values to other types if specified.
         * @param message ActionError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Alert enum. */
    enum Alert {
        NuclearLaunchDetected = 1,
        NydusWormDetected = 2
    }

    /** Result enum. */
    enum Result {
        Victory = 1,
        Defeat = 2,
        Tie = 3,
        Undecided = 4
    }

    /** Properties of a PlayerResult. */
    interface IPlayerResult {

        /** PlayerResult playerId */
        playerId?: number;

        /** PlayerResult result */
        result?: SC2APIProtocol.Result;
    }

    /** Represents a PlayerResult. */
    class PlayerResult {

        /**
         * Constructs a new PlayerResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IPlayerResult);

        /** PlayerResult playerId. */
        public playerId: number;

        /** PlayerResult result. */
        public result: SC2APIProtocol.Result;

        /**
         * Creates a new PlayerResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerResult instance
         */
        public static create(properties?: SC2APIProtocol.IPlayerResult): SC2APIProtocol.PlayerResult;

        /**
         * Encodes the specified PlayerResult message. Does not implicitly {@link SC2APIProtocol.PlayerResult.verify|verify} messages.
         * @param message PlayerResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IPlayerResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerResult message, length delimited. Does not implicitly {@link SC2APIProtocol.PlayerResult.verify|verify} messages.
         * @param message PlayerResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IPlayerResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.PlayerResult;

        /**
         * Decodes a PlayerResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.PlayerResult;

        /**
         * Verifies a PlayerResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerResult
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.PlayerResult;

        /**
         * Creates a plain object from a PlayerResult message. Also converts values to other types if specified.
         * @param message PlayerResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.PlayerResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Score. */
    interface IScore {

        /** Score scoreType */
        scoreType?: SC2APIProtocol.Score.ScoreType;

        /** Score score */
        score?: number;

        /** Score scoreDetails */
        scoreDetails?: SC2APIProtocol.IScoreDetails;
    }

    /** Represents a Score. */
    class Score {

        /**
         * Constructs a new Score.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IScore);

        /** Score scoreType. */
        public scoreType: SC2APIProtocol.Score.ScoreType;

        /** Score score. */
        public score: number;

        /** Score scoreDetails. */
        public scoreDetails?: (SC2APIProtocol.IScoreDetails|null);

        /**
         * Creates a new Score instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Score instance
         */
        public static create(properties?: SC2APIProtocol.IScore): SC2APIProtocol.Score;

        /**
         * Encodes the specified Score message. Does not implicitly {@link SC2APIProtocol.Score.verify|verify} messages.
         * @param message Score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Score message, length delimited. Does not implicitly {@link SC2APIProtocol.Score.verify|verify} messages.
         * @param message Score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Score message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.Score;

        /**
         * Decodes a Score message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.Score;

        /**
         * Verifies a Score message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Score message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Score
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.Score;

        /**
         * Creates a plain object from a Score message. Also converts values to other types if specified.
         * @param message Score
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.Score, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Score to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Score {

        /** ScoreType enum. */
        enum ScoreType {
            Curriculum = 1,
            Melee = 2
        }
    }

    /** Properties of a CategoryScoreDetails. */
    interface ICategoryScoreDetails {

        /** CategoryScoreDetails none */
        none?: number;

        /** CategoryScoreDetails army */
        army?: number;

        /** CategoryScoreDetails economy */
        economy?: number;

        /** CategoryScoreDetails technology */
        technology?: number;

        /** CategoryScoreDetails upgrade */
        upgrade?: number;
    }

    /** Represents a CategoryScoreDetails. */
    class CategoryScoreDetails {

        /**
         * Constructs a new CategoryScoreDetails.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.ICategoryScoreDetails);

        /** CategoryScoreDetails none. */
        public none: number;

        /** CategoryScoreDetails army. */
        public army: number;

        /** CategoryScoreDetails economy. */
        public economy: number;

        /** CategoryScoreDetails technology. */
        public technology: number;

        /** CategoryScoreDetails upgrade. */
        public upgrade: number;

        /**
         * Creates a new CategoryScoreDetails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CategoryScoreDetails instance
         */
        public static create(properties?: SC2APIProtocol.ICategoryScoreDetails): SC2APIProtocol.CategoryScoreDetails;

        /**
         * Encodes the specified CategoryScoreDetails message. Does not implicitly {@link SC2APIProtocol.CategoryScoreDetails.verify|verify} messages.
         * @param message CategoryScoreDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.ICategoryScoreDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CategoryScoreDetails message, length delimited. Does not implicitly {@link SC2APIProtocol.CategoryScoreDetails.verify|verify} messages.
         * @param message CategoryScoreDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.ICategoryScoreDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CategoryScoreDetails message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CategoryScoreDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.CategoryScoreDetails;

        /**
         * Decodes a CategoryScoreDetails message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CategoryScoreDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.CategoryScoreDetails;

        /**
         * Verifies a CategoryScoreDetails message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CategoryScoreDetails message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CategoryScoreDetails
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.CategoryScoreDetails;

        /**
         * Creates a plain object from a CategoryScoreDetails message. Also converts values to other types if specified.
         * @param message CategoryScoreDetails
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.CategoryScoreDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CategoryScoreDetails to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VitalScoreDetails. */
    interface IVitalScoreDetails {

        /** VitalScoreDetails life */
        life?: number;

        /** VitalScoreDetails shields */
        shields?: number;

        /** VitalScoreDetails energy */
        energy?: number;
    }

    /** Represents a VitalScoreDetails. */
    class VitalScoreDetails {

        /**
         * Constructs a new VitalScoreDetails.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IVitalScoreDetails);

        /** VitalScoreDetails life. */
        public life: number;

        /** VitalScoreDetails shields. */
        public shields: number;

        /** VitalScoreDetails energy. */
        public energy: number;

        /**
         * Creates a new VitalScoreDetails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VitalScoreDetails instance
         */
        public static create(properties?: SC2APIProtocol.IVitalScoreDetails): SC2APIProtocol.VitalScoreDetails;

        /**
         * Encodes the specified VitalScoreDetails message. Does not implicitly {@link SC2APIProtocol.VitalScoreDetails.verify|verify} messages.
         * @param message VitalScoreDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IVitalScoreDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VitalScoreDetails message, length delimited. Does not implicitly {@link SC2APIProtocol.VitalScoreDetails.verify|verify} messages.
         * @param message VitalScoreDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IVitalScoreDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VitalScoreDetails message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VitalScoreDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.VitalScoreDetails;

        /**
         * Decodes a VitalScoreDetails message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VitalScoreDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.VitalScoreDetails;

        /**
         * Verifies a VitalScoreDetails message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VitalScoreDetails message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VitalScoreDetails
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.VitalScoreDetails;

        /**
         * Creates a plain object from a VitalScoreDetails message. Also converts values to other types if specified.
         * @param message VitalScoreDetails
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.VitalScoreDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VitalScoreDetails to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ScoreDetails. */
    interface IScoreDetails {

        /** ScoreDetails idleProductionTime */
        idleProductionTime?: number;

        /** ScoreDetails idleWorkerTime */
        idleWorkerTime?: number;

        /** ScoreDetails totalValueUnits */
        totalValueUnits?: number;

        /** ScoreDetails totalValueStructures */
        totalValueStructures?: number;

        /** ScoreDetails killedValueUnits */
        killedValueUnits?: number;

        /** ScoreDetails killedValueStructures */
        killedValueStructures?: number;

        /** ScoreDetails collectedMinerals */
        collectedMinerals?: number;

        /** ScoreDetails collectedVespene */
        collectedVespene?: number;

        /** ScoreDetails collectionRateMinerals */
        collectionRateMinerals?: number;

        /** ScoreDetails collectionRateVespene */
        collectionRateVespene?: number;

        /** ScoreDetails spentMinerals */
        spentMinerals?: number;

        /** ScoreDetails spentVespene */
        spentVespene?: number;

        /** ScoreDetails foodUsed */
        foodUsed?: SC2APIProtocol.ICategoryScoreDetails;

        /** ScoreDetails killedMinerals */
        killedMinerals?: SC2APIProtocol.ICategoryScoreDetails;

        /** ScoreDetails killedVespene */
        killedVespene?: SC2APIProtocol.ICategoryScoreDetails;

        /** ScoreDetails lostMinerals */
        lostMinerals?: SC2APIProtocol.ICategoryScoreDetails;

        /** ScoreDetails lostVespene */
        lostVespene?: SC2APIProtocol.ICategoryScoreDetails;

        /** ScoreDetails friendlyFireMinerals */
        friendlyFireMinerals?: SC2APIProtocol.ICategoryScoreDetails;

        /** ScoreDetails friendlyFireVespene */
        friendlyFireVespene?: SC2APIProtocol.ICategoryScoreDetails;

        /** ScoreDetails usedMinerals */
        usedMinerals?: SC2APIProtocol.ICategoryScoreDetails;

        /** ScoreDetails usedVespene */
        usedVespene?: SC2APIProtocol.ICategoryScoreDetails;

        /** ScoreDetails totalUsedMinerals */
        totalUsedMinerals?: SC2APIProtocol.ICategoryScoreDetails;

        /** ScoreDetails totalUsedVespene */
        totalUsedVespene?: SC2APIProtocol.ICategoryScoreDetails;

        /** ScoreDetails totalDamageDealt */
        totalDamageDealt?: SC2APIProtocol.IVitalScoreDetails;

        /** ScoreDetails totalDamageTaken */
        totalDamageTaken?: SC2APIProtocol.IVitalScoreDetails;

        /** ScoreDetails totalHealed */
        totalHealed?: SC2APIProtocol.IVitalScoreDetails;
    }

    /** Represents a ScoreDetails. */
    class ScoreDetails {

        /**
         * Constructs a new ScoreDetails.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IScoreDetails);

        /** ScoreDetails idleProductionTime. */
        public idleProductionTime: number;

        /** ScoreDetails idleWorkerTime. */
        public idleWorkerTime: number;

        /** ScoreDetails totalValueUnits. */
        public totalValueUnits: number;

        /** ScoreDetails totalValueStructures. */
        public totalValueStructures: number;

        /** ScoreDetails killedValueUnits. */
        public killedValueUnits: number;

        /** ScoreDetails killedValueStructures. */
        public killedValueStructures: number;

        /** ScoreDetails collectedMinerals. */
        public collectedMinerals: number;

        /** ScoreDetails collectedVespene. */
        public collectedVespene: number;

        /** ScoreDetails collectionRateMinerals. */
        public collectionRateMinerals: number;

        /** ScoreDetails collectionRateVespene. */
        public collectionRateVespene: number;

        /** ScoreDetails spentMinerals. */
        public spentMinerals: number;

        /** ScoreDetails spentVespene. */
        public spentVespene: number;

        /** ScoreDetails foodUsed. */
        public foodUsed?: (SC2APIProtocol.ICategoryScoreDetails|null);

        /** ScoreDetails killedMinerals. */
        public killedMinerals?: (SC2APIProtocol.ICategoryScoreDetails|null);

        /** ScoreDetails killedVespene. */
        public killedVespene?: (SC2APIProtocol.ICategoryScoreDetails|null);

        /** ScoreDetails lostMinerals. */
        public lostMinerals?: (SC2APIProtocol.ICategoryScoreDetails|null);

        /** ScoreDetails lostVespene. */
        public lostVespene?: (SC2APIProtocol.ICategoryScoreDetails|null);

        /** ScoreDetails friendlyFireMinerals. */
        public friendlyFireMinerals?: (SC2APIProtocol.ICategoryScoreDetails|null);

        /** ScoreDetails friendlyFireVespene. */
        public friendlyFireVespene?: (SC2APIProtocol.ICategoryScoreDetails|null);

        /** ScoreDetails usedMinerals. */
        public usedMinerals?: (SC2APIProtocol.ICategoryScoreDetails|null);

        /** ScoreDetails usedVespene. */
        public usedVespene?: (SC2APIProtocol.ICategoryScoreDetails|null);

        /** ScoreDetails totalUsedMinerals. */
        public totalUsedMinerals?: (SC2APIProtocol.ICategoryScoreDetails|null);

        /** ScoreDetails totalUsedVespene. */
        public totalUsedVespene?: (SC2APIProtocol.ICategoryScoreDetails|null);

        /** ScoreDetails totalDamageDealt. */
        public totalDamageDealt?: (SC2APIProtocol.IVitalScoreDetails|null);

        /** ScoreDetails totalDamageTaken. */
        public totalDamageTaken?: (SC2APIProtocol.IVitalScoreDetails|null);

        /** ScoreDetails totalHealed. */
        public totalHealed?: (SC2APIProtocol.IVitalScoreDetails|null);

        /**
         * Creates a new ScoreDetails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScoreDetails instance
         */
        public static create(properties?: SC2APIProtocol.IScoreDetails): SC2APIProtocol.ScoreDetails;

        /**
         * Encodes the specified ScoreDetails message. Does not implicitly {@link SC2APIProtocol.ScoreDetails.verify|verify} messages.
         * @param message ScoreDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IScoreDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScoreDetails message, length delimited. Does not implicitly {@link SC2APIProtocol.ScoreDetails.verify|verify} messages.
         * @param message ScoreDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IScoreDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScoreDetails message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScoreDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ScoreDetails;

        /**
         * Decodes a ScoreDetails message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScoreDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ScoreDetails;

        /**
         * Verifies a ScoreDetails message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScoreDetails message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScoreDetails
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ScoreDetails;

        /**
         * Creates a plain object from a ScoreDetails message. Also converts values to other types if specified.
         * @param message ScoreDetails
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ScoreDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScoreDetails to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ObservationFeatureLayer. */
    interface IObservationFeatureLayer {

        /** ObservationFeatureLayer renders */
        renders?: SC2APIProtocol.IFeatureLayers;

        /** ObservationFeatureLayer minimapRenders */
        minimapRenders?: SC2APIProtocol.IFeatureLayersMinimap;
    }

    /** Represents an ObservationFeatureLayer. */
    class ObservationFeatureLayer {

        /**
         * Constructs a new ObservationFeatureLayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IObservationFeatureLayer);

        /** ObservationFeatureLayer renders. */
        public renders?: (SC2APIProtocol.IFeatureLayers|null);

        /** ObservationFeatureLayer minimapRenders. */
        public minimapRenders?: (SC2APIProtocol.IFeatureLayersMinimap|null);

        /**
         * Creates a new ObservationFeatureLayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObservationFeatureLayer instance
         */
        public static create(properties?: SC2APIProtocol.IObservationFeatureLayer): SC2APIProtocol.ObservationFeatureLayer;

        /**
         * Encodes the specified ObservationFeatureLayer message. Does not implicitly {@link SC2APIProtocol.ObservationFeatureLayer.verify|verify} messages.
         * @param message ObservationFeatureLayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IObservationFeatureLayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObservationFeatureLayer message, length delimited. Does not implicitly {@link SC2APIProtocol.ObservationFeatureLayer.verify|verify} messages.
         * @param message ObservationFeatureLayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IObservationFeatureLayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObservationFeatureLayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObservationFeatureLayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ObservationFeatureLayer;

        /**
         * Decodes an ObservationFeatureLayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObservationFeatureLayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ObservationFeatureLayer;

        /**
         * Verifies an ObservationFeatureLayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObservationFeatureLayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObservationFeatureLayer
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ObservationFeatureLayer;

        /**
         * Creates a plain object from an ObservationFeatureLayer message. Also converts values to other types if specified.
         * @param message ObservationFeatureLayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ObservationFeatureLayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObservationFeatureLayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FeatureLayers. */
    interface IFeatureLayers {

        /** FeatureLayers heightMap */
        heightMap?: SC2APIProtocol.IImageData;

        /** FeatureLayers visibilityMap */
        visibilityMap?: SC2APIProtocol.IImageData;

        /** FeatureLayers creep */
        creep?: SC2APIProtocol.IImageData;

        /** FeatureLayers power */
        power?: SC2APIProtocol.IImageData;

        /** FeatureLayers playerId */
        playerId?: SC2APIProtocol.IImageData;

        /** FeatureLayers unitType */
        unitType?: SC2APIProtocol.IImageData;

        /** FeatureLayers selected */
        selected?: SC2APIProtocol.IImageData;

        /** FeatureLayers unitHitPoints */
        unitHitPoints?: SC2APIProtocol.IImageData;

        /** FeatureLayers unitHitPointsRatio */
        unitHitPointsRatio?: SC2APIProtocol.IImageData;

        /** FeatureLayers unitEnergy */
        unitEnergy?: SC2APIProtocol.IImageData;

        /** FeatureLayers unitShields */
        unitShields?: SC2APIProtocol.IImageData;

        /** FeatureLayers playerRelative */
        playerRelative?: SC2APIProtocol.IImageData;

        /** FeatureLayers unitDensityAa */
        unitDensityAa?: SC2APIProtocol.IImageData;

        /** FeatureLayers unitDensity */
        unitDensity?: SC2APIProtocol.IImageData;
    }

    /** Represents a FeatureLayers. */
    class FeatureLayers {

        /**
         * Constructs a new FeatureLayers.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IFeatureLayers);

        /** FeatureLayers heightMap. */
        public heightMap?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers visibilityMap. */
        public visibilityMap?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers creep. */
        public creep?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers power. */
        public power?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers playerId. */
        public playerId?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers unitType. */
        public unitType?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers selected. */
        public selected?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers unitHitPoints. */
        public unitHitPoints?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers unitHitPointsRatio. */
        public unitHitPointsRatio?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers unitEnergy. */
        public unitEnergy?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers unitShields. */
        public unitShields?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers playerRelative. */
        public playerRelative?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers unitDensityAa. */
        public unitDensityAa?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayers unitDensity. */
        public unitDensity?: (SC2APIProtocol.IImageData|null);

        /**
         * Creates a new FeatureLayers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureLayers instance
         */
        public static create(properties?: SC2APIProtocol.IFeatureLayers): SC2APIProtocol.FeatureLayers;

        /**
         * Encodes the specified FeatureLayers message. Does not implicitly {@link SC2APIProtocol.FeatureLayers.verify|verify} messages.
         * @param message FeatureLayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IFeatureLayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatureLayers message, length delimited. Does not implicitly {@link SC2APIProtocol.FeatureLayers.verify|verify} messages.
         * @param message FeatureLayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IFeatureLayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureLayers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureLayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.FeatureLayers;

        /**
         * Decodes a FeatureLayers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatureLayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.FeatureLayers;

        /**
         * Verifies a FeatureLayers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatureLayers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatureLayers
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.FeatureLayers;

        /**
         * Creates a plain object from a FeatureLayers message. Also converts values to other types if specified.
         * @param message FeatureLayers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.FeatureLayers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatureLayers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FeatureLayersMinimap. */
    interface IFeatureLayersMinimap {

        /** FeatureLayersMinimap heightMap */
        heightMap?: SC2APIProtocol.IImageData;

        /** FeatureLayersMinimap visibilityMap */
        visibilityMap?: SC2APIProtocol.IImageData;

        /** FeatureLayersMinimap creep */
        creep?: SC2APIProtocol.IImageData;

        /** FeatureLayersMinimap camera */
        camera?: SC2APIProtocol.IImageData;

        /** FeatureLayersMinimap playerId */
        playerId?: SC2APIProtocol.IImageData;

        /** FeatureLayersMinimap playerRelative */
        playerRelative?: SC2APIProtocol.IImageData;

        /** FeatureLayersMinimap selected */
        selected?: SC2APIProtocol.IImageData;

        /** FeatureLayersMinimap unitType */
        unitType?: SC2APIProtocol.IImageData;
    }

    /** Represents a FeatureLayersMinimap. */
    class FeatureLayersMinimap {

        /**
         * Constructs a new FeatureLayersMinimap.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IFeatureLayersMinimap);

        /** FeatureLayersMinimap heightMap. */
        public heightMap?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayersMinimap visibilityMap. */
        public visibilityMap?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayersMinimap creep. */
        public creep?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayersMinimap camera. */
        public camera?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayersMinimap playerId. */
        public playerId?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayersMinimap playerRelative. */
        public playerRelative?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayersMinimap selected. */
        public selected?: (SC2APIProtocol.IImageData|null);

        /** FeatureLayersMinimap unitType. */
        public unitType?: (SC2APIProtocol.IImageData|null);

        /**
         * Creates a new FeatureLayersMinimap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureLayersMinimap instance
         */
        public static create(properties?: SC2APIProtocol.IFeatureLayersMinimap): SC2APIProtocol.FeatureLayersMinimap;

        /**
         * Encodes the specified FeatureLayersMinimap message. Does not implicitly {@link SC2APIProtocol.FeatureLayersMinimap.verify|verify} messages.
         * @param message FeatureLayersMinimap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IFeatureLayersMinimap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeatureLayersMinimap message, length delimited. Does not implicitly {@link SC2APIProtocol.FeatureLayersMinimap.verify|verify} messages.
         * @param message FeatureLayersMinimap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IFeatureLayersMinimap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureLayersMinimap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureLayersMinimap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.FeatureLayersMinimap;

        /**
         * Decodes a FeatureLayersMinimap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeatureLayersMinimap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.FeatureLayersMinimap;

        /**
         * Verifies a FeatureLayersMinimap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeatureLayersMinimap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeatureLayersMinimap
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.FeatureLayersMinimap;

        /**
         * Creates a plain object from a FeatureLayersMinimap message. Also converts values to other types if specified.
         * @param message FeatureLayersMinimap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.FeatureLayersMinimap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeatureLayersMinimap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ObservationRender. */
    interface IObservationRender {

        /** ObservationRender map */
        map?: SC2APIProtocol.IImageData;

        /** ObservationRender minimap */
        minimap?: SC2APIProtocol.IImageData;
    }

    /** Represents an ObservationRender. */
    class ObservationRender {

        /**
         * Constructs a new ObservationRender.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IObservationRender);

        /** ObservationRender map. */
        public map?: (SC2APIProtocol.IImageData|null);

        /** ObservationRender minimap. */
        public minimap?: (SC2APIProtocol.IImageData|null);

        /**
         * Creates a new ObservationRender instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObservationRender instance
         */
        public static create(properties?: SC2APIProtocol.IObservationRender): SC2APIProtocol.ObservationRender;

        /**
         * Encodes the specified ObservationRender message. Does not implicitly {@link SC2APIProtocol.ObservationRender.verify|verify} messages.
         * @param message ObservationRender message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IObservationRender, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObservationRender message, length delimited. Does not implicitly {@link SC2APIProtocol.ObservationRender.verify|verify} messages.
         * @param message ObservationRender message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IObservationRender, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObservationRender message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObservationRender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ObservationRender;

        /**
         * Decodes an ObservationRender message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObservationRender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ObservationRender;

        /**
         * Verifies an ObservationRender message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObservationRender message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObservationRender
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ObservationRender;

        /**
         * Creates a plain object from an ObservationRender message. Also converts values to other types if specified.
         * @param message ObservationRender
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ObservationRender, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObservationRender to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionSpatial. */
    interface IActionSpatial {

        /** ActionSpatial unitCommand */
        unitCommand?: SC2APIProtocol.IActionSpatialUnitCommand;

        /** ActionSpatial cameraMove */
        cameraMove?: SC2APIProtocol.IActionSpatialCameraMove;

        /** ActionSpatial unitSelectionPoint */
        unitSelectionPoint?: SC2APIProtocol.IActionSpatialUnitSelectionPoint;

        /** ActionSpatial unitSelectionRect */
        unitSelectionRect?: SC2APIProtocol.IActionSpatialUnitSelectionRect;
    }

    /** Represents an ActionSpatial. */
    class ActionSpatial {

        /**
         * Constructs a new ActionSpatial.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionSpatial);

        /** ActionSpatial unitCommand. */
        public unitCommand?: (SC2APIProtocol.IActionSpatialUnitCommand|null);

        /** ActionSpatial cameraMove. */
        public cameraMove?: (SC2APIProtocol.IActionSpatialCameraMove|null);

        /** ActionSpatial unitSelectionPoint. */
        public unitSelectionPoint?: (SC2APIProtocol.IActionSpatialUnitSelectionPoint|null);

        /** ActionSpatial unitSelectionRect. */
        public unitSelectionRect?: (SC2APIProtocol.IActionSpatialUnitSelectionRect|null);

        /** ActionSpatial action. */
        public action?: string;

        /**
         * Creates a new ActionSpatial instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionSpatial instance
         */
        public static create(properties?: SC2APIProtocol.IActionSpatial): SC2APIProtocol.ActionSpatial;

        /**
         * Encodes the specified ActionSpatial message. Does not implicitly {@link SC2APIProtocol.ActionSpatial.verify|verify} messages.
         * @param message ActionSpatial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionSpatial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionSpatial message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionSpatial.verify|verify} messages.
         * @param message ActionSpatial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionSpatial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionSpatial message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionSpatial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionSpatial;

        /**
         * Decodes an ActionSpatial message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionSpatial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionSpatial;

        /**
         * Verifies an ActionSpatial message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionSpatial message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionSpatial
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionSpatial;

        /**
         * Creates a plain object from an ActionSpatial message. Also converts values to other types if specified.
         * @param message ActionSpatial
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionSpatial, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionSpatial to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionSpatialUnitCommand. */
    interface IActionSpatialUnitCommand {

        /** ActionSpatialUnitCommand abilityId */
        abilityId?: number;

        /** ActionSpatialUnitCommand targetScreenCoord */
        targetScreenCoord?: SC2APIProtocol.IPointI;

        /** ActionSpatialUnitCommand targetMinimapCoord */
        targetMinimapCoord?: SC2APIProtocol.IPointI;

        /** ActionSpatialUnitCommand queueCommand */
        queueCommand?: boolean;
    }

    /** Represents an ActionSpatialUnitCommand. */
    class ActionSpatialUnitCommand {

        /**
         * Constructs a new ActionSpatialUnitCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionSpatialUnitCommand);

        /** ActionSpatialUnitCommand abilityId. */
        public abilityId: number;

        /** ActionSpatialUnitCommand targetScreenCoord. */
        public targetScreenCoord?: (SC2APIProtocol.IPointI|null);

        /** ActionSpatialUnitCommand targetMinimapCoord. */
        public targetMinimapCoord?: (SC2APIProtocol.IPointI|null);

        /** ActionSpatialUnitCommand queueCommand. */
        public queueCommand: boolean;

        /** ActionSpatialUnitCommand target. */
        public target?: string;

        /**
         * Creates a new ActionSpatialUnitCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionSpatialUnitCommand instance
         */
        public static create(properties?: SC2APIProtocol.IActionSpatialUnitCommand): SC2APIProtocol.ActionSpatialUnitCommand;

        /**
         * Encodes the specified ActionSpatialUnitCommand message. Does not implicitly {@link SC2APIProtocol.ActionSpatialUnitCommand.verify|verify} messages.
         * @param message ActionSpatialUnitCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionSpatialUnitCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionSpatialUnitCommand message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionSpatialUnitCommand.verify|verify} messages.
         * @param message ActionSpatialUnitCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionSpatialUnitCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionSpatialUnitCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionSpatialUnitCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionSpatialUnitCommand;

        /**
         * Decodes an ActionSpatialUnitCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionSpatialUnitCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionSpatialUnitCommand;

        /**
         * Verifies an ActionSpatialUnitCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionSpatialUnitCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionSpatialUnitCommand
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionSpatialUnitCommand;

        /**
         * Creates a plain object from an ActionSpatialUnitCommand message. Also converts values to other types if specified.
         * @param message ActionSpatialUnitCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionSpatialUnitCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionSpatialUnitCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionSpatialCameraMove. */
    interface IActionSpatialCameraMove {

        /** ActionSpatialCameraMove centerMinimap */
        centerMinimap?: SC2APIProtocol.IPointI;
    }

    /** Represents an ActionSpatialCameraMove. */
    class ActionSpatialCameraMove {

        /**
         * Constructs a new ActionSpatialCameraMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionSpatialCameraMove);

        /** ActionSpatialCameraMove centerMinimap. */
        public centerMinimap?: (SC2APIProtocol.IPointI|null);

        /**
         * Creates a new ActionSpatialCameraMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionSpatialCameraMove instance
         */
        public static create(properties?: SC2APIProtocol.IActionSpatialCameraMove): SC2APIProtocol.ActionSpatialCameraMove;

        /**
         * Encodes the specified ActionSpatialCameraMove message. Does not implicitly {@link SC2APIProtocol.ActionSpatialCameraMove.verify|verify} messages.
         * @param message ActionSpatialCameraMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionSpatialCameraMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionSpatialCameraMove message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionSpatialCameraMove.verify|verify} messages.
         * @param message ActionSpatialCameraMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionSpatialCameraMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionSpatialCameraMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionSpatialCameraMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionSpatialCameraMove;

        /**
         * Decodes an ActionSpatialCameraMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionSpatialCameraMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionSpatialCameraMove;

        /**
         * Verifies an ActionSpatialCameraMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionSpatialCameraMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionSpatialCameraMove
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionSpatialCameraMove;

        /**
         * Creates a plain object from an ActionSpatialCameraMove message. Also converts values to other types if specified.
         * @param message ActionSpatialCameraMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionSpatialCameraMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionSpatialCameraMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionSpatialUnitSelectionPoint. */
    interface IActionSpatialUnitSelectionPoint {

        /** ActionSpatialUnitSelectionPoint selectionScreenCoord */
        selectionScreenCoord?: SC2APIProtocol.IPointI;

        /** ActionSpatialUnitSelectionPoint type */
        type?: SC2APIProtocol.ActionSpatialUnitSelectionPoint.Type;
    }

    /** Represents an ActionSpatialUnitSelectionPoint. */
    class ActionSpatialUnitSelectionPoint {

        /**
         * Constructs a new ActionSpatialUnitSelectionPoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionSpatialUnitSelectionPoint);

        /** ActionSpatialUnitSelectionPoint selectionScreenCoord. */
        public selectionScreenCoord?: (SC2APIProtocol.IPointI|null);

        /** ActionSpatialUnitSelectionPoint type. */
        public type: SC2APIProtocol.ActionSpatialUnitSelectionPoint.Type;

        /**
         * Creates a new ActionSpatialUnitSelectionPoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionSpatialUnitSelectionPoint instance
         */
        public static create(properties?: SC2APIProtocol.IActionSpatialUnitSelectionPoint): SC2APIProtocol.ActionSpatialUnitSelectionPoint;

        /**
         * Encodes the specified ActionSpatialUnitSelectionPoint message. Does not implicitly {@link SC2APIProtocol.ActionSpatialUnitSelectionPoint.verify|verify} messages.
         * @param message ActionSpatialUnitSelectionPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionSpatialUnitSelectionPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionSpatialUnitSelectionPoint message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionSpatialUnitSelectionPoint.verify|verify} messages.
         * @param message ActionSpatialUnitSelectionPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionSpatialUnitSelectionPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionSpatialUnitSelectionPoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionSpatialUnitSelectionPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionSpatialUnitSelectionPoint;

        /**
         * Decodes an ActionSpatialUnitSelectionPoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionSpatialUnitSelectionPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionSpatialUnitSelectionPoint;

        /**
         * Verifies an ActionSpatialUnitSelectionPoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionSpatialUnitSelectionPoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionSpatialUnitSelectionPoint
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionSpatialUnitSelectionPoint;

        /**
         * Creates a plain object from an ActionSpatialUnitSelectionPoint message. Also converts values to other types if specified.
         * @param message ActionSpatialUnitSelectionPoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionSpatialUnitSelectionPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionSpatialUnitSelectionPoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ActionSpatialUnitSelectionPoint {

        /** Type enum. */
        enum Type {
            Select = 1,
            Toggle = 2,
            AllType = 3,
            AddAllType = 4
        }
    }

    /** Properties of an ActionSpatialUnitSelectionRect. */
    interface IActionSpatialUnitSelectionRect {

        /** ActionSpatialUnitSelectionRect selectionScreenCoord */
        selectionScreenCoord?: SC2APIProtocol.IRectangleI[];

        /** ActionSpatialUnitSelectionRect selectionAdd */
        selectionAdd?: boolean;
    }

    /** Represents an ActionSpatialUnitSelectionRect. */
    class ActionSpatialUnitSelectionRect {

        /**
         * Constructs a new ActionSpatialUnitSelectionRect.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionSpatialUnitSelectionRect);

        /** ActionSpatialUnitSelectionRect selectionScreenCoord. */
        public selectionScreenCoord: SC2APIProtocol.IRectangleI[];

        /** ActionSpatialUnitSelectionRect selectionAdd. */
        public selectionAdd: boolean;

        /**
         * Creates a new ActionSpatialUnitSelectionRect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionSpatialUnitSelectionRect instance
         */
        public static create(properties?: SC2APIProtocol.IActionSpatialUnitSelectionRect): SC2APIProtocol.ActionSpatialUnitSelectionRect;

        /**
         * Encodes the specified ActionSpatialUnitSelectionRect message. Does not implicitly {@link SC2APIProtocol.ActionSpatialUnitSelectionRect.verify|verify} messages.
         * @param message ActionSpatialUnitSelectionRect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionSpatialUnitSelectionRect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionSpatialUnitSelectionRect message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionSpatialUnitSelectionRect.verify|verify} messages.
         * @param message ActionSpatialUnitSelectionRect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionSpatialUnitSelectionRect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionSpatialUnitSelectionRect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionSpatialUnitSelectionRect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionSpatialUnitSelectionRect;

        /**
         * Decodes an ActionSpatialUnitSelectionRect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionSpatialUnitSelectionRect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionSpatialUnitSelectionRect;

        /**
         * Verifies an ActionSpatialUnitSelectionRect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionSpatialUnitSelectionRect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionSpatialUnitSelectionRect
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionSpatialUnitSelectionRect;

        /**
         * Creates a plain object from an ActionSpatialUnitSelectionRect message. Also converts values to other types if specified.
         * @param message ActionSpatialUnitSelectionRect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionSpatialUnitSelectionRect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionSpatialUnitSelectionRect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ObservationUI. */
    interface IObservationUI {

        /** ObservationUI groups */
        groups?: SC2APIProtocol.IControlGroup[];

        /** ObservationUI single */
        single?: SC2APIProtocol.ISinglePanel;

        /** ObservationUI multi */
        multi?: SC2APIProtocol.IMultiPanel;

        /** ObservationUI cargo */
        cargo?: SC2APIProtocol.ICargoPanel;

        /** ObservationUI production */
        production?: SC2APIProtocol.IProductionPanel;
    }

    /** Represents an ObservationUI. */
    class ObservationUI {

        /**
         * Constructs a new ObservationUI.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IObservationUI);

        /** ObservationUI groups. */
        public groups: SC2APIProtocol.IControlGroup[];

        /** ObservationUI single. */
        public single?: (SC2APIProtocol.ISinglePanel|null);

        /** ObservationUI multi. */
        public multi?: (SC2APIProtocol.IMultiPanel|null);

        /** ObservationUI cargo. */
        public cargo?: (SC2APIProtocol.ICargoPanel|null);

        /** ObservationUI production. */
        public production?: (SC2APIProtocol.IProductionPanel|null);

        /** ObservationUI panel. */
        public panel?: string;

        /**
         * Creates a new ObservationUI instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObservationUI instance
         */
        public static create(properties?: SC2APIProtocol.IObservationUI): SC2APIProtocol.ObservationUI;

        /**
         * Encodes the specified ObservationUI message. Does not implicitly {@link SC2APIProtocol.ObservationUI.verify|verify} messages.
         * @param message ObservationUI message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IObservationUI, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObservationUI message, length delimited. Does not implicitly {@link SC2APIProtocol.ObservationUI.verify|verify} messages.
         * @param message ObservationUI message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IObservationUI, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObservationUI message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObservationUI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ObservationUI;

        /**
         * Decodes an ObservationUI message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObservationUI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ObservationUI;

        /**
         * Verifies an ObservationUI message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObservationUI message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObservationUI
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ObservationUI;

        /**
         * Creates a plain object from an ObservationUI message. Also converts values to other types if specified.
         * @param message ObservationUI
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ObservationUI, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObservationUI to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ControlGroup. */
    interface IControlGroup {

        /** ControlGroup controlGroupIndex */
        controlGroupIndex?: number;

        /** ControlGroup leaderUnitType */
        leaderUnitType?: number;

        /** ControlGroup count */
        count?: number;
    }

    /** Represents a ControlGroup. */
    class ControlGroup {

        /**
         * Constructs a new ControlGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IControlGroup);

        /** ControlGroup controlGroupIndex. */
        public controlGroupIndex: number;

        /** ControlGroup leaderUnitType. */
        public leaderUnitType: number;

        /** ControlGroup count. */
        public count: number;

        /**
         * Creates a new ControlGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ControlGroup instance
         */
        public static create(properties?: SC2APIProtocol.IControlGroup): SC2APIProtocol.ControlGroup;

        /**
         * Encodes the specified ControlGroup message. Does not implicitly {@link SC2APIProtocol.ControlGroup.verify|verify} messages.
         * @param message ControlGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IControlGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ControlGroup message, length delimited. Does not implicitly {@link SC2APIProtocol.ControlGroup.verify|verify} messages.
         * @param message ControlGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IControlGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ControlGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ControlGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ControlGroup;

        /**
         * Decodes a ControlGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ControlGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ControlGroup;

        /**
         * Verifies a ControlGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ControlGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ControlGroup
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ControlGroup;

        /**
         * Creates a plain object from a ControlGroup message. Also converts values to other types if specified.
         * @param message ControlGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ControlGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ControlGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnitInfo. */
    interface IUnitInfo {

        /** UnitInfo unitType */
        unitType?: number;

        /** UnitInfo playerRelative */
        playerRelative?: number;

        /** UnitInfo health */
        health?: number;

        /** UnitInfo shields */
        shields?: number;

        /** UnitInfo energy */
        energy?: number;

        /** UnitInfo transportSlotsTaken */
        transportSlotsTaken?: number;

        /** UnitInfo buildProgress */
        buildProgress?: number;

        /** UnitInfo addOn */
        addOn?: SC2APIProtocol.IUnitInfo;
    }

    /** Represents an UnitInfo. */
    class UnitInfo {

        /**
         * Constructs a new UnitInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IUnitInfo);

        /** UnitInfo unitType. */
        public unitType: number;

        /** UnitInfo playerRelative. */
        public playerRelative: number;

        /** UnitInfo health. */
        public health: number;

        /** UnitInfo shields. */
        public shields: number;

        /** UnitInfo energy. */
        public energy: number;

        /** UnitInfo transportSlotsTaken. */
        public transportSlotsTaken: number;

        /** UnitInfo buildProgress. */
        public buildProgress: number;

        /** UnitInfo addOn. */
        public addOn?: (SC2APIProtocol.IUnitInfo|null);

        /**
         * Creates a new UnitInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnitInfo instance
         */
        public static create(properties?: SC2APIProtocol.IUnitInfo): SC2APIProtocol.UnitInfo;

        /**
         * Encodes the specified UnitInfo message. Does not implicitly {@link SC2APIProtocol.UnitInfo.verify|verify} messages.
         * @param message UnitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IUnitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnitInfo message, length delimited. Does not implicitly {@link SC2APIProtocol.UnitInfo.verify|verify} messages.
         * @param message UnitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IUnitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnitInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.UnitInfo;

        /**
         * Decodes an UnitInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.UnitInfo;

        /**
         * Verifies an UnitInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnitInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnitInfo
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.UnitInfo;

        /**
         * Creates a plain object from an UnitInfo message. Also converts values to other types if specified.
         * @param message UnitInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.UnitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnitInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SinglePanel. */
    interface ISinglePanel {

        /** SinglePanel unit */
        unit?: SC2APIProtocol.IUnitInfo;
    }

    /** Represents a SinglePanel. */
    class SinglePanel {

        /**
         * Constructs a new SinglePanel.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.ISinglePanel);

        /** SinglePanel unit. */
        public unit?: (SC2APIProtocol.IUnitInfo|null);

        /**
         * Creates a new SinglePanel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SinglePanel instance
         */
        public static create(properties?: SC2APIProtocol.ISinglePanel): SC2APIProtocol.SinglePanel;

        /**
         * Encodes the specified SinglePanel message. Does not implicitly {@link SC2APIProtocol.SinglePanel.verify|verify} messages.
         * @param message SinglePanel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.ISinglePanel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SinglePanel message, length delimited. Does not implicitly {@link SC2APIProtocol.SinglePanel.verify|verify} messages.
         * @param message SinglePanel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.ISinglePanel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SinglePanel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SinglePanel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.SinglePanel;

        /**
         * Decodes a SinglePanel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SinglePanel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.SinglePanel;

        /**
         * Verifies a SinglePanel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SinglePanel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SinglePanel
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.SinglePanel;

        /**
         * Creates a plain object from a SinglePanel message. Also converts values to other types if specified.
         * @param message SinglePanel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.SinglePanel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SinglePanel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MultiPanel. */
    interface IMultiPanel {

        /** MultiPanel units */
        units?: SC2APIProtocol.IUnitInfo[];
    }

    /** Represents a MultiPanel. */
    class MultiPanel {

        /**
         * Constructs a new MultiPanel.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IMultiPanel);

        /** MultiPanel units. */
        public units: SC2APIProtocol.IUnitInfo[];

        /**
         * Creates a new MultiPanel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MultiPanel instance
         */
        public static create(properties?: SC2APIProtocol.IMultiPanel): SC2APIProtocol.MultiPanel;

        /**
         * Encodes the specified MultiPanel message. Does not implicitly {@link SC2APIProtocol.MultiPanel.verify|verify} messages.
         * @param message MultiPanel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IMultiPanel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MultiPanel message, length delimited. Does not implicitly {@link SC2APIProtocol.MultiPanel.verify|verify} messages.
         * @param message MultiPanel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IMultiPanel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MultiPanel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MultiPanel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.MultiPanel;

        /**
         * Decodes a MultiPanel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MultiPanel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.MultiPanel;

        /**
         * Verifies a MultiPanel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MultiPanel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MultiPanel
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.MultiPanel;

        /**
         * Creates a plain object from a MultiPanel message. Also converts values to other types if specified.
         * @param message MultiPanel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.MultiPanel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MultiPanel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CargoPanel. */
    interface ICargoPanel {

        /** CargoPanel unit */
        unit?: SC2APIProtocol.IUnitInfo;

        /** CargoPanel passengers */
        passengers?: SC2APIProtocol.IUnitInfo[];

        /** CargoPanel slotsAvailable */
        slotsAvailable?: number;
    }

    /** Represents a CargoPanel. */
    class CargoPanel {

        /**
         * Constructs a new CargoPanel.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.ICargoPanel);

        /** CargoPanel unit. */
        public unit?: (SC2APIProtocol.IUnitInfo|null);

        /** CargoPanel passengers. */
        public passengers: SC2APIProtocol.IUnitInfo[];

        /** CargoPanel slotsAvailable. */
        public slotsAvailable: number;

        /**
         * Creates a new CargoPanel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CargoPanel instance
         */
        public static create(properties?: SC2APIProtocol.ICargoPanel): SC2APIProtocol.CargoPanel;

        /**
         * Encodes the specified CargoPanel message. Does not implicitly {@link SC2APIProtocol.CargoPanel.verify|verify} messages.
         * @param message CargoPanel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.ICargoPanel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CargoPanel message, length delimited. Does not implicitly {@link SC2APIProtocol.CargoPanel.verify|verify} messages.
         * @param message CargoPanel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.ICargoPanel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CargoPanel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CargoPanel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.CargoPanel;

        /**
         * Decodes a CargoPanel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CargoPanel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.CargoPanel;

        /**
         * Verifies a CargoPanel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CargoPanel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CargoPanel
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.CargoPanel;

        /**
         * Creates a plain object from a CargoPanel message. Also converts values to other types if specified.
         * @param message CargoPanel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.CargoPanel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CargoPanel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProductionPanel. */
    interface IProductionPanel {

        /** ProductionPanel unit */
        unit?: SC2APIProtocol.IUnitInfo;

        /** ProductionPanel buildQueue */
        buildQueue?: SC2APIProtocol.IUnitInfo[];
    }

    /** Represents a ProductionPanel. */
    class ProductionPanel {

        /**
         * Constructs a new ProductionPanel.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IProductionPanel);

        /** ProductionPanel unit. */
        public unit?: (SC2APIProtocol.IUnitInfo|null);

        /** ProductionPanel buildQueue. */
        public buildQueue: SC2APIProtocol.IUnitInfo[];

        /**
         * Creates a new ProductionPanel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProductionPanel instance
         */
        public static create(properties?: SC2APIProtocol.IProductionPanel): SC2APIProtocol.ProductionPanel;

        /**
         * Encodes the specified ProductionPanel message. Does not implicitly {@link SC2APIProtocol.ProductionPanel.verify|verify} messages.
         * @param message ProductionPanel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IProductionPanel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProductionPanel message, length delimited. Does not implicitly {@link SC2APIProtocol.ProductionPanel.verify|verify} messages.
         * @param message ProductionPanel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IProductionPanel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProductionPanel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProductionPanel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ProductionPanel;

        /**
         * Decodes a ProductionPanel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProductionPanel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ProductionPanel;

        /**
         * Verifies a ProductionPanel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProductionPanel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProductionPanel
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ProductionPanel;

        /**
         * Creates a plain object from a ProductionPanel message. Also converts values to other types if specified.
         * @param message ProductionPanel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ProductionPanel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProductionPanel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionUI. */
    interface IActionUI {

        /** ActionUI controlGroup */
        controlGroup?: SC2APIProtocol.IActionControlGroup;

        /** ActionUI selectArmy */
        selectArmy?: SC2APIProtocol.IActionSelectArmy;

        /** ActionUI selectWarpGates */
        selectWarpGates?: SC2APIProtocol.IActionSelectWarpGates;

        /** ActionUI selectLarva */
        selectLarva?: SC2APIProtocol.IActionSelectLarva;

        /** ActionUI selectIdleWorker */
        selectIdleWorker?: SC2APIProtocol.IActionSelectIdleWorker;

        /** ActionUI multiPanel */
        multiPanel?: SC2APIProtocol.IActionMultiPanel;

        /** ActionUI cargoPanel */
        cargoPanel?: SC2APIProtocol.IActionCargoPanelUnload;

        /** ActionUI productionPanel */
        productionPanel?: SC2APIProtocol.IActionProductionPanelRemoveFromQueue;

        /** ActionUI toggleAutocast */
        toggleAutocast?: SC2APIProtocol.IActionToggleAutocast;
    }

    /** Represents an ActionUI. */
    class ActionUI {

        /**
         * Constructs a new ActionUI.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionUI);

        /** ActionUI controlGroup. */
        public controlGroup?: (SC2APIProtocol.IActionControlGroup|null);

        /** ActionUI selectArmy. */
        public selectArmy?: (SC2APIProtocol.IActionSelectArmy|null);

        /** ActionUI selectWarpGates. */
        public selectWarpGates?: (SC2APIProtocol.IActionSelectWarpGates|null);

        /** ActionUI selectLarva. */
        public selectLarva?: (SC2APIProtocol.IActionSelectLarva|null);

        /** ActionUI selectIdleWorker. */
        public selectIdleWorker?: (SC2APIProtocol.IActionSelectIdleWorker|null);

        /** ActionUI multiPanel. */
        public multiPanel?: (SC2APIProtocol.IActionMultiPanel|null);

        /** ActionUI cargoPanel. */
        public cargoPanel?: (SC2APIProtocol.IActionCargoPanelUnload|null);

        /** ActionUI productionPanel. */
        public productionPanel?: (SC2APIProtocol.IActionProductionPanelRemoveFromQueue|null);

        /** ActionUI toggleAutocast. */
        public toggleAutocast?: (SC2APIProtocol.IActionToggleAutocast|null);

        /** ActionUI action. */
        public action?: string;

        /**
         * Creates a new ActionUI instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionUI instance
         */
        public static create(properties?: SC2APIProtocol.IActionUI): SC2APIProtocol.ActionUI;

        /**
         * Encodes the specified ActionUI message. Does not implicitly {@link SC2APIProtocol.ActionUI.verify|verify} messages.
         * @param message ActionUI message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionUI, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionUI message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionUI.verify|verify} messages.
         * @param message ActionUI message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionUI, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionUI message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionUI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionUI;

        /**
         * Decodes an ActionUI message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionUI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionUI;

        /**
         * Verifies an ActionUI message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionUI message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionUI
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionUI;

        /**
         * Creates a plain object from an ActionUI message. Also converts values to other types if specified.
         * @param message ActionUI
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionUI, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionUI to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionControlGroup. */
    interface IActionControlGroup {

        /** ActionControlGroup action */
        action?: SC2APIProtocol.ActionControlGroup.ControlGroupAction;

        /** ActionControlGroup controlGroupIndex */
        controlGroupIndex?: number;
    }

    /** Represents an ActionControlGroup. */
    class ActionControlGroup {

        /**
         * Constructs a new ActionControlGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionControlGroup);

        /** ActionControlGroup action. */
        public action: SC2APIProtocol.ActionControlGroup.ControlGroupAction;

        /** ActionControlGroup controlGroupIndex. */
        public controlGroupIndex: number;

        /**
         * Creates a new ActionControlGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionControlGroup instance
         */
        public static create(properties?: SC2APIProtocol.IActionControlGroup): SC2APIProtocol.ActionControlGroup;

        /**
         * Encodes the specified ActionControlGroup message. Does not implicitly {@link SC2APIProtocol.ActionControlGroup.verify|verify} messages.
         * @param message ActionControlGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionControlGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionControlGroup message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionControlGroup.verify|verify} messages.
         * @param message ActionControlGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionControlGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionControlGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionControlGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionControlGroup;

        /**
         * Decodes an ActionControlGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionControlGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionControlGroup;

        /**
         * Verifies an ActionControlGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionControlGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionControlGroup
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionControlGroup;

        /**
         * Creates a plain object from an ActionControlGroup message. Also converts values to other types if specified.
         * @param message ActionControlGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionControlGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionControlGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ActionControlGroup {

        /** ControlGroupAction enum. */
        enum ControlGroupAction {
            Recall = 1,
            Set = 2,
            Append = 3,
            SetAndSteal = 4,
            AppendAndSteal = 5
        }
    }

    /** Properties of an ActionSelectArmy. */
    interface IActionSelectArmy {

        /** ActionSelectArmy selectionAdd */
        selectionAdd?: boolean;
    }

    /** Represents an ActionSelectArmy. */
    class ActionSelectArmy {

        /**
         * Constructs a new ActionSelectArmy.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionSelectArmy);

        /** ActionSelectArmy selectionAdd. */
        public selectionAdd: boolean;

        /**
         * Creates a new ActionSelectArmy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionSelectArmy instance
         */
        public static create(properties?: SC2APIProtocol.IActionSelectArmy): SC2APIProtocol.ActionSelectArmy;

        /**
         * Encodes the specified ActionSelectArmy message. Does not implicitly {@link SC2APIProtocol.ActionSelectArmy.verify|verify} messages.
         * @param message ActionSelectArmy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionSelectArmy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionSelectArmy message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionSelectArmy.verify|verify} messages.
         * @param message ActionSelectArmy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionSelectArmy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionSelectArmy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionSelectArmy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionSelectArmy;

        /**
         * Decodes an ActionSelectArmy message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionSelectArmy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionSelectArmy;

        /**
         * Verifies an ActionSelectArmy message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionSelectArmy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionSelectArmy
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionSelectArmy;

        /**
         * Creates a plain object from an ActionSelectArmy message. Also converts values to other types if specified.
         * @param message ActionSelectArmy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionSelectArmy, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionSelectArmy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionSelectWarpGates. */
    interface IActionSelectWarpGates {

        /** ActionSelectWarpGates selectionAdd */
        selectionAdd?: boolean;
    }

    /** Represents an ActionSelectWarpGates. */
    class ActionSelectWarpGates {

        /**
         * Constructs a new ActionSelectWarpGates.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionSelectWarpGates);

        /** ActionSelectWarpGates selectionAdd. */
        public selectionAdd: boolean;

        /**
         * Creates a new ActionSelectWarpGates instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionSelectWarpGates instance
         */
        public static create(properties?: SC2APIProtocol.IActionSelectWarpGates): SC2APIProtocol.ActionSelectWarpGates;

        /**
         * Encodes the specified ActionSelectWarpGates message. Does not implicitly {@link SC2APIProtocol.ActionSelectWarpGates.verify|verify} messages.
         * @param message ActionSelectWarpGates message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionSelectWarpGates, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionSelectWarpGates message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionSelectWarpGates.verify|verify} messages.
         * @param message ActionSelectWarpGates message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionSelectWarpGates, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionSelectWarpGates message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionSelectWarpGates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionSelectWarpGates;

        /**
         * Decodes an ActionSelectWarpGates message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionSelectWarpGates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionSelectWarpGates;

        /**
         * Verifies an ActionSelectWarpGates message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionSelectWarpGates message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionSelectWarpGates
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionSelectWarpGates;

        /**
         * Creates a plain object from an ActionSelectWarpGates message. Also converts values to other types if specified.
         * @param message ActionSelectWarpGates
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionSelectWarpGates, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionSelectWarpGates to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionSelectLarva. */
    interface IActionSelectLarva {
    }

    /** Represents an ActionSelectLarva. */
    class ActionSelectLarva {

        /**
         * Constructs a new ActionSelectLarva.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionSelectLarva);

        /**
         * Creates a new ActionSelectLarva instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionSelectLarva instance
         */
        public static create(properties?: SC2APIProtocol.IActionSelectLarva): SC2APIProtocol.ActionSelectLarva;

        /**
         * Encodes the specified ActionSelectLarva message. Does not implicitly {@link SC2APIProtocol.ActionSelectLarva.verify|verify} messages.
         * @param message ActionSelectLarva message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionSelectLarva, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionSelectLarva message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionSelectLarva.verify|verify} messages.
         * @param message ActionSelectLarva message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionSelectLarva, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionSelectLarva message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionSelectLarva
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionSelectLarva;

        /**
         * Decodes an ActionSelectLarva message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionSelectLarva
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionSelectLarva;

        /**
         * Verifies an ActionSelectLarva message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionSelectLarva message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionSelectLarva
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionSelectLarva;

        /**
         * Creates a plain object from an ActionSelectLarva message. Also converts values to other types if specified.
         * @param message ActionSelectLarva
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionSelectLarva, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionSelectLarva to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionSelectIdleWorker. */
    interface IActionSelectIdleWorker {

        /** ActionSelectIdleWorker type */
        type?: SC2APIProtocol.ActionSelectIdleWorker.Type;
    }

    /** Represents an ActionSelectIdleWorker. */
    class ActionSelectIdleWorker {

        /**
         * Constructs a new ActionSelectIdleWorker.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionSelectIdleWorker);

        /** ActionSelectIdleWorker type. */
        public type: SC2APIProtocol.ActionSelectIdleWorker.Type;

        /**
         * Creates a new ActionSelectIdleWorker instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionSelectIdleWorker instance
         */
        public static create(properties?: SC2APIProtocol.IActionSelectIdleWorker): SC2APIProtocol.ActionSelectIdleWorker;

        /**
         * Encodes the specified ActionSelectIdleWorker message. Does not implicitly {@link SC2APIProtocol.ActionSelectIdleWorker.verify|verify} messages.
         * @param message ActionSelectIdleWorker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionSelectIdleWorker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionSelectIdleWorker message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionSelectIdleWorker.verify|verify} messages.
         * @param message ActionSelectIdleWorker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionSelectIdleWorker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionSelectIdleWorker message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionSelectIdleWorker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionSelectIdleWorker;

        /**
         * Decodes an ActionSelectIdleWorker message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionSelectIdleWorker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionSelectIdleWorker;

        /**
         * Verifies an ActionSelectIdleWorker message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionSelectIdleWorker message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionSelectIdleWorker
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionSelectIdleWorker;

        /**
         * Creates a plain object from an ActionSelectIdleWorker message. Also converts values to other types if specified.
         * @param message ActionSelectIdleWorker
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionSelectIdleWorker, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionSelectIdleWorker to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ActionSelectIdleWorker {

        /** Type enum. */
        enum Type {
            Set = 1,
            Add = 2,
            All = 3,
            AddAll = 4
        }
    }

    /** Properties of an ActionMultiPanel. */
    interface IActionMultiPanel {

        /** ActionMultiPanel type */
        type?: SC2APIProtocol.ActionMultiPanel.Type;

        /** ActionMultiPanel unitIndex */
        unitIndex?: number;
    }

    /** Represents an ActionMultiPanel. */
    class ActionMultiPanel {

        /**
         * Constructs a new ActionMultiPanel.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionMultiPanel);

        /** ActionMultiPanel type. */
        public type: SC2APIProtocol.ActionMultiPanel.Type;

        /** ActionMultiPanel unitIndex. */
        public unitIndex: number;

        /**
         * Creates a new ActionMultiPanel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionMultiPanel instance
         */
        public static create(properties?: SC2APIProtocol.IActionMultiPanel): SC2APIProtocol.ActionMultiPanel;

        /**
         * Encodes the specified ActionMultiPanel message. Does not implicitly {@link SC2APIProtocol.ActionMultiPanel.verify|verify} messages.
         * @param message ActionMultiPanel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionMultiPanel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionMultiPanel message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionMultiPanel.verify|verify} messages.
         * @param message ActionMultiPanel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionMultiPanel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionMultiPanel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionMultiPanel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionMultiPanel;

        /**
         * Decodes an ActionMultiPanel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionMultiPanel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionMultiPanel;

        /**
         * Verifies an ActionMultiPanel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionMultiPanel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionMultiPanel
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionMultiPanel;

        /**
         * Creates a plain object from an ActionMultiPanel message. Also converts values to other types if specified.
         * @param message ActionMultiPanel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionMultiPanel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionMultiPanel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ActionMultiPanel {

        /** Type enum. */
        enum Type {
            SingleSelect = 1,
            DeselectUnit = 2,
            SelectAllOfType = 3,
            DeselectAllOfType = 4
        }
    }

    /** Properties of an ActionCargoPanelUnload. */
    interface IActionCargoPanelUnload {

        /** ActionCargoPanelUnload unitIndex */
        unitIndex?: number;
    }

    /** Represents an ActionCargoPanelUnload. */
    class ActionCargoPanelUnload {

        /**
         * Constructs a new ActionCargoPanelUnload.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionCargoPanelUnload);

        /** ActionCargoPanelUnload unitIndex. */
        public unitIndex: number;

        /**
         * Creates a new ActionCargoPanelUnload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionCargoPanelUnload instance
         */
        public static create(properties?: SC2APIProtocol.IActionCargoPanelUnload): SC2APIProtocol.ActionCargoPanelUnload;

        /**
         * Encodes the specified ActionCargoPanelUnload message. Does not implicitly {@link SC2APIProtocol.ActionCargoPanelUnload.verify|verify} messages.
         * @param message ActionCargoPanelUnload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionCargoPanelUnload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionCargoPanelUnload message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionCargoPanelUnload.verify|verify} messages.
         * @param message ActionCargoPanelUnload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionCargoPanelUnload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionCargoPanelUnload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionCargoPanelUnload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionCargoPanelUnload;

        /**
         * Decodes an ActionCargoPanelUnload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionCargoPanelUnload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionCargoPanelUnload;

        /**
         * Verifies an ActionCargoPanelUnload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionCargoPanelUnload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionCargoPanelUnload
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionCargoPanelUnload;

        /**
         * Creates a plain object from an ActionCargoPanelUnload message. Also converts values to other types if specified.
         * @param message ActionCargoPanelUnload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionCargoPanelUnload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionCargoPanelUnload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionProductionPanelRemoveFromQueue. */
    interface IActionProductionPanelRemoveFromQueue {

        /** ActionProductionPanelRemoveFromQueue unitIndex */
        unitIndex?: number;
    }

    /** Represents an ActionProductionPanelRemoveFromQueue. */
    class ActionProductionPanelRemoveFromQueue {

        /**
         * Constructs a new ActionProductionPanelRemoveFromQueue.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionProductionPanelRemoveFromQueue);

        /** ActionProductionPanelRemoveFromQueue unitIndex. */
        public unitIndex: number;

        /**
         * Creates a new ActionProductionPanelRemoveFromQueue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionProductionPanelRemoveFromQueue instance
         */
        public static create(properties?: SC2APIProtocol.IActionProductionPanelRemoveFromQueue): SC2APIProtocol.ActionProductionPanelRemoveFromQueue;

        /**
         * Encodes the specified ActionProductionPanelRemoveFromQueue message. Does not implicitly {@link SC2APIProtocol.ActionProductionPanelRemoveFromQueue.verify|verify} messages.
         * @param message ActionProductionPanelRemoveFromQueue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionProductionPanelRemoveFromQueue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionProductionPanelRemoveFromQueue message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionProductionPanelRemoveFromQueue.verify|verify} messages.
         * @param message ActionProductionPanelRemoveFromQueue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionProductionPanelRemoveFromQueue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionProductionPanelRemoveFromQueue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionProductionPanelRemoveFromQueue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionProductionPanelRemoveFromQueue;

        /**
         * Decodes an ActionProductionPanelRemoveFromQueue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionProductionPanelRemoveFromQueue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionProductionPanelRemoveFromQueue;

        /**
         * Verifies an ActionProductionPanelRemoveFromQueue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionProductionPanelRemoveFromQueue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionProductionPanelRemoveFromQueue
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionProductionPanelRemoveFromQueue;

        /**
         * Creates a plain object from an ActionProductionPanelRemoveFromQueue message. Also converts values to other types if specified.
         * @param message ActionProductionPanelRemoveFromQueue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionProductionPanelRemoveFromQueue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionProductionPanelRemoveFromQueue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActionToggleAutocast. */
    interface IActionToggleAutocast {

        /** ActionToggleAutocast abilityId */
        abilityId?: number;
    }

    /** Represents an ActionToggleAutocast. */
    class ActionToggleAutocast {

        /**
         * Constructs a new ActionToggleAutocast.
         * @param [properties] Properties to set
         */
        constructor(properties?: SC2APIProtocol.IActionToggleAutocast);

        /** ActionToggleAutocast abilityId. */
        public abilityId: number;

        /**
         * Creates a new ActionToggleAutocast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionToggleAutocast instance
         */
        public static create(properties?: SC2APIProtocol.IActionToggleAutocast): SC2APIProtocol.ActionToggleAutocast;

        /**
         * Encodes the specified ActionToggleAutocast message. Does not implicitly {@link SC2APIProtocol.ActionToggleAutocast.verify|verify} messages.
         * @param message ActionToggleAutocast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SC2APIProtocol.IActionToggleAutocast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionToggleAutocast message, length delimited. Does not implicitly {@link SC2APIProtocol.ActionToggleAutocast.verify|verify} messages.
         * @param message ActionToggleAutocast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SC2APIProtocol.IActionToggleAutocast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionToggleAutocast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionToggleAutocast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SC2APIProtocol.ActionToggleAutocast;

        /**
         * Decodes an ActionToggleAutocast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionToggleAutocast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SC2APIProtocol.ActionToggleAutocast;

        /**
         * Verifies an ActionToggleAutocast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionToggleAutocast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionToggleAutocast
         */
        public static fromObject(object: { [k: string]: any }): SC2APIProtocol.ActionToggleAutocast;

        /**
         * Creates a plain object from an ActionToggleAutocast message. Also converts values to other types if specified.
         * @param message ActionToggleAutocast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SC2APIProtocol.ActionToggleAutocast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionToggleAutocast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
