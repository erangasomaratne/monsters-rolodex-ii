export function search(list, searchQuery) {
  return list.filter(l =>
    l.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
}
