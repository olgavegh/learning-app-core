export const transformFireBase = (fireBaseData) => {
  if (!fireBaseData) return;

  return Object.keys(fireBaseData).map((id) => ({
    ...fireBaseData[id],
    id,
  }));
};
