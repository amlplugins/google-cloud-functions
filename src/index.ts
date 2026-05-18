/**
 * @amlplugins/google-cloud-functions
 *
 * Thin namespaced re-export of the native @google-cloud/functions SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Cloud Functions.
 */

import * as _sdk from "@google-cloud/functions";
export * from "@google-cloud/functions";
export { _sdk as sdk };
export default _sdk;
