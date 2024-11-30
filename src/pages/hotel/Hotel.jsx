import {
	AiOutlineGift,
	AiOutlineCoffee,
	AiOutlineQuestionCircle,
} from "react-icons/ai";
import {
	MdStar,
	MdOutlineWifi,
	MdOutlineBathtub,
	MdOutlineFamilyRestroom,
} from "react-icons/md";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Flex, Typography, Tag, Row, Space, Button } from "antd";

import "./hotel.css";
import hotels from "@/data/hotels.json";
import gallery from "@/data/gallery.json";
import { reservationStore } from "@/store/store";
import destinations from "@/data/destination.json";

const { Title, Text, Paragraph } = Typography;

const tags = [
	{
		key: "1",
		label: "Good Breakfast",
		icon: <AiOutlineCoffee size={28} />,
	},
	{
		key: "2",
		label: "Free Wifi",
		icon: <MdOutlineWifi size={28} />,
	},
	{
		key: "3",
		label: "Private Bathroom",
		icon: <MdOutlineBathtub size={28} />,
	},
	{
		key: "4",
		label: "Family Friendly",
		icon: <MdOutlineFamilyRestroom size={28} />,
	},
];

export default function Hotel() {
	const { id } = useParams();
	const hotel = hotels.find((item) => item.id == id);
	const destination = destinations.find(
		(item) => item.id == hotel.destinationId
	);

	const navigate = useNavigate();

	const date = reservationStore((state) => state.date);
	const room = reservationStore((state) => state.room);
	const guest = reservationStore((state) => state.guest);
	const setHotel = reservationStore((state) => state.setHotel);

	const handleReserve = () => {
		if (!date[0] || !date[1]) {
			toast.error("Please select a check-in and check-out date.");
			return;
		} else if (!guest.adult || !room) {
			toast.error("Please select a room and guest count.");
			return;
		} else {
			setHotel(hotel.id);
			navigate("/checkout");
		}
	};

	return (
		<Col span={24} className="mt-16">
			<Title level={3} className="!font-bold">
				{hotel.name}
			</Title>
			<Title level={5} type="secondary !mt-0">
				{destination.city}, {destination.country}
			</Title>
			<Flex className="items-center mt-2 mb-4">
				<Title level={5} className="flex items-center !m-0">
					{[...Array(hotel.stars)].map((_, index) => (
						<MdStar color="#fadb14" key={index} />
					))}
				</Title>
				<Tag className="ml-4">{hotel.rating}</Tag>
			</Flex>

			<Row gutter={[16, 16]}>
				<div className="angry-grid">
					{gallery.data.map((url, index) => (
						<div className={`item-${index} p-1`} key={index}>
							<img src={url} className="w-full !h-full object-cover" />
						</div>
					))}
				</div>

				<Col span={24}>
					<Row gutter={[16, 16]} className="mt-4">
						{tags.map((tag) => (
							<Col span={24} sm={12} lg={6} key={tag.key}>
								<Space className="w-full gap-4 border border-gray p-4 rounded">
									{tag.icon}
									<Text>{tag.label}</Text>
								</Space>
							</Col>
						))}
					</Row>
				</Col>

				<Col span={24} md={16} lg={18} className="mt-4">
					<Paragraph>
						You might be eligible for a Genius discount at Holiday Inn Express
						London Limehouse, an IHG Hotel. To check if a Genius discount is
						available for your selected dates sign in.
					</Paragraph>
					<Paragraph>
						Genius discounts at this property are subject to book dates, stay
						dates and other available deals.
					</Paragraph>
					<Paragraph>{hotel.description}</Paragraph>
				</Col>

				<Col
					span={24}
					md={8}
					lg={6}
					className="mt-4 !p-6 rounded border border-gray h-fit"
				>
					<Title
						level={2}
						className="!m-0 !mb-2"
					>{`$${hotel.price} per night`}</Title>
					<Text type="secondary">Includes taxes and fees</Text>
					<Title
						level={5}
						type="secondary"
						className="!m-0 !mt-2 flex items-center"
					>
						<AiOutlineQuestionCircle size={20} className="mr-2" />
						Cancellation policy
					</Title>

					<Button className="mt-6" type="primary" block onClick={handleReserve}>
						Reserve
					</Button>
				</Col>

				<Col span={24} className="mt-8 !p-6 rounded border border-gray">
					<Row gutter={[8, 8]} justify="space-between">
						<Col span={24} md={20}>
							<Row gutter={[8, 8]}>
								<Col span={24}>
									<Title level={4} className="!m-0">
										Sign in, save money
									</Title>
								</Col>

								<Col span={24}>
									<Text>
										To see if you can save 10% or more at this property, sign in
									</Text>
								</Col>

								<Col span={24} className="mt-2">
									<Button type="primary">Sign in</Button>
									<Button className="ml-2">Create account</Button>
								</Col>
							</Row>
						</Col>
						<Col
							span={0}
							md={4}
							className="items-center justify-end hidden md:flex"
						>
							<AiOutlineGift size={70} />
						</Col>
					</Row>
				</Col>
			</Row>
		</Col>
	);
}
