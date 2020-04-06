
let StatesInstance = {
    maxInstances: 1,
    usedInstances: 1,
    runningBots: 0,
    instanceToEdit: 1,
    instanceData: [
        {
            instanceStatus: "Loading",
            scriptSelected: "None",
            scriptStatus: "N/A",
            accountSelected: "None",
            accountStatus: "N/A"
        },
    ],
    defaultInstanceData: {
        instanceStatus: "Loading",
        scriptSelected: "None",
        scriptStatus: "N/A",
        accountSelected: "None",
        accountStatus: "N/A"
    }
};

export default StatesInstance;