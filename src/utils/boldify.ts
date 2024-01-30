export const boldify = (str: string): string => {
  const includesBr = str.includes("<br />") || str.includes("<br/>");
  if (!includesBr) return `<strong>${str}</strong>`;
  return str.replaceAll(/\*\*(.+)\*\*/g, "<strong>$1</strong>");
};
