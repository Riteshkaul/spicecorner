import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: "2",
          "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
          "& p": { textAlign: "justify" },
          "@media (max-width:600px)": {
            mt: "0",
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Spice Corner</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          cum cupiditate, voluptates nostrum, rem voluptas expedita tempore,
          autem id quasi aliquid magnam magni inventore repudiandae facere
          numquam. Hic cupiditate neque fuga sunt autem modi necessitatibus
          debitis harum corporis architecto inventore aperiam cum molestias
          perspiciatis repellat, obcaecati dolorum consequatur, ea laboriosam
          ipsam tempore dignissimos deserunt. Optio voluptas molestias, sint
          tenetur eum repellat veritatis nihil non in architecto provident
          eligendi, accusamus cum? Quasi temporibus quis autem, animi nemo sint
          tenetur rem ipsum culpa laudantium illo necessitatibus iusto ut
          exercitationem, excepturi dolorum odit incidunt expedita. Doloribus
          debitis et amet harum sapiente, sequi dignissimos?
        </p>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora
        dignissimos delectus itaque minus ducimus veritatis voluptatem quis
        dolore, natus aliquid necessitatibus iste placeat consectetur
        consequuntur quo magni voluptatibus enim numquam ut animi vel omnis
        perferendis. Possimus repellat minus, enim nobis rem impedit?
        Consequatur accusamus doloremque repellendus laudantium facere fuga
        nihil atque id animi dolorum ut error officia, laboriosam ab provident
        nobis alias, dolorem excepturi reiciendis hic ratione. Cupiditate
        praesentium deleniti aut expedita totam dolor. Adipisci accusamus quam
        aperiam, labore error quod voluptatibus explicabo molestiae quos iste,
        ratione quas blanditiis et magni veniam voluptatem soluta repudiandae
        doloribus esse obcaecati! Libero.
      </Box>
    </Layout>
  );
};

export default About;
