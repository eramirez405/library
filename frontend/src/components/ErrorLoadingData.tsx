const ErrorLoadingData = () => {
  return (
    <div className="m-20">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center text-xl"
        role="alert"
      >
        <p>
          <strong className="font-bold">Error Loading Data!</strong>
        </p>
        <p className="block sm:inline">Try again later.</p>
      </div>
    </div>
  );
};

export default ErrorLoadingData;
