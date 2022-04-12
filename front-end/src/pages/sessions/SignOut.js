import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { destroySession } from "../../redux/actionCreator";

const SignOut = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(destroySession());
  }, [dispatch]);

  return <>Success</>;
};

export default SignOut;
