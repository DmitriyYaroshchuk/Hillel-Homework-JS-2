function Wrapper(props) {
    const { children } = props;
    return (
        <div className="wrapper">{children}</div>
    )
}
export default Wrapper;