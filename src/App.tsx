import { useEffect } from "react";

import HashtagList from "./components/hashtag/HashtagList";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import { useFeedBackItemsStore } from "./stores/feedbackStore";

export default function App() {
  const fetchFeedbackItems = useFeedBackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
}
