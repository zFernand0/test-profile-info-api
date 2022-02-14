const { ProfileInfo } = require("@zowe/imperative");
const profInfo = new ProfileInfo("zowe");
(async () => {
    await profInfo.readProfilesFromDisk();
    const allProfiles = profInfo.getAllProfiles("zosmf");
    const myProfile = allProfiles.filter(v => v.profName === "lpar1.zosmf")[0];
    const prof = profInfo.mergeArgsForProfile(myProfile, {getSecureVals: false});
    console.log(prof);
})();