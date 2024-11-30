import {
	MdPerson,
	MdSearch,
	MdHomeFilled,
	MdNotifications,
} from "react-icons/md";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Row, Typography, Col, Grid, Flex } from "antd";

import { Container } from "@/components";

const { Title, Text } = Typography;

const navbarItems = [
	{
		label: "Home",
		link: "/",
		icon: <MdHomeFilled />,
	},
	{
		label: "Hotels",
		link: "/search",
		icon: <MdSearch />,
	},
	{
		label: "Login",
		link: "/profile",
		icon: <MdPerson />,
	},
];

export default function Header() {
	const screen = Grid.useBreakpoint();

	return (
		<Row className="!h-14 items-center border-b border-gray">
			<Container>
				<Row className="justify-center md:justify-between">
					<Link to="/">
						<Title level={4} className="!font-bold !mb-0">
							Booking App
						</Title>
					</Link>

					{screen.md ? (
						<Row gutter={20}>
							{navbarItems.map((item, index) => (
								<Col key={index}>
									<NavLink to={item.link}>
										<Title level={5} className="!mb-0">
											{item.label}
										</Title>
									</NavLink>
								</Col>
							))}
						</Row>
					) : (
						<Flex
							justify="space-around"
							className="py-4 items-center fixed bottom-0 left-0 w-full border border-stale-800  z-50 navbar-container bg-white"
						>
							{navbarItems.map((item) => (
								<NavLink to={item.link} className="navlink" key={item.link}>
									<Text className="text-lg">{item.icon}</Text>
								</NavLink>
							))}
						</Flex>
					)}
				</Row>
			</Container>
		</Row>
	);
}
