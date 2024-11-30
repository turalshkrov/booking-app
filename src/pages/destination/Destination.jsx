import { MdStar } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { Col, Flex, Rate, Row, Tag, Typography } from "antd";

import hotels from "@/data/hotels.json";
import destinations from "@/data/destination.json";

const { Title } = Typography;

export default function Destination() {
	const { id } = useParams();
	const destination = destinations.find((item) => item.id == id);
	const hotelsInDestination = hotels.filter(
		(hotel) => hotel.destinationId == id
	);

	return (
		<Col className="mt-16" span={24}>
			<Title level={3} className="!mb-6 !font-bold">
				Hotels in {destination.city}, {destination.country}
			</Title>

			<Row gutter={[16, 16]}>
				{hotelsInDestination.map((hotel) => (
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
										className="!mt-0"
									>{`${destination.city}, ${destination.country}`}</Title>

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
}
