// https://www.sanity.io/docs/structure-builder-cheat-sheet
import type { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title("Publication Page Settings")
        .child(
          S.document()
            .schemaType("publicationPageSettings")
            .documentId("publicationPageSettings"),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: { getId: () => string | undefined }) =>
          item.getId() !== "publicationPageSettings",
      ),
    ]);
