export const ResultPage = ({ result, onRestart }) => {
  return (
    <div>
      <h2>{result.title}</h2>
      <p>{result.description}</p>

      <div style={{ marginTop: "20px" }}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${result.youtubeId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <button onClick={onRestart}>もう一度診断する</button>
    </div>
  );
};