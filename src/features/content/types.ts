import type { Issue } from "@/features/reflect/types";

export type Article = {
  id: string;
  title: string;
  description: string;
  tags: Issue[];
  levelRange: [number, number];
  access: "public" | "private";
  contentType: "article" | "story" | "exercise" | "journal";
  body: string;
};
