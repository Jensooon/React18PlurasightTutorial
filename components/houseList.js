import HouseRow from "./houseRow";

const houseArray = [
    {
      id: 1,
      address: "12 Valley of Kings, Geneva",
      country: "Switzerland",
      price: 900000,
    },
    {
      id: 2,
      address: "89 Road of Forks, Bern",
      country: "Switzerland",
      price: 500000,
    },
  ];

  const HouseList = () => {
    const [houses, setHouses] = useState(houseArray);
    return (
        <div>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currenlty on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houseArray.map(h => <HouseRow key={h.id} house={h} />)}
                </tbody>
            </table>
        </div>
    )
};

export default HouseList;