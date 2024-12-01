import React from "react";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import { Card, Col, Row, Typography, Flex, Tag } from "antd";

import destinations from "@/data/destination.json";
import hotels from "@/data/hotels.json";

const { Title } = Typography;

const Home = () => {
	return (
		<Col span={24} className="mt-16">
			<Title level={3} className="!mb-6 !font-bold">
				Trending destinations
			</Title>
			<Row gutter={[16, 16]}>
				{destinations.map((destination) => (
					<Col span={24} md={6} key={destination.id}>
						<Link to={`/destination/${destination.id}`}>
							<Card
								hoverable
								className="mb-4"
								cover={
									<img
										src={destination.imgUrl}
										style={{ height: "200px", objectFit: "cover" }}
									/>
								}
							>
								<Card.Meta
									title={destination.city}
									description={destination.country}
								/>
							</Card>
						</Link>
					</Col>
				))}
			</Row>

			<Title level={3} className="!mb-6 !font-bold !mt-8">
				Trending hotels
			</Title>
			<Row gutter={[16, 16]}>
				{hotels
					.filter((_, index) => index < 4)
					.map((hotel) => (
						<Col span={24} key={hotel.id} className="p-4">
							<Link to={`/hotels/${hotel.id}`}>
								<Row className="!w-full !overflow-hidden rounded-md border-gray border hover:shadow-lg transition-shadow">
									<Col span={24} md={6}>
										<img
											src={hotel.imgUrl}
											style={{
												height: "200px",
												objectFit: "cover",
												width: "100%",
											}}
										/>
									</Col>
									<Col span={24} md={18} className="p-4 md:px-8 flex flex-col">
										<Title level={4} className="!font-bold">
											{hotel.name}
										</Title>

										<Flex>
											<Title level={5} className="flex items-center !mt-0">
												{[...Array(hotel.stars)].map((_, index) => (
													<MdStar color="#fadb14" key={index} />
												))}
											</Title>
											<Tag className="ml-4">{hotel.rating}</Tag>
										</Flex>

										<Title
											level={5}
											type="secondary"
											ellipsis={{ rows: 1 }}
											className="!mt-0"
										>
											{hotel.description}
										</Title>

										<Title
											level={3}
											className="!m-0"
										>{`$${hotel.price} per night`}</Title>
									</Col>
								</Row>
							</Link>
						</Col>
					))}
			</Row>
		</Col>
	);
};

export default Home;
