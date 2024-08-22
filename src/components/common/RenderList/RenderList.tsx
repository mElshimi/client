import { IRenderListProps } from "../../../interfaces/interfaces";

const RenderList = <T extends { id?: string }>({
  records,
  renderItem,
  className,
}: IRenderListProps<T>) => {
  const itemsList =
    records.length > 0 ? (
      records.map((record) => {
        return <div key={record?.id}>{renderItem(record)}</div>;
      })
    ) : (
      <h2 className="text-center">{`There are no items`}</h2>
    );
  return <div className={`grid gap-5 ${className}`}>{itemsList}</div>;
};

export default RenderList;
