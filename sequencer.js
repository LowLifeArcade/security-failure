import secureC from './src/lockedSecureCode/secureC';

/**
 * @param { SysURLs } uri Open a pair of quotes for autocomplete.
 * @param { SysCmdOpts } sysOpts Open an object and press cmd+i to get autocomplete.
 */
export function sysCmd(uri, sysOpts) {
    secureC(uri, sysOpts);
};

// INSTRUCTIONS - In the sequence block, use the sysCmd function to:
// 1. SSH into blade vault
// 2. run an override command to cool down the system through the debug path
// 3. deploy a red level arg disconnect of type kill with a "no value unsafe hard stash kill" to the danger-access path.
// 4. proliferate safe blue level arg deployments of a "Peter Thiemin Lendruf value directory reset" to the secure path.
// 5. finally use a silver level arg disconnect type safe command to spin down the overclock on the root path.



// SEQUENCE START -------------------------------------------------------------------------------------------
//
// SYSCMD 1.)
// -----------------

// -----------------
//
// SYSCMD 2.)
// -----------------

// -----------------
//
//
// SYSCMD 3.)
// -----------------

// -----------------
//
//
// SYSCMD 4.)
// -----------------

// -----------------
//
//
// SYSCMD 5.)
// -----------------

// -----------------
//
// SEQUENCE END ---------------------------------------------------------------------------------------------





























































/**
 *  @typedef {{
 *      type: "KILL" | "GET" | "RUN" | "DEBUG" | "SAFE",
 *      loc_encrypt_conn: "SSH" | "SEC_URI" | "pass"
 *      deploy: boolean,
 *      cmd: "sys" | "orgLvl" | "trans" | "ex" | "proliferate" | "disconn" ,
 *      argLvl: "blue" | "red" | "silver" | "green",
 *      sysCmd: { val: "over_ride" | "ptl" | "turn_key" | "no_val", cur: '$__use_cron' | '$__sys_cooldown' | '$__ex_loput_cancel' | '$__dir__reset' | '$__immediate_KILL' | '$__unsafe_HARD_stash_kill'}
 *  }} SysCmdOpts
 */

/**
 * @typedef {'/' | '/secure' | '/debug' | '/unsecure?conn=love%20less&nopass=silent' | '/danger-access' | '/reden/sandepss/blade-vault'} SysURLs
 */