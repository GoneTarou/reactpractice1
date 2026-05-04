export const StartPage = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 from-blue-50 to-indigo-100 ">
      <div className="bg-white">
        <h1>猫ミーム診断</h1>

        <p className="text-gray-600 text-center mb-6">３つの質問に答えて</p>
        <button onClick={onStart}
          className="flex items-center gap-2 bg-blue text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-600
            hover:text-white transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          <svg className="w-5 h-5 fill-current"></svg>
          <span>診断スタート</span>
        </button>
      </div>
    </div>
  );
};