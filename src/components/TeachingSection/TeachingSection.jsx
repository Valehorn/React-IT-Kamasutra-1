import WayToTeach from "../WayToTeach/WayToTeach";
import { ways } from "../../data";

function TeachingSection() {
    return <section>
        <h1>Подход к обучению</h1>
        <ul>
            {ways.map((way) => {
                return <WayToTeach key={way.description} {...way} />
            })}
            {/* <WayToTeach  {...ways[0]} />
    <WayToTeach title={ways[1].title} description={ways[1].description} />
    <WayToTeach title={ways[2].title} description={ways[2].description} />
    <WayToTeach title={ways[3].title} description={ways[3].description} /> */}
        </ul>
    </section>
};

export default TeachingSection;