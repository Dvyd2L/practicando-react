const Loading = ({ handleClick }: { handleClick?: () => void }) => (
  <div>
    <span>Cargando...</span>
    {handleClick && (
      <button type="button" onClick={handleClick}>
        Cancelar
      </button>
    )}
  </div>
);
export default Loading;
