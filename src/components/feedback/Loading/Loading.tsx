import { ILoadingProps } from "../../../interfaces/interfaces";

const Loading = ({ status, error, children }: ILoadingProps) => {
  if (status === "pending") {
    return <LoadingIcone />;
  }
  if (status === "failed") {
    return (
      error && (
        <div className="text-center">
          <h2>Error</h2>
          <p>Oops, something went wrong. please try again later</p>
        </div>
      )
    );
  }
  return <>{children}</>;
};

export default Loading;

const LoadingIcone = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
      </div>
    </div>
  );
};
