import {
	HideOnScroll,
	Button,
	Modal,
	Typography,
	Container,
	AppBar,
	Switch,
} from '@tyger-ui/react';
import { useState } from 'react';
import { lgTextFixture } from '../../../packages/react/test/fixtures';

interface IApp {
	isDefaultTheme: boolean;
	onChangeTheme(value: boolean): void;
}

const App = ({ isDefaultTheme, onChangeTheme }: IApp) => {
	const [openModal, setOpenModal] = useState(false);
	const handleModal = () => {
		setOpenModal((prevState) => !prevState);
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
				{[1, 2, 3, 4, 5].map((item) => {
					return (
						<Container key={item}>
							<Typography align="left">
								{lgTextFixture}
							</Typography>
							<Typography>{lgTextFixture}</Typography>
						</Container>
					);
				})}

				<Button variant="outlined" onClick={handleModal}>
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
