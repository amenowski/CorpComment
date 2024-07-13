import { useFeedBackItemsStore } from "../../stores/feedbackStore";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  const companyList = useFeedBackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedBackItemsStore((state) => state.selectCompany);

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem onSelectCompany={selectCompany} company={company} />
      ))}
    </ul>
  );
}
