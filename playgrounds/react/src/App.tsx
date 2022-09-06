import { Button } from '@tyger-ui/react';

const App = () => {
    return (
        <div>
            <div>HELLO!</div>
            <Button onClick={() => console.log('this')} variant="filled">
                hh
            </Button>
        </div>
    );
};

export default App;
