import React from "react";
//eslint-disable-next-line
import styles from "../index.css"
import {blur} from "@testing-library/user-event/dist/blur";
import {Link} from "react-router-dom";

const Scratch = () => {
    return (
        <div className="container my-24 px-6 mx-auto">
            <section className="mb-32 text-gray-800">

                {/*Image Div Start*/}
                <div
                    className={"relative overflow-hidden bg-no-repeat bg-auto"}>
                    <img src={require("../assets/staringcatbanner.jpg")}/>
                </div>
                {/*Image Div End*/}


                <div className={"container text-gray-800 px-4 md:px-12"}>
                    <div
                        className={"block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6 -mt-[80px] bg-gray-200 bg-opacity-80 backdrop-blur-xl"}>

                        <div className={"flex flex-wrap justify-center text-center lg:text-left"}>
                            <div className={"grow-0 shrink-0 basis-auto w-full xl:w-10/12 px-6"}>
                                <div className={"grid lg:grid-cols-2 gap-x-6 items-center"}>
                                    <div className={"mb-10 lg:mb-0"}>
                                        <h2 className={"text-3xl font-bold"}>
                                            Donate to charities, transparently.
                                        </h2>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Scratch