

const Slide = ({photo, subHeading, Heading,  title}) => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <h5 className="">{subHeading}</h5>
                    <h2 className="">{Heading}</h2>
                    <p>{title}</p>
                </div>
                <div>
                    <img src={photo} />
                </div>
            </div>
        </div>
    );
};

export default Slide;