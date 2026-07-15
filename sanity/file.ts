import { client } from "./client";

export function fileUrl(source: any) {
  if (!source?.asset?._ref) return "";

  const ref = source.asset._ref;

  const [, id, extension] = ref.split("-");

  return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${id}.${extension}`;
}