import { Element } from "react-scroll";
import About from "../../sections/About/About";
import Footer from "../../sections/Footer/Footer";
import Landing from "../../sections/Landing/Landing";
import Work from "../../sections/Work/Work";
import Container from "../../components/base components/Container/Container";

function MainPage() {
  return (
    <>
      <Container height="auto">
        <Landing />
        <About />
        <Element name="about"></Element>
        <Element name="work">
          <Work />
        </Element>
      </Container>
      <Footer />
    </>
  );
}

export default MainPage;
