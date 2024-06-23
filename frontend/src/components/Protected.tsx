import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const Protected = (props: Props) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to='/login' />;

  return props.children;
};

export default Protected;
