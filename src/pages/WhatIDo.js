import React, { useState } from "react";
import SidebarLayout from "../comps/SidebarLayout";
import { Row, Col, Container } from "react-bootstrap";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as DiIcons from "react-icons/di";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as GiIcons from "react-icons/gi";
import { motion } from "framer-motion";

export const WhatIDo = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovering3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovering3(false);
  };

  return (
    <SidebarLayout>
      <Container fluid>
        <motion.div
          className="box"
          initial={{ opacity: 1, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [1, 0.71, 0.2, 1.01],
          }}
        >
          <Row>
            <Col
              xs
              md={{ span: 10, offset: 1 }}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 30,
                }}
              >
                <h4>What I do</h4>
              </Col>
              <Row>
                <Col
                  style={{
                    height: 215,
                    marginRight: 20,
                    marginLeft: 20,
                    marginBottom: 10,
                    borderWidth: 5,
                    borderColor: "black",
                    borderStyle: "double double double",
                    borderRadius: 15,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: 50,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      textAlign: "center",
                      backgroundColor: isHovering ? "white" : "black",
                      color: isHovering ? "black" : "white",
                      paddingTop: 5,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <motion.h1
                      whileHover={{ scale: [null, 1.5, 1.4] }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <RiIcons.RiLayout5Line size={40} />
                        <BiIcons.BiPaint size={40} />
                        <RiIcons.RiComputerLine size={40} />
                        <GiIcons.GiLargePaintBrush size={40} />
                      </div>
                      <h5>Web Design</h5>
                    </motion.h1>
                  </div>
                </Col>
                <Col
                  style={{
                    height: 215,
                    marginRight: 20,
                    marginLeft: 20,
                    marginBottom: 10,
                    borderWidth: 5,
                    borderColor: "black",
                    borderStyle: "double double double",
                    borderRadius: 15,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: 50,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      textAlign: "center",
                      backgroundColor: isHovering2 ? "white" : "black",
                      color: isHovering2 ? "black" : "white",
                    }}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    <motion.h1
                      whileHover={{ scale: [null, 1.5, 1.4] }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <BsIcons.BsCreditCard2Front size={40} />
                        <BiIcons.BiPaint size={40} />
                        <RiIcons.RiComputerLine size={40} />
                        <DiIcons.DiFirebase size={40} />
                      </div>
                      <h5>Web Development</h5>
                      <h6>Font-End/Back-end</h6>
                    </motion.h1>
                  </div>
                </Col>
                <Col
                  style={{
                    height: 215,
                    marginRight: 20,
                    marginLeft: 20,
                    marginBottom: 10,
                    borderWidth: 5,
                    borderColor: "black",
                    borderStyle: "double double double",
                    borderRadius: 15,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: 50,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      textAlign: "center",
                      backgroundColor: isHovering3 ? "white" : "black",
                      color: isHovering3 ? "black" : "white",
                    }}
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                  >
                    <motion.h1
                      whileHover={{ scale: [null, 1.5, 1.4] }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <CgIcons.CgFileDocument size={40} />
                        <BsIcons.BsKeyboard size={40} />
                        <RiIcons.RiComputerLine size={40} />
                        <GiIcons.GiMagnifyingGlass size={40} />
                      </div>
                      <h5>Virtual Assistant</h5>
                      <h6>Web Research/Data Entry/Moderator</h6>
                    </motion.h1>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </SidebarLayout>
  );
};
