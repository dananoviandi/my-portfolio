export default function Experience() {
    const experiences = [
        {
            title: "IT Intern",
            date: "Jan 2023 - Mei 2023",
            description:
                "Provided technical support to staff and clients, including troubleshooting hardware and software issues.",
        },
        {
            title: "Frond End Developer",
            date: "Jan 2024 - Mar 2024",
            description:
                "Develop and maintain the front-end architecture of our web applications using modern technologies and frameworks.",
        },
        {
            title: "Full Stack Developer",
            date: "Mar 2024 - Nov 2024",
            description:
                "Design, develop, and maintain both front-end and back-end components of web applications",
        },
    ];
    return (
        <div className="bg-[#F5EFFF] text-[#34105a]">
            <div className="container content-center justify-center lg:mb-0 lg:h-screen lg:flex-row mx-auto pb-24">

                <div className="flex flex-col items-center mb-10 pt-24">
                    <h2 className="font-mono text-2xl lg:text-4xl mb-4">Experience</h2>
                    <span className="h-1 w-20 bg-[#34105a]"></span>
                </div>


                <div className="mx-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white shadow-lg rounded-lg p-6"
                        >
                            <h3
                                className={`text-xl font-semibold ${experience.title.length < 30 ? "lg:mb-7" : ""
                                    }`}
                            >
                                {experience.title}
                            </h3>
                            <span className="text-sm text-gray-500">{experience.date}</span>
                            <p className="mt-2 text-justify">{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
