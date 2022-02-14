const { ProfileInfo } = require("@zowe/imperative");
const profInfo = new ProfileInfo("zowe");
(async () => {
    await profInfo.readProfilesFromDisk();
    const allProfiles = profInfo.getAllProfiles("zosmf");
    console.log(allProfiles);
})();