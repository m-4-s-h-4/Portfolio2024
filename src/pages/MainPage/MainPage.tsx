import About from "../../sections/About/About";
import Landing from "../../sections/Landing/Landing";
import Work from "../../sections/Work/Work";
import Container from "../../components/base components/Container/Container";
import SmoothScroll from "../../components/SmoothScroll/SmoothScroll";

function MainPage() {
  return (
    <SmoothScroll slideDuration={7}>
      <Container
        height="auto"
        backgroundColor="transparent"
        style={{
          backgroundImage: 'url("hand.svg")',
          backgroundSize: "110vw 130vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "20vw 10vh",
        }}
      >
        <Landing />
        <About />
        <Work />
      </Container>
    </SmoothScroll>
  );
}

export default MainPage;
