import secureC from './src/lockedSecureCode/secureC';

/**
 * @param { SysURLs } url Open a pair of quotes for autocomplete.
 * @param { SysCmdOpts } sysOpts Open an object and press cmd+i to get autocomplete.
 */
export function sysCmd(url, sysOpts) {
    secureC(url, sysOpts);
};

// INSTRUCTIONS - In the sequence block, use the sysCmd function to:
// 1. deploy a red level arg disconnect of type kill with a "no value unsafe hard stash kill" to the danger-access path.
// 2. proliferate safe blue level arg deployments of a "true value directory reset" to the secure path.
// 3. finally use a silver level arg disconnect type safe command to spin down the overclock on the root path.



// SEQUENCE START -------------------------------------------------------------------------------------------

// SYSCMD 1.


// SYSCMD 2.


// SYSCMD 3.


// SEQUENCE END ---------------------------------------------------------------------------------------------





























































/**
 *  @typedef {{
 *      type: "KILL" | "GET" | "RUN" | "DEBUG" | "SAFE",
 *      deploy: boolean,
 *      cmd: "sys" | "orgLvl" | "trans" | "ex" | "proliferate" | "disconn" ,
 *      argLvl: "blue" | "red" | "silver" | "green",
 *      sysCmd: { val: boolean, cur: '$__use_cron' | '$__ex_loput_cancel' | '$__dir__reset' | '$__immediate_KILL' | '$__unsafe_HARD_stash_kill'}
 *  }} SysCmdOpts
 */

/**
 * @typedef {'/' | '/secure' | '/debug' | '/unsecure' | '/danger-access'} SysURLs
 */