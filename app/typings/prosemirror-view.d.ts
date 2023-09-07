import "prosemirror-view";

declare module "prosemirror-view" {
  import { ResolvedPos } from "prosemirror-model";
  import { EditorView } from "prosemirror-view";

  export function __parseFromClipboard(
    view: EditorView,
    text: string,
    html: string | null,
    plainText: boolean,
    $context: ResolvedPos
  );

  export function __serializeForClipboard(
    view: EditorView,
    slice: Slice
  ): {
    dom: Element;
    text: string;
  };
}
