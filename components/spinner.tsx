export const Spinner = () => {
  return (
    <div className=" bg-paper absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};
