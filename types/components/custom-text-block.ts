import type {
    ArbitraryTypedObject,
    PortableTextBlock,
    PortableTextMarkDefinition,
    PortableTextSpan,
} from "@portabletext/types";

export type TextBlock =
    | PortableTextBlock<
    PortableTextMarkDefinition,
    ArbitraryTypedObject | PortableTextSpan,
    string,
    string
>[]
    | undefined;