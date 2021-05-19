import React, { useEffect, useState } from "react";
import DashContainer from "./components/Dashboard/DashContainer";
import {useDispatch} from "react-redux";
import { getBoardData } from "./actions/boardData";

const App = () => {
  const [currentId, setCurrentId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardData());
  }, [dispatch]);


  useEffect(() => {
    dispatch(getBoardData());
  }, [currentId, dispatch]);


  return (
    <div>
      <DashContainer currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
};

export default App;
