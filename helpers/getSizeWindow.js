import react from "react";


export const SizeWindow = () => {

    const [size, setSize] = react.useState(0);

    react.useEffect(()=>{
        setSize(window.screen.width);
    });

    return size;

}