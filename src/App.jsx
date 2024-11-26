import { Col, Row } from "antd";
import "./App.css";
import { Container } from "@/components";

function App() {
	return (
		<Container>
			<Row className="mt-8">
				<Col span={24}>
					<h1 className="text-3xl font-bold underline">Hello world!</h1>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
