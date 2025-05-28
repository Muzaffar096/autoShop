import Container from "../../components/Container";
import UzAutoMotors from "../../../public/images/Uzauto-sanoat.jpg"

const PlantCare = () => {
  return (
    <Container classes="flex">
      <img className=" m-auto py-10" src={UzAutoMotors} alt="About" height={1000}/>
    </Container>
  );
};

export default PlantCare;
