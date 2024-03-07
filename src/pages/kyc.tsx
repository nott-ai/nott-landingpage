const Ekyc = () => {
  return (
    <>
      <div>
        <iframe
          id="vnpt_ekyc"
          src="http://localhost:4200/index.html"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            zIndex: 9999,
          }}
          allow="camera"
        ></iframe>
      </div>
    </>
  );
};
export default Ekyc;
