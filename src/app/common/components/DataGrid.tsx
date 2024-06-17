import { IIDentificable } from "@/app/common/interfaces/identificable";
import "./DataGrid.module.css";
interface IHandlers {
  update?: (id?: number) => void;
  delete?: (id?: number) => void;
}
interface DataGridProps<T> {
  data: T[];
  handlers?: IHandlers;
}
const DataGrid = <T extends IIDentificable<number>>({
  data,
  handlers,
}: DataGridProps<T>) => (
  <table>
    <thead>
      <tr>
        {data?.[0] &&
          Object.keys(data[0]).map((key, idx) => <th key={idx} scope="col">{key}</th>)}
        <th key={crypto.randomUUID()}></th>
      </tr>
    </thead>
    <tbody>
      {!data && <tr>No hay datos</tr>}
      {data?.length > 0 &&
        data.map((obj, rowIdx) => (
          <tr key={rowIdx}>
            {Object.values(obj).map((val, colIdx) => (
              <td key={colIdx}>{String(val)}</td>
            ))}
            <td key={obj.id}>
              {handlers?.update && (
                <button type="button" onClick={() => handlers.update?.(obj.id)}>
                  Actualizar
                </button>
              )}

              {handlers?.delete && (
                <button type="button" onClick={() => handlers.delete?.(obj.id)}>
                  Eliminar
                </button>
              )}
            </td>
          </tr>
        ))}
    </tbody>
  </table>
);
export default DataGrid;
