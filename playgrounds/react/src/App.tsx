import { useState } from 'react';
import { Button, Modal, Typography } from '@tyger-ui/react';

const App = () => {
	const [openModal, setOpenModal] = useState(false);
	const handleModal = () => {
		setOpenModal((prevState) => !prevState);
	};
	return (
		<div>
			<Typography variant="h5" tag="h1">
				Welcome
			</Typography>
			<Button variant="outlined" onClick={handleModal}>
				Open Modal
			</Button>

			<Modal
				open={openModal}
				onClose={handleModal}
				onBackdropClick={handleModal}>
				<div>Hello</div>
			</Modal>
		</div>
	);
};

export default App;
