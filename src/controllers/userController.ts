import {Request, Response} from 'express';

/**
 * 
 * @param req 
 * @param res 
 * @returns
 */
export function userVerify(req: Request, res: Response) {
    const {userName, password} = req.body as {userName: string, password: string};
    
}
export function userRegister(req: Request, res: Response) {
    const {userName, password,  confirmPassword, phone, role} = req.body as {userName: string, password: string, phone: string, role: 'ADMIN' | 'USER', confirmPassword: string };
    
}
export function editDetails(req: Request, res: Response) {
    const {userName, password} = req.body as {userName: string, password: string};
    
}
export function deleteAccount(req: Request, res: Response) {
    const {userName, password} = req.body as {userName: string, password: string};
    
}