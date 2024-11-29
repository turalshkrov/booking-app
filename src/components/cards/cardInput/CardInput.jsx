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

import destinations from "@/data/destination.json";

const { Text } = Typography;
const { RangePicker } = DatePicker;

export default function CardInput() {
	const [guest, setGuest] = useState({
		adult: 2,
		child: 0,
	});
	const [room, setRoom] = useState(1);

	const [form] = Form.useForm();

	const [open, setOpen] = useState(false);

	const hide = () => {
		setOpen(false);
	};

	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};

	return (
		<Card className="w-full shadow-md">
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
							/>
						</Form.Item>
					</Col>

					<Col span={24} md={7} xl={8}>
						<Form.Item name="date" className="!mb-0">
							<RangePicker
								placeholder={["Check In", "Check Out"]}
								className="w-full"
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
								<Row className="w-96 p-4" gutter={[8, 16]}>
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
						>
							Search
						</Button>
					</Col>
				</Row>
			</Form>
		</Card>
	);
}
