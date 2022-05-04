import React from "react";

const useContext = React.createContext();
const useProvider = useContext.Provider;
const useConsumer = useContext.Consumer;

export default useContext;
export { useProvider, useConsumer };
