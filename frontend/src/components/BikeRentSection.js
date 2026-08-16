import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BikeAll, FilterBikes } from "../redux/features/Bikes/bikeAction";
import { CategoryAll } from "../redux/features/Category/categoryAction";
import { Checkbox, Radio } from "antd";
import Layout from "./Layout";
import { Prices } from "../Helper/Prices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMotorcycle, 
  faFilter, 
  faTimes, 
  faIndianRupeeSign,
  faCalendarDay,
  faListCheck,
  faMoneyBillWave,
  faBroom,
  faBolt,
  faGasPump,
  faGauge
} from "@fortawesome/free-solid-svg-icons";


const BikeRentSection = () => {
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const location = useLocation();

  const dispatch = useDispatch();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  dispatch(CategoryAll());

  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("category");

  if (categoryId) {
    setChecked([categoryId]);
    dispatch(FilterBikes({ radio: [], checked: [categoryId] }));
  } else {
    dispatch(BikeAll());
  }

  setIsInitialLoad(false); // Initial load complete
}, [dispatch, location.search]);

useEffect(() => {
  if (isInitialLoad) return; // prevent firing on initial load

  if (!radio.length && !checked.length) {
    dispatch(BikeAll());
  } else {
    dispatch(FilterBikes({ radio, checked }));
  }
}, [radio, checked, dispatch, isInitialLoad]);

  const { bikes } = useSelector((state) => state.bike);
  const { categories } = useSelector((state) => state.category);

  const base_url = "http://localhost:5001";

  const handleFilter = (isChecked, id) => {
    setChecked((prevChecked) =>
      isChecked ? [...prevChecked, id] : prevChecked.filter((c) => c !== id)
    );
  };

  const clearFilters = () => {
    setChecked([]);
    setRadio([]);
  };

  return (
    <Layout title="RideEase">
      {/* Mobile Filter Button */}
      <div className="lg:hidden flex justify-center mb-4">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#8B4D3A] text-white rounded-lg hover:bg-[#5a4239] transition-all"
        >
          <FontAwesomeIcon icon={faFilter} />
          Filters
        </button>
      </div>

      <section className="flex flex-col lg:flex-row h-full">
        {/* Desktop Filters */}
        <aside className="hidden lg:block w-full lg:w-1/5 border-r-2 border-[#DCA689] p-5 bg-white/95">
          <h1 className="text-xl font-bold text-[#5a4239] mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faFilter} className="text-[#A15E48]" />
            Filters
          </h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[#5a4239] mb-2 flex items-center gap-2">
                <FontAwesomeIcon icon={faListCheck} className="text-[#A15E48] text-sm" />
                Categories
              </h2>
              <div className="space-y-2">
                {categories?.map((c) => (
                  <div key={c._id} className="flex items-center">
                    <Checkbox
                      onChange={(e) => handleFilter(e.target.checked, c._id)}
                      checked={checked.includes(c._id)}
                      className="text-[#5a4239]"
                    >
                      <span className="ml-2">{c.name}</span>
                    </Checkbox>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#5a4239] mb-2 flex items-center gap-2">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-[#A15E48] text-sm" />
                Price Range
              </h2>
              <Radio.Group 
                onChange={(e) => setRadio(e.target.value)}
                value={radio}
                className="flex flex-col space-y-2"
              >
                {Prices?.map((p) => (
                  <Radio 
                    key={p.array} 
                    value={p.array}
                    className="text-[#5a4239]"
                  >
                    {p.name}
                  </Radio>
                ))}
              </Radio.Group>
            </div>

            <button
              onClick={clearFilters}
              className="w-full py-2 px-4 bg-gradient-to-r from-[#A15E48] to-[#DCA689] text-white rounded-lg hover:from-[#8B4D3A] hover:to-[#A15E48] transition-all flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faBroom} />
              Clear Filters
            </button>
          </div>
        </aside>

        {/* Mobile Filters Overlay */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
            <div className="absolute right-0 top-0 h-full w-3/4 bg-white/95 backdrop-blur-sm p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-[#5a4239] flex items-center gap-2">
                  <FontAwesomeIcon icon={faFilter} className="text-[#A15E48]" />
                  Filters
                </h1>
                <button 
                  onClick={() => setMobileFiltersOpen(false)}
                  className="text-[#5a4239] hover:text-[#8B4D3A]"
                >
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-[#5a4239] mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faListCheck} className="text-[#A15E48] text-sm" />
                    Categories
                  </h2>
                  <div className="space-y-2">
                    {categories?.map((c) => (
                      <div key={c._id} className="flex items-center">
                        <Checkbox
                          onChange={(e) => handleFilter(e.target.checked, c._id)}
                          checked={checked.includes(c._id)}
                          className="text-[#5a4239]"
                        >
                          <span className="ml-2">{c.name}</span>
                        </Checkbox>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-[#5a4239] mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-[#A15E48] text-sm" />
                    Price Range
                  </h2>
                  <Radio.Group 
                    onChange={(e) => setRadio(e.target.value)}
                    value={radio}
                    className="flex flex-col space-y-2"
                  >
                    {Prices?.map((p) => (
                      <Radio 
                        key={p.array} 
                        value={p.array}
                        className="text-[#5a4239]"
                      >
                        {p.name}
                      </Radio>
                    ))}
                  </Radio.Group>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={clearFilters}
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-[#A15E48] to-[#DCA689] text-white rounded-lg hover:from-[#8B4D3A] hover:to-[#A15E48] transition-all flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faBroom} />
                    Clear
                  </button>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="flex-1 py-2 px-4 bg-[#5a4239] text-white rounded-lg hover:bg-[#733F30] transition-all"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bike Listings */}
        <div className="w-full lg:w-4/5 p-4 bg-gradient-to-br from-[#fff7f0] via-[#fde9dc] to-[#f8d9c6]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bikes && bikes.length > 0 ? (
              bikes.map((bike) => (
                <div 
                  key={bike._id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt={bike.name}
                      className="object-cover w-full h-full"
                      src={`${base_url}/api/v1/bike/bike-photo/${bike._id}`}
                    />
                    <div className="absolute top-2 right-2 bg-[#8B4D3A]/90 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <FontAwesomeIcon icon={faMotorcycle} />
                      <span>{bike.category?.name}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-[#5a4239] flex items-center gap-2">
                      <FontAwesomeIcon icon={faMotorcycle} className="text-[#A15E48]" />
                      {bike.name}
                    </h2>
                    
                    <div className="mt-2 space-y-2">
                      <p className="text-[#8B4D3A] font-medium flex items-center gap-2">
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                        {bike.price} <span className="text-sm text-gray-500">/day</span>
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        {bike.fuelType && (
                          <span className="text-xs bg-[#f8d9c6] text-[#5a4239] px-2 py-1 rounded-full flex items-center gap-1">
                            <FontAwesomeIcon icon={faGasPump} />
                            {bike.fuelType}
                          </span>
                        )}
                        {bike.enginePower && (
                          <span className="text-xs bg-[#f8d9c6] text-[#5a4239] px-2 py-1 rounded-full flex items-center gap-1">
                            <FontAwesomeIcon icon={faBolt} />
                            {bike.enginePower}
                          </span>
                        )}
                        {/* {bike.mileage && (
                          <span className="text-xs bg-[#f8d9c6] text-[#5a4239] px-2 py-1 rounded-full flex items-center gap-1">
                            <FontAwesomeIcon icon={faGauge} />
                            {bike.mileage} kmpl
                          </span>
                        )} */}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Link
                        to={`/order/${bike.slug}`}
                        className="w-full py-2 px-4 bg-gradient-to-r from-[#8B4D3A] to-[#A15E48] text-white rounded-lg hover:from-[#733F30] hover:to-[#8B4D3A] text-center block transition-all flex items-center justify-center gap-2"
                      >
                        <FontAwesomeIcon icon={faMotorcycle} />
                        Rent Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="inline-block p-6 bg-white rounded-xl shadow-md max-w-md">
                  <FontAwesomeIcon 
                    icon={faMotorcycle} 
                    className="text-4xl text-[#8B4D3A] mb-4 animate-bounce"
                  />
                  <h1 className="text-2xl font-bold text-[#5a4239]">No Bikes Available</h1>
                  <p className="mt-2 text-[#5a4239]/80">
                    Sorry, we couldn't find any bikes matching your criteria.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 py-2 px-6 bg-gradient-to-r from-[#A15E48] to-[#DCA689] text-white rounded-lg hover:from-[#8B4D3A] hover:to-[#A15E48] transition-all flex items-center justify-center gap-2 mx-auto"
                  >
                    <FontAwesomeIcon icon={faBroom} />
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BikeRentSection;