import client from "@sanity/client";

export default client({
  projectId: "1sz3se83",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-18",
});
