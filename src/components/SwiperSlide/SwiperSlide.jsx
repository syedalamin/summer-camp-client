

const SwiperSlide = ({img, subHeading, Heading,  title}) => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <h5 className="">{subHeading}</h5>
                    <h2 className="">{Heading}</h2>
                    <p>{title}</p>
                </div>
                <div>
                    <img src={img} />
                </div>
            </div>
        </div>
    );
};

export default SwiperSlide;