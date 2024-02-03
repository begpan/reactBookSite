import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  // useparams url deki araama parametrelerimizi yonetmemizi saglar
  // gerite dizi içinde iki elaman dondurur
  // 1-urldeki arama parametreleri
  // 2- bunları değiştirmeye yarayan method
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const handleChange = (e) => {
    // eklenicek paraametreyi belirliyoruz
    searchParams.set("sırala", e.target.value);
    // url i guncelliyıruz
    setSearchParams(searchParams);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set("aramaTerimi", e.target[0].value);
    setSearchParams(searchParams);
  };
  return (
    <div className=" mt-4 d-flex justify-content-between align-items-center">
      <div className="d-flex  gap-3 align-items-center">
        <label>Sırala</label>
        <select onChange={handleChange} className="form-select">
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          placeholder="kitap ismi giriniz"
          className="form-control"
          type="text"
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;
