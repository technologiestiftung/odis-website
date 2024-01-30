export const boldify = (str: string, className = ""): string => {
  const includesBr = str.includes("<br />") || str.includes("<br/>");
  if (!includesBr) return `<strong>${str}</strong>`;
  return str.replaceAll(
    /\*\*(.+)\*\*/g,
    `<strong class='${className} text-balance block'>$1</strong>`,
  );
};
