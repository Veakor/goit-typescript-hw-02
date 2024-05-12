import { ThreeDots } from "react-loader-spinner";
const MoreLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "cente",
        justifyContent: "center",
      }}
    >
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#306cce"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
export default MoreLoader;