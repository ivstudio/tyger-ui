import { Button } from '@tyger-ui/react';

const App = () => {
    return (
        <div>
            <div>HELLO!</div>
            <Button variant="outlined" onClick={() => console.log('h')}>
                hh
            </Button>
        </div>
    );
};

export default App;
