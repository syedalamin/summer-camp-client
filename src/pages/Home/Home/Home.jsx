import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div className="h-full ">
                <Swiper
                    // spaceBetween={50}
                    // centeredSlides={true}
                    // autoplay={{
                    //     // delay: 5000,
                    //     // disableOnInteraction: false,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide> </SwiperSlide>
                    <SwiperSlide> </SwiperSlide>
                    <SwiperSlide> </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Home;