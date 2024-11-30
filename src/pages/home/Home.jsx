import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Typography } from "antd";

import destinations from "@/data/destination.json";

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
		</Col>
	);
};

export default Home;
