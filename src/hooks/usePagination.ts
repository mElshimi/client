type TUsePaginationProps<T> = {
  records: T[];
  recordsPerPage: number;
  currentPage: number;
};

const usePagination = <T>({
  records,
  recordsPerPage,
  currentPage,
}: TUsePaginationProps<T>) => {
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const recordsRender = records?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(records?.length / recordsPerPage);
  return { recordsRender, totalPages };
};

export default usePagination;
