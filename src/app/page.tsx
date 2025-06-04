import WhoWeAre from "@/components/home/WhoWeAre";
import LocationAndTime from "@/components/home/LocationAndTime";
import JoinForm from "@/components/home/JoinForm";
import Snapshots from "@/components/home/Snapshots";

const Home = () => {
  return (
    <div className="">
      <WhoWeAre />
      <LocationAndTime />
      <JoinForm />
      <Snapshots/>
    </div>
  );
};

export default Home;
