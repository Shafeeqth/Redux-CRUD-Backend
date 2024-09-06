"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userVerify = userVerify;
exports.userRegister = userRegister;
exports.editDetails = editDetails;
exports.deleteAccount = deleteAccount;
/**
 *
 * @param req
 * @param res
 * @returns
 */
function userVerify(req, res) {
    const { userName, password } = req.body;
}
function userRegister(req, res) {
    const { userName, password, confirmPassword, phone, role } = req.body;
}
function editDetails(req, res) {
    const { userName, password } = req.body;
}
function deleteAccount(req, res) {
    const { userName, password } = req.body;
}
