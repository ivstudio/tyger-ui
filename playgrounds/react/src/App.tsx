import {
	HideOnScroll,
	Button,
	Modal,
	Typography,
	Container,
	AppBar,
	Switch,
	Chip,
} from '@tyger-ui/react';
import { useState } from 'react';
import { longParagraph } from '../../../packages/react/test/fixtures';

interface AppProps {
	isDefaultTheme: boolean;
	onChangeTheme(value: boolean): void;
}

const App = ({ isDefaultTheme, onChangeTheme }: AppProps) => {
	const [openModal, setOpenModal] = useState(false);
	const handleModal = () => {
		setOpenModal((prevState) => !prevState);
	};
	const handleClick = () => {
		console.log('click');
	};
	return (
		<>
			<HideOnScroll>
				<AppBar>
					<Typography variant="h5" tag="h1">
						Welcome
					</Typography>
					<Switch
						id="theme"
						checked={isDefaultTheme}
						onChange={onChangeTheme}
					/>
				</AppBar>
			</HideOnScroll>

			<Container maxWidth="xs" mt="16">
				<Chip label="JavaScript" tag="button" onClick={handleClick} />
				<Chip label="React" tag="button" onClick={handleClick} />
				<Chip
					label="Styled Components"
					tag="button"
					onClick={handleClick}
				/>

				{[1, 2, 3, 4, 5].map((item) => {
					return (
						<Container key={item}>
							<Typography align="left">
								{longParagraph}
							</Typography>
							<Typography>{longParagraph}</Typography>
						</Container>
					);
				})}

				<Button variant="filled" onClick={handleModal}>
					Open Modal
				</Button>

				<Modal
					open={openModal}
					onClose={handleModal}
					onBackdropClick={handleModal}>
					<div>Hello</div>
				</Modal>
			</Container>
		</>
	);
};

export default App;
