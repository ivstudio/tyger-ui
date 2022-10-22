import { useState } from 'react';
import { Button, Modal, Typography, Container, AppBar } from '@tyger-ui/react';

import { lgTextFixture } from '../../../packages/react/test/fixtures';

const App = () => {
	const [openModal, setOpenModal] = useState(false);
	const handleModal = () => {
		setOpenModal((prevState) => !prevState);
	};
	return (
		<>
			<AppBar position="fixed">
				<Typography variant="h5" tag="h1">
					Welcome
				</Typography>
			</AppBar>
			<Container maxWidth="xs">
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
