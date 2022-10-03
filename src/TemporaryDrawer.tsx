import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ClientForm from "./ClientForm";

export default function TemporaryDrawer() {
    const [state, setState] = React.useState(false);

    const toggleDrawer = () => {
        setState(!state);
    };

    return (
        <div>

            <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer}>ADD NEW CLIENT</Button>
    <Drawer
    anchor={"right"}  // вот эта штука отвечает за сторону, из которой выплывает drawer
    open={state}  // эта штука открывает/закрывает модалку
    onClose={toggleDrawer}
        >
        <ClientForm />

        </Drawer>
        </React.Fragment>
        </div>
);
}
