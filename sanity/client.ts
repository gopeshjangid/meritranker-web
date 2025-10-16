import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "a1k7b5ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
