import Footer from "../../organisms/Footer";
import NavigationBar from "../../organisms/NavigationBar.tsx";

export default function AboutPage() {
    return (
        <>
            <NavigationBar currentScreen="About Us"/>
            <div
                className="py-8 px-44 bg-[#FAFBFC] pt-20 flex flex-col max-[1200px]:px-20 max-[800px]:px-10"
            >
                <div className="mb-28">
                    <h1 className="text-3xl font-semibold text-[#7b3cff] text-center">
                        We are a team of enthusiastic students that
                        <br/> see potential in using AI to solve real-life wahala.
                    </h1>
                    <p className="text-lg font-normal text-center mt-8">
                        As a team of enthusiastic students, we are united by a shared passion
                        for <br/> harnessing the power of artificial intelligence to address
                        real-life challenges, or as
                        <br/> we fondly call them, "wahala."
                    </p>
                </div>

                <div className="mb-28">
                    <h1 className="text-3xl font-semibold text-[#7b3cff] mb-16">
                        Our Core Value
                    </h1>
                    <div
                        className="cards grid grid-cols-3 gap-12
          max-[1200px]:grid-cols-2 max-[800px]:grid-cols-1
        "
                    >
                        {aboutData.map((data) => (
                            <AboutCard title={data.title} body={data.body} key={data.title}/>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

interface AboutCardProps {
    title: string;
    body: string;
}

const AboutCard = ({title, body}: AboutCardProps) => {
    return (
        <div className="card">
            <h2 className="card__title text-2xl font-semibold mb-6">{title}</h2>
            <p className="card__body">{body}</p>
        </div>
    );
};

const aboutData = [
    {
        title: "Courage",
        body: "In our team, courage is more than just facing challenges; it's about embracing the unknown and venturing beyond our comfort zones. We encourage each other to take bold steps, to experiment with new ideas, and to confront obstacles head-on. Courage, for us, is the driving force that empowers us to overcome setbacks, learn from failures, and ultimately emerge stronger as individuals and as a team",
    },
    {
        title: "Vision",
        body: "Our collective vision serves as the guiding light that shapes our endeavors. It's not merely about seeing what is directly in front of us, but envisioning the possibilities beyond. As a team, we strive to cultivate a shared vision that aligns our individual goals with a greater purpose. This forward-thinking perspective fuels our innovation and ensures that every action we take contributes to a future we are excited to build together",
    },
    {
        title: "Trust",
        body: "Trust forms the bedrock of our team dynamics. It's the confidence we have in each other's abilities, the reliance on open communication, and the belief that together we can achieve more than any of us could individually. Trust allows us to collaborate seamlessly, share ideas without fear of judgment, and foster an environment where everyone feels valued. In our team, trust is not just a word; it's a cornerstone upon which our success and camaraderie are built",
    },
];








