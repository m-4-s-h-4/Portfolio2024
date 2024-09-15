import React from "react";

import Container from "../../components/base components/Container/Container";
import Box from "../../components/base components/Primatives/Box/Box";
import TextLayout from "../../components/text layout components/TextLayout/TextLayout";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";
import Stack from "../../components/base components/LayoutComponents/Stack/Stack";
import ImagesLayout from "../../components/media components/ImagesLayout/ImagesLayout";
import Paragraph from "../../components/base components/TypographyComponents/Paragraph/Paragraph";
import Button from "../../components/base components/Button/Button";
import Flex from "../../components/base components/LayoutComponents/Flex/Flex";
import TextWithMedia from "../../components/text with media components/TextWithMedia/TextWithMedia";
import Divider from "../../components/base components/Divider/Divider";

const WorkPage: React.FC = () => {
  return (
    <Container
      height="100vh"
      paddingLeftRight="SpacingSpacing4"
      enableResponsivePadding={true}
    >
      <Flex variant="doubleFlex" gap="SpacingSpacing2">
        <Box paddingRight="SpacingSpacing2">
          <Flex direction="column" xAlign="space-between">
            <Box paddingBottom="SpacingSpacing2" paddingTop="SpacingSpacing2">
              <Button text={"⬿ Home"} link="/"></Button>
            </Box>
            <Flex direction="column" xAlign="flex-end">
              <Heading level={"h3"}>Logo for Tropicfeel</Heading>
              <Divider />
              <Paragraph
                textTransform="none"
                paddingBottom="SpacingSpacing4"
                paddingTop="SpacingSpacing1"
              >
                Tropicfeel is a forward-thinking brand that focuses on
                sustainable travel gear. Our work with them centered on creating
                a dynamic logo animation that would reflect their innovative
                approach to travel and environmental responsibility.
              </Paragraph>
              <ImagesLayout
                variant="fullWidth"
                fullWidthHeight="40vh"
                paddingTopBottom="SpacingSpacing2"
              >
                <img
                  src="https://stormtrotters.com/wp-content/uploads/2021/02/16-9-tropicfeel-web-jungle-features-sustainable-01.jpg?w=1024"
                  alt="Full Width Final Animation"
                />
              </ImagesLayout>
            </Flex>
          </Flex>
        </Box>
        <Box paddingLeft="SpacingSpacing2" borderLeft={true}>
          <Stack>
            <TextLayout
              variant="HeadingLParagraphR"
              headingText="Project Brief"
              paragraphText="The project aimed to create a logo animation for Tropicfeel that would not only be visually appealing but also embody the brand’s commitment to sustainability and innovation."
            />

            <ImagesLayout variant="variant2" gridHeight="40vh">
              <img
                src="https://img01.ztat.net/article/spp-media-p1/2377fca4ea4f4cd2900a59e6ba8731a7/56dfc15cc3a84a96b694d5a38bb1a75d.jpg?imwidth=762"
                alt="Research Process"
              />
              <img
                src="https://shop.touristear.com/wp-content/uploads/2020/10/tropicfeel-zapatillas-canyon-verde.jpg"
                alt="Sketching Concepts"
              />
              <img
                src="https://fashionunited.com/r/fit=cover,format=auto,gravity=center,height=926,quality=70,width=1388/https://fashionunited.com/img/upload/2022/11/10/tropicfeel-1-v9gblbfy-2022-11-10.jpeg"
                alt="Storyboarding"
              />
            </ImagesLayout>
            <TextLayout
              variant="HeadingLParagraphR"
              headingText="Design Choices"
              paragraphText="The design was focused on clean lines and modern aesthetics, ensuring that the logo would be easily recognizable and adaptable across different media. The simplicity of the design also allowed for smooth animation sequences."
            />

            <ImagesLayout variant="variant6" gridHeight="75vh">
              <img
                src="https://i.kickstarter.com/assets/025/370/152/a14714e2b6c9aa7955d8b58031802d1e_original.jpg?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&width=1552&sig=bHDDDfPxY3A75bp30LsU1ljp6p2XgNtQNUuWAOY3K7o%3D"
                alt="Final Review"
              />
              <img
                src="https://thisisodd.es/wp-content/uploads/2024/02/TROPICFEEL-1-819x1024.jpg"
                alt="Delivery"
              />
              <img
                src="https://media.traveler.es/photos/613760fbf130191a954c6dba/master/w_1600%2Cc_limit/209301.jpg"
                alt="Implementation"
              />
            </ImagesLayout>
            <TextLayout
              variant="HeadingLParagraphR"
              headingText="First Steps"
              paragraphText="The final animation was designed to be both smooth and engaging, with a focus on fluid motion that would capture the attention of viewers and leave a lasting impression."
            />

            <ImagesLayout variant="variant5" gridHeight="40vh">
              <img
                src="https://img.elreferente.es/wp-content/uploads/2021/07/tropicfeel.jpg"
                alt="Designing the Logo"
              />
              <img
                src="https://img.interempresas.net/fotos/2549941.jpeg"
                alt="Animating the Logo"
              />
              <img
                src="https://lamaletadecarla.com/wp-content/uploads/2021/09/4-5-ads-ss21-canyon-product-placement-2.jpg"
                alt="Final Animation"
              />
            </ImagesLayout>

            <ImagesLayout
              variant="fullWidth"
              fullWidthHeight="40vh" // Set the height of the full-width image
              paddingTopBottom="SpacingSpacing0" // Optional: Set padding above and below the image
            >
              <img
                src="https://stormtrotters.com/wp-content/uploads/2021/02/16-9-tropicfeel-web-jungle-features-sustainable-01.jpg?w=1024"
                alt="Full Width Final Animation"
              />
            </ImagesLayout>

            <>
              <TextWithMedia
                variant="ImageLarge"
                headingText="Refinement & Delivery"
                paragraphText="Throughout the process, we refined the animation to ensure it met the highest standards of quality. The final delivery included multiple formats to accommodate various platforms."
                imageUrl="https://www.elpublicista.es/adjuntos/fichero_38744_20240521.jpg"
              />
            </>
            <ImagesLayout
              variant="variant2"
              gridHeight="55vh"
              paddingTopBottom="SpacingSpacing0"
            >
              <img
                src="https://www.ispo.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/2022-06/TropicfeelxISPO-22-Backpacks-Shell-SS21-Clover-Green-6-ecom-min.jpg?itok=n_ckcEcm"
                alt="Review Process"
              />
              <img
                src="https://www.tradeinn.com/f/13956/139560891_6/tropicfeel-zapatillas-dune.webp"
                alt="Client Presentation"
              />
              <img
                src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2024/02/alberto-espinos-fundador-ceo-tropicfeel-3273740.jpg?tf=3840x"
                alt="Final Handoff"
              />
            </ImagesLayout>
            <TextLayout
              variant="HeadingLParagraphR"
              headingText="Result"
              paragraphText="The logo animation project was a success, delivering a dynamic and memorable brand asset that effectively communicates the company's innovative approach."
            />

            <ImagesLayout
              variant="fullWidth"
              fullWidthHeight="85vh" // Set the height of the full-width image
            >
              <img
                src="https://phantom-expansion.unidadeditorial.es/05e400cc98912f73c78b1f2fee0c38ec/resize/828/f/jpg/assets/multimedia/imagenes/2024/03/27/17115374142693.jpg"
                alt="Final Animation Display"
              />
            </ImagesLayout>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default WorkPage;
