import { Carousel, Dialog } from "@material-tailwind/react";
import workflows from "../data/workflows.json";
import {useState} from "react";
import { WorkFlowsDialogue } from "./WorkFlowDescirption";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (title='', desc='', image='') => {
    selectWorkFlowTitle(title);
    selectWorkFlowDesc(desc);
    selectWorkFlowImage(image);
    setOpen(!open)
  };
  let [workFlowTitle, selectWorkFlowTitle] = useState("");
  let [workFlowDesc, selectWorkFlowDesc] = useState("");
  let [workFlowImage, selectWorkFlowImage] = useState("");

 
  return (
    <section id="portfolio" className="py-20 relative">
    <WorkFlowsDialogue 
      open={open} 
      handleOpen={handleOpen} 
      title={workFlowTitle}
      desc={workFlowDesc}
      image={workFlowImage}
    />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our automated solutions workflows are designed to streamline your business processes, enhance productivity, and drive growth. Explore our portfolio to see how we can help you achieve your goals.
          </p>
        </div>
        <Carousel prevArrow="" nextArrow="" className="rounded-xl ">
          {workflows.map(({title, short, description, image}, index) => (
            <div className='h-full flex flex-col lg:flex-row ' key={index}>
              <div className="basis-1/3 bg-primary-light p-6 rounded-lg">
              <div className=" flex flex-col justify-center h-[200px] lg:h-full ">
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">{title}</h3>
                  <p className="text-gray-300">{short}</p>
                </div>
                <div className="text-right mt-4">
                  <button
                    onClick={() => handleOpen(title, description, image)}
                    className="inline-flex items-center bg-accent text-primary px-2 py-1 rounded hover:bg-accent/90 transition-all duration-300 group text-sm font-semibold"
                  >
                    Read More
                  </button>
                </div>
              </div>
              </div>
              <div className="basis-2/3 ">
                <img
                  src={image}
                  alt={title}
                  className="h-[400px] w-full object-cover"
                />
              </div>
            </div>
          ))}
        </Carousel>
       </div>
    </section>
  );
};

export default Portfolio;