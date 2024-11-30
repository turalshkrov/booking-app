import { useState } from "react";
import {
	Card,
	Col,
	Form,
	Row,
	DatePicker,
	Popover,
	Flex,
	Typography,
	Button,
	InputNumber,
	Select,
} from "antd";
import { MdOutlineSearch, MdOutlinePeopleAlt } from "react-icons/md";

import { reservationStore } from "@/store/store";
import destinations from "@/data/destination.json";

const { Text } = Typography;
const { RangePicker } = DatePicker;

export default function CardInput() {
	const guest = reservationStore((state) => state.guest);
	const setGuest = reservationStore((state) => state.setGuest);

	const room = reservationStore((state) => state.room);
	const setRoom = reservationStore((state) => state.setRoom);

	const destination = reservationStore((state) => state.destination);
	const setDestination = reservationStore((state) => state.setDestination);

	const date = reservationStore((state) => state.date);
	const setDate = reservationStore((state) => state.setDate);

	const [form] = Form.useForm();

	const getFieldsValue = () => form.getFieldsValue();
	const handleSearch = () => {
		console.log(getFieldsValue());
	};

	const [open, setOpen] = useState(false);

	const hide = () => {
		setOpen(false);
	};

	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};

	return (
		<Card className="w-full shadow-md" styles={{ body: { padding: 16 } }}>
			<Form form={form}>
				<Row gutter={[16, 16]}>
					<Col span={24} md={7} xl={8}>
						<Form.Item name="destination" className="!mb-0">
							<Select
								options={destinations}
								fieldNames={{ label: "city", value: "city" }}
								placeholder="Destination"
								prefix={<MdOutlineSearch size={24} />}
								allowClear={true}
								value={destination}
								onChange={(value) => setDestination(value)}
							/>
						</Form.Item>
					</Col>

					<Col span={24} md={7} xl={8}>
						<Form.Item name="date" className="!mb-0">
							<RangePicker
								placeholder={["Check In", "Check Out"]}
								className="w-full"
								value={date}
								onChange={(value) => setDate(value)}
							/>
						</Form.Item>
					</Col>

					<Col
						span={24}
						md={10}
						xl={8}
						className="flex w-full items-center justify-between"
					>
						<Popover
							arrow={false}
							trigger="click"
							content={
								<Row className="w-80 p-4" gutter={[8, 16]}>
									<Col span={24} className="flex items-center justify-between">
										<Text className="font-bold">Adult</Text>
										<InputNumber
											min={0}
											max={10}
											value={guest.adult}
											onChange={(value) => setGuest({ ...guest, adult: value })}
										/>
									</Col>

									<Col span={24} className="flex items-center justify-between">
										<Text className="font-bold">Children</Text>
										<InputNumber
											min={0}
											max={10}
											value={guest.child}
											onChange={(value) => setGuest({ ...guest, child: value })}
										/>
									</Col>

									<Col span={24} className="flex items-center justify-between">
										<Text className="font-bold">Room</Text>
										<InputNumber
											min={0}
											max={10}
											value={room}
											onChange={(value) => setRoom(value)}
										/>
									</Col>

									<Col span={24}>
										<Button className="w-full" onClick={hide}>
											Done
										</Button>
									</Col>
								</Row>
							}
							placement="bottom"
							onOpenChange={handleOpenChange}
							open={open}
						>
							<Flex className="w-full items-center cursor-pointer ">
								<MdOutlinePeopleAlt size={24} />
								<Flex className="ml-4">
									<Text className="font-bold w-fit">
										{guest.adult + guest.child} Guests,
									</Text>
									<Text className="ml-2 font-bold">{room} Room</Text>
								</Flex>
							</Flex>
						</Popover>

						<Button
							className="w-min xl:w-full"
							type="primary"
							icon={<MdOutlineSearch />}
							onClick={handleSearch}
						>
							Search
						</Button>
					</Col>
				</Row>
			</Form>
		</Card>
	);
}
