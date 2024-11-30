import { Col, Divider, Typography } from "antd";

const { Text, Title } = Typography;
export default function Footer() {
	return (
		<Col span={24} className="py-8 bg-gray text-center mt-8">
			<Title level={5} className="!mb-0">
				Get exclusive inspiration for your next stay – subscribe to our
				newsletter.
			</Title>
			<Divider />
			<Text className="text-center">Copyright &copy; 2022</Text>
		</Col>
	);
}
