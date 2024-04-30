import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Riki = () => {
	const [toto, setToto] = useState([]);

	useEffect(() => {
		async function getUser() {
			try {
				const response = await fetch(
					" https://rickandmortyapi.com/api/character"
				);
				const results = await response.json();
				setToto(results.results);
			} catch (error) {
				console.log(error);
			}
		}
		getUser();
	}, []);
	

	const getStatusStyle = (status) => {
		switch (status.toLowerCase()) {
			case "alive":
				return {
					color: "green",
				};
			case "dead":
				return {
					color: "red",
				};
			case "unknown":
				return {
					color: "gray",
				};
			default:
				return {};
		}
	};

	return (
		<StyledContainer>
			{toto.map((item, index) => (
				<StyledMapContainer key={index}>
					<div>
						<StyledImg src={item.image} alt="" />
					</div>
					<div>
						<StyledName>{item.name}</StyledName>
						<StyledMapContainerText>
							<StatusText style={getStatusStyle(item.status)}>
								{item.status}
							</StatusText>
							<p>  - {item.species}</p>
						</StyledMapContainerText>
					</div>
				</StyledMapContainer>
			))}
		</StyledContainer>
	);
};
export default Riki;

const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`;
const StyledMapContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	border: 3px solid #80807ecc;
	background: #ececebcc;
	
	border-radius: 20px;
`;
const StatusText = styled.p`
	font-weight: bold;
`;
const StyledMapContainerText = styled.div`
	display: flex;

	
`;
const StyledImg = styled.img`
	width: 210px;
	border-radius: 18px 0 0 18px  ;
	
`
const StyledName = styled.h1`
  width: 150px;
`
