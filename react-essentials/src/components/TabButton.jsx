
export default function TabButton({ children, onSelect}) { // object destructuring
    console.log(' TAB BUTTON executing')
    return (<li>
        <button onClick={onSelect}>{children}</button>
        </li>
    );
}

// export default function TabButton(props) {
//     return <li><button>{props.children}</button></li>
// }