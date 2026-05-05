import { Selection } from "./selections";

export type ContentItem = {
    tag: Selection;
    text: string;
  };
  
  export const content: ContentItem[] = [
    { tag: "academic", text: "Break study into smaller chunks." },
    { tag: "financial", text: "Track your expenses clearly." },
    { tag: "social", text: "Limit comparison triggers." },
    { tag: "family", text: "Communicate calmly and clearly." },
  ];
  
  export function getContent(selection: Selection | null) {
    return content.find(c => c.tag === selection);
  }