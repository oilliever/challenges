export const GeneratePoint = ({ point }) => {
    const options = [];
    for (var i = 1; i <= point; i++) {
        options.push(<div className='rec-point rec-point-true'></div>);
    }
    if (point < 5) {
        for (var i = 1; i <= 5 - point; i++) {
            options.push(<div className='rec-point rec-point-false'></div>);
        }
    }
    return (
        <>
            <div className='rec-group'>{options}</div>
        </>
    );
};
