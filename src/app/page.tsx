import WhoWeAre from "@/components/home/WhoWeAre";
import Snapshots from "@/components/home/Snapshots";
import { snapshots } from "@/data/snapshots";

const Home = () => {
  return (
    <div className="font-arimo flex h-screen w-screen items-center justify-center">
      {/* <WhoWeAre /> */}
      <Snapshots photos={snapshots} />
    </div>
  );
};

export default Home;
