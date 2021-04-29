import React, { useEffect } from "react";
import DashContainer from "./components/Dashboard/DashContainer";
import {useDispatch} from "react-redux";
import { getBoardData } from "./actions/boardData";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardData());
  }, [dispatch]);

  return (
    <div>
      <DashContainer />
    </div>
  );
};

export default App;
