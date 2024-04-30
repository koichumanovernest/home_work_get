import React, { useEffect, useState } from "react";
import styled from "styled-components";
function Users() {
	const [data, setData] = useState([]);
	useEffect(() => {
		async function getUsers() {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const result = await response.json();
			console.log(result);
			setData(result);
		}
		getUsers();
	}, []);

	return (
		<>
			{data.map((item) => (
				<Container>
					<p key={item.id}>{item.name}</p>
					<p>{item.username}</p>
					<p>{item.email}</p>
				</Container>
			))}
		</>
	);
}

export default Users;
const Container = styled.div`
	width: 15.9rem;
	height: 220px;
	border: 3px solid blue;
	border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
