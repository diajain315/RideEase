import { Card, Row, Col, Divider, Typography, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { CategoryAll } from "../redux/features/Category/categoryAction";
import { useEffect } from "react";

const { Title, Text } = Typography;

const Categories = () => {

   const dispatch = useDispatch();
   const base_url = "http://localhost:5001";
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(CategoryAll());
    }, [dispatch]);


  const { categories } = useSelector((state) => state.category);
  const fallbackCategories = [
    {
      _id: "activa",
      name: "Activa",
      images: "/images/b1fleet.jpg",
      href: "/bikerentsection",
    },
    {
      _id: "sport-bikes",
      name: "Sport bikes",
      images: "/images/b2fleet.jpg",
      href: "/bikerentsection",
    },
    {
      _id: "jupiter",
      name: "Jupiter",
      images: "/images/b3fleet.jpg",
      href: "/bikerentsection",
    },
  ];
  const fleetCategories = categories?.length ? categories : fallbackCategories;

  return (
    <div className="bg-gradient-to-b from-[#fff7f0] to-[#fde9dc] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Divider className="!h-1 !w-24 !min-w-0 !mx-auto !my-0 !mb-4 bg-gradient-to-r from-[#5a4239] to-orange-900" />
          <Title className="!text-3xl md:!text-4xl !font-bold !text-orange-900 flex items-center justify-center gap-3 !mb-2">
            <FontAwesomeIcon icon={faPersonBiking} className="text-orange-900" />
            Our Fleet
          </Title>
          <Text className="!text-lg md:!text-xl !text-[#5a4239] font-[Roboto] block">
            Explore our premium range of bikes and scooters
          </Text>
        </div>

        {/* Fleet Cards */}
        <Row gutter={[24, 24]}>
          {fleetCategories.map((item) => (
            <Col xs={24} md={8} key={item._id}>
              <Card
                hoverable
                className={`
                  w-full h-full
                  bg-[#8B4D3A] text-[#FFD9A0]
                  border border-[rgba(255,255,255,0.1)]
                  rounded-lg overflow-hidden backdrop-blur-md
                  transition-all duration-300
                  hover:bg-[#733F30] hover:border-[#f59e0b]
                  hover:shadow-xl hover:-translate-y-1
                `}
                styles={{ body: { padding: 24 } }}
                cover={
                  <div className="h-48 md:h-60 w-full overflow-hidden relative group">
                    <img
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={item.images || `${base_url}/api/v1/category/category-photo/${item._id}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#6c5049]/70 to-[#6c5049]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                }
              >
                <Title 
                  level={4} 
                  className="!text-xl md:!text-2xl !font-bold !text-[#FFD9A0] group-hover:!text-orange-900 transition-colors duration-300"
                >
                  {item.name}
                </Title>
                <Link to={item.href || `/bikerentsection?category=${item._id}`}>
                  <Button
                    type="primary"
                    icon={<ArrowRightOutlined />}
                    className={`
                      !bg-[#FFD9A0] !text-orange-900 
                      font-[Roboto] hover:!bg-[#B36D4E] 
                      hover:!text-white !mt-6 !h-10 !px-6 
                      transition-all duration-300 hover:!translate-x-1
                    `}
                  >
                    Enquire Now
                  </Button>
                </Link>
              </Card>
            </Col>
          ))}
          </Row>
        </div>
      </div>
  );
};

export default Categories;
