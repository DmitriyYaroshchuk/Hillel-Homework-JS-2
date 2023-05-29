export default function Wrapper(props) {
    const { children } = props;
    return <div className='wrapper'>{children}</div>
}