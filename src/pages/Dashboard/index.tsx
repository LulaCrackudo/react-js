// eslint-disable-next-line no-use-before-define
import React from "react";

import { FiChevronRight } from "react-icons/fi";

import logo from "../../assets/app-logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logo} alt="Github Explorer" />
			<Title>Explore repositórios no Github</Title>

			<Form>
				<input placeholder="Digite o nome do repositório" />
				<button type="submit">Pesquisar</button>
			</Form>

			<Repositories>
				<a href="teste">
					<img
						src="https://avatars.githubusercontent.com/u/72674879?s=460&u=cfb2147bdbcfef4d353ca863db4a04f0ee47e4d4&v=4"
						alt="Lula Crackudo"
					/>
					<div>
						<strong>CS50</strong>
						<p>Description</p>
					</div>
					<FiChevronRight size={20} />
				</a>
			</Repositories>
		</>
	);
};

export default Dashboard;
