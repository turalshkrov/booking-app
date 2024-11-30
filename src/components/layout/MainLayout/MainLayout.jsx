import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";
import { Row, Col, Typography } from "antd";

import { Header, CardInput, Container } from "@/components";
import { Footer } from "../Footer";

const { Title } = Typography;

export default function MainLayout() {
	return (
		<>
			<Toaster position="top-right" />
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

					<Outlet />

					<Footer />
				</Row>
			</Container>
		</>
	);
}
