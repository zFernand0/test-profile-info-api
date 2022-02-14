const { ProfileInfo } = require("@zowe/imperative");
const profInfo = new ProfileInfo("zowe");
(async () => {
    await profInfo.readProfilesFromDisk();
    const secureProps = profInfo.getTeamConfig().api.secure.securePropsForProfile("lpar1");
    console.log(secureProps);
})();