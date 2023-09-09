// import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../OtherPages/About/AboutPage.css";
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Typography from '@mui/material/Typography'

const AboutPageCom5 = () => {
    const borderColor = {
        borderColor: "rgb(191,163,124)",
    };
    const color = {
        color: "rgb(191,163,124)",
    };
    return (
        <div className="py-20">
            <div className="container">
                <div className="border-b border-zinc-300">
                    <h2 className="text-5xl tracking-wider">
                        Frequently Asked Questions
                    </h2>
                    <p className="tracking-wider py-2" style={color}>
                        LIST OF ANSWERS
                    </p>
                </div>
            </div>
            <div className="md:px-10">
                <Accordion className="grid grid-cols-1 gap-1 py-10">
                    <Accordion.Item eventKey="0" className=" w-full md:w-3/4 md:ml-auto item1 px-0.5">
                        <Accordion.Header>
                            <span className="text-xl">
                                Do You Rent To International Visitors?
                            </span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="text-lg text-zinc-500 py-2">
                                Viverra accumsan in nisl scelerisque nisi. At risus viverra
                                adipiscing at in tellus. Integer neq u aliquam vestibulum en morbi
                                blandit cursi us risus ultrices ataugue ut lectus arcu sed done.
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className=" w-full md:w-3/4 md:ml-auto item1 px-0.5">
                        <Accordion.Header>
                            <span className="text-xl">Do You Have Insurance?</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="text-lg text-zinc-500 py-2">
                                Viverra accumsan in nisl scelerisque nisi. At risus viverra
                                adipiscing at in tellus. Integer neq u aliquam vestibulum en morbi
                                blandit cursi us risus ultrices ataugue ut lectus arcu sed done.
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className=" w-full md:w-3/4 md:ml-auto item1 px-0.5">
                        <Accordion.Header>
                            <span className="text-xl">
                                If I Rent A Vehicle Can I Choose The Chauffeur?
                            </span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="text-lg text-zinc-500 py-2">
                                Viverra accumsan in nisl scelerisque nisi. At risus viverra
                                adipiscing at in tellus. Integer neq u aliquam vestibulum en morbi
                                blandit cursi us risus ultrices ataugue ut lectus arcu sed done.
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className=" w-full md:w-3/4 md:ml-auto item1 px-0.5">
                        <Accordion.Header>
                            <span className="text-xl">
                                Do Your Drivers Have Certificates?
                            </span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="text-lg text-zinc-500 py-2">
                                Viverra accumsan in nisl scelerisque nisi. At risus viverra
                                adipiscing at in tellus. Integer neq u aliquam vestibulum en morbi
                                blandit cursi us risus ultrices ataugue ut lectus arcu sed done.
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className=" w-full md:w-3/4 md:ml-auto item1 px-0.5">
                        <Accordion.Header>
                            <span className="text-xl">
                                How Old Do You Have To Be To Rent A Car?
                            </span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="text-lg text-zinc-500 py-2">
                                Viverra accumsan in nisl scelerisque nisi. At risus viverra
                                adipiscing at in tellus. Integer neq u aliquam vestibulum en morbi
                                blandit cursi us risus ultrices ataugue ut lectus arcu sed done.
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default AboutPageCom5;
