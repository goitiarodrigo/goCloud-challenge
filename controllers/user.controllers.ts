import { Request, Response } from "express"
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"
import Call from "../models/Call"
import moment from "moment"
moment.locale("es")

type data = {UserPoolId: string, ClientId: string}

const poolData: data = {
    UserPoolId: process.env.USERPOOLID!,
    ClientId: process.env.CLIENTID!
}

type propsCall = {
    telephoneNumber: string
    date?: string,
    hour?: string,
    callDuration?: string,
    status: string,
    step: string,
    userId?: string,
    secondsForDate?: number,
    secondsForDuration?: number,
}

const userCognito = new CognitoUserPool(poolData)


const userControllers = {
    signUp: (req: Request, res: Response) => {
        const { email, password } = req.body
            userCognito.signUp(email, password, [], [], (error, data) => {
                if (error) {
                    res.json(error)
                }else 
                res.json(data)
            })
    },

    signIn: (req: Request, res: Response) => {
        const { email, password } = req.body
            const user = new CognitoUser({
                Username: email,
                Pool: userCognito
            })

            const authDetails = new AuthenticationDetails({
                Username: email,
                Password: password
            })

            user.authenticateUser(authDetails, {
                onSuccess:  (data) => {
                res.json({success: true, response: {dataUser: {token: data.getIdToken().getJwtToken(), email: data.getIdToken().payload.email, id: data.getIdToken().payload.aud}}})},
                onFailure: async (err) => {
                    let error: {code: "", name: "", message: ""} = await err
                    res.json({success: false, response: error.message})
                },
                newPasswordRequired: async (data) => {
                    console.log("aca")
                    let dataUser = await data
                   res.json({response: dataUser})
                }
                
            })
    },

    newCall: async  (req: Request, res: Response) => {
        const { secondsForDate, secondsForDuration, step, telephoneNumber, userId }: propsCall = req.body
        
        try {
            let calculateDate = moment(new Date(secondsForDate!*1000)).format("D MMM YYYY")
            let calculateHour = moment(new Date(secondsForDate!*1000)).format("h:mma")
            let call = await new Call({
                callDuration: secondsForDuration! - secondsForDate!,
                date: calculateDate, 
                hour: calculateHour, 
                status: !secondsForDuration ? "No iniciada" : "Iniciada",
                step, 
                telephoneNumber,
                userId
            })

           let callSave = await call.save()
            res.json({sucess: true, response: callSave})
        }catch(error: any) {
            res.json({success: false, response: error.message})
        }
        
    },

    getCallByUser: async (req: Request, res: Response) => {
        try {
            let callsByUser = await Call.find({userId: req.params.id})
            if (!callsByUser.length) throw new Error ("Este usuario no tiene llamadas para mostrar")
            res.json({sucess: true, response: callsByUser})
        }catch(error: any) {
            res.json({success: false, response: error.message})
        }
    }
}

module.exports = userControllers