const AlertDialog = ({ content, onDelete }) => {
  return (
    <div className="p-5">
      <p className="text-[14px]">{content}</p>
      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="flex items-center justify-center gap-3 bg-linear-to-r from-rose-400 to-rose-700 text-sm font-semibold text-white px-7 py-2 rounded-lg hover:bg-rose-900 hover:text-white transition-colors cursor-pointer hover:shadow-2xl hover:shadow-rose-300"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AlertDialog;
