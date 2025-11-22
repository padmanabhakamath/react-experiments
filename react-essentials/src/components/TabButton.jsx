
export default function TabButton({ children, onSelect, isSelected}) { // object destructuring
    console.log(' TAB BUTTON executing')
    return (<li>
        <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}

// export default function TabButton(props) {
//     return <li><button>{props.children}</button></li>
// }