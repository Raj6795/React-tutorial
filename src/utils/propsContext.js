import React from "react";

const PropsComponent = React.createContext();

const PropsProvider = PropsComponent.Provider;
const PropsConsumer = PropsComponent.Consumer;

export { PropsProvider, PropsConsumer };
