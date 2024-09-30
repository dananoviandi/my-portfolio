const awards = [
    {
        title: "Top 1 Business Model Canvas",
        year: "2022",
        description:
            "Awarded bussines model ",
    },
    {
        title: "Best UI/UX Competition",
        year: "2023",
        description: "Award Best UI Competition",
    },
    {
        title: "Finalist CTF Competition",
        year: "2023",
        description: "Award for Capture the Flag",
    },

];

export default function Award() {
    return (
        <div className="bg-[#F5EFFF] text-[#34105a]">
            <div className="container content-center justify-center lg:mb-0 lg:h-screen lg:flex-row mx-auto pb-24">

                <div className="flex flex-col items-center mb-10 mt-24">
                    <h2 className="font-mono text-2xl lg:text-4xl mb-4">Awards</h2>
                    <span className="h-1 w-20 bg-[#123456]"></span>
                </div>

                <div className="mx-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start"
                        >

                            <h3 className="text-xl font-semibold mb-2">{award.title}</h3>


                            <span className="text-sm text-gray-500 mb-2">{award.year}</span>

                            <p className="text-justify text-gray-700">{award.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
