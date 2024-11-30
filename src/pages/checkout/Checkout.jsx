import {
	Card,
	Col,
	Row,
	Typography,
	Tag,
	Divider,
	Form,
	Input,
	Checkbox,
	Button,
	Modal,
	Result,
} from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

import hotels from "@/data/hotels.json";
import { reservationStore } from "@/store/store";
import destinations from "@/data/destination.json";
import { Header, Container, Footer } from "@/components";

const { Title, Text } = Typography;

export default function Checkout() {
	const navigate = useNavigate();
	const hotelId = reservationStore((state) => state.hotel);
	const guest = reservationStore((state) => state.guest);
	const room = reservationStore((state) => state.room);
	const date = reservationStore((state) => state.date);
	const hotel = hotels.find((item) => item.id === hotelId);
	const destination =
		hotel && destinations.find((item) => item.id === hotel.destinationId);

	const [form] = Form.useForm();
	const { getFieldsValue } = form;

	const [isBooked, setIsBooked] = useState(false);
	const handleCancel = () => {
		setIsBooked(false);
	};

	const handleSuccess = () => {
		setIsBooked(false);
		navigate("/");
	};

	const handleSubmit = () => {
		const { firstName, lastName, email, phone } = getFieldsValue();
		if (!firstName || !lastName || !email || !phone) {
			toast.error("Please fill in all required fields.");
			return;
		}
		setIsBooked(true);
	};

	return (
		<>
			<Toaster position="top-right" />
			<Header />
			<Container>
				<Row className="mt-8">
					<Col span={24} md={8}>
						<Card>
							<Card.Meta
								title={hotel.name}
								description={`${destination.city}, ${destination.country}`}
							/>
							<Title level={3} className="mt-4">
								${hotel.price}
							</Title>
							<Tag>{`${hotel.rating} - Guest Rating`}</Tag>
							<Title level={4} className="mt-6">
								Booking details
							</Title>
							<Title level={5} type="secondary">{`Check-in: ${dayjs(
								date[0]
							).format("MMM DD YYYY")} - Check-out: ${dayjs(date[1]).format(
								"MMM DD YYYY"
							)}`}</Title>
							<Divider />
							<Title level={5}>You selected</Title>
							<Text>{`Guest: ${guest.adult} - Room: ${room}`}</Text>
						</Card>
					</Col>

					<Col span={24} md={16} className="p-4">
						<Title level={3}>Enter your details</Title>
						<Form className="mt-4" layout="vertical" form={form}>
							<Row gutter={[16, 16]}>
								<Col span={24} md={12}>
									<Form.Item name="firstName" label="First Name" required>
										<Input size="large" />
									</Form.Item>
								</Col>

								<Col span={24} md={12}>
									<Form.Item name="lastName" label="Last Name" required>
										<Input size="large" />
									</Form.Item>
								</Col>
								<Col span={24} md={12}>
									<Form.Item name="email" label="Email" required>
										<Input type="email" size="large" />
									</Form.Item>
								</Col>
								<Col span={24} md={12}>
									<Form.Item name="phone" label="Phone" required>
										<Input size="large" />
									</Form.Item>
								</Col>

								<Col span={24}>
									<Title level={3}>Add to your stay</Title>
									<Form.Item name="taxi">
										<Checkbox>
											<Title level={5} className="!mb-0">
												Want to book a taxi or shuttle ride in advance?
											</Title>
											<Text type="secondary">
												We'll pick you up from the airport and drop you off at
												your destination.
											</Text>
										</Checkbox>
									</Form.Item>

									<Form.Item name="note">
										<Input.TextArea
											size="large"
											placeholder="Any special requests?"
										/>
									</Form.Item>
								</Col>

								<Button type="primary" size="large" onClick={handleSubmit}>
									Confirm Reservation
								</Button>
							</Row>
						</Form>
					</Col>
				</Row>
				<Footer />

				<Modal
					open={isBooked}
					onCancel={handleCancel}
					onOk={handleSuccess}
					okText="Go Home"
				>
					<Result
						status="success"
						title="Successfully Booked"
						subTitle="We've sent your reservation details to your email"
					/>
				</Modal>
			</Container>
		</>
	);
}
