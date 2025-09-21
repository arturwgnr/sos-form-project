// src/utils/idGenerator.ts
export function generateReportId(): string {
  const lastId = localStorage.getItem("lastReportId");
  const nextId = lastId ? parseInt(lastId) + 1 : 1;
  localStorage.setItem("lastReportId", nextId.toString());
  return String(nextId).padStart(4, "0"); // exemplo: 0001, 0002
}