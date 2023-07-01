import Landing from "./components/Landing";
import Filter from "./components/Filter";
import Bottom from "./components/Bottom";
import JobCard from "./components/JobCard";

export default function Shadowing() {
  return (
    <div className="w-full">
      <Landing />
      <Filter />
      <Bottom />
    </div>
  );
}
