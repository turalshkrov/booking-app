import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Typography } from "antd";

import destinations from "@/data/destination.json";
import { Header, CardInput, Container } from "@/components";

const { Title } = Typography;

const Home = () => {
	return (
		<>
			<Header />
			<Container>
				<Row className="mt-8">
					<Col span={24}>
						<Title level={3} className="!mb-1 !font-bold">
							Save up to 35% with Black Friday Deals
						</Title>
					</Col>

					<Col span={24} className="mb-4">
						<Title level={5} type="secondary">
							Search for your next stay
						</Title>
					</Col>

					<CardInput />

					<Col span={24} className="mt-16">
						<Title level={3} className="!mb-6 !font-bold">
							Trending destinations
						</Title>
						<Row gutter={[16, 16]}>
							{destinations.map((destination) => (
								<Col span={24} md={6} key={destination.id}>
									<Link to={`/destination/${destination.city}`}>
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
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;
