import { useState, forwardRef, useImperativeHandle } from 'react';

//Invoke a function inside a child.

const ImperativeChild = forwardRef((prop, ref) => {

    const [toggle, setToggle] = useState(true);

    useImperativeHandle(ref, () => {
        return {
            alterToggle() {
                setToggle(!toggle);
            }
        }
    });

    return (
        <div>
            <button>Child</button>
            {toggle && <span>Toggle ON</span>}
        </div>
    )
});

export default ImperativeChild
