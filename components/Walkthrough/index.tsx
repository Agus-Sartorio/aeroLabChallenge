import WalkthroughCard from "../WalkthroughCard";
import { StyledSection } from "./styles";
import bgImg1 from "../../public/assets/illustrations/walkthroug-1-desktop.png";
import bgImg2 from "../../public/assets/illustrations/walkthroug-2-desktop.png";
import bgImg3 from "../../public/assets/illustrations/walkthroug-3-desktop.png";
import titleImg1 from "../../public/assets/icons/walkthrough-1.svg";
import titleImg2 from "../../public/assets/icons/walkthrough-2.svg";
import titleImg3 from "../../public/assets/icons/walkthrough-3.svg";

const cardArr = [
  {
    bgImg: bgImg1,
    description: "Browse our tech catalog with more than 20 top tech products",
    title: "1 — browse",
    titleImg: titleImg1,
  },
  {
    bgImg: bgImg2,
    description: "Exchange your hard earned AeroPoints for the item you want",
    title: "2 — choose",
    titleImg: titleImg2,
  },
  {
    bgImg: bgImg3,
    description:
      "All done, you can relax! We’ll take care of delivery of your tech item!",
    title: "3 — enjoy!",
    titleImg: titleImg3,
  },
];

const Walkthrough = () => {
  return (
    <StyledSection>
      <div className="container">
        {cardArr.map((c) => (
          <WalkthroughCard
            bgImg={c.bgImg}
            description={c.description}
            title={c.title}
            titleImg={c.titleImg}
            key={c.title}
          />
        ))}
      </div>
    </StyledSection>
  );
};

export default Walkthrough;
